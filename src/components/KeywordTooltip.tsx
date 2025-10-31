import React from 'react';
import styles from './KeywordTooltip.module.css';

interface KeywordTooltipProps {
  children: React.ReactNode;
  tooltipText: string;
}

const KeywordTooltip: React.FC<KeywordTooltipProps> = ({ children, tooltipText }) => {
  return (
    <span className={styles.keywordWrapper}>
      <span className={styles.keyword}>{children}</span>
      <span className={styles.tooltip}>{tooltipText}</span>
    </span>
  );
};

export default KeywordTooltip;
