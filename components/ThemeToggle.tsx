'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);
  return <button type="button" className="rounded-full border border-slate-300 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em]" onClick={() => setDark((value: boolean) => !value)} aria-pressed={dark}>{dark ? 'Light' : 'Dark'}</button>;
}
