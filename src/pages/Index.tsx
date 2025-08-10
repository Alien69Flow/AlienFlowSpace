
import React from 'react';

import Hero from '@/components/Hero';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ParticipationSection from '@/components/ParticipationSection';

const Index: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <Hero />
      <FinancialFreedomSection />
      <ExploreSpacesSection />
      <EcosystemSection />
      <FeaturesSection />
      <div className="section-center">
        <ParticipationSection />
      </div>
    </div>
  );
};

export default Index;
