import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Web3Provider from './providers/Web3Provider';
import Layout from './components/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Academy from './pages/Academy';
import AlienTrip from './pages/AlienTrip';
import Clubs from './pages/Clubs';
import CoNetWorKing from './pages/CoNetWorKing';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Web3Provider>
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
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </Web3Provider>
  );
}

export default App;
