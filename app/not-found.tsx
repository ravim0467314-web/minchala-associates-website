import Link from 'next/link';

export default function NotFound() {
  return <main id="main" className="section-pad"><div className="container"><p className="eyebrow text-[#C9A24A]">404</p><h1 className="section-title">Page not found.</h1><p className="mt-5 max-w-xl text-slate-600">The page you requested could not be located.</p><Link href="/" className="button-primary mt-8">Return home</Link></div></main>;
}
