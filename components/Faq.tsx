import { faqs } from '../lib/content';
import { JsonLd } from './StructuredData';

export function Faq() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  return (
    <section className="section-pad bg-white"><JsonLd data={faqJsonLd} />
      <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow text-[#C9A24A]">FAQs</p>
          <h2 className="section-title">Responsible answers before engagement.</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-slate-200 bg-[#F8F7F3] p-6 open:bg-white open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold text-[#0B2341]">
                {item.question}<span className="text-[#C9A24A] transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
