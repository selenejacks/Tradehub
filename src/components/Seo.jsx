import { useEffect } from 'react';

// Sets the browser tab title and the meta description for each page.
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | TradeHub` : 'TradeHub | Your Trading Toolkit';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    if (description) meta.setAttribute('content', description);
  }, [title, description]);
  return null;
}
