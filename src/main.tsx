import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home as KairoSecHome } from './pages/Home.tsx';
import App from './App.tsx';
import { KairoClean } from './pages/KairoClean.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kairosec" element={<KairoSecHome />} />
        <Route path="/kairoclean" element={<KairoClean />} />
      </Routes>
    </Router>
  </StrictMode>
);
