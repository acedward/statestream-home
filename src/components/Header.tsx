import { Link } from 'react-router-dom';
import GitHubButton from 'react-github-btn';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/changelog">Changelog</Link> */}
        {/* <Link to="/roadmap">Roadmap</Link> */}
        <a href="https://acedward.github.io/paima-v-next-docs/" target="_blank" rel="noopener noreferrer">Documentation</a>
      </nav>

      <GitHubButton 
        href="https://github.com/PaimaStudios/paima-engine" 
        data-color-scheme="no-preference: light; light: light; light: light;" 
        data-icon="octicon-star" 
        data-size="large" 
        data-show-count="true" 
        aria-label="Star PaimaStudios/paima-engine on GitHub">
        Star
      </GitHubButton>

    </header>
  );
};

export default Header;
