import { PRODUCT_NAME } from '../config';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <p>&copy; {new Date().getFullYear()} {PRODUCT_NAME}</p>
          <p>Developed by Midnight Foundation</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="https://effectstream.github.io/docs/" target="_blank" rel="noopener noreferrer">Docs</a></li>
              <li><a href="https://github.com/PaimaStudios/paima-engine" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
