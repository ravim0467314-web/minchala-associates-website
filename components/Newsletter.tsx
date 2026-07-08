'use client';

import { FormEvent, useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(/\S+@\S+\.\S+/.test(email) ? 'Thank you. The firm team will use this preference only for professional update coordination.' : 'Please enter a valid email address.');
  }
  return <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><p className="footer-title">Compliance updates</p><div className="mt-4 flex flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" className="form-field" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Email address for compliance updates" /><button className="button-primary" type="submit">Subscribe</button></div>{message && <p className="mt-3 text-xs text-white/60">{message}</p>}</form>;
}
