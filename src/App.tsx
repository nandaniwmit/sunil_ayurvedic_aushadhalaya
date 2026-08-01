import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './layouts/MainLayout';

// Lazy loading pages as requested
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3 text-emerald-600">
    <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
      Loading Sunil Ayurvedic Aushdhalaya...
    </span>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                {/* Fallback route to Home */}
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
