import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHead({ title, text, to, linkLabel }) {
  return (
    <div className="section-head">
      <div>
        <h2>{title}</h2>
        {text && <p className="muted">{text}</p>}
      </div>
      {to && <Link to={to} className="text-link">{linkLabel} <ArrowRight size={16} aria-hidden="true" /></Link>}
    </div>
  );
}
