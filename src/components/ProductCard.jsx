import { ExternalLink, ImageIcon } from 'lucide-react';

const isUrl = (v) => /^https?:\/\//i.test(v || '');
const isImage = (v) => /^(https?:\/\/|\/)/i.test(v || '');

export default function ProductCard({ product }) {
  const live = isUrl(product.url);
  return (
    <article className="card card-hover">
      <div className="thumb">
        {isImage(product.image)
          ? <img src={product.image} alt={product.name} loading="lazy" />
          : <span><ImageIcon size={28} aria-hidden="true" /><small>Image placeholder</small></span>}
      </div>
      {!live && <span className="badge">Placeholder: add your Gumroad link in src/data/products.js</span>}
      <h3>{product.name}</h3>
      <p className="muted">{product.description}</p>
      <p className="price">{product.price}</p>
      {live ? (
        <a className="btn btn-primary" href={product.url} target="_blank" rel="noopener noreferrer">
          View Product <ExternalLink size={16} aria-hidden="true" />
        </a>
      ) : (
        <button className="btn btn-primary" disabled>View Product</button>
      )}
    </article>
  );
}
