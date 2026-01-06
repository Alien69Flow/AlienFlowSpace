import React, { Suspense, lazy } from 'react';
import StarBackground from '@/components/StarBackground';
import LoadingScreen from '@/components/LoadingScreen';
import PromoBanner from '@/components/PromoBanner';

// Lazy loading de secciones
const Hero = lazy(() => import('@/components/Hero'));
const ExploreSpacesSection = lazy(() => import('@/components/ExploreSpacesSection'));
const EcosystemSection = lazy(() => import('@/components/EcosystemSection'));
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const FinancialFreedomSection = lazy(() => import('@/components/FinancialFreedomSection'));
const ParticipationSection = lazy(() => import('@/components/ParticipationSection'));
const NFTGallery = lazy(() => import('@/components/NFTGallery'));
const NewsletterSubscription = lazy(() => import('@/components/NewsletterSubscription'));

const Index: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen bg-alien-space-dark/10">
      {/* Promo Banner */}
      <PromoBanner 
        message="🚀 Join the AlienFlowSpace DAO and get exclusive NFTs & benefits!"
        link="/conetworking"
        linkText="Join Now"
      />

      {/* Hero con efecto Star Wars + estrellas */}
      <div className="relative pt-10">
        <div className="absolute inset-0 -z-10">
          <StarBackground />
        </div>
        <Suspense fallback={<LoadingScreen />}>
          <Hero />
        </Suspense>
      </div>

      {/* Secciones con lazy loading */}
      <Suspense fallback={<LoadingScreen />}>
        <FinancialFreedomSection />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <ExploreSpacesSection />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <EcosystemSection />
      </Suspense>

      {/* NFT Gallery Section */}
      <Suspense fallback={<LoadingScreen />}>
        <NFTGallery />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<LoadingScreen />}>
        <div className="section-center">
          <ParticipationSection />
        </div>
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<LoadingScreen />}>
        <div className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <NewsletterSubscription />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
