// One labelled number input with optional hint text.
export default function Field({ id, label, value, onChange, hint, placeholder, step = 'any' }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" inputMode="decimal" step={step} min="0"
        value={value} onChange={onChange} placeholder={placeholder} aria-describedby={hint ? `${id}-hint` : undefined} />
      {hint && <small id={`${id}-hint`} className="muted">{hint}</small>}
    </div>
  );
}
