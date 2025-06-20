import './i18n';
import React, { Suspense, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Hero } from './components/sections/Hero/Hero';
const About = React.lazy(() => import('./components/sections/About/About'));

import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { CtaBanner } from './components/sections/CtaBanner/CtaBanner';
import { Contact } from './components/sections/Contact/Contact';

import HomePage from './pages/HomePage';
const VerifyEmail = React.lazy(() => import('./components/auth/VerifyEmail'));

export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', i18n.language === 'ar');
  }, [i18n.language]);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />

                    {/* Custom services section with interactions */}
                    <HomePage />

                    <Testimonials />
                    <CtaBanner />
                    <Contact />
                  </>
                } />
                <Route path="/verify" element={<VerifyEmail />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
