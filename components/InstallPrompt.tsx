'use client';

import { useEffect, useState } from 'react';

export function InstallPrompt() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').then(() => setReady(true));
  }, []);
  if (!ready) return null;
  return <div className="fixed bottom-4 right-4 z-50 max-w-xs rounded-2xl bg-[#0B2341] p-4 text-sm text-white shadow-2xl"><strong>PWA ready</strong><p className="mt-1 text-white/65">Offline fallback and install metadata are configured.</p></div>;
}
