import { site } from '../lib/content';

export function FloatingWhatsApp() {
  const number = site.whatsappNumber?.replace(/\D/g, '') ?? '';
  const message = encodeURIComponent('Hello Minchala & Associates, I would like to request an appointment.');
  const className = 'fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#1f8f53]/30 bg-[#0b7a3b] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-[#0B2341]/20 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#C9A24A]/35';

  if (!number) {
    return (
      <button type="button" className={`${className} cursor-not-allowed opacity-70`} aria-disabled="true" title="Firm-approved WhatsApp number pending">
        <span aria-hidden="true">✆</span>
        <span>Connect with the firm</span>
      </button>
    );
  }

  return (
    <a className={className} href={`https://wa.me/${number}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="Request an appointment on WhatsApp">
      <span aria-hidden="true">✆</span>
      <span>Request an appointment</span>
    </a>
  );
}
