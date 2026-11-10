import ToolShell, { Row } from './ToolShell.jsx';
import Field from '../components/Field.jsx';
import { useForm } from './useForm.js';
import { riskReward, fmt } from './calc.js';

const initial = { entry: '', stop: '', target: '' };

export default function RiskReward() {
  const { values, set, reset, touched, touch } = useForm(initial);
  const r = riskReward(values);
  let verdict = '';
  if (!r.errors.length) {
    if (r.ratio > 1) verdict = 'The potential reward is greater than the risk.';
    else if (r.ratio < 1) verdict = 'The potential reward is smaller than the risk.';
    else verdict = 'The potential reward is equal to the risk.';
  }
  return (
    <ToolShell
      title="Risk/Reward Calculator"
      intro="Compare how far price must move against you with how far it must move in your favour."
      touched={touched} onCalculate={touch} onReset={reset} errors={r.errors}
      form={<>
        <Field id="rr-entry" label="Entry price" value={values.entry} onChange={set('entry')} placeholder="e.g. 100" />
        <Field id="rr-stop" label="Stop-loss price" value={values.stop} onChange={set('stop')} placeholder="e.g. 95" />
        <Field id="rr-target" label="Take-profit price" value={values.target} onChange={set('target')} placeholder="e.g. 115" />
      </>}
      results={<>
        <Row label="Direction (from your prices)" value={r.side} />
        <Row label="Risk distance" value={fmt(r.risk ?? 0, 5)} />
        <Row label="Reward distance" value={fmt(r.reward ?? 0, 5)} />
        <Row strong label="Risk/reward ratio" value={`1 : ${fmt(r.ratio ?? 0, 2)}`} />
        <p className="verdict">{verdict}</p>
      </>}
      how={<>
        <p>Risk distance = |entry − stop-loss|. Reward distance = |take-profit − entry|.</p>
        <p>Ratio = reward distance ÷ risk distance. A ratio of 1 : 2 means the potential reward is twice the risk.</p>
        <p>For a buy, the stop-loss must be below entry and take-profit above. For a sell, the opposite.</p>
      </>}
      note="The ratio says nothing about how likely a trade is to win. Educational use only, not financial advice."
    />
  );
}
