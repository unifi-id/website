'use client';

import React from 'react';
import { submitLeadForm } from '@/src/lib/leadForms';

// Energy Club sign-up (24 Nov 2026). Posts form type energy_club to the CRM's
// website intake, which records the member and emails them a private link to
// add their energy details. The organisation box searches the public school,
// trust, university and council registers held by the CRM; anything else is
// typed in and matched by the team.

type Hit = { id: string; name: string; place: string; type: string };

const ORG_KINDS = ['School or college', 'Academy trust', 'Business', 'Charity', 'Council or public body', 'Other'];

function orgSearchUrl(): string {
  const lead = process.env.NEXT_PUBLIC_LEAD_API_URL || '';
  return /\/api\/website\/lead$/.test(lead) ? lead.replace(/\/lead$/, '/org-search') : '';
}

const inputClass = 'mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 bg-white';

export default function EnergyClubJoinForm() {
  const blank = {
    name: '', job_title: '', organisation: '', org_id: '', postcode: '', email: '', phone: '',
    org_kind: '', sites: '', consent: false, website: '',
  };
  const [form, setForm] = React.useState(blank);
  const [hits, setHits] = React.useState<Hit[]>([]);
  const [picked, setPicked] = React.useState<Hit | null>(null);
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = React.useState('');
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchUrl = orgSearchUrl();

  const set = (k: keyof typeof blank, v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  function onOrgType(v: string) {
    set('organisation', v);
    set('org_id', '');
    setPicked(null);
    if (timer.current) clearTimeout(timer.current);
    if (!searchUrl || v.trim().length < 3) { setHits([]); return; }
    timer.current = setTimeout(async () => {
      try {
        const res = await fetch(`${searchUrl}?q=${encodeURIComponent(v.trim())}`);
        const json = await res.json();
        setHits(Array.isArray(json.results) ? json.results : []);
      } catch {
        setHits([]);
      }
    }, 250);
  }

  function pick(h: Hit) {
    setPicked(h);
    setHits([]);
    setForm((p) => ({
      ...p,
      organisation: h.name,
      org_id: h.id,
      postcode: p.postcode || (h.place.split(', ').pop() ?? ''),
      org_kind: p.org_kind || (h.type === 'School' || h.type === 'Education' || h.type === 'University' ? 'School or college'
        : h.type === 'Academy trust' ? 'Academy trust' : h.type === 'Council' || h.type === 'Local authority' ? 'Council or public body' : ''),
    }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.consent) { setStatus('error'); setError('Please tick the box so we can email you your Energy Club link.'); return; }
    setStatus('loading');
    setError('');
    try {
      await submitLeadForm('energy_club', { ...form, consent: form.consent ? 'yes' : '' });
      setForm(blank);
      setPicked(null);
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit the form right now.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-5 text-green-900">
        <p className="font-semibold text-lg">Welcome to the Energy Club.</p>
        <p className="mt-2">We have emailed you a link to add your energy details: who supplies you, what you pay and when your contract ends. It takes about ten minutes and a recent bill has everything we ask for. If it hasn&rsquo;t arrived in a few minutes, please check your junk folder.</p>
      </div>
    );
  }

  return (
    <form className="grid md:grid-cols-2 gap-4" onSubmit={onSubmit}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set('website', e.target.value)} /></label>
      </div>

      <label className="block text-sm font-medium text-gray-700">Your name *
        <input className={inputClass} required autoComplete="name" value={form.name} onChange={(e) => set('name', e.target.value)} />
      </label>
      <label className="block text-sm font-medium text-gray-700">Job title
        <input className={inputClass} autoComplete="organization-title" value={form.job_title} onChange={(e) => set('job_title', e.target.value)} />
      </label>

      <div className="md:col-span-2 relative">
        <label className="block text-sm font-medium text-gray-700">Organisation *
          <input className={inputClass} required autoComplete="organization" value={form.organisation}
                 placeholder={searchUrl ? 'Start typing, e.g. your school or council' : ''}
                 onChange={(e) => onOrgType(e.target.value)} />
        </label>
        {picked && <p className="mt-1 text-sm text-gray-600">Selected: {picked.name}{picked.place ? `, ${picked.place}` : ''}</p>}
        {hits.length > 0 && !picked && (
          <ul className="absolute z-20 left-0 right-0 mt-1 rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden" role="listbox">
            {hits.map((h) => (
              <li key={h.id}>
                <button type="button" onClick={() => pick(h)} className="w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50">
                  <span className="block font-medium text-gray-900">{h.name}</span>
                  <span className="block text-sm text-gray-600">{[h.type, h.place].filter(Boolean).join(' · ')}</span>
                </button>
              </li>
            ))}
            <li><button type="button" onClick={() => setHits([])} className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Not listed? Keep what you typed</button></li>
          </ul>
        )}
      </div>

      <label className="block text-sm font-medium text-gray-700">Postcode
        <input className={inputClass} autoComplete="postal-code" value={form.postcode} onChange={(e) => set('postcode', e.target.value)} />
      </label>
      <label className="block text-sm font-medium text-gray-700">Type of organisation
        <select className={inputClass} value={form.org_kind} onChange={(e) => set('org_kind', e.target.value)}>
          <option value="">Choose…</option>
          {ORG_KINDS.map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
      </label>
      <label className="block text-sm font-medium text-gray-700">Email *
        <input className={inputClass} required type="email" autoComplete="email" value={form.email} onChange={(e) => set('email', e.target.value)} />
      </label>
      <label className="block text-sm font-medium text-gray-700">Phone
        <input className={inputClass} type="tel" autoComplete="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
      </label>
      <label className="block text-sm font-medium text-gray-700">Number of sites
        <input className={inputClass} type="number" min={1} max={10000} inputMode="numeric" value={form.sites} onChange={(e) => set('sites', e.target.value)} />
      </label>

      <label className="md:col-span-2 flex items-start gap-3 text-sm text-gray-700">
        <input type="checkbox" className="mt-1 h-5 w-5" checked={form.consent} onChange={(e) => set('consent', e.target.checked)} />
        <span>Please email me my Energy Club link and occasional Energy Club updates from Unifi ID. You can leave at any time. See our <a className="underline" href="/privacy">privacy notice</a>.</span>
      </label>

      {status === 'error' && (
        <div className="md:col-span-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{error}</div>
      )}

      <div className="md:col-span-2 pt-2">
        <button type="submit" disabled={status === 'loading'}
                className="px-8 py-3 rounded-full bg-unifi-dark text-white font-semibold hover:bg-black transition-colors">
          {status === 'loading' ? 'Joining…' : 'Join free'}
        </button>
      </div>
    </form>
  );
}
