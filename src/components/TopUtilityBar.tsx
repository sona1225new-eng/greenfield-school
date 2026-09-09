import React from 'react';
import { ScreenPath } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, Mail, Sparkles } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const TopUtilityBar: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0b2b1b] text-[#faf9f5] px-4 py-1.5 text-xs selection:bg-[#c5a059] selection:text-[#1a2421]">
      <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-1">
        <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[11px] tracking-wider uppercase text-[#d4af37] bg-[#0f3822]/80 px-2 py-0.5 rounded font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
            CBSE Affiliation No. {SCHOOL_INFO.affiliationNo} • School Code {SCHOOL_INFO.schoolCode}
          </span>
          <span className="hidden lg:inline text-[#e1e7e2]/40">|</span>
          <span className="hidden sm:inline font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/80">
            {SCHOOL_INFO.address}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${SCHOOL_INFO.phone1.replace(/\s+/g, '')}`}
            className="hover:text-[#d4af37] transition-colors font-['Plus_Jakarta_Sans'] text-xs font-medium inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#c5a059]" />
            <span>{SCHOOL_INFO.phone1}</span>
          </a>
          <span className="text-[#e1e7e2]/30 hidden md:inline">•</span>
          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            className="hover:text-[#d4af37] transition-colors font-['Plus_Jakarta_Sans'] text-xs font-medium hidden md:inline-flex items-center gap-1"
          >
            <Mail className="w-3 h-3 text-[#c5a059]" />
            <span>{SCHOOL_INFO.email}</span>
          </a>
          <button
            onClick={() => onNavigate('admissions')}
            className="bg-[#c5a059] hover:bg-[#d4af37] text-[#1a2421] px-2.5 py-0.5 rounded text-xs transition-colors font-semibold inline-flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>Admissions 2024-25</span>
          </button>
        </div>
      </div>
    </div>
  );
};
