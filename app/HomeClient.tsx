'use client';
import HeroSection from '@/src/components/HeroSection';
import ChallengeSection from '@/src/components/ChallengeSection';
import CarbonReportingSection from '@/src/components/CarbonReportingSection';
import CortexSection from '@/src/components/CortexSection';
import SolutionsSection from '@/src/components/SolutionsSection';
import SectorsSection from '@/src/components/SectorsSection';
import CTASection from '@/src/components/CTASection';
import GreatDebateBanner from '@/src/components/GreatDebateBanner';

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <GreatDebateBanner />
      <ChallengeSection />
      <CarbonReportingSection />
      <CortexSection />
      <SolutionsSection />
      <SectorsSection />
      <CTASection />
    </>
  );
}
