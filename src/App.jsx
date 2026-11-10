import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Tools from './pages/Tools.jsx';
import Products from './pages/Products.jsx';
import Resources from './pages/Resources.jsx';
import About from './pages/About.jsx';
import { Privacy, AffiliateDisclosure, Disclaimer } from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';
import PositionSize from './tools/PositionSize.jsx';
import RiskReward from './tools/RiskReward.jsx';
import PipCalculator from './tools/PipCalculator.jsx';
import GoldPositionSize from './tools/GoldPositionSize.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/position-size" element={<PositionSize />} />
          <Route path="/tools/risk-reward" element={<RiskReward />} />
          <Route path="/tools/pip-calculator" element={<PipCalculator />} />
          <Route path="/tools/gold-position-size" element={<GoldPositionSize />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
