'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// The Great Debate page (23 Nov 2026). Plain, even-handed and clearly a
// survey, not a sales page: always names all three departments, no product
// names, no "book a demo". Results appear only once 50 schools have taken
// part (the threshold is enforced by the CRM, not here).

const SURVEY_URL = 'https://survey.unifi.id/d';
const SUMMARY_URL = 'https://survey.unifi.id/d/summary';
const FORMS_URL = 'https://forms.cloud.microsoft/e/zWdX8GFHMN';
const NAVY = '#0E1C2E';

// Which findings lead, in this order, when they have enough answers
const HEADLINES = ['q8_waiting', 'q9_wait', 'q11_barriers', 'q10_reclaim', 'q14_confidence', 'q5_stage', 'q3_done'];

type Option = { label: string; n: number; nState: number | null; nPrivate: number | null };
type Finding = {
  key: string; section: string; question: string; route: 'state' | 'private' | null; multi: boolean;
  base: number; split: boolean; baseState: number | null; basePrivate: number | null; options: Option[];
};
type Summary =
  | { ready: false; threshold: number }
  | { ready: true; threshold: number; total: number; state: number; private: number; updatedAt: string;
      questions: Finding[]; quotes: { text: string; by: string }[] };

const pct = (n: number, d: number) => (d > 0 ? Math.round((100 * n) / d) : 0);

const shareHref = () => {
  const subject = 'The Great Debate: a five-minute survey for schools';
  const body = [
    'I thought you might want to add your view to this.',
    '',
    'The Great Debate is a short survey on what helps and what holds up energy upgrades in schools. The findings go to the Department for Education, HM Treasury and the Department for Energy Security and Net Zero, and every school that takes part gets a copy.',
    '',
    `More about it: https://unifi.id/great-debate/`,
    `The survey: ${SURVEY_URL}`,
  ].join('\n');
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function GreatDebateClient() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    let live = true;
    fetch(SUMMARY_URL, { mode: 'cors' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (live) setSummary(d ?? { ready: false, threshold: 50 }); })
      .catch(() => { if (live) setSummary({ ready: false, threshold: 50 }); });
    return () => { live = false; };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-36 pb-16 md:pt-44 md:pb-24">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: '#E0A458' }}>
            <span className="inline-block h-px w-8" style={{ background: '#E0A458' }} aria-hidden="true" />
            The Great Debate
          </p>
          <h1 className="font-display mt-5 text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight">Make your voice heard</h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/85">
            Schools are told to cut energy use and carbon, but many of the upgrades that would do it, such as better
            lighting, heating, insulation and solar, keep being delayed. We want to understand why, from the people who
            actually run schools.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={SURVEY_URL}
               className="inline-flex items-center justify-center rounded-md px-7 py-4 text-lg font-semibold transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
               style={{ background: '#E0A458', color: NAVY }}>
              Take the survey &rarr;
            </a>
            <a href={shareHref()}
               className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-4 text-lg font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
              Send it to a colleague
            </a>
          </div>
          <p className="mt-4 text-sm text-white/70">About five minutes. Most questions are a single click.</p>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-[17px] md:text-lg leading-relaxed text-unifi-gray space-y-5">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-unifi-dark">Why we are asking</h2>
          <p>
            Many of the upgrades schools would like to make would save money every year. Plenty of schools have
            already done them. Many more are waiting: for a grant round, a council decision, a trust capital programme,
            or a buying process that can take longer than the work itself.
          </p>
          <p>
            The people who run schools know better than anyone what helps and what gets in the way. Business managers,
            heads, site managers and trust teams deal with it every day, but their experience rarely reaches the people
            who design the funding and the rules.
          </p>
          <p>
            The Great Debate asks them directly. We will put the findings, in schools&rsquo; own words, to the
            Department for Education, HM Treasury and the Department for Energy Security and Net Zero, as practical
            evidence of what would help schools act sooner. Every school that takes part gets a copy.
          </p>
          <h3 className="font-display pt-4 text-2xl font-bold tracking-tight text-unifi-dark">We want to hear from every school</h3>
          <p>
            That means schools still waiting, and just as much those that have managed to get their upgrades done. If
            your school has finished a project, how you did it is exactly what other schools need to know.
          </p>
          <p>The survey covers five short areas:</p>
          <ul className="grid gap-2 sm:grid-cols-2 list-none p-0">
            {['Where you are now', 'Funding and waiting', 'What gets in the way', 'Weighing up a project', 'Your voice, in your own words'].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-md bg-unifi-light px-4 py-3 text-unifi-dark">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: '#E0A458' }} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results */}
      <section className="bg-unifi-light" aria-labelledby="gd-results">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h2 id="gd-results" className="font-display text-3xl md:text-4xl font-bold tracking-tight text-unifi-dark">What schools are telling us</h2>
          <Results summary={summary} />
        </div>
      </section>

      {/* Your answers */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-[17px] md:text-lg leading-relaxed text-unifi-gray">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-unifi-dark">What happens to your answers</h2>
          <ul className="mt-6 space-y-4 list-none p-0">
            {[
              'We publish findings only once at least 50 schools have taken part, and every figure shows how many schools it is based on.',
              'We quote you only if you say we may, and only in the way you choose: with your school’s name, or anonymously, described by your role and type of school.',
              'If you arrive here rather than from a personal invitation, we ask for your work email so we know answers come from schools. We use it for that, and for the findings or a follow-up only if you ask.',
              'There is nothing to buy. Nobody will contact you about our services unless you tick the box asking us to.',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2.5 inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: NAVY }} aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            How we handle personal information is set out in our <Link href="/privacy" className="text-unifi-blue underline underline-offset-4">privacy notice</Link>.
          </p>
        </div>
      </section>

      {/* Who */}
      <section className="bg-unifi-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-[17px] md:text-lg leading-relaxed text-unifi-gray space-y-5">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-unifi-dark">Who is running this</h2>
          <p>
            The Great Debate is run by Unifi.id. We work with schools, trusts and local authorities on energy:
            understanding where it goes, making the most of existing and new technology to bring costs down, and
            verifying the results. We hear the same story from schools again and again, and we think the people who
            set policy should hear it too.
          </p>
          <p className="font-semibold text-unifi-dark">Patrick Johnston, Chief Executive, Unifi.id</p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a href={SURVEY_URL}
               className="inline-flex items-center justify-center rounded-md px-7 py-4 text-lg font-semibold text-white transition hover:brightness-110"
               style={{ background: NAVY }}>
              Take the survey &rarr;
            </a>
          </div>
          <p className="text-base">
            If our survey site is blocked on your school&rsquo;s network, <a href={FORMS_URL} className="text-unifi-blue underline underline-offset-4">this version works too</a>.
          </p>
        </div>
      </section>
    </>
  );
}

function Results({ summary }: { summary: Summary | null }) {
  if (!summary) return <p className="mt-6 text-lg text-unifi-gray" role="status">Loading&hellip;</p>;
  if (!summary.ready) {
    return (
      <div className="mt-6 max-w-3xl rounded-lg border border-gray-200 bg-white p-6 md:p-8 text-[17px] md:text-lg leading-relaxed text-unifi-gray">
        <p>
          The first findings will appear here once {summary.threshold} schools have taken part. Until then, any
          percentage would rest on too few schools to be fair to anyone.
        </p>
        <p className="mt-4">
          <a href={SURVEY_URL} className="font-semibold text-unifi-dark underline underline-offset-4">Add your school&rsquo;s view &rarr;</a>
        </p>
      </div>
    );
  }
  const shown = HEADLINES.map((k) => summary.questions.find((q) => q.key === k)).filter(Boolean) as Finding[];
  const updated = new Date(summary.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <>
      <p className="mt-4 text-lg text-unifi-gray">
        {summary.total} schools have taken part so far ({summary.state} state, {summary.private} independent).
        Updated {updated}.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {shown.map((q) => (
          <div key={q.key} className="rounded-lg border border-gray-200 bg-white p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-unifi-gray">{q.section}{q.route === 'state' ? ' · state schools' : q.route === 'private' ? ' · independent schools' : ''}</p>
            <h3 className="font-display mt-2 text-lg md:text-xl font-bold text-unifi-dark">{q.question}</h3>
            <ul className="mt-4 space-y-3 list-none p-0">
              {q.options.slice(0, 5).map((o) => (
                <li key={o.label}>
                  <div className="flex items-baseline justify-between gap-3 text-[15px] text-unifi-dark">
                    <span>{o.label}</span>
                    <span className="font-semibold tabular-nums">{pct(o.n, q.base)}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-gray-100" aria-hidden="true">
                    <div className="h-2 rounded-full" style={{ width: `${pct(o.n, q.base)}%`, background: '#E0A458' }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-unifi-gray">
              Based on the {q.base} schools that answered this question{q.multi ? '; schools could choose more than one, so figures add up to more than 100%' : ''}.
            </p>
          </div>
        ))}
      </div>
      {summary.quotes.length > 0 && (
        <div className="mt-12">
          <h3 className="font-display text-2xl font-bold tracking-tight text-unifi-dark">In schools&rsquo; own words</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {summary.quotes.map((q, i) => (
              <figure key={i} className="rounded-lg bg-white p-6 border-l-4" style={{ borderColor: '#E0A458' }}>
                <blockquote className="text-lg leading-relaxed text-unifi-dark">&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm text-unifi-gray">{q.by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
