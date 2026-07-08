'use client';

import { useState } from 'react';

export function LanguageToggle() {
  const [locale, setLocale] = useState<'EN' | 'TE'>('EN');
  return <button type="button" className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold" onClick={() => setLocale(locale === 'EN' ? 'TE' : 'EN')} aria-label="Toggle English and Telugu readiness">{locale}</button>;
}
