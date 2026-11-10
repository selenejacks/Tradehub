import Seo from '../components/Seo.jsx';
import { site } from '../data/site.js';

// Simple editable legal pages. These are basic templates, not legal advice,
// and they do not guarantee legal compliance. Consider having them reviewed by a qualified professional.

function Page({ title, description, children }) {
  return (
    <>
      <Seo title={title} description={description} />
      <section className="container page-head"><h1>{title}</h1></section>
      <section className="container prose">
        {children}
        <p className="muted">Last updated: EDIT_DATE. This page is a basic template and does not guarantee legal compliance.</p>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <Page title="Privacy Policy" description="How TradeHub handles information.">
      <p>TradeHub's calculators run entirely in your browser. The numbers you enter are not sent to a TradeHub server and are not stored by TradeHub.</p>
      <h2>Third-party links</h2>
      <p>Product and resource links lead to other websites (for example Gumroad). Those sites have their own privacy policies and TradeHub is not responsible for them.</p>
      <h2>Hosting and analytics</h2>
      <p>The website is hosted by a third-party provider, which may keep standard server logs. EDIT_THIS: if you add analytics, cookies or a contact form later, describe them here.</p>
      <h2>Contact</h2>
      <p>Questions: {site.contactEmail}</p>
    </Page>
  );
}

export function AffiliateDisclosure() {
  return (
    <Page title="Affiliate Disclosure" description="TradeHub affiliate link disclosure.">
      <p>Some links on TradeHub may be affiliate links. If you click one and make a purchase, TradeHub may earn a commission at no additional cost to you.</p>
      <p>TradeHub only lists non-broker resources. Affiliate relationships do not change the price you pay. Please do your own research before buying any product.</p>
    </Page>
  );
}

export function Disclaimer() {
  return (
    <Page title="Trading Disclaimer" description="TradeHub is educational and not financial advice.">
      <p>TradeHub provides tools and information for educational and informational purposes only. Nothing on this website is financial, investment or trading advice.</p>
      <p>TradeHub is not a broker, signal provider or financial advisor. Calculator results are estimates and may differ from your broker's real contract specifications, fees and prices.</p>
      <p>Trading leveraged products such as forex and gold carries a high risk of loss. Past performance does not guarantee future results. Never trade money you cannot afford to lose. You are responsible for your own decisions.</p>
    </Page>
  );
}
