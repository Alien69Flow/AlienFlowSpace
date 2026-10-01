import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import AlienButton from '@/components/alien/AlienButton';
import AlienTag from '@/components/alien/AlienTag';

const NotFound: React.FC = () => {
  return (
    <div className="relative flex flex-col flex-1">
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-xl">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <AlienTag color="gold">ERROR 404</AlienTag>
            <AlienTag color="muted">LOST IN SPACE</AlienTag>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold text-alien-gold mb-4 font-nasalization af-heading-underline inline-block">404</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 mt-6">Parece que te has perdido en el espacio. Esta dimension no existe en nuestro multiverso.</p>
          <AlienButton variant="primary" to="/" className="!px-8 !py-3 !text-sm">
            <Home className="h-4 w-4" /> Volver al inicio
          </AlienButton>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
