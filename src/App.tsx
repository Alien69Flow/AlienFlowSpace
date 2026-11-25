import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout';
import './index.css';

const Web3Provider = lazy(() => import('./providers/Web3Provider'));
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Academy = lazy(() => import('./pages/Academy'));
const AlienTrip = lazy(() => import('./pages/AlienTrip'));
const Clubs = lazy(() => import('./pages/Clubs'));
const CoNetWorKing = lazy(() => import('./pages/CoNetWorKing'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={null}>
      <Web3Provider>
        <LanguageProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Suspense fallback={null}><Index /></Suspense>} />
                <Route path="about" element={<Suspense fallback={null}><About /></Suspense>} />
                <Route path="academy" element={<Suspense fallback={null}><Academy /></Suspense>} />
                <Route path="alien-trip" element={<Suspense fallback={null}><AlienTrip /></Suspense>} />
                <Route path="clubs" element={<Suspense fallback={null}><Clubs /></Suspense>} />
                <Route path="conetworking" element={<Suspense fallback={null}><CoNetWorKing /></Suspense>} />
                <Route path="contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
                <Route path="privacy-policy" element={<Suspense fallback={null}><PrivacyPolicy /></Suspense>} />
                <Route path="terms-of-service" element={<Suspense fallback={null}><TermsOfService /></Suspense>} />
              </Route>
              <Route path="/en" element={<Navigate to="/" replace />} />
              <Route path="/en/*" element={<LangRoutes />} />
              <Route path="/es/*" element={<LangRoutes />} />
              <Route path="/pt/*" element={<LangRoutes />} />
              <Route path="/fr/*" element={<LangRoutes />} />
              <Route path="/zh/*" element={<LangRoutes />} />
              <Route path="/hi/*" element={<LangRoutes />} />
              <Route path="/ja/*" element={<LangRoutes />} />
              <Route path="*" element={<Layout />}>
                <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
              </Route>
            </Routes>
          </Router>
        </LanguageProvider>
      </Web3Provider>
    </Suspense>
  );
}

function LangRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense fallback={null}><Index /></Suspense>} />
        <Route path="about" element={<Suspense fallback={null}><About /></Suspense>} />
        <Route path="academy" element={<Suspense fallback={null}><Academy /></Suspense>} />
        <Route path="alien-trip" element={<Suspense fallback={null}><AlienTrip /></Suspense>} />
        <Route path="clubs" element={<Suspense fallback={null}><Clubs /></Suspense>} />
        <Route path="conetworking" element={<Suspense fallback={null}><CoNetWorKing /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
        <Route path="privacy-policy" element={<Suspense fallback={null}><PrivacyPolicy /></Suspense>} />
        <Route path="terms-of-service" element={<Suspense fallback={null}><TermsOfService /></Suspense>} />
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
