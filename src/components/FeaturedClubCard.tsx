import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';
import AlienButton from '@/components/alien/AlienButton';
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
    return (
      <div className="border border-af-border bg-af-surface/20 hover:bg-af-surface/40 transition-colors p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 border border-af-border">{club.icon}</div>
          <AlienTag color="muted">{club.category}</AlienTag>
        </div>
        <h3 className="text-xl font-bold text-alien-gold mb-3 font-nasalization">{club.name}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{club.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-alien-green" />
            <span className="text-sm text-alien-green font-nasalization">{club.members.toLocaleString()} members</span>
          </div>
          <AlienButton variant="outline" className="!text-xs">Join Club</AlienButton>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-af-border bg-af-surface/20 hover:bg-af-surface/30 transition-colors p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6 pb-6 border-b border-af-border-hairline">
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="p-3 border border-af-border flex-shrink-0">{club.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl lg:text-2xl font-bold font-nasalization text-alien-green">{club.name}</h3>
              <AlienTag color="muted">{club.category}</AlienTag>
            </div>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{club.description}</p>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-3 lg:items-end flex-shrink-0">
          <div className="flex items-center gap-2 border border-af-border-hairline px-3 py-1.5">
            <Users className="h-4 w-4 text-alien-green" />
            <span className="text-sm text-alien-green font-nasalization whitespace-nowrap">{club.members.toLocaleString()}</span>
          </div>
          <AlienButton variant="outline" className="!text-xs whitespace-nowrap">Join Club</AlienButton>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {club.sections.map((section, index) => (
          <div key={index} className="border border-af-border-hairline bg-af-surface/10 p-5 hover:border-af-border transition-colors">
            <div className="flex items-center text-alien-gold text-sm font-nasalization mb-2">
              {section.icon}
              <span className="ml-2">{section.title}</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">{section.description}</p>

            {club.name === 'Δ EcoFlow' && section.title === 'Eco Products Catalog' ? (
              <div className="mt-4"><EcoProductCarousel /></div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-af-border-hairline">
                {section.platforms.sort((a, b) => a.name.localeCompare(b.name)).map((platform, pIndex) => (
                  <div
                    key={pIndex}
                    onClick={() => platform.url && window.open(platform.url, '_blank')}
                    className={`border-r border-b border-af-border-hairline p-4 hover:bg-alien-green/5 transition-colors cursor-pointer ${!platform.url && 'opacity-40 cursor-not-allowed'}`}
                  >
                    <div className="w-10 h-10 mb-3 flex items-center justify-center border border-af-border-hairline overflow-hidden">
                      {platform.icon ? (
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="w-7 h-7 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <ExternalLink className={`h-5 w-5 text-alien-gold/50 ${platform.icon ? 'hidden' : ''}`} />
                    </div>
                    <h4 className="text-alien-gold font-semibold text-sm mb-1 line-clamp-1">{platform.name}</h4>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {platform.description || 'Crypto platform partner'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedClubCard;
