import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="muted">{site.tagline}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/tools">Trading Tools</Link>
          <Link to="/products">Digital Products</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link to="/disclaimer">Trading Disclaimer</Link>
        </div>
      </div>
      <div className="container footer-note">
        <p>
          TradeHub is not a broker, signal service or financial advisor. Tools are for educational and
          informational purposes only. Trading carries risk of loss.
        </p>
        <p>© {new Date().getFullYear()} TradeHub</p>
      </div>
    </footer>
  );
}
