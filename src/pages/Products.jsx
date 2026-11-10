import Seo from '../components/Seo.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

export default function Products() {
  return (
    <>
      <Seo title="Digital Products" description="Digital trading products from TradeHub, available on Gumroad." />
      <section className="container page-head">
        <h1>Digital Products</h1>
        <p className="lead">Products are sold and delivered through Gumroad. Clicking a button opens Gumroad in a new tab.</p>
      </section>
      <section className="container section">
        <div className="grid">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        <p className="notice">Digital products are educational. They are not financial advice and do not promise any trading results.</p>
      </section>
    </>
  );
}
