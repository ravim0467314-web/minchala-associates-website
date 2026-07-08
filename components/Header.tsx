import Link from 'next/link';
import { AssetImage } from './AssetImage';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { images, navItems, site } from '../lib/content';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#C9A24A] focus:px-4 focus:py-2 focus:text-[#0B2341]">Skip to content</a>
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${site.name} home`}>
          <AssetImage {...images.logo} width={210} height={52} className="h-12 w-auto max-w-[210px]" priority />
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-slate-700 transition hover:text-[#C9A24A]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex"><LanguageToggle /><ThemeToggle /><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="rounded-full border border-slate-300 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0B2341] transition hover:border-[#C9A24A]">Call</a><a href={`mailto:${site.email}`} className="rounded-full border border-[#C9A24A] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0B2341] transition hover:bg-[#C9A24A]">Enquire</a></div>
      </div>
      <nav className="container flex gap-3 overflow-x-auto pb-3 text-xs font-semibold text-slate-600 xl:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className="shrink-0 rounded-full bg-slate-100 px-3 py-2 transition hover:bg-[#eef5ff]">{item.label}</Link>)}
      </nav>
    </header>
  );
}
