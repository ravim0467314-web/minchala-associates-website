import Link from 'next/link';
import { AssetImage } from './AssetImage';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { images, navItems, site } from '../lib/content';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#d0ad68] focus:px-4 focus:py-2 focus:text-[#061724]">Skip to content</a>
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${site.name} home`}>
          <AssetImage {...images.logo} width={210} height={52} className="h-12 w-auto max-w-[210px]" priority />
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-slate-700 transition hover:text-[#b99655]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex"><LanguageToggle /><ThemeToggle /><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="rounded-full border border-slate-300 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#061724] transition hover:border-[#b99655]">Call</a><a href={`mailto:${site.email}`} className="rounded-full border border-[#b99655] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#061724] transition hover:bg-[#b99655]">Enquire</a></div>
      </div>
      <nav className="container flex flex-wrap gap-2 pb-3 text-xs font-semibold text-slate-600 xl:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-full bg-slate-100 px-3 py-2 transition hover:bg-[#f1e4c8]">{item.label}</Link>)}
      </nav>
    </header>
  );
}
