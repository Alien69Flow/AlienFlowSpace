import React from 'react';
import StarBackground from '@/components/StarBackground';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ParticipationSection from '@/components/ParticipationSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const Index: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen bg-alien-space-dark/10">
      {/* Hero con estrellas */}
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
      
      <div className="section-center">
        <ParticipationSection />
      </div>

      <div className="py-16 px-4">
        <div className="max-w-lg mx-auto">
          <NewsletterSubscription />
        </div>
      </div>
    </div>
  );
};

export default Index;

