import React from 'react';
import styles from './InfoSubtitle.module.css';
import KeywordTooltip from './KeywordTooltip';

interface TextSegment {
  text: string;
  isKeyword?: boolean;
  tooltip?: string;
}

interface InfoSubtitleProps {
  segments: TextSegment[];
}

const InfoSubtitle: React.FC<InfoSubtitleProps> = ({ segments }) => {
  return (
    <h2 className={styles.subtitle}>
      {segments.map((segment, index) =>
        segment.isKeyword && segment.tooltip ? (
          <KeywordTooltip key={index} tooltipText={segment.tooltip}>
            {segment.text}
          </KeywordTooltip>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </h2>
  );
};

export default InfoSubtitle;
