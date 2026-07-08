'use client';

import { FormEvent, useState } from 'react';

export function PortalLogin() {
  const [message, setMessage] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('Portal access is enabled only for onboarded clients after verification and engagement setup. Please contact the firm team for access assistance.');
  }
  return <form onSubmit={submit} className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><label className="grid gap-2"><span className="font-bold">Registered email</span><input className="rounded-2xl border border-slate-200 px-4 py-3" type="email" required /></label><label className="mt-4 grid gap-2"><span className="font-bold">Password</span><input className="rounded-2xl border border-slate-200 px-4 py-3" type="password" required /></label><button className="button-primary mt-6" type="submit">Continue securely</button>{message && <p className="mt-4 rounded-2xl bg-[#f7f3ea] p-4 text-sm text-slate-600">{message}</p>}</form>;
}
