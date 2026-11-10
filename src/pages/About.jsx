import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function About() {
  return (
    <>
      <Seo title="About" description="About TradeHub: trading calculators, digital products and resources." />
      <section className="container page-head">
        <h1>About TradeHub</h1>
      </section>
      <section className="container prose">
        <p>TradeHub is a trading resources website. It brings together three things:</p>
        <ul>
          <li>Free interactive trading calculators that run in your browser.</li>
          <li>Digital products hosted on Gumroad.</li>
          <li>Links to useful non-broker trading resources, some of which may be affiliate links.</li>
        </ul>
        <p>
          TradeHub is not a broker, a trading signal service or a financial advisor. It does not offer
          copy trading or promise profits. Read the <Link to="/disclaimer">trading disclaimer</Link> before using the tools.
        </p>
        {/* Add your own story here if you wish. */}
      </section>
    </>
  );
}
