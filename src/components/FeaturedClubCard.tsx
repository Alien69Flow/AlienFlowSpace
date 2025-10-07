import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Users, Gamepad2, Leaf, DollarSign, Music, Shield, Zap } from 'lucide-react';
import EcoProductCarousel from '@/components/EcoProductCarousel';

interface PlatformLink {
  name: string;
  url?: string;
  icon?: string;
  description?: string;
}

interface ClubSection {
  title: string;
  description: string;
  platforms: PlatformLink[];
  color: string;
  icon: React.ReactNode;
}

interface FeaturedClubProps {
  name: string;
  description: string;
  members: number;
  icon: React.ReactNode;
  category: string;
  categoryColor: string;
  bgColor: string;
  sections?: ClubSection[];
}

const FeaturedClubCard = ({ club }: { club: FeaturedClubProps }) => {
  if (!club.sections) {
    // Render simple card for clubs without sections
    return (
      <div
        className={`${club.bgColor} p-6 rounded-xl backdrop-blur-md overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-alien-gold/20 hover:border-alien-gold/40`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alien-space-dark/60 to-alien-space-dark/90 z-0"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="p-4 bg-alien-space-dark/80 rounded-xl backdrop-blur-md border border-alien-gold/30 group-hover:border-alien-gold/50 transition-all duration-300">
              {club.icon}
            </div>
            <span
              className={`px-3 py-1 text-xs ${club.categoryColor} rounded-full font-medium backdrop-blur-sm`}
            >
              {club.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-alien-gold mb-3 font-nasalization group-hover:text-alien-gold-light transition-colors">
            {club.name}
          </h3>
          <p className="text-gray-200 mb-6 text-sm font-[Exo] leading-relaxed">
            {club.description}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center bg-alien-space-dark/60 px-3 py-2 rounded-full backdrop-blur-sm">
              <Users className="h-4 w-4 text-alien-green mr-2" />
              <span className="text-sm text-alien-green font-medium">
                {club.members.toLocaleString()} members
              </span>
            </div>
            <Button
              variant="outline"
              className="border-alien-gold/50 text-alien-gold hover:bg-alien-gold/20 hover:border-alien-gold text-sm px-4 py-2 h-auto font-[Exo] font-medium backdrop-blur-sm"
            >
              Join Club
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Render advanced card with sections
  return (
    <div className={`${club.bgColor} p-6 rounded-xl backdrop-blur-md overflow-hidden relative group transition-all duration-300 border border-alien-gold/20 hover:border-alien-gold/40`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-alien-space-dark/60 to-alien-space-dark/90 z-0"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left sidebar with icon, meta and actions */}
          <aside className="w-full lg:w-72 lg:min-w-[18rem] bg-alien-space-dark/60 border border-alien-gold/20 rounded-lg p-5 backdrop-blur-sm flex flex-col justify-between">{/* ... keep existing code (sidebar content) ... */}
            <div>
              <div className="flex items-start justify-between lg:flex-col lg:items-start gap-3">
                <div className="p-3 lg:p-4 bg-alien-space-dark/80 rounded-xl border border-alien-gold/30 group-hover:border-alien-gold/50 transition-all duration-300 inline-block">
                  {club.icon}
                </div>
                <span className={`px-3 py-1 text-xs ${club.categoryColor} rounded-full font-medium backdrop-blur-sm h-fit`}>
                  {club.category}
                </span>
              </div>
              <h3 className="mt-4 text-lg lg:text-xl font-bold text-alien-gold font-nasalization group-hover:text-alien-gold-light transition-colors">
                {club.name}
              </h3>
              <p className="text-gray-200 mt-2 text-xs lg:text-sm font-[Exo] leading-relaxed">
                {club.description}
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center bg-alien-space-dark/60 px-3 py-2 rounded-full backdrop-blur-sm">
                <Users className="h-4 w-4 text-alien-green mr-2" />
                <span className="text-sm text-alien-green font-medium">
                  {club.members.toLocaleString()} members
                </span>
              </div>
              <Button
                variant="outline"
                className="w-full border-alien-gold/50 text-alien-gold hover:bg-alien-gold/20 hover:border-alien-gold text-sm px-4 py-2 h-auto font-[Exo] font-medium backdrop-blur-sm"
              >
                Join Club
              </Button>
            </div>
          </aside>

          {/* Right content with sections */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 gap-4">
              {club.sections.map((section, index) => (
                <div key={index} className="bg-alien-space-dark/60 border border-alien-gold/20 backdrop-blur-sm rounded-lg p-5">{/* ... keep existing code (section content) ... */}
                  <div className="flex items-center text-alien-gold text-sm font-nasalization mb-3">
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </div>
                  <p className="text-sm text-gray-300 font-[Exo] mb-4">{section.description}</p>

                  {/* Special handling for EcoFlow product carousel */}
                  {club.name === 'Δ EcoFlow' && section.title === 'Eco Products Catalog' ? (
                    <div className="mt-4">
                      <EcoProductCarousel />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                      {section.platforms.sort((a, b) => a.name.localeCompare(b.name)).map((platform, pIndex) => (
                        <Button
                          key={pIndex}
                          variant="ghost"
                          size="sm"
                          className={`${section.color} text-white hover:bg-white/20 text-xs h-auto py-2 justify-start font-[Exo] w-full`}
                          onClick={() => platform.url && window.open(platform.url, '_blank')}
                          disabled={!platform.url}
                        >
                          {platform.icon && <img src={platform.icon} alt={platform.name} className="h-4 w-4 mr-2 flex-shrink-0 rounded" />}
                          {!platform.icon && <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />}
                          <span className="truncate text-left">{platform.name}</span>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClubCard;