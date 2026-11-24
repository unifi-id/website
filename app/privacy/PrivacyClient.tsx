'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { plausibleEnabled } from '@/src/lib/analytics';

export default function PrivacyClient() {
  return (
    <>
<Section className="bg-white min-h-[40vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6">
          <H1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Privacy Policy (GDPR-Compliant)
          </H1>
          <Body className="text-lg text-gray-600">
            Last Updated: November 2026
          </Body>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</H2>
            <Body className="text-gray-700">
              Unifi.id, Limited is the data controller responsible for your personal data. We provide building intelligence, occupancy monitoring, and decarbonisation solutions to organisations.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">What Data We Collect</H2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Name, job title, company name</li>
              <li>Email address, phone number</li>
              <li>Usage data (pages visited, forms submitted)</li>
              <li>Information submitted via contact forms</li>
              <li>Technical data via cookies and analytics tools</li>
              <li>For clients: RFID tag data and occupancy system metadata</li>
            </ul>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</H2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To respond to enquiries</li>
              <li>To provide services and customer support</li>
              <li>To personalise content and improve user experience</li>
              <li>To deliver insights through our SaaS platform</li>
              <li>For legal and compliance purposes</li>
            </ul>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Analytics and Website Visitor Insight</H2>
            <div className="space-y-4">
              <Body className="text-gray-700">
                <strong>Website visitor insight:</strong> we use Lead Forensics, which uses the internet (IP) address of a visit to identify the organisation it came from, not the individual, and shows us which of our pages that organisation viewed. We use this to understand which organisations are interested in our services. Lead Forensics Ltd processes this data on our behalf. See{' '}
                <a
                  href="https://leadforensics.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-unifi-blue hover:underline font-medium"
                >leadforensics.com/privacy-policy</a>.
              </Body>
              {/* Remove this paragraph if the Plausible trial ends and the script is
                  taken off the site for good, so the policy does not describe a tool we
                  no longer use. Until then it appears only when the script does: both
                  are gated on plausibleEnabled, which reads
                  NEXT_PUBLIC_PLAUSIBLE_DOMAIN. The site is a static export, so this
                  resolves at build time and the sentence is absent from the built HTML
                  while the variable is unset. */}
              {plausibleEnabled ? (
                <Body className="text-gray-700">
                  We also use Plausible Analytics, which counts visits without cookies and without identifying anyone.
                </Body>
              ) : null}
            </div>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Business Contacts at Schools and Other Organisations</H2>
            <div className="space-y-4">
              <Body className="text-gray-700">
                <strong>What we hold.</strong> Your name, job title, the organisation you work for, and your work email address and phone number.
              </Body>
              <Body className="text-gray-700">
                <strong>Where we got it.</strong> From you; from your organisation, for example when we call the school office and are given the right person&apos;s work details; from your organisation&apos;s public website; or from the government&apos;s Get Information About Schools register. For some older records the original source was not recorded.
              </Body>
              <Body className="text-gray-700">
                <strong>Why we use it.</strong> To send you occasional emails about energy, lighting, carbon measurement and related funding for your organisation, and to invite you to take part in research such as our schools energy survey. Our lawful basis is legitimate interests: it is in our interest, and we believe in yours, to make you aware of relevant services and research. We have assessed that this does not override your rights, and you can object at any time.
              </Body>
              <Body className="text-gray-700">
                <strong>Who we share it with.</strong> We do not sell or share your details. We use trusted service providers to store data and send email, under contracts that protect it.
              </Body>
              <Body className="text-gray-700">
                <strong>How long we keep it.</strong> Until you ask us to stop, you leave the role, or 24 months after we last had any contact with you. If you unsubscribe, we keep your email address on a &quot;do not contact&quot; list so we never email you again.
              </Body>
              <Body className="text-gray-700">
                <strong>Your right to object.</strong> You can object to our use of your details for marketing at any time, and we will stop. Use the unsubscribe link in any of our emails, or email{' '}
                <a href="mailto:privacy@unifi.id" className="text-unifi-blue hover:underline font-medium">privacy@unifi.id</a>.
              </Body>
            </div>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Energy Club Members</H2>
            <div className="space-y-4">
              <Body className="text-gray-700">
                <strong>What we hold.</strong> The details you give when you join (your name, job title, organisation, work email and phone, postcode, type of organisation and number of sites) and the energy details you choose to add afterwards: suppliers, contract end dates, prices, usage, meter numbers and any bills you upload.
              </Body>
              <Body className="text-gray-700">
                <strong>Why we use it.</strong> To run your membership: to compare what you pay, advise you on your options and keep in touch about the club. You asked to join, and you can leave at any time by replying to any Energy Club email or emailing{' '}
                <a href="mailto:energyclub@unifi.id" className="text-unifi-blue hover:underline font-medium">energyclub@unifi.id</a>.
              </Body>
              <Body className="text-gray-700">
                <strong>Who sees it.</strong> Your energy details and bills are seen only by our directors. We will not pass them to any supplier or broker without asking you first. If you choose to sign a letter of authority, we use it only to request your contract and usage details from the supplier it names.
              </Body>
              <Body className="text-gray-700">
                <strong>How long we keep it.</strong> While you are a member, and for up to 24 months after we last had any contact with you.
              </Body>
            </div>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</H2>
            <Body className="text-gray-700 mb-4">
              We may share your data with trusted service providers and subcontractors who assist in delivering our services, and with legal or regulatory bodies when required by law.
            </Body>
            <Body className="text-gray-700 font-semibold">
              We never sell your data to third parties.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</H2>
            <Body className="text-gray-700">
              We retain your data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When no longer required, data is securely deleted or anonymised.
            </Body>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</H2>
            <Body className="text-gray-700 mb-4">
              Under GDPR, you have the right to:
            </Body>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access or correct your data</li>
              <li>Request deletion or restriction of processing</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the ICO (UK) or your local supervisory authority</li>
            </ul>
          </div>

          <div>
            <H2 className="text-2xl font-bold text-gray-900 mb-4">Contact</H2>
            <Body className="text-gray-700">
              For privacy enquiries or to exercise your rights, contact us at{' '}
              <a href="mailto:privacy@unifi.id" className="text-unifi-blue hover:underline font-medium">privacy@unifi.id</a>
              . Unifi.id, Limited - Canary Wharf, London.
            </Body>
          </div>

          <div className="pt-8">
            <ButtonLink href="/legal-support" variant="secondary">Back to Legal & Support</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
