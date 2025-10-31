import { useState, useEffect, useRef } from 'react';
import styles from './LiveTerminal.module.css';

const MAX_LOGS = 1000;

interface Log {
  time: string;
  level: string;
  module?: string;
  message: string;
}

const getRandomHash = (length = 64) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const evmMainBlock = { current: 263 };
const evmParallelBlock = { current: 66 };
const dolosSlot = { current: 667 };
const mainNtp = { current: 1 };

const logGenerators = [
  () => ({ module: 'paima-sync-ntp-mainNtp', message: `[${++mainNtp.current}]` }),
  () => ({ module: 'hardhat-evmParallel', message: `block ${++evmParallelBlock.current} (0x${getRandomHash()})` }),
  () => ({ module: 'hardhat-evmMain', message: `block ${++evmMainBlock.current} (0x${getRandomHash()})` }),
  () => ({ module: 'paima-sync-evmParallel_fast-parallelEvmRPC_fast', message: `[${evmMainBlock.current - 1}, ${evmMainBlock.current}]` }),
  () => {
    const stage = Math.random() > 0.3 ? 'pull' : 'apply';
    return {
      isDolos: true,
      level: Math.random() > 0.3 ? 'INFO' : 'DEBUG',
      message: `stage{stage="${stage}"}:execute: dolos::sync::${stage}: ${stage === 'pull' ? 'new block sent by upstream peer' : `applying block slot=${++dolosSlot.current}`}`
    };
  },
  () => ({ module: 'UTXORPC', message: `Fetching blocks from ${evmParallelBlock.current} to ${evmParallelBlock.current}.` }),
  () => ({ module: 'paima-sync-block-merge', message: `producing block ${mainNtp.current}` }),
];

const generateLogEntry = () => {
  const generator = logGenerators[Math.floor(Math.random() * logGenerators.length)];
  const logPart = generator();

  const now = new Date();
  const time = now.toTimeString().split(' ')[0];
  const timestamp = now.toISOString();
  
  if ('isDolos' in logPart) {
    return {
      time: timestamp,
      level: logPart.level,
      module: 'dolos',
      message: logPart.message,
    }
  }

  return {
    time: time,
    level: 'INFO',
    module: logPart.module,
    message: logPart.message,
  };
};

const processes = [
  { pid: 47477, name: 'tmux', args: 'tmux -L paima-1761772409651 -N attach', enabled: true, tooltip: 'This is the main tmux session for the Statestream.' },
  { pid: 47492, name: 'collector', args: 'deno run -A --unstable-temporal @paima/collector/start', enabled: true, tooltip: 'The collector gathers data from various sources.' },
  { pid: 47496, name: 'pglite', args: 'deno run -A @paima/db/start-pglite --port 5432', enabled: true, tooltip: 'A lightweight Postgres instance for the database.' },
  { pid: 47503, name: 'serve explorer', args: '[http://localhost:10590] deno task -f @paima/explorer serve...', enabled: true, tooltip: 'Serves the Statestream block explorer.' },
  { pid: 47519, name: 'hardhat', args: 'deno task -f @e2e/evm-contracts chain:start', enabled: true, tooltip: 'Runs a local Hardhat EVM chain for development.' },
  { pid: 47521, name: 'avail-node', args: 'deno task -f @e2e/avail-contracts avail-node:start', enabled: true, tooltip: 'Runs a local Avail node for data availability.' },
  { pid: 47527, name: 'midnight-node', args: 'deno task -f @e2e/midnight-contracts midnight-node:start', enabled: false, tooltip: 'Runs a local Midnight node for private smart contracts.' },
  { pid: 47531, name: 'midnight-indexer', args: 'deno task -f @e2e/midnight-contracts midnight-indexer:start', enabled: true, tooltip: 'Indexes data from the Midnight node.' },
  { pid: 47532, name: 'midnight-proof-server', args: 'deno task -f @e2e/midnight-contracts midnight-proof-server:st...', enabled: true, tooltip: 'Serves proofs for the Midnight network.' },
  { pid: 47536, name: 'yaci-devkit', args: 'deno task -f @e2e/cardano-contracts devkit:start', enabled: true, tooltip: 'Cardano development kit.' },
  { pid: 47617, name: 'dolos', args: 'deno task -f @e2e/cardano-contracts dolos:start', enabled: true, tooltip: 'Cardano indexer.' },
  { pid: 47625, name: 'avail-light-client', args: 'deno task -f @e2e/avail-contracts avail-light-client:deploy', enabled: false, tooltip: 'Avail light client for data verification.' },
  { pid: 48598, name: 'batcher', args: 'deno task -f @e2e/batcher start', enabled: true, tooltip: 'Batches transactions to be submitted to the chain.' },
  { pid: 48602, name: 'sync', args: 'deno task node:start', enabled: true, tooltip: 'Handles synchronization of the Statestream.' },
];

const getModuleStyle = (module: string) => {
  if (module.startsWith('hardhat')) {
    return module.includes('Parallel') ? styles.moduleHardhatParallel : styles.moduleHardhat;
  }
  if (module.startsWith('paima-sync')) {
    return styles.modulePaimaSync;
  }
  if (module.startsWith('dolos')) {
    return styles.moduleDolos;
  }
  return '';
};

const LiveTerminal = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const leftPaneRef = useRef<HTMLDivElement>(null);
  const topOfTerminalRef = useRef(null);
  const [isTopVisible, setIsTopVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTopVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentRef = topOfTerminalRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const initialLogs = Array.from({ length: 50 }, () => generateLogEntry());
    setLogs(initialLogs);
  }, []);

  useEffect(() => {
    if (!isTopVisible) return;

    const interval = setInterval(() => {
      setLogs(prevLogs => {
        const newLogs = [...prevLogs, generateLogEntry()];
        if (newLogs.length > MAX_LOGS) {
          return newLogs.slice(newLogs.length - MAX_LOGS);
        }
        return newLogs;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isTopVisible]);

  useEffect(() => {
    if (leftPaneRef.current) {
      leftPaneRef.current.scrollTop = leftPaneRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.terminalContainer}>
        <div ref={topOfTerminalRef} style={{ position: 'absolute', top: 0, height: '1px', width: '100%', pointerEvents: 'none' }} />
        <div className={styles.terminal}>
          <div className={styles.leftPane} ref={leftPaneRef}>
            {logs.map((log, index) => (
              <div key={index} className={styles.logLine}>
                <span className={styles.time}>{log.time}</span>
                <span className={styles.level}>{log.level}</span>
                {log.module && <span className={`${styles.module} ${getModuleStyle(log.module)}`}>{log.module}:</span>}
                <span className={styles.message}>{log.message}</span>
              </div>
            ))}
          </div>
          <div className={styles.rightPane}>
            <div className={styles.rightPaneHeader}>
              <div>Statestream</div>
              <div>Terminal UI - Version 0.1.0</div>
            </div>
            <div className={styles.rightPaneControls}>
              Press → arrows to navigate tabs, Ctrl+C to exit
            </div>
            <div className={styles.processesContainer}>
              <div className={styles.processesHeader}>=== Running Processes ===</div>
              <div>Last updated: 6:17:07 PM</div>
              <div>Selected: tmux: ENABLED (Press SPACE to toggle)</div>
              <div>All Processes: Some/All ENABLED (Press L to toggle all)</div>
              <div className={styles.processListHeader}>[Log] PID Name Args</div>
              <div className={styles.processList}>
                {processes.map(p => (
                  <div key={p.pid} className={styles.processItem} title={p.tooltip}>
                    <span className={p.enabled ? styles.processEnabled : styles.processDisabled}>
                      [{p.enabled ? '✔' : ' '}]
                    </span>
                    <span>{p.pid}</span>
                    <span>{p.name}</span>
                    <span className={styles.processArgs}>{p.args}</span>
                  </div>
                ))}
              </div>
              <div className={styles.processControls}>
                Use ↑↓ arrows to navigate, SPACE to toggle selected, L to toggle all, R to restart sync
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <span>[P] Processes</span>
          <span>[E] Environment</span>
          <span>[H] Help</span>
          <span className={styles.footerRight}>"Edwards-MacBook-Pro-2" 18:16 29-Oct-25</span>
        </div>
      </div>
    </div>
  );
};

export default LiveTerminal;
