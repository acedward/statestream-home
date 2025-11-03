//
// This script generates a roadmap based on Jira issues
// How to run:
// EMAIL=<email> API_KEY=<api_key> deno -A jira-roadmap.ts
//

import { Buffer } from 'node:buffer';

const API_KEY = Deno.env.get('API_KEY');
const email = Deno.env.get('EMAIL');

const encodeBase64 = (email: string, API_KEY: string) => {
    return Buffer.from(`${email}:${API_KEY}`).toString('base64');
}

type JiraIssue = {
    expand: string,
    id: string,
    self: string,
    key: string,
    summary: string,
    fields: {
        summary: string,
        parent: { id: string, key: string, self: string, fields: { summary: string } },
        status: { id: string, name: string, self: string, description: string, iconUrl: string, statusCategory: { id: string, key: string, name: string, colorName: string } },
    }
};

const getIssues = async (ids: { id: string }[]): Promise<{ issues: JiraIssue[] }> => {
    const url = `https://midnightfoundation.atlassian.net/rest/api/3/search/jql`;
    const body = {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encodeBase64(email, API_KEY)}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "jql": `id IN (${ids.map(id => id.id).join(',')})`,
            "maxResults": 100,
            "fields": [
                "summary",
                "parent",
                "status",
                "assignee",
                "key",
                "name",
                "id"
            ]
        })
    };
    const response = await fetch(url, body);
    return await response.json();
}

const queryIssues = async (nextPageToken: string | undefined): Promise<{ nextPageToken: string, isLast: boolean, issues: { id: string }[] }> => {
    const url = `https://midnightfoundation.atlassian.net/rest/api/3/search/jql`;
    const body = {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encodeBase64(email, API_KEY)}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nextPageToken,
            jql: 'project = PE',
            maxResults: 100,
        })
    }
    const response = await fetch(url, body);
    return await response.json();
};


const searchIssues = async () => {
    let issues: JiraIssue[] = [];
    let nextPageToken: string | undefined = undefined;
    let isLast: boolean = false;

    while (!isLast) {
        console.log({ nextPageToken })
        const response = await queryIssues(nextPageToken);
        nextPageToken = response.nextPageToken;
        isLast = response.isLast;
        const issuesData = await getIssues(response.issues);

        issues = [...issues, ...issuesData.issues];
    }
    // console.log(issues);
    return issues;
}

enum IssueStatus {
    inProgress = "In Progress",
    toDo = "To Do",
    done = "Done",
    notNeeded = "Not needed",
    backlog = "Backlog",
}
const mapStatusToDir = (status: IssueStatus) => {
    switch (status) {
        case IssueStatus.inProgress:
            return "data/roadmap";
        case IssueStatus.toDo:
            return "data/roadmap";
        case IssueStatus.done:
            return "data/done";
        case IssueStatus.notNeeded:
            return "data/not_needed";
        case IssueStatus.backlog:
            return "data/backlog";
    }
}

const writeIssues = async (issues: JiraIssue[]) => {
    for (const issue of issues) {
        const status = issue.fields.status.name;
        const dir = mapStatusToDir(status as IssueStatus);
        await Deno.mkdir(dir, { recursive: true });
        const filePath = `${dir}/${issue.key}.json`;
        await Deno.writeTextFile(filePath, JSON.stringify(issue, null, 2));
        console.log(`Saved issue ${issue.key} to ${filePath}`);
    }
}

const printIssues = async (issues: JiraIssue[]) => {
    const data: string[] = [];
    const issueMap = new Map<string, JiraIssue>(issues.map(issue => [issue.key, issue]));
    const childrenMap = new Map<string, JiraIssue[]>();

    for (const issue of issues) {
        if (issue.fields.parent) {
            if (issue.fields.parent.key === "PE-126" || issue.fields.parent.key === "PE-87") {
                // skip these as they have client names.
                continue;
            }
            const parentKey = issue.fields.parent.key;
            if (!childrenMap.has(parentKey)) {
                childrenMap.set(parentKey, []);
            }
            childrenMap.get(parentKey)!.push(issue);
        }
    }

    const rootIssues = issues.filter(issue => !issue.fields.parent || !issueMap.has(issue.fields.parent.key));

    const sortIssues = (issueList: JiraIssue[]) => {
        return issueList.sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
    }

    sortIssues(rootIssues);
    for (const children of childrenMap.values()) {
        sortIssues(children)
    }

    function printIssue(issue: JiraIssue, indent = "") {
        if (issue.fields.status.name === IssueStatus.done || issue.fields.status.name === IssueStatus.notNeeded) {
            return;
        }
        data.push(`${indent}${issue.key} - ${issue.fields.summary}`);
        // console.log(`${indent}${issue.key} - ${issue.fields.summary}`);
        const children = childrenMap.get(issue.key);
        if (children) {
            for (const child of children) {
                printIssue(child, indent + "  ");
            }
        }
    }

    for (const issue of rootIssues) {
        printIssue(issue);
    }
    return data;
}

const convertToHtml = (data: string[]) => {
    return data
    // TODO This is just a temporary fix to update the roadmap with the new name.
    .map(item => item.match(/New Name for/) ? item : item.replace(/Paima Engine/g, "Effectstream"))
    .map(item => item.replace(/Paima Explorer/g, "Effectstream Explorer"))
    .map(item => `${item.replaceAll(/[{}<>`]/g, "")}`).join("\n");
}

const main = async () => {
    const issues = await searchIssues();
    await writeIssues(issues);
    const data = await printIssues(issues);
    console.log(convertToHtml(data));
    Deno.writeTextFile("src/pages/roadmap-data.ts", `export const roadmap = \`\n${convertToHtml(data)}\n\`;`);
}

await main();
