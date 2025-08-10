import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppKitProvider } from '@reown/appkit/react'; // Importa correctamente el provider
import { mainnet, arbitrum, polygon } from '@reown/appkit/networks';
import Layout from './components/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Academy from './pages/Academy';
import AlienTrip from './pages/AlienTrip';
import Clubs from './pages/Clubs';
import CoNetWorKing from './pages/CoNetWorKing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';
import './global.css';

function App() {
  return (
    <AppKitProvider
      projectId="ced40e4d52234c471808977208586c7e"
      networks={[mainnet, arbitrum, polygon]}
      metadata={{
        name: 'Alien World',
        description: 'Alien World dApp',
        url: window.location.origin,
        icons: [`${window.location.origin}/lovable-uploads/ALogo.png`]
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="academy" element={<Academy />} />
            <Route path="alien-trip" element={<AlienTrip />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="conetworking" element={<CoNetWorKing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AppKitProvider>
  );
}

export default App;
