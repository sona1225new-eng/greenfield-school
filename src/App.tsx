import React, { useState, useEffect } from 'react';
import { ScreenPath } from './types';
import { TopUtilityBar } from './components/TopUtilityBar';
import { HeaderNavbar } from './components/HeaderNavbar';
import { Footer } from './components/Footer';

// Screens
import { HomeScreen } from './components/screens/HomeScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { AcademicsScreen } from './components/screens/AcademicsScreen';
import { FacilitiesScreen } from './components/screens/FacilitiesScreen';
import { StudentLifeScreen } from './components/screens/StudentLifeScreen';
import { NoticesScreen } from './components/screens/NoticesScreen';
import { GalleryScreen } from './components/screens/GalleryScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { AdmissionsScreen } from './components/screens/AdmissionsScreen';
import { SchoolERPScreen } from './components/screens/SchoolERPScreen';
import { CBSEDisclosureScreen } from './components/screens/CBSEDisclosureScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenPath>('home');

  const handleNavigate = (path: ScreenPath) => {
    setCurrentScreen(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize browser history / URL hash if user presses back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ScreenPath;
      if (
        [
          'home',
          'about-gis',
          'academics',
          'campus-facilities',
          'student-life',
          'notices',
          'gallery',
          'contact',
          'admissions',
          'school-erp',
          'cbse-disclosure',
        ].includes(hash)
      ) {
        setCurrentScreen(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={handleNavigate} />;
      case 'about-gis':
        return <AboutScreen onNavigate={handleNavigate} />;
      case 'academics':
        return <AcademicsScreen onNavigate={handleNavigate} />;
      case 'campus-facilities':
        return <FacilitiesScreen onNavigate={handleNavigate} />;
      case 'student-life':
        return <StudentLifeScreen onNavigate={handleNavigate} />;
      case 'notices':
        return <NoticesScreen onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryScreen onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactScreen onNavigate={handleNavigate} />;
      case 'admissions':
        return <AdmissionsScreen onNavigate={handleNavigate} />;
      case 'school-erp':
        return <SchoolERPScreen onNavigate={handleNavigate} />;
      case 'cbse-disclosure':
        return <CBSEDisclosureScreen onNavigate={handleNavigate} />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#1a2421] selection:bg-[#0f3822] selection:text-white font-['Plus_Jakarta_Sans'] antialiased">
      {/* Top Utility Affiliation Bar */}
      <TopUtilityBar onNavigate={handleNavigate} />

      {/* Main Sticky Navigation */}
      <HeaderNavbar currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Dynamic Screen Content */}
      <main className="flex-grow">
        {renderActiveScreen()}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Quick Action for Admissions (if not already on admissions screen) */}
      {currentScreen !== 'admissions' && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => handleNavigate('admissions')}
            className="flex items-center gap-2 bg-[#0f3822] hover:bg-[#0b2b1b] text-[#d4af37] px-4 py-3 rounded-full shadow-2xl border border-[#c5a059]/40 text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-white">Admissions 2024-25 Open</span>
          </button>
        </div>
      )}
    </div>
  );
}
