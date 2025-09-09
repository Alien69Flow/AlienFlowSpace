import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StarBackground from '@/components/StarBackground';
import LoadingLogo from '@/components/LoadingLogo';

// Lazy loading de secciones
const Hero = lazy(() => import('@/components/Hero'));
const ExploreSpacesSection = lazy(() => import('@/components/ExploreSpacesSection'));
const EcosystemSection = lazy(() => import('@/components/EcosystemSection'));
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const FinancialFreedomSection = lazy(() => import('@/components/FinancialFreedomSection'));
const ParticipationSection = lazy(() => import('@/components/ParticipationSection'));

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingLogo />;
  }

  return (
    <div className="relative z-10 min-h-screen">
      {/* Hero con efecto Star Wars + estrellas */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <StarBackground />
        </div>
        <Suspense fallback={
          <div className="h-[80vh] flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <motion.img
                src="/lovable-uploads/ALogo.png"
                alt="Loading"
                className="h-8 w-8 logo-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-alien-gold font-[Exo]">Loading Hero...</span>
            </div>
          </div>
        }>
          <Hero />
        </Suspense>
      </div>

      {/* Secciones con lazy loading */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading section...</div>}>
        <FinancialFreedomSection />
      </Suspense>

      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading section...</div>}>
        <ExploreSpacesSection />
      </Suspense>

      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading section...</div>}>
        <EcosystemSection />
      </Suspense>

      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading section...</div>}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading section...</div>}>
        <div className="section-center">
          <ParticipationSection />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
