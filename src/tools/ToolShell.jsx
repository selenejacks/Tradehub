import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Seo from '../components/Seo.jsx';

// Shared layout for every calculator: inputs on the left, results on the right, explanation below.
export default function ToolShell({ title, intro, form, onCalculate, onReset, errors, touched, results, how, note }) {
  return (
    <>
      <Seo title={title} description={intro} />
      <section className="container page-head">
        <Link to="/tools" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> All tools</Link>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </section>
      <section className="container tool-grid">
        <div className="card">
          <h2 className="card-title">Inputs</h2>
          <form noValidate onSubmit={(e) => { e.preventDefault(); onCalculate(); }}>
            {form}
            <div className="btn-row">
              <button type="submit" className="btn btn-primary">Calculate</button>
              <button type="button" className="btn btn-ghost" onClick={onReset}>Reset</button>
            </div>
          </form>
        </div>
        <div className="card results" aria-live="polite">
          <h2 className="card-title">Results</h2>
          {!touched && <p className="muted">Enter your numbers to see results. They update as you type.</p>}
          {touched && errors.length > 0 && (
            <ul className="errors">
              {errors.map((m) => <li key={m}><AlertCircle size={16} aria-hidden="true" /> {m}</li>)}
            </ul>
          )}
          {touched && errors.length === 0 && results}
        </div>
      </section>
      <section className="container section">
        <div className="card">
          <h2 className="card-title">How it works</h2>
          {how}
          <p className="notice">{note}</p>
        </div>
      </section>
    </>
  );
}

export function Row({ label, value, strong }) {
  return (
    <div className={strong ? 'result-row strong' : 'result-row'}>
      <span>{label}</span><b>{value}</b>
    </div>
  );
}
