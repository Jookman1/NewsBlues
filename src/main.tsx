import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home as KairoSecHome } from './pages/Home.tsx';
import App from './App.tsx';
import KairoClean from './pages/KairoClean.tsx';
import AdminLogin from './pages/AdminLogin.tsx';
import Dashboard from './pages/Dashboard.tsx';
import './index.css';

function BrandProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const isCleanPage = location.pathname.includes('clean');
    const html = document.documentElement;

    if (isCleanPage) {
      html.setAttribute('data-brand', 'kairoclean');
    } else {
      html.removeAttribute('data-brand');
    }
  }, [location.pathname]);

  return children;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <BrandProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/kairosec" element={<KairoSecHome />} />
          <Route path="/kairoclean" element={<KairoClean />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrandProvider>
    </Router>
  </StrictMode>
);
