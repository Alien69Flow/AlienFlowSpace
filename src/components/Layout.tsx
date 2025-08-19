import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StarBackground from './StarBackground';

const Layout: React.FC = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const bgMap: Record<string, string> = {
    '/': "/lovable-uploads/EMWBack.png",
    '/about': "/lovable-uploads/AboutBG.png",
    '/alien-trip': "/lovable-uploads/BGRCM.png",
    '/contact': "/lovable-uploads/BGVL.png",
    '/academy': "/lovable-uploads/AcademyBG.png",
    '/clubs': "/lovable-uploads/ClubsBG.png",
    '/conetworking': "/lovable-uploads/CoNetWorKingBG.png",
  };
  const bgImage = bgMap[location.pathname] || "/lovable-uploads/EMWBack.png";

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Star background effect - also behind content */}
      <div 
        className="fixed inset-0 -z-30 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
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
