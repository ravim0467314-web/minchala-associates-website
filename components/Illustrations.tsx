export function LedgerIllustration() {
  return (
    <svg viewBox="0 0 640 520" className="h-auto w-full" role="img" aria-label="Abstract ledger and compliance dashboard illustration">
      <defs>
        <linearGradient id="goldGradient" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f2d58b" /><stop offset="1" stopColor="#C9A24A" /></linearGradient>
        <linearGradient id="navyGradient" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#153A63" /><stop offset="1" stopColor="#0B2341" /></linearGradient>
      </defs>
      <rect width="640" height="520" rx="42" fill="url(#navyGradient)" />
      <circle cx="516" cy="96" r="118" fill="#C9A24A" opacity=".14" />
      <rect x="72" y="86" width="330" height="348" rx="26" fill="#fff" opacity=".96" />
      <rect x="112" y="132" width="164" height="16" rx="8" fill="#0B2341" opacity=".82" />
      <rect x="112" y="182" width="230" height="12" rx="6" fill="#9aa9b2" />
      <rect x="112" y="224" width="230" height="12" rx="6" fill="#9aa9b2" />
      <rect x="112" y="266" width="230" height="12" rx="6" fill="#9aa9b2" />
      <rect x="112" y="318" width="96" height="56" rx="14" fill="url(#goldGradient)" />
      <rect x="232" y="318" width="110" height="56" rx="14" fill="#0B2341" opacity=".9" />
      <path d="M428 198h102a34 34 0 0 1 34 34v120a34 34 0 0 1-34 34H428a34 34 0 0 1-34-34V232a34 34 0 0 1 34-34Z" fill="#ffffff" opacity=".12" />
      <path d="m426 303 35 35 78-104" fill="none" stroke="url(#goldGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18" />
    </svg>
  );
}

export function MonogramMark() {
  return (
    <svg viewBox="0 0 96 96" className="h-12 w-12" aria-hidden="true"><rect width="96" height="96" rx="24" fill="#0B2341" /><path fill="#C9A24A" d="M20 64V32h11l17 20 17-20h11v32H64V49L52 64h-8L32 49v15H20Z" /></svg>
  );
}
