'use client';

import { useMemo, useState } from 'react';

const numberFormatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 });

function parseAmount(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function Calculators() {
  const [baseAmount, setBaseAmount] = useState('100000');
  const [gstRate, setGstRate] = useState('18');
  const [tdsAmount, setTdsAmount] = useState('50000');
  const [tdsRate, setTdsRate] = useState('10');
  const [monthlyCompliance, setMonthlyCompliance] = useState('12');

  const gst = useMemo(() => {
    const amount = parseAmount(baseAmount);
    const rate = parseAmount(gstRate);
    const tax = amount * (rate / 100);
    return { amount, rate, tax, total: amount + tax, halfTax: tax / 2 };
  }, [baseAmount, gstRate]);

  const tds = useMemo(() => {
    const amount = parseAmount(tdsAmount);
    const rate = parseAmount(tdsRate);
    const deduction = amount * (rate / 100);
    return { amount, rate, deduction, net: amount - deduction };
  }, [tdsAmount, tdsRate]);

  const calendar = useMemo(() => {
    const months = Math.max(1, Math.min(12, Math.round(parseAmount(monthlyCompliance) || 1)));
    return {
      months,
      gstFilings: months * 2,
      tdsReviews: months,
      booksReviews: months,
    };
  }, [monthlyCompliance]);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <article className="luxury-card rounded-[1.75rem] p-7">
        <p className="eyebrow text-[#b99655]">GST illustration</p>
        <h2 className="display mt-3 text-3xl">Taxable value to GST split</h2>
        <label className="mt-6 block text-sm font-bold text-slate-700" htmlFor="gst-base">Taxable value</label>
        <input id="gst-base" className="field mt-2" inputMode="decimal" value={baseAmount} onChange={(event) => setBaseAmount(event.target.value)} />
        <label className="mt-4 block text-sm font-bold text-slate-700" htmlFor="gst-rate">GST rate %</label>
        <input id="gst-rate" className="field mt-2" inputMode="decimal" value={gstRate} onChange={(event) => setGstRate(event.target.value)} />
        <dl className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex justify-between gap-4"><dt>GST amount</dt><dd className="font-bold text-[#061724]">₹{numberFormatter.format(gst.tax)}</dd></div>
          <div className="flex justify-between gap-4"><dt>CGST / SGST split</dt><dd className="font-bold text-[#061724]">₹{numberFormatter.format(gst.halfTax)} each</dd></div>
          <div className="flex justify-between gap-4"><dt>Invoice total</dt><dd className="font-bold text-[#061724]">₹{numberFormatter.format(gst.total)}</dd></div>
        </dl>
      </article>

      <article className="luxury-card rounded-[1.75rem] p-7">
        <p className="eyebrow text-[#b99655]">TDS illustration</p>
        <h2 className="display mt-3 text-3xl">Gross amount to deduction</h2>
        <label className="mt-6 block text-sm font-bold text-slate-700" htmlFor="tds-base">Gross amount</label>
        <input id="tds-base" className="field mt-2" inputMode="decimal" value={tdsAmount} onChange={(event) => setTdsAmount(event.target.value)} />
        <label className="mt-4 block text-sm font-bold text-slate-700" htmlFor="tds-rate">Indicative TDS rate %</label>
        <input id="tds-rate" className="field mt-2" inputMode="decimal" value={tdsRate} onChange={(event) => setTdsRate(event.target.value)} />
        <dl className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex justify-between gap-4"><dt>Estimated deduction</dt><dd className="font-bold text-[#061724]">₹{numberFormatter.format(tds.deduction)}</dd></div>
          <div className="flex justify-between gap-4"><dt>Illustrative net amount</dt><dd className="font-bold text-[#061724]">₹{numberFormatter.format(tds.net)}</dd></div>
          <div className="flex justify-between gap-4"><dt>Rate used</dt><dd className="font-bold text-[#061724]">{numberFormatter.format(tds.rate)}%</dd></div>
        </dl>
      </article>

      <article className="luxury-card rounded-[1.75rem] p-7">
        <p className="eyebrow text-[#b99655]">Compliance rhythm</p>
        <h2 className="display mt-3 text-3xl">Monthly review planner</h2>
        <label className="mt-6 block text-sm font-bold text-slate-700" htmlFor="months">Months to plan</label>
        <input id="months" className="field mt-2" inputMode="numeric" value={monthlyCompliance} onChange={(event) => setMonthlyCompliance(event.target.value)} />
        <dl className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex justify-between gap-4"><dt>GST return checkpoints</dt><dd className="font-bold text-[#061724]">{calendar.gstFilings}</dd></div>
          <div className="flex justify-between gap-4"><dt>TDS review checkpoints</dt><dd className="font-bold text-[#061724]">{calendar.tdsReviews}</dd></div>
          <div className="flex justify-between gap-4"><dt>Books review checkpoints</dt><dd className="font-bold text-[#061724]">{calendar.booksReviews}</dd></div>
        </dl>
      </article>
    </div>
  );
}
