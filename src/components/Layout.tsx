
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StarBackground from './StarBackground';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      {/* Fixed background image - positioned behind everything */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/EMWBack.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          zIndex: -30
        }}
      />
      
      {/* Star background effect - also behind content */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -20 }}>
        <StarBackground />
      </div>

      <Header />
      <main className="flex-1 relative z-10 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
