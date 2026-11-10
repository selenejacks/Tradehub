import { ExternalLink, Link2 } from 'lucide-react';

const isUrl = (v) => /^https?:\/\//i.test(v || '');
const isImage = (v) => /^(https?:\/\/|\/)/i.test(v || '');

export default function ResourceCard({ resource }) {
  const live = isUrl(resource.url);
  return (
    <article className="card card-hover">
      <div className="resource-top">
        <div className="logo-box">
          {isImage(resource.logo)
            ? <img src={resource.logo} alt="" loading="lazy" />
            : <Link2 size={22} aria-hidden="true" />}
        </div>
        <span className="tag">{resource.category}</span>
      </div>
      {!live && <span className="badge">Placeholder: add your link in src/data/resources.js</span>}
      <h3>{resource.name}</h3>
      <p className="muted">{resource.description}</p>
      {live ? (
        <a className="btn btn-primary" href={resource.url} target="_blank" rel="noopener noreferrer sponsored">
          Visit Resource <ExternalLink size={16} aria-hidden="true" />
        </a>
      ) : (
        <button className="btn btn-primary" disabled>Visit Resource</button>
      )}
    </article>
  );
}
