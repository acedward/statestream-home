import React from 'react';
import styles from './ToolsGrid.module.css';

const tools = [
  {
    name: 'EVM',
    description: 'EVM Node & Solidity Contract Deployment',
    color: '#1abc9c',
  },
  {
    name: 'Midnight',
    description: 'Node, Indexer, Proof Server & Contract Deployment',
    color: '#1abc9c',
  },
  {
    name: 'Cardano',
    description: 'Cardano Node, Dolos UTXo RPC & Contract Deployment',
    color: '#1abc9c',
  },
  {
    name: 'Avail',
    description: 'Avail Node & Contract Deployment',
    color: '#1abc9c',
  },
  {
    name: 'Frontend Multi Wallet',
    description: 'Web Connector for many protocols',
    color: '#e74c3c',
  },
  {
    name: 'Batcher',
    description: 'Write data to other systems & chains',
    color: '#e74c3c',
  },
  {
    name: 'DB',
    description: 'PostgreSQL (in-memory) Database',
    color: '#3498db',
  },
  {
    name: 'Explorer',
    description: 'Web UI to explore the Effectstream state',
    color: '#3498db',
  },
  {
    name: 'OTEL',
    description: 'Open Telemetry Collector',
    color: '#3498db',
  },
  {
    name: 'API',
    description: 'System and Application APIs',
    color: '#e74c3c',
  },
  {
    name: 'Sync',
    description: 'Engine Sync Service',
    color: '#e74c3c',
  },
  {
    name: 'More',
    description: 'More tools, more chains and more to come',
    color: '#e67e22',
  },
  {
    name: 'Custom',
    description: 'Create your own custom tools',
    color: '#e67e22',
  },
];

const legendItems = [
  { color: '#1abc9c', label: 'Blockchains' },
  { color: '#3498db', label: 'DevOps Tools' },
  { color: '#e74c3c', label: 'Effectstream Engine' },
  { color: '#e67e22', label: 'Other' },
];

const ToolsGrid: React.FC = () => {
  return (
    <div>
      <div className={styles.grid}>
        {tools.map(tool => (
          <div
            className={styles.toolItem}
            key={tool.name}
            style={{ backgroundColor: tool.color, color: 'white' }}
          >
            <div className={styles.toolName}>{tool.name}</div>
            <div className={styles.toolDescription}>{tool.description}</div>
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        {legendItems.map(item => (
          <div className={styles.legendItem} key={item.label}>
            <div className={styles.legendColor} style={{ backgroundColor: item.color }}></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;
