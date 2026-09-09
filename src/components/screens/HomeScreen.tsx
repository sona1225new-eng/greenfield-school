import React, { useState } from 'react';
import { ScreenPath } from '../../types';
import { SCHOOL_INFO, HOTLINKED_IMAGES, NOTICES } from '../../data/schoolData';
import {
  ArrowRight,
  School,
  Verified,
  Sparkles,
  BookOpen,
  Monitor,
  Trophy,
  Shield,
  Phone,
  Clock,
  MapPin,
  Mail,
  CheckCircle2,
  Percent,
  Quote,
  Flame,
  Award,
} from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const HomeScreen: React.FC<Props> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    studentName: '',
    parentContact: '',
    grade: 'Primary School (Class 1 to 5)',
    email: '',
    message: '',
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[720px] flex items-center bg-[#0b2b1b]">
        {/* Background Image with Fallback */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${HOTLINKED_IMAGES.heroCampus}')`,
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b1b] via-[#0b2b1b]/92 to-[#0f3822]/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(197,160,89,0.18),transparent_60%)] z-10" />

        <div className="relative z-20 max-w-[80rem] mx-auto px-4 md:px-8 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6f1e6]/15 backdrop-blur-md text-[#d4af37] border border-[#c5a059]/30">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest font-bold text-[#d4af37]">
                  Affiliated to CBSE, New Delhi • School No. {SCHOOL_INFO.schoolCode}
                </span>
              </div>

              <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#faf9f5] leading-[1.12] max-w-3xl">
                Where Learning Meets <span className="italic text-[#d4af37] font-normal font-['Playfair_Display']">Possibility</span> & Character.
              </h1>

              <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/90 max-w-2xl leading-relaxed">
                Under {SCHOOL_INFO.trust} (Affiliation No. {SCHOOL_INFO.affiliationNo}), Greenfield International School delivers value-oriented quality education, scientific inquiry, and joyous holistic upbringing in Singheshwar.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="bg-[#c5a059] hover:bg-[#d4af37] text-[#1a2421] px-7 py-3.5 rounded text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-[#c5a059]/30 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Begin Admission Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#1a2421]" />
                </button>

                <button
                  onClick={() => onNavigate('campus-facilities')}
                  className="bg-[#faf9f5]/10 hover:bg-[#faf9f5]/20 text-white border border-white/20 backdrop-blur-md px-6 py-3.5 rounded text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <School className="w-4 h-4 text-[#d4af37]" />
                  <span>Explore Campus & Academics</span>
                </button>
              </div>
            </div>

            {/* Right Highlights Card */}
            <div className="lg:col-span-4 hidden lg:flex flex-col justify-end">
              <div className="bg-[#0f3822]/85 backdrop-blur-xl p-6 rounded-xl shadow-2xl space-y-4 text-[#faf9f5] border border-[#c5a059]/30">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                    Campus Highlights
                  </span>
                  <Verified className="w-5 h-5 text-[#d4af37]" />
                </div>

                <div className="space-y-4 text-[#f0f4f1]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0b2b1b] text-[#d4af37] shrink-0 border border-[#c5a059]/20">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">CBSE Integrated Curriculum</h4>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/70">Foundational to Senior Secondary</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0b2b1b] text-[#d4af37] shrink-0 border border-[#c5a059]/20">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">Interactive Smart Classrooms</h4>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/70">Digital touch panels & 3D pedagogy</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0b2b1b] text-[#d4af37] shrink-0 border border-[#c5a059]/20">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">Sports & STEM Exploration</h4>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/70">10-acre campus with athletic grounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME EDITORIAL COMPOSITION (PRINCIPAL'S DESK) */}
      <section className="w-full py-20 bg-[#faf9f5]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-[#f6f1e6] text-[#c5a059] font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-widest uppercase">
                Welcome to Greenfield
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0b2b1b] leading-tight">
                A Place Where Curiosity Flourishes and Character is Built.
              </h2>

              <div className="space-y-4 text-[#2c3e37] font-['Plus_Jakarta_Sans'] text-[15px] leading-relaxed">
                <p>
                  We pride ourselves not only in fostering academic excellence but also in making our learners spend at school satisfying, fulfilling, and joyous moments. These formative years should be remembered by our children throughout their lives with deep fondness and pride.
                </p>
                <p>
                  Greenfield International School is resolutely committed to providing value-oriented quality education with a view to developing children with integrated personalities, a rigorous scientific approach, and an expansive global outlook.
                </p>
                <p className="text-[#5c6b64] text-sm">
                  We endeavor for continual improvement in our academic and moral quality management system through regular involvement of our core associates, ensuring the total satisfaction of students and guardians alike.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <button
                  onClick={() => onNavigate('about-gis')}
                  className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white px-6 py-3 rounded text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Read Full Principal Message</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                </button>

                <div className="flex flex-col">
                  <span className="font-['Playfair_Display'] text-lg font-semibold text-[#0b2b1b] leading-none">
                    Office of Principal
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase mt-1">
                    Greenfield Singheshwar
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#f0f4f1] border border-[#e1e7e2]">
                <img
                  className="w-full h-[480px] object-cover"
                  alt="Students and teacher in Greenfield smart classroom"
                  src={HOTLINKED_IMAGES.principalClassroom}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b1b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#faf9f5]/95 backdrop-blur-md shadow-lg border border-[#e1e7e2]/80">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-[#c5a059] shrink-0 mt-1" />
                    <div>
                      <p className="font-['Playfair_Display'] text-lg text-[#0b2b1b] italic leading-snug">
                        "These formative years should be remembered by our children throughout their lives."
                      </p>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#5c6b64] mt-2 uppercase tracking-widest font-semibold">
                        — Greenfield Academic Philosophy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY FAMILIES CHOOSE GREENFIELD */}
      <section className="w-full py-20 bg-[#f0f4f1]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0f3822] text-[#d4af37] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Grow • Inspire • Succeed</span>
              </div>

              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0b2b1b] leading-tight">
                Why Families Choose Greenfield International School
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#5c6b64] leading-relaxed">
                Located in the serene educational hub of Singheshwar, Madhepura, we combine rigorous national curriculum frameworks with humane values, building leaders rooted in integrity.
              </p>

              <div className="p-6 rounded-xl bg-[#faf9f5] shadow-sm space-y-3 border border-[#e1e7e2]">
                <div className="flex items-center gap-3 text-[#c5a059]">
                  <Award className="w-5 h-5 text-[#c5a059]" />
                  <span className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#1a2421]">
                    Akshar Foundation Trust Guarantee
                  </span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#5c6b64] leading-relaxed">
                  Administered by seasoned educators and trustees ensuring transparent operations, merit-first scholarship pathways, and continuous infrastructure modernization.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Card 01 */}
              <div className="p-8 rounded-xl bg-[#faf9f5] shadow-sm hover:shadow-md transition-shadow group border border-[#e1e7e2]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-['Playfair_Display'] text-2xl font-semibold text-[#c5a059]">01</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#5c6b64] uppercase tracking-wider">
                    Academic Foundation
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors mb-3">
                  Value-Oriented Quality Education
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Our CBSE-aligned pedagogy harmonizes textbook concepts with practical scientific inquiry. We don't just instruct for rote examinations; we stimulate critical reasoning and analytical thought.
                </p>
              </div>

              {/* Card 02 */}
              <div className="p-8 rounded-xl bg-[#faf9f5] shadow-sm hover:shadow-md transition-shadow group border border-[#e1e7e2]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-['Playfair_Display'] text-2xl font-semibold text-[#c5a059]">02</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#5c6b64] uppercase tracking-wider">
                    All-Round Growth
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors mb-3">
                  Holistic Character & Co-Curricular Excellence
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Every learner experiences athletic training, visual arts, elocution, and stage theatrics. Children develop sportsman spirit, resilience, and collaborative teamwork early in life.
                </p>
              </div>

              {/* Card 03 */}
              <div className="p-8 rounded-xl bg-[#faf9f5] shadow-sm hover:shadow-md transition-shadow group border border-[#e1e7e2]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-['Playfair_Display'] text-2xl font-semibold text-[#c5a059]">03</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#5c6b64] uppercase tracking-wider">
                    Pedagogical Rigor
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors mb-3">
                  Dedicated Mentorship & Smart Learning Labs
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  With multimedia-equipped classrooms and structured post-school remedial assistance, we guarantee that no child is left behind in core competencies like Mathematics and Science.
                </p>
              </div>

              {/* Card 04 */}
              <div className="p-8 rounded-xl bg-[#faf9f5] shadow-sm hover:shadow-md transition-shadow group border border-[#e1e7e2]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-['Playfair_Display'] text-2xl font-semibold text-[#c5a059]">04</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#5c6b64] uppercase tracking-wider">
                    Community Ethos
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors mb-3">
                  Supportive, Joyous Campus Community
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  From clean potable RO water and CCTV monitored corridors to compassionate pastoral counseling, Greenfield ensures an atmosphere where children walk in with excitement and return with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMICS HORIZONTAL STAGE */}
      <section className="w-full py-20 bg-[#ebf1ec]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
                Curriculum Architecture
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0b2b1b]">
                Progressive Academic Stages
              </h2>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#5c6b64] max-w-md">
              Structured strictly as per CBSE benchmarks with continuous assessment and integrated enrichment for every developmental phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pre-Primary */}
            <div className="bg-[#faf9f5] p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e1e7e2]">
              <div className="space-y-4">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#0f3822] bg-[#f0f4f1] px-2.5 py-1 rounded inline-block">
                  Ages 3 - 5
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                  Pre-Primary Wing
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Play-centric sensorial discovery, phonetics, motor development, and social adaptability in a colorful, secure nest.
                </p>
              </div>
              <div className="pt-6 border-t border-[#e1e7e2]/70">
                <ul className="text-xs space-y-2 text-[#5c6b64]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Phonics & Storytelling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Interactive Activity Zones
                  </li>
                </ul>
              </div>
            </div>

            {/* Primary */}
            <div className="bg-[#faf9f5] p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e1e7e2]">
              <div className="space-y-4">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#0f3822] bg-[#f0f4f1] px-2.5 py-1 rounded inline-block">
                  Classes I - V
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                  Primary School
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Building literacy, computational fluency, environmental consciousness, and creative self-expression through guided projects.
                </p>
              </div>
              <div className="pt-6 border-t border-[#e1e7e2]/70">
                <ul className="text-xs space-y-2 text-[#5c6b64]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Bilingual Competency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Applied Math & Science Labs
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle School */}
            <div className="bg-[#faf9f5] p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e1e7e2]">
              <div className="space-y-4">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#0f3822] bg-[#f0f4f1] px-2.5 py-1 rounded inline-block">
                  Classes VI - VIII
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                  Middle School
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Transition to specialized sciences, algebraic formulation, social inquiries, and analytical essay composition.
                </p>
              </div>
              <div className="pt-6 border-t border-[#e1e7e2]/70">
                <ul className="text-xs space-y-2 text-[#5c6b64]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Experimental Science Practical
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> ICT & Coding Intro
                  </li>
                </ul>
              </div>
            </div>

            {/* Secondary Wing */}
            <div className="bg-[#faf9f5] p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e1e7e2]">
              <div className="space-y-4">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#0f3822] bg-[#f0f4f1] px-2.5 py-1 rounded inline-block">
                  Classes IX - XII
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                  Secondary Wing
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  CBSE board examination excellence, career counseling, remedial mentoring, and entrance assessment foundation.
                </p>
              </div>
              <div className="pt-6 border-t border-[#e1e7e2]/70">
                <ul className="text-xs space-y-2 text-[#5c6b64]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Dedicated Remedial Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Full Board Practicals & Mocks
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Calendar CTA */}
          <div className="p-6 rounded-xl bg-[#0f3822] text-[#faf9f5] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#c5a059]/30 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0b2b1b] text-[#d4af37] rounded-lg shrink-0 border border-[#c5a059]/20">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-['Playfair_Display'] text-xl font-semibold">Download Academic Calendar & Guidelines</h4>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#f0f4f1]/80">
                  Get detailed syllabi, examination cycles, and vacation dates for the 2024-25 session.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('academics')}
              className="bg-[#c5a059] hover:bg-[#d4af37] text-[#1a2421] px-6 py-3 rounded text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              View Academic Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* 5. CAMPUS & FACILITIES COLLAGE */}
      <section className="w-full py-20 bg-[#faf9f5]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 space-y-12">
          <div className="max-w-2xl">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
              Modern Infrastructure
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0b2b1b]">
              Spaces Crafted for Deep Discovery
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#5c6b64] mt-3">
              Spread across acres of greenery in Singheshwar, our infrastructure creates an inspiring ecosystem for scholastic and athletic pursuits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Science Lab (8 cols) */}
            <div className="md:col-span-8 relative rounded-2xl overflow-hidden shadow-md group min-h-[380px] border border-[#e1e7e2]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Composite Science Laboratories at Greenfield"
                src={HOTLINKED_IMAGES.scienceLab}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b1b]/90 via-[#0b2b1b]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#c5a059] text-[#1a2421] text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-2">
                  Advanced Labs
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-white">
                  Composite Science & STEM Laboratories
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#f0f4f1]/90 max-w-lg mt-1">
                  Fully compliant CBSE Physics, Chemistry, and Biology workbenches equipped with modern safety gear and precision instruments.
                </p>
              </div>
            </div>

            {/* Sports Arena (4 cols) */}
            <div className="md:col-span-4 relative rounded-2xl overflow-hidden shadow-md group min-h-[380px] border border-[#e1e7e2]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Athletic sports arena at Greenfield"
                src={HOTLINKED_IMAGES.sportsGround}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b1b]/90 via-[#0b2b1b]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#0f3822] text-[#d4af37] text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-2 border border-[#c5a059]/30">
                  Sports Arena
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-white">
                  Athletic Grounds & Court
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/90 mt-1">
                  Football grounds, cricket practice nets, and badminton courts promoting daily physical vitality.
                </p>
              </div>
            </div>

            {/* Library (4 cols) */}
            <div className="md:col-span-4 p-8 rounded-2xl bg-[#f0f4f1] flex flex-col justify-between shadow-sm border border-[#e1e7e2]">
              <div className="space-y-4">
                <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                  Well-Stocked Knowledge Library
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Thousands of reference volumes, literature classics, encyclopedias, and regional publications encouraging silent reflection.
                </p>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase pt-4 block tracking-wider">
                10,000+ Printed & Digital Titles
              </span>
            </div>

            {/* Smart Classrooms (4 cols) */}
            <div className="md:col-span-4 p-8 rounded-2xl bg-[#f0f4f1] flex flex-col justify-between shadow-sm border border-[#e1e7e2]">
              <div className="space-y-4">
                <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                  Digital Smart Classrooms
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Interactive touch displays with rich pedagogical software enabling teachers to project 3D simulations and video models.
                </p>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase pt-4 block tracking-wider">
                100% Smart Enabled Wings
              </span>
            </div>

            {/* Safe Premises (4 cols) */}
            <div className="md:col-span-4 p-8 rounded-2xl bg-[#f0f4f1] flex flex-col justify-between shadow-sm border border-[#e1e7e2]">
              <div className="space-y-4">
                <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                  Safe & Monitored Premises
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Round-the-clock CCTV surveillance, trained security personnel, pure RO drinking water systems, and complete fire protection.
                </p>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase pt-4 block tracking-wider">
                Certified Safety Protocols
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STUDENT LIFE EDITORIAL (BEYOND THE CLASSROOM) */}
      <section className="w-full py-20 bg-[#ebf1ec]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase tracking-widest block">
              Student Life & Exposure
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#0b2b1b]">
              Learning Beyond Textbooks
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#5c6b64]">
              Our co-curricular calendar integrates annual sports meets, science fairs, environmental drives, and patriotic celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Athletics */}
            <div className="bg-[#faf9f5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-[#e1e7e2]">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Annual inter-house sports meet"
                  src={HOTLINKED_IMAGES.athleticsMeet}
                />
                <span className="absolute top-4 left-4 bg-[#0b2b1b]/85 backdrop-blur-md text-[#d4af37] text-xs px-2.5 py-1 rounded font-bold uppercase border border-[#c5a059]/30">
                  Athletics
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors">
                  Champions on the Field
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Structured physical training helps our scholars learn victory with humility, defeat with grace, and lifelong personal fitness.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="bg-[#faf9f5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-[#e1e7e2]">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Students conducting science experiments"
                  src={HOTLINKED_IMAGES.scienceExperiment}
                />
                <span className="absolute top-4 left-4 bg-[#0b2b1b]/85 backdrop-blur-md text-[#d4af37] text-xs px-2.5 py-1 rounded font-bold uppercase border border-[#c5a059]/30">
                  Innovation
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors">
                  Hands-on Science Explorations
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Encouraging independent hypothesizing through seasonal STEM exhibits, robotics models, and practical environmental science studies.
                </p>
              </div>
            </div>

            {/* Expression */}
            <div className="bg-[#faf9f5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-[#e1e7e2]">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Collaborative classroom with tablets"
                  src={HOTLINKED_IMAGES.collaborativeClass}
                />
                <span className="absolute top-4 left-4 bg-[#0b2b1b]/85 backdrop-blur-md text-[#d4af37] text-xs px-2.5 py-1 rounded font-bold uppercase border border-[#c5a059]/30">
                  Expression
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors">
                  Collaborative Group Projects
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                  Debating clubs, theater enactments, and cultural festivals where students overcome inhibitions to speak with confidence and eloquence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACHIEVEMENTS & INSTITUTIONAL PILLARS */}
      <section className="w-full py-16 bg-[#0b2b1b] text-[#faf9f5] border-y border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#0f3822]">
            <div className="space-y-2 p-4">
              <div className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#d4af37]">
                {SCHOOL_INFO.affiliationNo}
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#faf9f5]">
                CBSE Affiliation
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/70 uppercase">
                Govt. Recognized Standard
              </div>
            </div>

            <div className="space-y-2 p-4">
              <div className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#d4af37]">
                100%
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#faf9f5]">
                Qualifying Test Standard
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/70 uppercase">
                Merit-First Admissions
              </div>
            </div>

            <div className="space-y-2 p-4">
              <div className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#d4af37]">
                {SCHOOL_INFO.studentTeacherRatio}
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#faf9f5]">
                Student-Faculty Ratio
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/70 uppercase">
                Personalized Attention
              </div>
            </div>

            <div className="space-y-2 p-4">
              <div className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#d4af37]">
                10+
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#faf9f5]">
                Acres Green Campus
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xs text-[#f0f4f1]/70 uppercase">
                Serene Kosi Region Hub
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS & IMPORTANT NOTICES */}
      <section className="w-full py-20 bg-[#faf9f5]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#e1e7e2]">
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-1">
                Official Circulars
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#0b2b1b]">
                School Notices & Updates
              </h2>
            </div>
            <button
              onClick={() => onNavigate('notices')}
              className="text-[#0f3822] hover:text-[#1b5e39] font-semibold text-sm flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>View All Circulars</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Featured Notice */}
            <div className="lg:col-span-7 bg-[#f0f4f1] p-8 rounded-2xl shadow-sm space-y-6 border border-[#e1e7e2]">
              <div className="flex items-center gap-3">
                <span className="bg-[#c5a059] text-[#1a2421] font-bold text-xs px-3 py-1 rounded uppercase tracking-wider">
                  Session 2024-25
                </span>
                <span className="text-xs text-[#5c6b64]">Updated: March 12, 2024</span>
              </div>

              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b] leading-snug">
                New Academic Session Commences 1st April 2024 — Admissions Open via Qualifying Assessment
              </h3>

              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#2c3e37] leading-relaxed">
                Admissions are currently underway across Pre-Primary to Class IX & XI. Please note that direct admission is offered strictly following evaluation in our entrance assessment.
              </p>

              <div className="p-4 rounded-xl bg-[#faf9f5] space-y-2 border border-[#e1e7e2]">
                <div className="flex items-center justify-between text-[#0f3822] font-semibold text-sm">
                  <span className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-[#c5a059]" /> 50% Concession on Admission
                  </span>
                  <span className="text-xs bg-[#0b2b1b] text-white px-2 py-0.5 rounded font-semibold">
                    Till 15th March 2024
                  </span>
                </div>
                <p className="text-xs text-[#5c6b64]">
                  Eligible for meritorious students registering before the scheduled cutoff dates.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors cursor-pointer"
                >
                  Admission Registration
                </button>
                <a
                  href="tel:6207110355"
                  className="text-[#0b2b1b] hover:text-[#1b5e39] text-sm font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Inquiry: {SCHOOL_INFO.phone1}</span>
                </a>
              </div>
            </div>

            {/* Secondary Notices List */}
            <div className="lg:col-span-5 space-y-4">
              {NOTICES.slice(1, 4).map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onNavigate('notices')}
                  className="p-5 rounded-xl bg-[#f0f4f1]/70 hover:bg-[#f0f4f1] transition-colors border border-[#e1e7e2] cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs text-[#5c6b64] mb-1.5">
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase">
                      {notice.category}
                    </span>
                    <span>{notice.date}</span>
                  </div>
                  <h4 className="font-['Playfair_Display'] text-base font-semibold text-[#0b2b1b]">
                    {notice.title}
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#5c6b64] mt-1.5 line-clamp-2">
                    {notice.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CURATED CAMPUS GALLERY */}
      <section className="w-full py-20 bg-[#f0f4f1]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
                Moments & Memories
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#0b2b1b]">
                Life Across Greenfield
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="text-[#0f3822] hover:text-[#1b5e39] font-semibold text-sm flex items-center gap-1 cursor-pointer self-start md:self-auto"
            >
              <span>Explore Full Campus Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Gallery 1 */}
            <div
              onClick={() => onNavigate('gallery')}
              className="rounded-xl overflow-hidden shadow-sm h-64 group relative cursor-pointer border border-[#e1e7e2]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Annual cultural festival at Greenfield"
                src={HOTLINKED_IMAGES.culturalFest}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b1b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium">Annual Cultural Fest</span>
              </div>
            </div>

            {/* Gallery 2 */}
            <div
              onClick={() => onNavigate('gallery')}
              className="rounded-xl overflow-hidden shadow-sm h-64 group relative cursor-pointer border border-[#e1e7e2]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Inter-house sports sprint meet"
                src={HOTLINKED_IMAGES.sprintTrack}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b1b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium">Inter-House Sprint Meet</span>
              </div>
            </div>

            {/* Gallery 3 */}
            <div
              onClick={() => onNavigate('gallery')}
              className="rounded-xl overflow-hidden shadow-sm h-64 group relative cursor-pointer border border-[#e1e7e2]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Fine arts and craft studio"
                src={HOTLINKED_IMAGES.fineArts}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b1b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium">Fine Arts & Craft Studio</span>
              </div>
            </div>

            {/* Gallery 4 */}
            <div
              onClick={() => onNavigate('gallery')}
              className="rounded-xl overflow-hidden shadow-sm h-64 group relative cursor-pointer border border-[#e1e7e2]"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Science project exhibition"
                src={HOTLINKED_IMAGES.scienceExhibition}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b1b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium">Annual Science Exhibition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADMISSIONS CALL TO ACTION (RICH FULL BLEED BANNER) */}
      <section className="w-full py-20 bg-[#0f3822] text-[#faf9f5] relative overflow-hidden border-t border-[#c5a059]/20">
        <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-[#237a4b]/15 blur-3xl pointer-events-none" />

        <div className="max-w-[80rem] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#d4af37] uppercase tracking-widest inline-block">
                Admissions Open 2024-25
              </span>

              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#faf9f5] leading-tight">
                Give Your Child a Strong Start for a Limitless Future.
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/90 max-w-2xl leading-relaxed">
                Join the premier institution of Singheshwar. Our structured three-step admission cycle ensures that every child receives the tailored support they need to flourish academically.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-[#0b2b1b]/60 border border-white/10">
                  <span className="font-['Playfair_Display'] text-2xl font-bold text-[#d4af37] block mb-1">
                    01
                  </span>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">Online Registration</h4>
                  <p className="text-xs text-[#f0f4f1]/70 mt-1">Submit basic details on our secure portal.</p>
                </div>

                <div className="p-4 rounded-lg bg-[#0b2b1b]/60 border border-white/10">
                  <span className="font-['Playfair_Display'] text-2xl font-bold text-[#d4af37] block mb-1">
                    02
                  </span>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">Qualifying Assessment</h4>
                  <p className="text-xs text-[#f0f4f1]/70 mt-1">Comprehensive test to assess academic readiness.</p>
                </div>

                <div className="p-4 rounded-lg bg-[#0b2b1b]/60 border border-white/10">
                  <span className="font-['Playfair_Display'] text-2xl font-bold text-[#d4af37] block mb-1">
                    03
                  </span>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white">Campus Welcome</h4>
                  <p className="text-xs text-[#f0f4f1]/70 mt-1">Document verification & guardian interaction.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full sm:w-auto text-center bg-[#c5a059] hover:bg-[#d4af37] text-[#1a2421] px-8 py-4 rounded text-sm font-bold transition-all shadow-xl cursor-pointer"
              >
                Apply for Admission Online
              </button>

              <a
                href="tel:6207110355"
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded text-sm font-semibold transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Helpline: {SCHOOL_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CONTACT & INQUIRY FORM SECTION */}
      <section className="w-full py-20 bg-[#faf9f5]">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
                  Connect With GIS
                </span>
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#0b2b1b]">
                  Visit Our Campus
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#5c6b64] mt-3 leading-relaxed">
                  We welcome prospective parents and scholars to inspect our laboratories, library, and sports infrastructure during regular school hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f4f1] border border-[#e1e7e2]">
                  <MapPin className="w-5 h-5 text-[#0f3822] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#0b2b1b]">Campus Address</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#2c3e37] mt-0.5">{SCHOOL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f4f1] border border-[#e1e7e2]">
                  <Phone className="w-5 h-5 text-[#0f3822] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#0b2b1b]">Helpline Numbers</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#2c3e37] mt-0.5">{SCHOOL_INFO.phone1} / {SCHOOL_INFO.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f4f1] border border-[#e1e7e2]">
                  <Mail className="w-5 h-5 text-[#0f3822] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#0b2b1b]">Official Email</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#2c3e37] mt-0.5">{SCHOOL_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f4f1] border border-[#e1e7e2]">
                  <Clock className="w-5 h-5 text-[#0f3822] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#0b2b1b]">School Timings</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#2c3e37] mt-0.5">{SCHOOL_INFO.timings}</p>
                  </div>
                </div>
              </div>

              {/* Location Map Widget Container */}
              <div className="w-full h-48 rounded-xl bg-[#e9e8e4] overflow-hidden shadow-inner flex flex-col items-center justify-center text-[#5c6b64] border border-[#e1e7e2] p-4 text-center">
                <MapPin className="w-8 h-8 text-[#0f3822] mb-1" />
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#0b2b1b]">Singheshwar Campus Map Location</span>
                <span className="text-[11px] text-[#5c6b64] mt-0.5">Gamharia Road • Approx 1.5 km from Singheshwar Temple</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-3 text-xs bg-[#0f3822] text-white px-3 py-1.5 rounded font-medium hover:bg-[#0b2b1b] transition-colors cursor-pointer"
                >
                  View Directions & Route
                </button>
              </div>
            </div>

            {/* Right Direct Admission Enquiry Form */}
            <div className="lg:col-span-7 bg-[#f0f4f1] p-8 md:p-10 rounded-2xl shadow-sm border border-[#e1e7e2]">
              <div className="mb-6">
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">Direct Admission Enquiry</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#5c6b64] mt-1">
                  Submit your details below and our counselor will get in touch within 24 hours.
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                      Student's Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={inquiryData.studentName}
                      onChange={(e) => setInquiryData({ ...inquiryData, studentName: e.target.value })}
                      placeholder="e.g. Aryan Kumar"
                      className="w-full px-4 py-3 rounded bg-[#faf9f5] text-[#1a2421] text-sm border border-[#e1e7e2] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                    />
                  </div>
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                      Parent / Guardian Contact *
                    </label>
                    <input
                      required
                      type="tel"
                      value={inquiryData.parentContact}
                      onChange={(e) => setInquiryData({ ...inquiryData, parentContact: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded bg-[#faf9f5] text-[#1a2421] text-sm border border-[#e1e7e2] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                      Grade Applying For
                    </label>
                    <select
                      value={inquiryData.grade}
                      onChange={(e) => setInquiryData({ ...inquiryData, grade: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#faf9f5] text-[#1a2421] text-sm border border-[#e1e7e2] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                    >
                      <option>Pre-Primary (Nursery, LKG, UKG)</option>
                      <option>Primary School (Class 1 to 5)</option>
                      <option>Middle School (Class 6 to 8)</option>
                      <option>Secondary (Class 9 & 10)</option>
                      <option>Senior Secondary (Class 11 & 12)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-3 rounded bg-[#faf9f5] text-[#1a2421] text-sm border border-[#e1e7e2] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Message / Specific Query
                  </label>
                  <textarea
                    rows={4}
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Ask questions regarding fee schedule, transport routes, or qualifying test syllabus..."
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] text-[#1a2421] text-sm border border-[#e1e7e2] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0f3822] hover:bg-[#0b2b1b] text-white py-3.5 rounded text-sm font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send Admission Enquiry</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                </button>

                {formSubmitted && (
                  <div className="p-4 rounded-lg bg-[#abefbf] text-[#2e6f48] text-center font-['Plus_Jakarta_Sans'] text-sm font-semibold border border-[#2e6f48]/20 animate-in fade-in duration-300">
                    Thank you! Your enquiry has been received. Reference ID: <span className="underline">GIS-ENQ-2024-8842</span>. Our admissions team will contact you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
