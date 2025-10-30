import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeBlock.module.css';
import type { CSSProperties } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
  const customStyle = {
    ...dracula,
    'code[class*="language-"]': {
      ...dracula['code[class*="language-"]'],
      color: '#f8f8f2',
      textShadow: '0 1px rgba(0, 0, 0, 0.3)',
      fontFamily: `"Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", "Menlo", monospace`,
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      tabSize: 4,
      hyphens: 'none',
    },
    comment: {
      ...dracula.comment,
      color: '#999',
    },
  };

  return (
    <SyntaxHighlighter language={language} style={customStyle as { [key: string]: CSSProperties }} className={styles.codeBlock}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
