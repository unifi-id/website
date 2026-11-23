import Link from 'next/link';

// Home page panel for the Great Debate schools survey (23 Nov 2026).
export default function GreatDebateBanner() {
  return (
    <section style={{ background: '#0E1C2E' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: '#E0A458' }}>The Great Debate</p>
          <p className="mt-2 text-lg md:text-xl leading-relaxed text-white/90">
            Why do money-saving upgrades in schools take so long? Tell us, and we&rsquo;ll put schools&rsquo; answers to the
            Department for Education, HM Treasury and the Department for Energy Security and Net Zero.
          </p>
        </div>
        <Link href="/great-debate"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base md:text-lg font-semibold whitespace-nowrap transition hover:brightness-105"
              style={{ background: '#E0A458', color: '#0E1C2E' }}>
          Join the debate &rarr;
        </Link>
      </div>
    </section>
  );
}
