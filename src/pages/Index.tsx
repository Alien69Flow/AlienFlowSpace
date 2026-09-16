import React from 'react';
import StarBackground from '@/components/StarBackground';
import Hero from '@/components/Hero';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';
import StatsSection from '@/components/StatsSection';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import ParticipationSection from '@/components/ParticipationSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const Index: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen bg-alien-space-dark/10">
      {/* Hero with starfield */}
      <div className="relative pt-10">
        <div className="absolute inset-0 -z-10">
          <StarBackground />
        </div>
        <Hero />
      </div>

      <FinancialFreedomSection />
      <ExploreSpacesSection />
      <StatsSection />
      <EcosystemSection />
      <FeaturesSection />
      <ParticipationSection />

      <div className="py-12 md:py-16 px-4 af-hairline">
        <div className="max-w-lg mx-auto">
          <NewsletterSubscription />
        </div>
      </div>
    </div>
  );
};

export default Index;
