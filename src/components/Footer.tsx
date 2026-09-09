import React from 'react';
import { ScreenPath } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  const handleNav = (path: ScreenPath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0b2b1b] text-[#faf9f5] pt-16 pb-8 selection:bg-[#c5a059] selection:text-[#1a2421] border-t border-[#0f3822]">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#0f3822]/80">
          {/* Column 1: School Profile & Trust */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Greenfield Logo"
                className="w-9 h-9 rounded-full object-cover border border-[#c5a059]/50"
                src={SCHOOL_INFO.crestLogo}
              />
              <div className="flex flex-col">
                <span className="font-['Playfair_Display'] text-[20px] font-semibold text-white tracking-wide">
                  GREENFIELD
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#d4af37] uppercase tracking-wider -mt-1">
                  International School
                </span>
              </div>
            </div>

            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#f0f4f1]/80 max-w-sm leading-relaxed">
              Fostering intellectual excellence, cultural integrity, and moral fortitude under the aegis of CBSE New Delhi. Empowering the youth of Kosi region to lead with wisdom.
            </p>

            <div className="p-4 rounded-xl bg-[#0f3822]/60 border border-[#c5a059]/20 space-y-1.5">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase text-[#c5a059] tracking-widest block">
                Governed By
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">
                {SCHOOL_INFO.trust}
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#f0f4f1]/60">
                Regd. Public Educational Non-Profit Trust • Singheshwar, Bihar
              </p>
            </div>
          </div>

          {/* Column 2: Academics */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
              Academics
            </span>
            <ul className="space-y-2 text-sm text-[#f0f4f1]/80 font-['Plus_Jakarta_Sans']">
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Curriculum & Pedagogy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Pre-Primary Wing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Middle & Senior Secondary
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admissions')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Admission Criteria
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admissions')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Fee Structure 2024-25
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('notices')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Academic Calendar
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CBSE Disclosures */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
              CBSE Disclosures
            </span>
            <ul className="space-y-2 text-sm text-[#f0f4f1]/80 font-['Plus_Jakarta_Sans']">
              <li>
                <button
                  onClick={() => handleNav('cbse-disclosure')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer flex items-center gap-1.5 text-[#d4af37] font-medium"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mandatory Public Disclosure</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about-gis')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  School Managing Committee
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about-gis')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Faculty & Staff Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('campus-facilities')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Campus Safety & NOC Certificates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('campus-facilities')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Infrastructure & Lab Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('notices')}
                  className="hover:text-[#d4af37] transition-colors text-left cursor-pointer"
                >
                  Transfer Certificates (TC)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Administrative Office */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
              Administrative Office
            </span>
            <div className="space-y-2.5 text-sm text-[#f0f4f1]/80 font-['Plus_Jakarta_Sans']">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Campus:</strong> {SCHOOL_INFO.address}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Phone:</strong> {SCHOOL_INFO.phone1} / {SCHOOL_INFO.phone3}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Email:</strong> {SCHOOL_INFO.email}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Office Hours:</strong> {SCHOOL_INFO.timings}
                </span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Get Directions on Map</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#f0f4f1]/60 font-['Plus_Jakarta_Sans']">
          <p>© 2024 Greenfield International School Singheshwar. Managed by Akshar Foundation & Charitable Trust. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('cbse-disclosure')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Affiliation No. {SCHOOL_INFO.affiliationNo}
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
