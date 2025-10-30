import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/changelog">Changelog</Link>
        <Link to="/roadmap">Roadmap</Link>
        <a href="https://acedward.github.io/paima-v-next-docs/" target="_blank" rel="noopener noreferrer">Documentation</a>
      </nav>
      <a href="https://github.com/PaimaStudios/paima-engine" target="_blank" rel="noopener noreferrer">Github</a>
    </header>
  );
};

export default Header;
