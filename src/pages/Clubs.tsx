import React from 'react';

// Revert to a simple, original-style layout while we clarify the redesign
const Clubs: React.FC = () => {
  const clubs = [
    { name: 'Aragon DAO', logo: '/lovable-uploads/AragonDAOLogo.svg' },
    { name: 'Virgo', logo: '/lovable-uploads/VirgoLogo.svg' },
    { name: 'Unity Learn', logo: '/lovable-uploads/UnityLearnLogo.svg' },
    { name: 'Udacity', logo: '/lovable-uploads/UdacityLogo.svg' },
    { name: 'OpenUpEd', logo: '/lovable-uploads/OpenUpEdLogo.jpeg' },
    { name: 'OE Global', logo: '/lovable-uploads/OEGlobalLogo.jpeg' },
    { name: 'UNSSC', logo: '/lovable-uploads/UNSSCLogo.png' },
    { name: 'Skillshare', logo: '/lovable-uploads/SkillShareLogo.jpeg' },
    { name: 'DappRadar', logo: '/lovable-uploads/DappRadarLogo.jpeg' },
    { name: 'CoinMarketCap', logo: '/lovable-uploads/CoinMarketCapLogo.jpeg' },
    { name: 'CoinGecko', logo: '/lovable-uploads/CoinGeckoLogo.svg' },
    { name: 'CoinGlass', logo: '/lovable-uploads/CoinGlassLogo.jpeg' },
    { name: 'Behance', logo: '/lovable-uploads/BehanceLogo.jpeg' },
    { name: 'Upwork', logo: '/lovable-uploads/UpWorkLogo.png' },
    { name: 'WeWork', logo: '/lovable-uploads/WeWorkLogo.png' },
    { name: 'AulaFacil', logo: '/lovable-uploads/AulaFacilLogo.png' },
    { name: 'Grow with Google', logo: '/lovable-uploads/GrowGoogleLogo.png' },
    { name: 'Hotmart', logo: '/lovable-uploads/HotmartLogo.png' },
    { name: 'MasterClass', logo: '/lovable-uploads/MasterClasssLogo.jpeg' },
    { name: 'edX', logo: '/lovable-uploads/edXLogo.png' },
    { name: 'MOOC', logo: '/lovable-uploads/MoocLogo.png' },
  ];
  return (
    <div className="min-h-screen relative">

      <main className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="/lovable-uploads/ClubLogo.png"
            alt="Clubs Official Logo"
            className="mx-auto h-16 w-16 object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold font-nasalization mb-4">Clubs</h1>
          <p className="text-gray-300 font-[Exo] max-w-2xl mx-auto">
            Descubre clubs y partners oficiales de la comunidad AlienFlowSpace.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {clubs.map((club) => (
              <div key={club.name} className="card-border rounded-xl p-4 flex flex-col items-center justify-center bg-transparent">
                <img
                  src={club.logo}
                  alt={`${club.name} club partner logo`}
                  className="h-12 w-auto object-contain mb-3"
                  loading="lazy"
                />
                <h3 className="text-sm text-alien-gold font-semibold text-center">{club.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default Clubs;
