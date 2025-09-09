import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ExploreSpacesSection from '../components/ExploreSpacesSection';
import FinancialFreedomSection from '../components/FinancialFreedomSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import EcosystemSection from '../components/EcosystemSection';
import ParticipationSection from '../components/ParticipationSection';
import LoadingScreen from '../components/LoadingScreen';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative flex flex-col flex-1">
      {/* Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-alien-space-dark via-alien-space to-alien-space-light"></div>
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-alien-green/5 via-transparent to-alien-gold/5"></div>
      
      {/* Content */}
      <main className="relative z-10 flex-grow">
        <Hero />
        <ExploreSpacesSection />
        <FinancialFreedomSection />
        <FeaturesSection />
        <StatsSection />
        <EcosystemSection />
        <ParticipationSection />
      </main>
    </div>
  );
};

export default Index;