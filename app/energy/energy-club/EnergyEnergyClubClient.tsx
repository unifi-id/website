'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { CheckCircle, Building2, Factory, Users, School, Lock } from 'lucide-react';
import RelatedEnergyServices from '@/src/components/RelatedEnergyServices';
import EnergyClubJoinForm from './EnergyClubJoinForm';

export default function EnergyEnergyClubClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-club');

  return (
    <>
<Section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Electricity pylons crossing green countryside" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full text-left">
            <H1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
              The free energy club built for businesses like yours.
            </H1>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white mb-5 animate-fade-in-up">
              Free to join for all non-domestic customers
            </div>
            <Body className="text-lg md:text-xl text-white/85 max-w-3xl animate-fade-in-up">
              The Unifi ID Energy Club is a simpler, fairer way for organisations to buy energy. Join free, tell us when your contract ends, and when we find a better rate we will show you. You choose whether to take it.
            </Body>
            <div className="mt-8 animate-fade-in-up">
              <a href="#join" className="inline-block px-8 py-4 text-lg font-medium rounded-sm bg-white text-unifi-dark hover:bg-gray-100 transition-colors">Join free</a>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-gray-900 mb-8 text-left">How it works</H2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Join in a minute", desc: "Your name, organisation and email. That is all we need to start." },
              { title: "Add your energy details when it suits you", desc: "A recent bill has everything we ask for, or simply upload it and we will read it for you." },
              { title: "Take it or pass", desc: "When your renewal comes round, we show you the rate we can get and how it compares. If you pass, you owe us nothing. If you take it, our clear monthly fee applies for as long as you are on a club rate, including each time you renew through us. You keep your own contract with the supplier, and the club never adds an exit fee." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 animate-fade-in-up">
                <div className="w-9 h-9 rounded-full bg-unifi-dark text-white font-semibold flex items-center justify-center mb-4">{i + 1}</div>
                <H3 className="font-bold text-gray-900 mb-2">{item.title}</H3>
                <Body className="text-gray-600 text-sm">{item.desc}</Body>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-gray-900 mb-8 text-left">What members get</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "A free review of what you pay", desc: "We look at your unit rates, standing charges and contract terms, and tell you how they compare." },
              { title: "A heads-up before renewal", desc: "We contact you well before your contract ends with the rate we can get, so renewal never catches you out." },
              { title: "Buying together", desc: "We are building the club now. The more organisations that join, the stronger our position with suppliers. We aim to group members with similar needs to buy together across England, Scotland and Wales." },
              { title: "No supplier commissions", desc: "We don't take commission from energy suppliers, so we have no reason to favour one over another. Each time you take up a deal we find, a clear monthly fee applies, agreed with you before you commit. If you pass, you pay nothing." },
              { title: "Straight answers", desc: "Questions about your bills, contracts or meters, answered plainly by the Unifi ID team." },
              { title: "Free to join", desc: "No joining fee and no obligation to switch. Join now and you will be among the first members we work with." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4 animate-fade-in-up">
                <CheckCircle className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                <div>
                  <H3 className="font-bold text-gray-900 mb-2">{item.title}</H3>
                  <Body className="text-gray-600 text-sm">{item.desc}</Body>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <H2 className="text-2xl font-bold text-gray-900 mb-6">Open to every non-domestic customer</H2>
              <ul className="space-y-4">
                {[
                  { icon: Building2, label: "Single-site businesses and growing teams" },
                  { icon: Factory, label: "Industrial and operational sites" },
                  { icon: Users, label: "Multi-site operators and managed estates" },
                  { icon: School, label: "Schools, charities, and public-facing organisations" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex gap-3 items-center animate-fade-in-up">
                      <Icon className="w-8 h-8 text-unifi-blue flex-shrink-0" />
                      <Body>{item.label}</Body>
                    </li>
                  );
                })}
              </ul>
              <Body className="mt-4 text-gray-600 italic">If you are a non-domestic customer, you can join. No minimum size, no sector restriction, and no spend threshold.</Body>
            </div>
            <div>
              <H2 className="text-2xl font-bold text-gray-900 mb-6">Your details stay with us</H2>
              <div className="flex gap-3 items-start">
                <Lock className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                <Body className="text-gray-600">Your energy details are kept private and seen only by the small Unifi ID team who run the Energy Club. We use them to compare your costs and advise you, and never pass them to a supplier unless you ask us to act for you.</Body>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div id="join" className="max-w-3xl mx-auto px-6 text-left scroll-mt-24">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Join the Energy Club</H2>
          <Body className="mb-4 text-gray-600">
            Joining is free for any non-domestic customer. There is no joining fee and no obligation to switch.
          </Body>
          <Body className="mb-6 text-gray-600">
            Join below and we will email you a link to add your energy details when it suits you: who supplies you, what you pay and when your contract ends.
          </Body>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
            <EnergyClubJoinForm />
          </div>
        </div>
      </Section>
          <RelatedEnergyServices
        heading="Beyond buying energy better"
        intro="Membership sits alongside the reporting and measurement services that reduce consumption itself."
        links={[
          {
            href: '/energy/carbon-reporting',
            label: 'Carbon Reporting with TrackZero',
            description: 'Turn energy and carbon data into a reportable, coordinated action plan.',
            service: 'trackzero',
          },
          {
            href: '/energy/monitoring',
            label: 'Energy Monitoring',
            description: 'See which circuits, systems and appliances are actually using energy.',
            service: 'monitoring',
          },
          {
            href: '/energy/technology',
            label: 'Our Technology',
            description: 'LED, smart sockets, heating, HVAC and solar - the measures that deliver the saving.',
            service: 'technology',
          },
          {
            href: '/energy/hub',
            label: 'Energy Hub',
            description: 'Explore by technology or by sector to find the right starting point.',
            service: 'hub',
          },
        ]}
      />
    </>
  );
}
