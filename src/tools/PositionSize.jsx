import ToolShell, { Row } from './ToolShell.jsx';
import Field from '../components/Field.jsx';
import { useForm } from './useForm.js';
import { positionSize, fmt } from './calc.js';

const initial = { balance: '', riskPct: '', entry: '', stop: '' };

export default function PositionSize() {
  const { values, set, reset, touched, touch } = useForm(initial);
  const r = positionSize(values);
  return (
    <ToolShell
      title="Position Size Calculator"
      intro="Find out how many units to trade so that a stop-loss hit loses only the percentage of your account you choose."
      touched={touched} onCalculate={touch} onReset={reset} errors={r.errors}
      form={<>
        <Field id="ps-balance" label="Account balance" value={values.balance} onChange={set('balance')} placeholder="e.g. 10000" />
        <Field id="ps-risk" label="Risk percentage (%)" value={values.riskPct} onChange={set('riskPct')} placeholder="e.g. 1" hint="Percent of your balance you accept to lose on this trade." />
        <Field id="ps-entry" label="Entry price" value={values.entry} onChange={set('entry')} placeholder="e.g. 1.1000" />
        <Field id="ps-stop" label="Stop-loss price" value={values.stop} onChange={set('stop')} placeholder="e.g. 1.0950" />
      </>}
      results={<>
        <Row label="Direction (from your prices)" value={r.side} />
        <Row label="Risk amount" value={fmt(r.riskAmount ?? 0, 2)} />
        <Row label="Stop-loss distance" value={fmt(r.distance ?? 0, 5)} />
        <Row strong label="Position size (units)" value={fmt(r.units ?? 0, 4)} />
      </>}
      how={<>
        <p>1. Risk amount = account balance × risk % ÷ 100.</p>
        <p>2. Stop-loss distance = the difference between entry and stop-loss price.</p>
        <p>3. Position size (units) = risk amount ÷ stop-loss distance.</p>
        <p>Risk amount is in your account currency, and the price distance is in the quote currency of the instrument.</p>
      </>}
      note="This is an estimate. Actual broker contract specifications, lot sizes, spreads, commissions and currency conversion may differ. Educational use only, not financial advice."
    />
  );
}
