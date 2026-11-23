import type { Metadata } from 'next';
import GreatDebateClient from './GreatDebateClient';

// The Great Debate (23 Nov 2026): the public home for the schools survey.
// Plan: claude/PLAN-great-debate-website-page-2026-11-23.md (Unifi CRM
// project). The survey itself runs at survey.unifi.id/d; the results panel
// reads survey.unifi.id/d/summary in the visitor's browser.
const title = 'The Great Debate: make your voice heard | unifi.id';
const description =
  'A five-minute survey for schools on what holds energy upgrades up. Findings go to the Department for Education, HM Treasury and the Department for Energy Security and Net Zero.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://unifi.id/great-debate/' },
  openGraph: {
    title: 'The Great Debate: make your voice heard',
    description,
    url: 'https://unifi.id/great-debate/',
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function GreatDebatePage() {
  return <GreatDebateClient />;
}
