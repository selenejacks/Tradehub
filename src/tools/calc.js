// All trading maths lives here as plain functions (no React), so it is easy to check.
// Every function returns { errors: [...] } with messages if input is invalid; otherwise errors is empty.

export const num = (s) => (String(s).trim() === '' ? NaN : Number(s));

function positive(v, label, errors) {
  if (!Number.isFinite(v) || v <= 0) errors.push(`${label} must be a number greater than 0.`);
}

export function fmt(n, max = 2) {
  return n.toLocaleString('en-US', { maximumFractionDigits: max });
}

// Position size = risk amount / stop-loss distance
export function positionSize({ balance, riskPct, entry, stop }) {
  const errors = [];
  const b = num(balance), r = num(riskPct), e = num(entry), s = num(stop);
  positive(b, 'Account balance', errors);
  positive(r, 'Risk percentage', errors);
  positive(e, 'Entry price', errors);
  positive(s, 'Stop-loss price', errors);
  if (Number.isFinite(r) && r > 100) errors.push('Risk percentage cannot be more than 100.');
  if (!errors.length && e === s) errors.push('Stop-loss distance cannot be zero. Entry and stop-loss must be different prices.');
  if (errors.length) return { errors };
  const riskAmount = (b * r) / 100;
  const distance = Math.abs(e - s);
  return { errors, riskAmount, distance, units: riskAmount / distance, side: s < e ? 'Buy (long)' : 'Sell (short)' };
}

// Risk/reward = reward distance / risk distance
export function riskReward({ entry, stop, target }) {
  const errors = [];
  const e = num(entry), s = num(stop), t = num(target);
  positive(e, 'Entry price', errors);
  positive(s, 'Stop-loss price', errors);
  positive(t, 'Take-profit price', errors);
  if (!errors.length) {
    if (e === s) errors.push('Stop-loss distance cannot be zero.');
    else if (s < e && !(t > e)) errors.push('For a buy trade (stop-loss below entry), take-profit must be above entry.');
    else if (s > e && !(t < e)) errors.push('For a sell trade (stop-loss above entry), take-profit must be below entry.');
  }
  if (errors.length) return { errors };
  const risk = Math.abs(e - s);
  const reward = Math.abs(t - e);
  return { errors, risk, reward, ratio: reward / risk, side: s < e ? 'Buy (long)' : 'Sell (short)' };
}

// Supported pairs. pip = size of one pip in the quote currency.
export const PAIRS = [
  { code: 'EURUSD', quote: 'USD', pip: 0.0001 },
  { code: 'GBPUSD', quote: 'USD', pip: 0.0001 },
  { code: 'AUDUSD', quote: 'USD', pip: 0.0001 },
  { code: 'NZDUSD', quote: 'USD', pip: 0.0001 },
  { code: 'USDCAD', quote: 'CAD', pip: 0.0001 },
  { code: 'USDCHF', quote: 'CHF', pip: 0.0001 },
  { code: 'USDJPY', quote: 'JPY', pip: 0.01 },
  { code: 'EURGBP', quote: 'GBP', pip: 0.0001 },
  { code: 'EURJPY', quote: 'JPY', pip: 0.01 },
  { code: 'GBPJPY', quote: 'JPY', pip: 0.01 },
];
export const UNITS_PER_LOT = 100000;

// Pip value (USD account) = lots x 100,000 x pip size, converted to USD.
// If the quote currency is not USD, divide by "quote currency per 1 USD" (entered by the user).
export function pipValue({ pair, lots, pips, rate }) {
  const errors = [];
  const p = PAIRS.find((x) => x.code === pair);
  const l = num(lots), m = num(pips);
  positive(l, 'Trade size (lots)', errors);
  positive(m, 'Pip movement', errors);
  let r = 1;
  if (!p) errors.push('Please choose a currency pair.');
  else if (p.quote !== 'USD') {
    r = num(rate);
    positive(r, `Exchange rate (${p.quote} per 1 USD)`, errors);
  }
  if (errors.length) return { errors };
  const perPip = (l * UNITS_PER_LOT * p.pip) / r;
  return { errors, perPip, total: perPip * m, units: l * UNITS_PER_LOT, quote: p.quote, pipSize: p.pip };
}

// Gold: loss per lot = stop distance (USD per oz) x ounces per lot
export function goldLots({ balance, riskPct, entry, stop, contract }) {
  const errors = [];
  const b = num(balance), r = num(riskPct), e = num(entry), s = num(stop), c = num(contract);
  positive(b, 'Account balance', errors);
  positive(r, 'Risk percentage', errors);
  positive(e, 'Entry price', errors);
  positive(s, 'Stop-loss price', errors);
  positive(c, 'Contract size (ounces per lot)', errors);
  if (Number.isFinite(r) && r > 100) errors.push('Risk percentage cannot be more than 100.');
  if (!errors.length && e === s) errors.push('Stop-loss distance cannot be zero. Entry and stop-loss must be different prices.');
  if (errors.length) return { errors };
  const riskAmount = (b * r) / 100;
  const distance = Math.abs(e - s);
  const lossPerLot = distance * c;
  const lots = riskAmount / lossPerLot;
  return { errors, riskAmount, distance, lossPerLot, lots, roundedLots: Math.floor(lots * 100 + 1e-9) / 100 };
}
