import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import DaoLoader from './components/DaoLoader';

const container = document.getElementById('root');

if (container) {
  // index.html ships a static fallback (real headings and copy) so the page is
  // readable — and crawlable — before JavaScript runs. Drop it here, before the
  // first render, so the fallback and the app never coexist: one <h1>, not two.
  container.replaceChildren();

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <DaoLoader />
      <App />
    </React.StrictMode>
  );
}
