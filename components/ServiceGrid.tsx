import Link from 'next/link';
import { services } from '../lib/content';

export function ServiceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <article key={service.slug} className="group luxury-card relative overflow-hidden rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#C9A24A]/10 transition group-hover:bg-[#C9A24A]/20" />
          <span className="text-xs font-bold text-[#C9A24A]">{String(index + 1).padStart(2, '0')}</span>
          <h2 className="display mt-5 text-3xl">{service.title}</h2>
          <p className="mt-4 leading-7 text-slate-600">{service.summary}</p>
          <p className="mt-5 rounded-2xl bg-[#0B2341] p-4 text-sm font-semibold leading-6 text-white/82">{service.outcome}</p>
          <ul className="mt-6 space-y-2 text-sm font-semibold text-[#0B2341]">
            {service.details.map((item) => <li key={item} className="flex gap-2"><span className="text-[#C9A24A]">✓</span>{item}</li>)}
          </ul>
          <Link href={`/services/${service.slug}`} className="mt-7 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-[#C9A24A]">View service details →</Link>
        </article>
      ))}
    </div>
  );
}
