import React from 'react';
import { ScreenPath } from '../../types';
import { HOTLINKED_IMAGES } from '../../data/schoolData';
import { Trophy, Flame, Wind, Globe, Sun, Palette, Sparkles, Users, Award, Calendar } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const StudentLifeScreen: React.FC<Props> = ({ onNavigate }) => {
  const houses = [
    {
      name: 'Agni House',
      element: 'Courage & Zeal',
      color: 'from-rose-600 to-red-800',
      badgeBg: 'bg-red-100 text-red-800 border-red-200',
      points: '1,420 Pts',
      icon: Flame,
      motto: 'Born to Excel with Passion',
    },
    {
      name: 'Vayu House',
      element: 'Freedom & Intellect',
      color: 'from-sky-600 to-blue-800',
      badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
      points: '1,385 Pts',
      icon: Wind,
      motto: 'Swift in Action, Noble in Thought',
    },
    {
      name: 'Prithvi House',
      element: 'Resilience & Service',
      color: 'from-emerald-600 to-green-800',
      badgeBg: 'bg-green-100 text-green-800 border-green-200',
      points: '1,490 Pts',
      icon: Globe,
      motto: 'Rooted in Integrity, Branching to the Sky',
    },
    {
      name: 'Surya House',
      element: 'Wisdom & Radiance',
      color: 'from-amber-500 to-yellow-700',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
      points: '1,455 Pts',
      icon: Sun,
      motto: 'Illuminating Minds with Knowledge',
    },
  ];

  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vibrant Campus Community</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            Student Life & Co-Curriculars
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            Education transcends the boundary of textbooks. At Greenfield, our students explore their creative, athletic, and leadership capacities through house contests, clubs, and celebratory gatherings.
          </p>
        </div>
      </section>

      {/* House System */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e1e7e2] pb-6">
          <div>
            <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
              Esprit de Corps
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl font-semibold text-[#0b2b1b]">
              The Four Houses System
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#5c6b64] max-w-md">
            Instilling camaraderie, healthy competitive spirit, and collaborative teamwork from primary years onward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house) => {
            const Icon = house.icon;
            return (
              <div
                key={house.name}
                className="bg-[#f0f4f1] rounded-2xl p-6 border border-[#e1e7e2] shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${house.color} text-white flex items-center justify-center shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
                      {house.name}
                    </h3>
                    <p className="text-xs text-[#5c6b64] font-medium mt-0.5">{house.element}</p>
                  </div>
                  <p className="text-xs text-[#2c3e37] italic">"{house.motto}"</p>
                </div>

                <div className="pt-4 border-t border-[#e1e7e2] flex items-center justify-between">
                  <span className="text-xs text-[#5c6b64]">Annual Cup Tally:</span>
                  <span className="text-xs font-bold text-[#0f3822] bg-[#faf9f5] px-2.5 py-1 rounded-full border border-[#e1e7e2]">
                    {house.points}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Student Life Photo Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="bg-[#faf9f5] rounded-2xl overflow-hidden border border-[#e1e7e2] shadow-sm">
            <div className="h-60 overflow-hidden">
              <img
                src={HOTLINKED_IMAGES.athleticsMeet}
                alt="Track events"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] font-bold uppercase text-[#c5a059] tracking-wider">
                Athletics & Games
              </span>
              <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                Inter-House Sports Championship
              </h4>
              <p className="text-xs text-[#2c3e37] leading-relaxed">
                Track sprints, long jump, football matches, and cricket tournaments where students learn sportsmanship, endurance, and grace.
              </p>
            </div>
          </div>

          <div className="bg-[#faf9f5] rounded-2xl overflow-hidden border border-[#e1e7e2] shadow-sm">
            <div className="h-60 overflow-hidden">
              <img
                src={HOTLINKED_IMAGES.culturalFest}
                alt="Cultural Fest"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] font-bold uppercase text-[#c5a059] tracking-wider">
                Cultural Vibrancy
              </span>
              <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                Tarang Annual Cultural Carnival
              </h4>
              <p className="text-xs text-[#2c3e37] leading-relaxed">
                Showcasing vocal choirs, classical Kathak & folk performances, dramatic stage plays, and bilingual recitation before thousands of cheering parents.
              </p>
            </div>
          </div>

          <div className="bg-[#faf9f5] rounded-2xl overflow-hidden border border-[#e1e7e2] shadow-sm">
            <div className="h-60 overflow-hidden">
              <img
                src={HOTLINKED_IMAGES.scienceExhibition}
                alt="Science Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-[11px] font-bold uppercase text-[#c5a059] tracking-wider">
                Innovation & STEM
              </span>
              <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                Kosi Regional Science Fair
              </h4>
              <p className="text-xs text-[#2c3e37] leading-relaxed">
                Young inventors demonstrate working models on solar purification, automatic rain harvesting, and simple robotics mechanisms.
              </p>
            </div>
          </div>
        </div>

        {/* Daily Routine / School Schedule */}
        <div className="p-8 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
              Structured Day
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
              A Typical Day at Greenfield
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#faf9f5] p-5 rounded-xl border border-[#e1e7e2] space-y-1">
              <span className="text-xs font-bold text-[#0f3822]">08:00 AM – 08:30 AM</span>
              <h5 className="font-semibold text-sm text-[#0b2b1b]">Morning Assembly & News</h5>
              <p className="text-xs text-[#5c6b64]">Meditation, national anthem, thought for the day, and current affairs.</p>
            </div>

            <div className="bg-[#faf9f5] p-5 rounded-xl border border-[#e1e7e2] space-y-1">
              <span className="text-xs font-bold text-[#0f3822]">08:30 AM – 11:30 AM</span>
              <h5 className="font-semibold text-sm text-[#0b2b1b]">Core Scholastic Periods</h5>
              <p className="text-xs text-[#5c6b64]">Mathematics, Sciences, Languages, and interactive digital smart classes.</p>
            </div>

            <div className="bg-[#faf9f5] p-5 rounded-xl border border-[#e1e7e2] space-y-1">
              <span className="text-xs font-bold text-[#0f3822]">11:30 AM – 12:15 PM</span>
              <h5 className="font-semibold text-sm text-[#0b2b1b]">Nutrition & Social Recess</h5>
              <p className="text-xs text-[#5c6b64]">Wholesome lunch break, campus gardens stroll, and house discussions.</p>
            </div>

            <div className="bg-[#faf9f5] p-5 rounded-xl border border-[#e1e7e2] space-y-1">
              <span className="text-xs font-bold text-[#0f3822]">12:15 PM – 03:00 PM</span>
              <h5 className="font-semibold text-sm text-[#0b2b1b]">Labs, Arts & Remedial</h5>
              <p className="text-xs text-[#5c6b64]">Science practicals, physical sports training, library research, and dispersal.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
