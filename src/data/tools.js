import { Calculator, Scale, Ruler, Gem } from 'lucide-react';

export const tools = [
  { slug: 'position-size', name: 'Position Size Calculator', icon: Calculator,
    description: 'Work out how many units to trade based on your balance, risk percentage and stop-loss.' },
  { slug: 'risk-reward', name: 'Risk/Reward Calculator', icon: Scale,
    description: 'Compare the distance to your stop-loss and take-profit and see your risk/reward ratio.' },
  { slug: 'pip-calculator', name: 'Pip Calculator', icon: Ruler,
    description: 'Estimate pip value and pip movement value for supported forex pairs (USD account).' },
  { slug: 'gold-position-size', name: 'Gold (XAUUSD) Position Size', icon: Gem,
    description: 'Estimate your XAUUSD lot size with an editable contract size in ounces per lot.' },
];
