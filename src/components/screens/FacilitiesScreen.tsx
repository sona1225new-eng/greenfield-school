import React from 'react';
import { ScreenPath } from '../../types';
import { FACILITIES, HOTLINKED_IMAGES, SCHOOL_INFO } from '../../data/schoolData';
import {
  Building2,
  ShieldCheck,
  Bus,
  CheckCircle2,
  Microscope,
  Trophy,
  BookOpen,
  Monitor,
  HeartPulse,
  Droplet,
  Flame,
  Camera,
} from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const FacilitiesScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>State-of-the-Art Infrastructure</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            Campus & World-Class Facilities
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            Spanning over 10 acres in Singheshwar, Greenfield International School combines natural tranquility with contemporary collegiate engineering to nurture both body and intellect.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Flagship Facilities Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Science Lab */}
          <div className="bg-[#f0f4f1] rounded-2xl overflow-hidden border border-[#e1e7e2] shadow-sm flex flex-col justify-between">
            <div className="h-72 overflow-hidden relative">
              <img
                src={HOTLINKED_IMAGES.scienceLab}
                alt="Science Lab"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-[#0b2b1b]/85 text-[#d4af37] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider border border-[#c5a059]/30">
                Composite Science Labs
              </span>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3822]">
                <Microscope className="w-6 h-6 text-[#c5a059]" />
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
                  Physics, Chemistry & Biology Workbenches
                </h3>
              </div>
              <p className="text-sm text-[#2c3e37] leading-relaxed">
                CBSE senior secondary grade laboratories fitted with digital calorimeters, compound microscopes, precision balances, and chemical safety hoods. Supervised by qualified lab demonstrators.
              </p>
              <div className="pt-2 border-t border-[#e1e7e2] text-xs text-[#5c6b64] flex items-center justify-between">
                <span>Total Lab Area: 3,000+ sq ft</span>
                <span className="font-semibold text-[#0f3822]">CBSE Compliant</span>
              </div>
            </div>
          </div>

          {/* Sports Grounds */}
          <div className="bg-[#f0f4f1] rounded-2xl overflow-hidden border border-[#e1e7e2] shadow-sm flex flex-col justify-between">
            <div className="h-72 overflow-hidden relative">
              <img
                src={HOTLINKED_IMAGES.sportsGround}
                alt="Sports Arena"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-[#0b2b1b]/85 text-[#d4af37] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider border border-[#c5a059]/30">
                10-Acre Athletic Arena
              </span>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-[#0f3822]">
                <Trophy className="w-6 h-6 text-[#c5a059]" />
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
                  Turf Football Grounds & Cricket Pitches
                </h3>
              </div>
              <p className="text-sm text-[#2c3e37] leading-relaxed">
                Professional-grade natural turf football grounds, dedicated cricket practice nets, concrete badminton courts, and 200m running tracks coached by national fitness instructors.
              </p>
              <div className="pt-2 border-t border-[#e1e7e2] text-xs text-[#5c6b64] flex items-center justify-between">
                <span>Sports: Football, Cricket, Badminton, Athletics</span>
                <span className="font-semibold text-[#0f3822]">NIS Coaches</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Facilities 3-Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#faf9f5] border border-[#e1e7e2] shadow-sm space-y-4">
            <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
              Central Knowledge Library
            </h3>
            <p className="text-sm text-[#2c3e37] leading-relaxed">
              Quiet study sanctuary holding 10,000+ volumes spanning world literature, encyclopedias, NCERT reference guides, and leading science periodicals with computer catalog search.
            </p>
            <span className="text-xs font-bold text-[#c5a059] uppercase block pt-2">
              10,000+ Volumes • Reading Lounges
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-[#faf9f5] border border-[#e1e7e2] shadow-sm space-y-4">
            <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
              Digital Smart Classrooms
            </h3>
            <p className="text-sm text-[#2c3e37] leading-relaxed">
              Every teaching space features high-resolution interactive touch displays equipped with digital lesson modules, interactive 3D simulations, and audio systems.
            </p>
            <span className="text-xs font-bold text-[#c5a059] uppercase block pt-2">
              100% Interactive Digital Pedagogy
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-[#faf9f5] border border-[#e1e7e2] shadow-sm space-y-4">
            <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
              <Bus className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
              GPS-Tracked Bus Network
            </h3>
            <p className="text-sm text-[#2c3e37] leading-relaxed">
              Safe school buses covering key commuter routes across Singheshwar, Shankarpur, and Madhepura town with verified drivers, first-aid, and female conductors.
            </p>
            <span className="text-xs font-bold text-[#c5a059] uppercase block pt-2">
              12 GPS-Monitored Routes
            </span>
          </div>
        </div>

        {/* Safety, Water, Health Banner */}
        <div className="p-8 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
              Safety & Hygiene Protocols
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
              Ensuring Health, Purity, and Physical Security
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#faf9f5] border border-[#e1e7e2] space-y-2">
              <Droplet className="w-5 h-5 text-[#0f3822]" />
              <h4 className="font-semibold text-sm text-[#0b2b1b]">RO Potable Water</h4>
              <p className="text-xs text-[#5c6b64]">Commercial RO water purification plants tested periodically by state PHED laboratories.</p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf9f5] border border-[#e1e7e2] space-y-2">
              <Camera className="w-5 h-5 text-[#0f3822]" />
              <h4 className="font-semibold text-sm text-[#0b2b1b]">64+ CCTV Cameras</h4>
              <p className="text-xs text-[#5c6b64]">Continuous surveillance monitoring all gates, assembly areas, corridors, and staircases.</p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf9f5] border border-[#e1e7e2] space-y-2">
              <HeartPulse className="w-5 h-5 text-[#0f3822]" />
              <h4 className="font-semibold text-sm text-[#0b2b1b]">Medical Infirmary</h4>
              <p className="text-xs text-[#5c6b64]">Dedicated recovery room with first-aid essentials and tie-up with Singheshwar PHC.</p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf9f5] border border-[#e1e7e2] space-y-2">
              <Flame className="w-5 h-5 text-[#0f3822]" />
              <h4 className="font-semibold text-sm text-[#0b2b1b]">Certified Fire Safety</h4>
              <p className="text-xs text-[#5c6b64]">Equipped with fire extinguishers, hydrants, and regular emergency evacuation drills.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
