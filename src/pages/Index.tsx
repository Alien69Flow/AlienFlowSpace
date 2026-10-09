import React from 'react';
import CinematicParticles from '@/components/CinematicParticles';
import CinematicCursor from '@/components/CinematicCursor';
import Hero from '@/components/Hero';
import GetStartedSection from '@/components/GetStartedSection';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';
import StatsSection from '@/components/StatsSection';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import ParticipationSection from '@/components/ParticipationSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import SceneDivider from '@/components/SceneDivider';

const Index: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen bg-alien-space-dark/10">
      {/* Cinematic particle system — nebula, warp streaks, depth stars */}
      <CinematicParticles />

      {/* Custom cursor — dot + magnetic ring, desktop only */}
      <CinematicCursor />

      {/* Hero with parallax depth layers */}
      <div className="relative pt-10">
        <Hero />
      </div>

      <SceneDivider label="GET STARTED" />
      <GetStartedSection />

      <SceneDivider label="ACCESS" />
      <FinancialFreedomSection />

      <SceneDivider label="EXPLORE" />
      <ExploreSpacesSection />

      <SceneDivider label="TREASURY" />
      <StatsSection />

      <SceneDivider label="ECOSYSTEM" />
      <EcosystemSection />

      <SceneDivider label="FEATURES" />
      <FeaturesSection />

      <SceneDivider label="PARTICIPATE" />
      <ParticipationSection />

      <SceneDivider />

      <div className="py-12 md:py-16 px-4 af-hairline">
        <div className="max-w-lg mx-auto">
          <NewsletterSubscription />
        </div>
      </div>
    </div>
  );
};

export default Index;
