import Link from 'next/link';

export default function OfflinePage() {
  return <main id="main" className="section-pad"><div className="container"><p className="eyebrow text-[#C9A24A]">Offline</p><h1 className="section-title">You are viewing the offline fallback.</h1><p className="mt-5 max-w-xl text-slate-600">Reconnect to access the latest Minchala & Associates resources and compliance updates.</p><Link href="/" className="button-primary mt-8">Return home</Link></div></main>;
}
