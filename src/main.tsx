import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import App from './App.tsx';
import { KairoClean } from './pages/KairoClean.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kairosec" element={<App />} />
        <Route path="/kairoclean" element={<KairoClean />} />
      </Routes>
    </Router>
  </StrictMode>
);
