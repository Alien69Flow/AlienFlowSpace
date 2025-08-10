import React from 'react';

// Revert to a simple, original-style layout while we clarify the redesign
const Clubs: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space relative">

      <main className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="/lovable-uploads/ClubLogo.png"
            alt="Clubs Official Logo"
            className="mx-auto h-16 w-16 object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold font-nasalization mb-4">Clubs</h1>
          <p className="text-gray-300 font-[Exo] max-w-2xl mx-auto">
            Explore official community clubs and partners. We are restoring the previous version as requested while we align on the new UX/UI.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-alien-space-dark/70 border border-alien-gold/20 rounded-xl p-6 text-left">
                <div className="h-10 w-10 rounded-lg bg-alien-gold/15 border border-alien-gold/30 mb-4" />
                <h3 className="text-alien-gold font-semibold mb-2">Club {i}</h3>
                <p className="text-sm text-gray-300">Restored card placeholder. We will plug back the original content you had.</p>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default Clubs;
