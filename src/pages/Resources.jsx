import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import ResourceCard from '../components/ResourceCard.jsx';
import AffiliateNotice from '../components/AffiliateNotice.jsx';
import { resources } from '../data/resources.js';

export default function Resources() {
  const [cat, setCat] = useState('All');
  const cats = ['All', ...new Set(resources.map((r) => r.category))];
  const shown = cat === 'All' ? resources : resources.filter((r) => r.category === cat);
  return (
    <>
      <Seo title="Recommended Resources" description="Trading software, charting tools, journals and educational resources recommended by TradeHub." />
      <section className="container page-head">
        <h1>Recommended Resources</h1>
        <p className="lead">Software and learning resources for traders.</p>
        <AffiliateNotice />
      </section>
      <section className="container section">
        <div className="chips" role="group" aria-label="Filter by category">
          {cats.map((c) => (
            <button key={c} className={c === cat ? 'chip active' : 'chip'} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="grid">{shown.map((r) => <ResourceCard key={r.id} resource={r} />)}</div>
      </section>
    </>
  );
}
