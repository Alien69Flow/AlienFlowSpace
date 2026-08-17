import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import DaoLoader from './components/DaoLoader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DaoLoader />
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
