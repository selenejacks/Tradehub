import { Link } from 'react-router-dom';

// Simple text logo. Replace with an <img> of your own logo later.
export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="TradeHub home">
      <span className="logo-mark">T</span>
      <span>Trade<span className="logo-gold">Hub</span></span>
    </Link>
  );
}
