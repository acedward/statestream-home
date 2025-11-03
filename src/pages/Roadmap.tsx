import { roadmap } from './roadmap-data';
import './Roadmap.css';

interface RoadmapSubtask {
    id: string;
    title: string;
}

interface RoadmapItem {
  id: string;
  title: string;
  subtasks: RoadmapSubtask[];
}

const parseRoadmapData = (data: string): RoadmapItem[] => {
    const lines = data.trim().split('\n');
    const roadmapData: RoadmapItem[] = [];
    let currentItem: RoadmapItem | null = null;

    for (const line of lines) {
        const trimmedLine = line.trim();
        const match = trimmedLine.match(/^(PE-\d+)\s*-\s*(.*)$/);

        if (match) {
            const id = match[1];
            const title = match[2];

            if (line.startsWith('  ')) {
                if (currentItem) {
                    currentItem.subtasks.push({ id, title });
                }
            } else {
                currentItem = { id, title, subtasks: [] };
                roadmapData.push(currentItem);
            }
        }
    }
    return roadmapData;
};


const Roadmap = () => {
    const roadmapData = parseRoadmapData(roadmap);

    return (
        <div className="roadmap-container">
            <h1 className="roadmap-title">Roadmap</h1>
            <div className="roadmap-grid">
                {roadmapData.map((category) => (
                    <div key={category.id} className="roadmap-category">
                        <h2>{category.title}</h2>
                        {category.subtasks.length > 0 && (
                            <ul>
                                {category.subtasks.map((task) => (
                                    <li key={task.id}>{task.title}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;