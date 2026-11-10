import ToolShell, { Row } from './ToolShell.jsx';
import Field from '../components/Field.jsx';
import { useForm } from './useForm.js';
import { goldLots, fmt } from './calc.js';

const initial = { balance: '', riskPct: '', entry: '', stop: '', contract: '100' };

export default function GoldPositionSize() {
  const { values, set, reset, touched, touch } = useForm(initial);
  const r = goldLots(values);
  return (
    <ToolShell
      title="Gold (XAUUSD) Position Size Calculator"
      intro="Estimate your lot size for gold from your risk, your stop-loss distance and your broker's contract size."
      touched={touched} onCalculate={touch} onReset={reset} errors={r.errors}
      form={<>
        <Field id="g-balance" label="Account balance (USD)" value={values.balance} onChange={set('balance')} placeholder="e.g. 5000" />
        <Field id="g-risk" label="Risk percentage (%)" value={values.riskPct} onChange={set('riskPct')} placeholder="e.g. 1" />
        <Field id="g-entry" label="Entry price" value={values.entry} onChange={set('entry')} placeholder="e.g. 2000.00" />
        <Field id="g-stop" label="Stop-loss price" value={values.stop} onChange={set('stop')} placeholder="e.g. 1995.00" />
        <Field id="g-contract" label="Contract size (ounces per lot)" value={values.contract} onChange={set('contract')}
          hint="Default is 100 oz per standard lot, but brokers can differ. Check your broker's specification and change it here." />
      </>}
      results={<>
        <Row label="Risk amount" value={`$${fmt(r.riskAmount ?? 0, 2)}`} />
        <Row label="Stop-loss distance" value={`$${fmt(r.distance ?? 0, 2)} per oz`} />
        <Row label="Loss per 1 lot at your stop-loss" value={`$${fmt(r.lossPerLot ?? 0, 2)}`} />
        <Row strong label="Estimated lot size" value={fmt(r.lots ?? 0, 4)} />
        <Row label="Rounded down to 0.01 lot" value={fmt(r.roundedLots ?? 0, 2)} />
      </>}
      how={<>
        <p>1. Risk amount = balance × risk % ÷ 100.</p>
        <p>2. Loss per 1 lot = stop-loss distance (in USD per ounce) × contract size (ounces per lot).</p>
        <p>3. Lot size = risk amount ÷ loss per 1 lot.</p>
        <p>The rounded value uses a 0.01 step as an example. Your broker's minimum lot and step may be different. If the rounded value is 0, your risk is too small for the minimum lot size at this stop-loss distance.</p>
      </>}
      note="Estimate only. Broker contract specifications, spreads, commissions and slippage differ. Educational use only, not financial advice."
    />
  );
}
