import { useState } from 'react';

// Keeps the input values for a calculator. "initial" must be defined outside the component.
export function useForm(initial) {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState(false);
  const set = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    setTouched(true);
  };
  const reset = () => { setValues(initial); setTouched(false); };
  const touch = () => setTouched(true);
  return { values, set, reset, touched, touch };
}
