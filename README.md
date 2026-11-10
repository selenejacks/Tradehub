# TradeHub — Your Trading Toolkit

A simple React + Vite website with trading calculators, Gumroad product cards and affiliate resource cards.
No backend, no database, no API keys. All calculations run in the visitor's browser.

## 1. Install (one time)
1. Install Node.js (the "LTS" version) from https://nodejs.org
2. Open a terminal in this project folder.
3. Run: `npm install`

## 2. Run locally
`npm run dev` — then open the address shown (usually http://localhost:5173). Press Ctrl+C to stop.

To test the production version: `npm run build` then `npm run preview`.

## 3. Edit your Gumroad products
Open `src/data/products.js`. For each product replace:
- `PRODUCT_NAME`, `PRODUCT_DESCRIPTION`, `PRODUCT_PRICE` with your text
- `GUMROAD_URL` with your real Gumroad link (must start with https://)
- `PRODUCT_IMAGE` with an image path such as `/products/cover.png`
  (save the image in `public/products/`) or a full https:// image link

Copy a block to add a product, delete a block to remove one. Until a link starts with `https://`, the button stays disabled.

## 4. Edit affiliate resources (non-broker only)
Open `src/data/resources.js` and replace `RESOURCE_NAME`, `RESOURCE_DESCRIPTION`, `category` and `AFFILIATE_URL`.
Optional logo: set `logo` to `/resources/logo.png` (file in `public/resources/`) or an https:// link.

## 5. Other things to edit
- Contact email: `src/data/site.js`
- Logo: `src/components/Logo.jsx` (text logo; swap for an `<img>` later)
- Favicon: `public/favicon.svg`
- Legal pages: `src/pages/Legal.jsx` (replace `EDIT_DATE`; these are basic templates, not legal advice)
- Colours: top of `src/index.css`

## 6. Deploy to Cloudflare Pages
1. Put this project on GitHub (repository with `package.json` at the top level).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick your repository.
3. Build settings: Framework preset `Vite` (or None), Build command `npm run build`, Build output directory `dist`.
4. Click Save and Deploy. Every later push to GitHub redeploys automatically.

Page refresh works on routes like `/tools` because Cloudflare Pages serves `index.html` for unknown paths when there is no `404.html`. Do not add a `404.html` file.

## 7. Custom domain
Cloudflare Pages project → Custom domains → Set up a domain → follow the DNS steps. If the domain is registered elsewhere, you can either move its nameservers to Cloudflare or add the CNAME record Cloudflare shows you.

## Disclaimer
Educational tools only. Not financial advice. TradeHub is not a broker or signal service.
