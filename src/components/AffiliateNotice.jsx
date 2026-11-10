import { Link } from 'react-router-dom';

export default function AffiliateNotice() {
  return (
    <p className="notice">
      <strong>Affiliate disclosure:</strong> some links on this page may earn TradeHub a commission at no
      additional cost to you. <Link to="/affiliate-disclosure">Read the full disclosure</Link>.
    </p>
  );
}
