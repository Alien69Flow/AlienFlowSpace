import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import DaoLoader from './components/DaoLoader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DaoLoader />
    <App />
  </React.StrictMode>
);
