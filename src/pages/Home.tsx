import { useState, useRef, useEffect } from 'react';
import LiveTerminal from '../components/LiveTerminal';
import CodeBlock from '../components/CodeBlock';
import InfoSubtitle from '../components/InfoSubtitle';
import KeywordTooltip from '../components/KeywordTooltip';
import ToolsGrid from '../components/ToolsGrid';
import VideoModal from '../components/VideoModal';
import PlayIcon from '../components/PlayIcon';
import {
  DOCS_BASE_URL,
  URL_BUILD_W3_APPS,
  URL_CHAINS,
  URL_SCALABLE_SECURE,
  URL_OPEN_SOURCE,
  URL_LOCAL_DEVELOPMENT,
  URL_MADE_FOR_DEVS,
  URL_PROCESS_MANAGEMENT,
  URL_QUICK_START_GUIDE,
  URL_VISUALIZATION,
  URL_EXAMPLES,
  URL_COMPONENTS,
} from '../config';

const EffectstreamName = () => (
  <>
    <span style={{ color: 'var(--sunglow)' }}>Effect</span>
    <span>s<span className="tr-box">tr</span>eam</span>
  </>
);

const items = [
  {
    title: 'Cross-Chain Yield Aggregator',
    image: 'images/yield.png',
    content: (
      <>
        Build a powerful DeFi dashboard that automatically finds and manages the best yield farming
        opportunities for your assets across multiple blockchains. Provide users with a single,
        unified view of their entire portfolio, optimizing their returns without requiring them to
        manually bridge assets between different networks.
      </>
    ),
  },
  {
    title: 'Confidential KYC for Decentralized Identity',
    image: 'images/kyc.png',
    content:
      'Create a privacy-preserving identity solution for regulated DeFi. Users can prove they have completed KYC to access compliant financial products without publicly linking their real-world identity to their wallet address, ensuring both security and confidentiality.',
  },
  {
    title: 'Unified NFT Loyalty Programs',
    image: 'images/loyalty.png',
    content: (
      <>
        Launch a seamless rewards program for a brand with multiple NFT collections spread across
        different blockchains. <EffectstreamName /> aggregates ownership data from all chains,
        allowing you to create a single, unified loyalty experience for your entire community,
        regardless of where they hold their assets.
      </>
    ),
  },
  {
    title: 'Real-World Asset (RWA) Tokenization',
    image: 'images/tokenization.png',
    content: (
      <>
        Develop a platform to fractionalize high-value real-world assets, like real estate or art,
        into tradable digital tokens. Manage the complex ownership and dividend logic efficiently
        in a scalable L2 while allowing the fractional shares to be traded on liquid L1
        marketplaces.
      </>
    ),
  },
  {
    title: 'Cross-Chain Token Swap',
    image: 'images/swap.png',
    content: (
      <>
        Build sophisticated DeFi applications that operate across multiple blockchains. Create a
        seamless token swap between an EVM chain and a ZK chain, maintaining a unified user
        balance and paving the way for next-generation cross-chain DEXs and liquidity protocols.
      </>
    ),
  },
];

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [isQuickStartModalOpen, setIsQuickStartModalOpen] = useState(false);

  // Build cross-chain DApps 
  // and onchain infrastructure that seamlessly read and react to state across multiple blockchains 
  // (EVM, Cardano, and others).
  const subtitleSegments = [
    { text: 'Build ' },
    {
      text: 'cross-chain',
      isKeyword: true,
      tooltip:
        'Our engine allows you to seamlessly connect and interact with different blockchains, as Ethereum, Cardano, Avail, Midnight and more - creating a unified experience.',
    },
    { text: ' ' },
    {
      text: 'DApps',
      isKeyword: true,
      tooltip:
        'Decentralized applications built on blockchain technology, giving users more control over their data.',
    },
    { text: ' and ' },
    {
      text: 'on-chain infrastructure',
      isKeyword: true,
      tooltip:
        'The core components of a decentralized application that operate directly on the blockchain, ensuring transparency and security.',
    },
    { text: ' that seamlessly ' },
    {
      text: 'read and react',
      isKeyword: true,
      tooltip:
        'Our engine can monitor events on one blockchain and trigger actions on another, enabling dynamic cross-chain applications.',
    },
    { text: ' across multiple blockchains ' },
    { text: 'within minutes.' },
  ];

  useEffect(() => {
    const updateIframeHeight = () => {
      if (iframeRef.current) {
        if (window.innerWidth < 1068) {
          const containerWidth = iframeRef.current.offsetWidth;
          // The base ratio is 768 (height) / 922 (width)
          const newHeight = containerWidth * (800 / 1000);
          iframeRef.current.style.height = `${newHeight}px`;
        } else {
          // For screens >= 800px wide, use a fixed height.
          iframeRef.current.style.height = '800px';
        }
      }
    };

    updateIframeHeight();
    window.addEventListener('resize', updateIframeHeight);

    return () => {
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <div>
      <h1 className="main-title">
        <EffectstreamName />
      </h1>

      <InfoSubtitle segments={subtitleSegments} />

      <div className="my-16">
        <h2 className="section-title">
          
        </h2>
        <div className="effectstream-container">
          <div className="effectstream-item">
            <h3 className="subsection-title">Build Web3 Apps</h3>
            <p>
              <EffectstreamName /> allows you to build web3 applications in just days, even with a{' '}
              <KeywordTooltip tooltipText="Knowledge of traditional web development technologies like JavaScript, React, and Node.js, without needing deep blockchain expertise.">
                web2 skillset
              </KeywordTooltip>
              . The engine handles the blockchain complexity.
            </p>
            <div className="docs-link-container">
              <a href={DOCS_BASE_URL + URL_BUILD_W3_APPS} className="docs-link" target="_blank" rel="noopener noreferrer">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="effectstream-item">
            <h3 className="subsection-title">Multi-Chain by Default</h3>
            <p>
              Deploy your application to connect multiple blockchains at once, providing a single
              unified experience for developers.
            </p>
            <div className="docs-link-container">
              <a href={DOCS_BASE_URL + URL_CHAINS} className="docs-link" target="_blank" rel="noopener noreferrer">
                More about chains {'>'}
              </a>
            </div>
          </div>
          <div className="effectstream-item">
            <h3 className="subsection-title">Scalable & Secure</h3>
            <p>
              <EffectstreamName />{' '}
              <KeywordTooltip tooltipText="A technology that bundles multiple transactions into a single one to reduce fees and congestion on the main blockchain.">
                rollup
              </KeywordTooltip>{' '}
              offers scalability and fast{' '}
              <KeywordTooltip tooltipText="An action, signed by a user, that changes the state of the blockchain.">
                transaction
              </KeywordTooltip>{' '}
              processing. Your users'{' '}
              <KeywordTooltip tooltipText="Digital items of value, such as cryptocurrencies or NFTs, that are owned and controlled by users.">
                assets
              </KeywordTooltip>{' '}
              remain in their own{' '}
              <KeywordTooltip tooltipText="A digital wallet used to store, send, and receive digital assets like cryptocurrencies and NFTs.">
                wallets
              </KeywordTooltip>
              , minimizing risks.
            </p>
            <div className="docs-link-container">
              <a href={DOCS_BASE_URL + URL_SCALABLE_SECURE} className="docs-link" target="_blank" rel="noopener noreferrer">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="effectstream-item">
            <h3 className="subsection-title">It's Open Source</h3>
            <p>
              <EffectstreamName /> is an open-source framework that helps you build, launch and scale your{' '}
              <KeywordTooltip tooltipText="Applications that run on a peer-to-peer network of computers rather than a single central server, offering greater transparency and user control.">
                decentralized applications
              </KeywordTooltip>
              . All our code is available on Github.
            </p>
            <div className="docs-link-container">
              <a href={URL_OPEN_SOURCE} className="docs-link" target="_blank" rel="noopener noreferrer">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="effectstream-item">
            <h3 className="subsection-title">Blockchain local development</h3>
            <p>
              We provide all the tooling to run a{' '}
              <KeywordTooltip tooltipText="A complete local setup that mimics the behavior of a live blockchain, including nodes, miners, and explorers, for development and testing.">
                full-fledge blockchain environment
              </KeywordTooltip>{' '}
              within your computer, this allows you to iterate faster and catch bugs earlier.
            </p>
            <div className="docs-link-container">
              <a href={DOCS_BASE_URL + URL_LOCAL_DEVELOPMENT} className="docs-link" target="_blank" rel="noopener noreferrer">
                Learn more {'>'}
              </a>
            </div>
          </div>
          <div className="effectstream-item">
            <h3 className="subsection-title">Made for developers</h3>
            <p>
              We focus on providing the best developer experience, we provide a rich set of tools and
              documentation to help you get started.
            </p>
            <div className="docs-link-container">
              <a href={DOCS_BASE_URL + URL_MADE_FOR_DEVS} className="docs-link" target="_blank" rel="noopener noreferrer">
                Learn more {'>'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="terminal-section my-32">
        <h2 className="section-title"><EffectstreamName /> Terminal</h2>
        <p className="section-description">
          <EffectstreamName /> launches the entire stack in your computer to develop multi-chain
          applications 100% locally.
        </p>
        <LiveTerminal />
        <div className="docs-link-container button-and-link-container">
          <button
            onClick={() => setIsTerminalModalOpen(true)}
            className="docs-link-button"
          >
            <PlayIcon />
            Watch how the terminal works
          </button>
          <a href={DOCS_BASE_URL + URL_PROCESS_MANAGEMENT} className="docs-link" target="_blank" rel="noopener noreferrer">
            More about process managment {'>'}
          </a>
        </div>
      </div>

      <div className="my-32">
        <h2 className="section-title">Some <EffectstreamName /> tools and key processes it manages for you</h2>
        <ToolsGrid />
        <div className="docs-link-container">
          <a href={DOCS_BASE_URL + URL_COMPONENTS} className="docs-link" target="_blank" rel="noopener noreferrer">
            More about components {'>'}
          </a>
        </div>
      </div>

      <div className="my-32">
        <h2 className="section-title">Quick Start</h2>
        <p className="section-description">
          You can quickly get started with <EffectstreamName />, you can launch this working Demo in
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

# Launch Effectstream Node

deno task dev
`}
        />
        <div className="docs-link-container button-and-link-container">
          <button
            onClick={() => setIsQuickStartModalOpen(true)}
            className="docs-link-button"
          >
            <PlayIcon />
            Watch how it works
          </button>
          <a href={DOCS_BASE_URL + URL_QUICK_START_GUIDE} className="docs-link" target="_blank" rel="noopener noreferrer">
            See the entire guide {'>'}
          </a>
        </div>
      </div>

      <div className="animation-section my-32 text-center">
        <h2 className="section-title">Visualize how it works</h2>
        <p className="section-description">
          <EffectstreamName /> syncs multiple blockchains into one, and keeps a{' '}
          <KeywordTooltip tooltipText="A system where the same sequence of inputs will always produce the exact same output, ensuring consistency and predictability across the network.">
            deterministic state
          </KeywordTooltip>{' '}
          for your application to work on.
        </p>
        <iframe
          ref={iframeRef}
          src="animation/index.html"
          width="100%"
          height="900px"
          style={{ border: 'none', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}
          title="Effectstream Visualization"
        ></iframe>
        <div className="docs-link-container">
          <a href={DOCS_BASE_URL + URL_VISUALIZATION} className="docs-link" target="_blank" rel="noopener noreferrer">
            Explore the visualization {'>'}
          </a>
        </div>
      </div>

      <div className="my-32">
        <h2 className="section-title">
          Examples of What can be build with <EffectstreamName />
        </h2>
        <div className="what-is-effectstream-layout">
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
          <a href={DOCS_BASE_URL + URL_EXAMPLES} className="docs-link" target="_blank" rel="noopener noreferrer">
            See more examples {'>'}
          </a>
        </div>
      </div>
      <VideoModal
        isOpen={isTerminalModalOpen}
        onClose={() => setIsTerminalModalOpen(false)}
        videoSrc="https://drive.google.com/file/d/1aUbQ41sbCeg-rjGfEJK2LFEiAFeAwRLY/preview"
      />
      <VideoModal
        isOpen={isQuickStartModalOpen}
        onClose={() => setIsQuickStartModalOpen(false)}
        videoSrc="https://drive.google.com/file/d/1VLlwMyEECt1bpMjtlXG36L3ZqETuSJwv/preview"
      />
    </div>
  );
};

export default Home;
