import ToolShell, { Row } from './ToolShell.jsx';
import Field from '../components/Field.jsx';
import { useForm } from './useForm.js';
import { pipValue, fmt, PAIRS, UNITS_PER_LOT } from './calc.js';

const initial = { pair: 'EURUSD', lots: '', pips: '', rate: '' };

export default function PipCalculator() {
  const { values, set, reset, touched, touch } = useForm(initial);
  const pair = PAIRS.find((p) => p.code === values.pair);
  const needsRate = pair && pair.quote !== 'USD';
  const r = pipValue(values);
  return (
    <ToolShell
      title="Pip Calculator"
      intro="Estimate the value of one pip, and of a pip movement, for a USD account."
      touched={touched} onCalculate={touch} onReset={reset} errors={r.errors}
      form={<>
        <div className="field">
          <label htmlFor="pip-pair">Currency pair</label>
          <select id="pip-pair" value={values.pair} onChange={set('pair')}>
            {PAIRS.map((p) => <option key={p.code} value={p.code}>{p.code}</option>)}
          </select>
        </div>
        <Field id="pip-lots" label="Trade size (lots)" value={values.lots} onChange={set('lots')} placeholder="e.g. 0.5" hint={`1 standard lot = ${fmt(UNITS_PER_LOT, 0)} units of the base currency.`} />
        <Field id="pip-pips" label="Pip movement" value={values.pips} onChange={set('pips')} placeholder="e.g. 20" />
        {needsRate && (
          <Field id="pip-rate" label={`Exchange rate: ${pair.quote} per 1 USD`} value={values.rate} onChange={set('rate')}
            placeholder={pair.quote === 'JPY' ? 'e.g. the current USDJPY price' : `current USD${pair.quote} price`}
            hint={`Needed to convert profit in ${pair.quote} into USD. Enter the current USD/${pair.quote} rate from your chart.`} />
        )}
      </>}
      results={<>
        <Row label="Position size" value={`${fmt(r.units ?? 0, 0)} units`} />
        <Row label="Pip size used" value={String(r.pipSize ?? '')} />
        <Row strong label="Value of 1 pip (USD)" value={`$${fmt(r.perPip ?? 0, 4)}`} />
        <Row strong label="Value of the pip movement (USD)" value={`$${fmt(r.total ?? 0, 2)}`} />
      </>}
      how={<>
        <p>Assumptions: USD account, 1 lot = {fmt(UNITS_PER_LOT, 0)} units, a pip is 0.0001 (0.01 for JPY pairs).</p>
        <p>Value of 1 pip = lots × {fmt(UNITS_PER_LOT, 0)} × pip size. If the quote currency is not USD, the result is divided by the USD/quote rate you enter.</p>
        <p>Only the pairs in the list are supported, and only USD accounts. For other pairs or account currencies, check your broker's own calculator.</p>
      </>}
      note="Estimate only. Brokers may use different contract sizes, pip definitions and conversion rates. Educational use only, not financial advice."
    />
  );
}
