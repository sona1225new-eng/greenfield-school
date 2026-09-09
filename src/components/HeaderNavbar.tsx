import React, { useState } from 'react';
import { ScreenPath } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { Menu, X, ArrowRight, UserCheck } from 'lucide-react';

interface Props {
  currentScreen: ScreenPath;
  onNavigate: (path: ScreenPath) => void;
}

export const HeaderNavbar: React.FC<Props> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; path: ScreenPath }[] = [
    { label: 'Home', path: 'home' },
    { label: 'About GIS', path: 'about-gis' },
    { label: 'Academics', path: 'academics' },
    { label: 'Campus & Facilities', path: 'campus-facilities' },
    { label: 'Student Life', path: 'student-life' },
    { label: 'Notices', path: 'notices' },
    { label: 'Gallery', path: 'gallery' },
    { label: 'Contact', path: 'contact' },
  ];

  const handleNav = (path: ScreenPath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-[#faf9f5]/92 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(11,43,27,0.07)] border-b border-[#e1e7e2]/60">
        <div className="h-20 max-w-[80rem] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          {/* Logo Brand */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img
              alt="Greenfield Emblem"
              className="w-10 h-10 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform border border-[#c5a059]/40"
              src={SCHOOL_INFO.crestLogo}
            />
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] text-[22px] font-semibold text-[#0b2b1b] tracking-tight group-hover:text-[#1b5e39] transition-colors">
                GREENFIELD
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#c5a059] uppercase tracking-wider -mt-1">
                International School • Singheshwar
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`text-[14px] transition-all cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#0b2b1b] font-semibold underline decoration-[#c5a059] decoration-2 underline-offset-8'
                      : 'text-[#414942] hover:text-[#0b2b1b] font-medium'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('school-erp')}
              className={`text-[14px] font-semibold px-3 py-2 transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                currentScreen === 'school-erp'
                  ? 'text-[#1b5e39] underline decoration-[#c5a059] underline-offset-4'
                  : 'text-[#0b2b1b] hover:text-[#1b5e39]'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[#c5a059]" />
              <span>School ERP</span>
            </button>
            <button
              onClick={() => handleNav('admissions')}
              className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg shadow-[0_2px_10px_rgba(15,56,34,0.18)] hover:shadow-lg transition-all transform active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Admission Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

          {/* Mobile Drawer Hamburger Button */}
          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0b2b1b] hover:bg-[#f0f4f1] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf9f5] border-b border-[#e1e7e2] shadow-2xl max-h-[calc(100vh-7rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-6 space-y-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentScreen === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNav(link.path)}
                    className={`px-4 py-2.5 text-left rounded-lg text-[15px] cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[#f0f4f1] text-[#0b2b1b] font-semibold border-l-4 border-[#c5a059]'
                        : 'text-[#414942] hover:bg-[#f4f4f0] hover:text-[#1b1c1a]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNav('cbse-disclosure')}
                className={`px-4 py-2.5 text-left rounded-lg text-[15px] cursor-pointer transition-colors ${
                  currentScreen === 'cbse-disclosure'
                    ? 'bg-[#f0f4f1] text-[#0b2b1b] font-semibold border-l-4 border-[#c5a059]'
                    : 'text-[#414942] hover:bg-[#f4f4f0] hover:text-[#1b1c1a]'
                }`}
              >
                CBSE Mandatory Public Disclosure
              </button>
            </nav>

            <div className="pt-4 space-y-2 border-t border-[#e1e7e2]">
              <button
                onClick={() => handleNav('admissions')}
                className="w-full text-center bg-[#0f3822] hover:bg-[#0b2b1b] text-white text-[14px] font-semibold py-3 rounded-lg shadow-sm cursor-pointer"
              >
                Admission Enquiry 2024-25
              </button>
              <button
                onClick={() => handleNav('school-erp')}
                className="w-full text-center bg-[#e9e8e4] hover:bg-[#e3e2df] text-[#1b1c1a] text-[14px] font-semibold py-3 rounded-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-[#0f3822]" />
                <span>School ERP Login</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
