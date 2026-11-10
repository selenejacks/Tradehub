import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ToolCard({ tool }) {
  const Icon = tool.icon;
  return (
    <article className="card card-hover">
      <div className="icon-wrap"><Icon size={24} aria-hidden="true" /></div>
      <h3>{tool.name}</h3>
      <p className="muted">{tool.description}</p>
      <Link to={`/tools/${tool.slug}`} className="btn btn-primary">
        Open tool <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
