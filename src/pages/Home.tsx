import { useState } from 'react';
import LiveTerminal from '../components/LiveTerminal';
import CodeBlock from '../components/CodeBlock';
import {
  URL_LEARN_MORE,
  URL_CHAINS,
  URL_PROCESS_MANAGEMENT,
  URL_QUICK_START_GUIDE,
  URL_VISUALIZATION,
  URL_EXAMPLES,
} from '../config';

const StatestreamName = () => (
  <>
    <span style={{ color: 'var(--sunglow)' }}>State</span>
    <span>stream</span>
  </>
);

const items = [
  {
    title: 'Multi-Chain DeFi',
    image: 'https://placehold.co/600x400/EEE/31343C?text=Multi-Chain+DeFi',
    content: (
      <>
        Build sophisticated DeFi applications that operate across multiple blockchains. This example
        showcases a seamless token swap between an EVM chain and a ZK chain, maintaining a unified
        user balance. <StatestreamName /> acts as a decentralized backend, monitoring both chains
        and orchestrating cross-chain logic without a centralized intermediary, paving the way for
        cross-chain DEXs and liquidity protocols.
      </>
    ),
  },
  {
    title: 'Confidential Asset Metadata with ZK',
    image: 'https://placehold.co/600x400/EEE/31343C?text=ZK+Applications',
    content:
      'Leverage Zero-Knowledge proofs to build applications with confidential state. This example shows how a public asset on an EVM chain can have private metadata managed on a ZK chain. This pattern is perfect for applications like sealed-bid auctions, private voting systems, or any scenario where sensitive data needs to be processed off-chain and verified on-chain without being revealed.',
  },
  {
    title: 'L2 Asset Trading on L1 Marketplaces',
    image: 'https://placehold.co/600x400/EEE/31343C?text=L2+Asset+Liquidity',
    content: (
      <>
        Unlock liquidity for assets generated within your L2 application. <StatestreamName />
        's inverse projection standard allows assets that exist only in your L2's state to be
        represented as tradable ERC721 or ERC1155 tokens on a major L1 chain. The token's
        metadata is served dynamically from the <StatestreamName /> node, allowing L2 assets to be
        traded on marketplaces like OpenSea without complex bridging.
      </>
    ),
  },
  {
    title: 'Non-Custodial Asset Staking',
    image: 'https://placehold.co/600x400/EEE/31343C?text=Non-Custodial+Staking',
    content: (
      <>
        Enhance security and user trust by eliminating risky asset bridging. The Hololocker
        standard allows users to "project" their L1 assets into an L2 dApp non-custodially. Users
        lock their assets in a smart contract on the L1, and <StatestreamName /> makes them usable
        in the L2 state while the user retains full ownership. This is ideal for staking protocols
        or any dApp where users need to interact with valuable L1 assets without bridging them.
      </>
    ),
  },
];

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div>
      <h1 className="main-title">
        <StatestreamName />
      </h1>

      <div className="my-16">
        <h2 className="section-title">
          
        </h2>
        <div className="statestream-container">
          <div className="statestream-item">
            <h3 className="subsection-title">Build Web3 Apps</h3>
            <p>
              <StatestreamName /> allows you to build web3 applications in just days, even with a
              web2 skillset. The engine handles the blockchain complexity.
            </p>
            <div className="docs-link-container">
              <a href={URL_LEARN_MORE} className="docs-link">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="statestream-item">
            <h3 className="subsection-title">Multi-Chain by Default</h3>
            <p>
              Deploy your application to connect multiple blockchains at once, providing a single
              unified experience for developers.
            </p>
            <div className="docs-link-container">
              <a href={URL_CHAINS} className="docs-link">
                More about chains {'>'}
              </a>
            </div>
          </div>
          <div className="statestream-item">
            <h3 className="subsection-title">Scalable & Secure</h3>
            <p>
              <StatestreamName /> rollup offers scalability and fast transaction processing. Your
              users' assets remain in their own wallets, minimizing risks.
            </p>
            <div className="docs-link-container">
              <a href={URL_LEARN_MORE} className="docs-link">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="statestream-item">
            <h3 className="subsection-title">It's Open Source</h3>
            <p>
              Paima is an open-source framework that helps you build, launch and scale your
              decentralized applications. All our code is available on Github.
            </p>
            <div className="docs-link-container">
              <a href={URL_LEARN_MORE} className="docs-link">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="statestream-item">
            <h3 className="subsection-title">Blockchain local development</h3>
            <p>
              We provide all the tooling to run a full-fledge blockchain environment within your
              computer, this allows you to iterate faster and catch bugs earlier.
            </p>
            <div className="docs-link-container">
              <a href={URL_LEARN_MORE} className="docs-link">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="statestream-item">
            <h3 className="subsection-title">Made for developers</h3>
            <p>
              We focus on providing the best developer experience, we provide a rich set of tools and
              documentation to help you get started.
            </p>
            <div className="docs-link-container">
              <a href={URL_LEARN_MORE} className="docs-link">
                Learn more {'>'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="terminal-section my-32">
        <h2 className="section-title">Statestream Terminal</h2>
        <p className="section-description">
          <StatestreamName /> launches the entire stack in your computer to develop multi-chain
          applications 100% locally.
        </p>
        <LiveTerminal />
        <div className="docs-link-container">
          <a href={URL_PROCESS_MANAGEMENT} className="docs-link">
            More about process managment {'>'}
          </a>
        </div>
      </div>

      <div className="my-32">
        <h2 className="section-title">Quick Start</h2>
        <p className="section-description">
          You can quickly get started with <StatestreamName />, you can launch this working Demo in
          just a few minutes or less.
        </p>
        <CodeBlock
          code={`# Clone and move to evm-midnight template

git clone git@github.com:PaimaStudios/paima-engine.git --branch v-next
cd paima-engine/templates/evm-midnight

# Check for external dependencies

../check.sh

# Install packages

deno install --allow-scripts && ./patch.sh

# Compile contracts

deno task build:evm
deno task build:midnight

# Launch Statestream Node

deno task dev
`}
        />
        <div className="docs-link-container">
          <a href={URL_QUICK_START_GUIDE} className="docs-link">
            See the entire guide {'>'}
          </a>
        </div>
      </div>

      <div className="animation-section my-32 text-center">
        <h2 className="section-title">Visualize how it works</h2>
        <p className="section-description">
          <StatestreamName /> syncs multiple blockchains into one, and keeps a deterministic state for
          your application to work on.
        </p>
        <iframe
          src="/animation/index.html"
          width="100%"
          height="800px"
          style={{ border: 'none', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}
          title="Statestream Visualization"
        ></iframe>
        <div className="docs-link-container">
          <a href={URL_VISUALIZATION} className="docs-link">
            Explore the visualization {'>'}
          </a>
        </div>
      </div>

      <div className="my-32">
        <h2 className="section-title">
          Examples of What can be build with Statestream
        </h2>
        <div className="what-is-statestream-layout">
          <div className="left-column">
            <div className="item-selector">
              {items.map(item => (
                <button
                  key={item.title}
                  className={`item-button ${
                    selectedItem.title === item.title ? 'active' : ''
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="item-content">
              <p>{selectedItem.content}</p>
            </div>
          </div>
          <div className="right-column">
            <img src={selectedItem.image} alt="placeholder" />
          </div>
        </div>
        <div className="docs-link-container">
          <a href={URL_EXAMPLES} className="docs-link">
            See more examples {'>'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
