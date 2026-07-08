'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { services, site } from '../lib/content';

type FormState = {
  name: string;
  mobile: string;
  email: string;
  city: string;
  service: string;
  message: string;
  mode: string;
  consent: boolean;
};

const initialState: FormState = {
  name: '',
  mobile: '',
  email: '',
  city: '',
  service: services[0]?.title ?? 'Audit & Assurance',
  message: '',
  mode: 'In-person appointment',
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready'>('idle');

  const isValidEmail = useMemo(() => /\S+@\S+\.\S+/.test(form.email), [form.email]);
  const isValidMobile = useMemo(() => form.mobile.replace(/\D/g, '').length >= 10, [form.mobile]);

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current: FormState) => ({ ...current, [field]: value }));
    setErrors((current: Partial<Record<keyof FormState, string>>) => ({ ...current, [field]: undefined }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!isValidMobile) nextErrors.mobile = 'Please enter a valid mobile number.';
    if (!isValidEmail) nextErrors.email = 'Please enter a valid email address.';
    if (!form.city.trim()) nextErrors.city = 'Please share your city or location.';
    if (form.message.trim().length < 20) nextErrors.message = 'Please share at least 20 characters about the requirement.';
    if (!form.consent) nextErrors.consent = 'Please confirm consent to be contacted by the firm.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus('loading');
    const subject = encodeURIComponent(`Appointment request: ${form.service}`);
    const body = encodeURIComponent(`Name: ${form.name}\nMobile: ${form.mobile}\nEmail: ${form.email}\nCity/Location: ${form.city}\nService required: ${form.service}\nPreferred appointment mode: ${form.mode}\nConsent: ${form.consent ? 'Yes' : 'No'}\n\nMessage:\n${form.message}`);
    window.setTimeout(() => {
      setStatus('ready');
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    }, 350);
  }

  return (
    <form className="grid gap-4" onSubmit={submit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2"><span className="text-sm font-semibold text-white/70">Name</span><input className="form-field" value={form.name} onChange={(event: ChangeEvent<HTMLInputElement>) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} />{errors.name && <span className="text-sm text-[#f2d58b]">{errors.name}</span>}</label>
        <label className="grid gap-2"><span className="text-sm font-semibold text-white/70">Mobile number</span><input className="form-field" inputMode="tel" value={form.mobile} onChange={(event: ChangeEvent<HTMLInputElement>) => update('mobile', event.target.value)} aria-invalid={Boolean(errors.mobile)} />{errors.mobile && <span className="text-sm text-[#f2d58b]">{errors.mobile}</span>}</label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2"><span className="text-sm font-semibold text-white/70">Email</span><input className="form-field" type="email" value={form.email} onChange={(event: ChangeEvent<HTMLInputElement>) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} />{errors.email && <span className="text-sm text-[#f2d58b]">{errors.email}</span>}</label>
        <label className="grid gap-2"><span className="text-sm font-semibold text-white/70">City / location</span><input className="form-field" value={form.city} onChange={(event: ChangeEvent<HTMLInputElement>) => update('city', event.target.value)} aria-invalid={Boolean(errors.city)} />{errors.city && <span className="text-sm text-[#f2d58b]">{errors.city}</span>}</label>
      </div>
      <label className="grid gap-2"><span className="text-sm font-semibold text-white/70">Service required</span><select className="form-field" value={form.service} onChange={(event: ChangeEvent<HTMLSelectElement>) => update('service', event.target.value)}>{services.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label>
      <label className="grid gap-2"><span className="text-sm font-semibold text-white/70">Preferred appointment mode</span><select className="form-field" value={form.mode} onChange={(event: ChangeEvent<HTMLSelectElement>) => update('mode', event.target.value)}><option>In-person appointment</option><option>Phone discussion</option><option>Video meeting</option><option>Email coordination</option></select></label>
      <label className="grid gap-2"><span className="text-sm font-semibold text-white/70">Message</span><textarea className="form-field min-h-36" value={form.message} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} />{errors.message && <span className="text-sm text-[#f2d58b]">{errors.message}</span>}</label>
      <label className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-white/65"><input className="mt-1 h-4 w-4 accent-[#d0ad68]" type="checkbox" checked={form.consent} onChange={(event: ChangeEvent<HTMLInputElement>) => update('consent', event.target.checked)} /> <span>I consent to Minchala & Associates contacting me using the details shared for evaluating this consultation / appointment request.</span></label>
      {errors.consent && <span className="text-sm text-[#f2d58b]">{errors.consent}</span>}
      <button className="button-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Preparing request…' : status === 'ready' ? 'Opening email client…' : 'Request a consultation / appointment'}</button>
      <p className="text-xs leading-6 text-white/50">Submitting opens your email client. No information is stored by this website. Engagement begins only after written scope and acceptance.</p>
    </form>
  );
}
