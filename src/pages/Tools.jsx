import Seo from '../components/Seo.jsx';
import ToolCard from '../components/ToolCard.jsx';
import { tools } from '../data/tools.js';

export default function Tools() {
  return (
    <>
      <Seo title="Trading Tools" description="Free trading calculators: position size, risk/reward, pip value and gold lot size." />
      <section className="container page-head">
        <h1>Trading Tools</h1>
        <p className="lead">Simple calculators for planning risk. Everything is calculated locally in your browser.</p>
      </section>
      <section className="container section">
        <div className="grid">{tools.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
        <p className="notice">These tools are for educational and informational purposes only and are not financial advice.</p>
      </section>
    </>
  );
}
