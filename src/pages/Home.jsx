import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ToolCard from '../components/ToolCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ResourceCard from '../components/ResourceCard.jsx';
import AffiliateNotice from '../components/AffiliateNotice.jsx';
import { tools } from '../data/tools.js';
import { products } from '../data/products.js';
import { resources } from '../data/resources.js';

export default function Home() {
  return (
    <>
      <Seo title="" description="TradeHub: free trading calculators, digital products and useful trading resources. Educational use only, not financial advice." />
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">TradeHub</p>
          <h1>Your Trading Toolkit.</h1>
          <p className="lead">
            Trading calculators, digital products and useful trading resources, all in one clean place.
          </p>
          <Link to="/tools" className="btn btn-primary btn-lg">Explore trading tools <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="container section">
        <SectionHead title="Featured tools" text="Free calculators that run in your browser." to="/tools" linkLabel="All tools" />
        <div className="grid">{tools.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
      </section>

      <section className="container section">
        <SectionHead title="Digital products" text="Products available on Gumroad." to="/products" linkLabel="All products" />
        <div className="grid">{products.slice(0, 3).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="container section">
        <SectionHead title="Recommended resources" text="Software and learning resources." to="/resources" linkLabel="All resources" />
        <AffiliateNotice />
        <div className="grid">{resources.slice(0, 3).map((r) => <ResourceCard key={r.id} resource={r} />)}</div>
      </section>
    </>
  );
}
