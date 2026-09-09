import React from 'react';
import { ScreenPath } from '../../types';
import { SCHOOL_INFO, HOTLINKED_IMAGES } from '../../data/schoolData';
import { ShieldCheck, Award, Target, Compass, BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const AboutScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Banner */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822] relative overflow-hidden">
        <div className="max-w-[80rem] mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legacy & Governance</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            About Greenfield International School
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            Nurturing young minds in Singheshwar under the visionary stewardship of {SCHOOL_INFO.trust}. Committed to academic distinction, high moral standards, and comprehensive child development.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Principal's Message */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e1e7e2]">
              <img
                src={HOTLINKED_IMAGES.principalClassroom}
                alt="Principal interaction in classroom"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0f3822] text-[#d4af37] p-6 rounded-xl shadow-xl hidden sm:block border border-[#c5a059]/30 max-w-xs">
              <Award className="w-8 h-8 mb-2 text-[#d4af37]" />
              <p className="text-white font-['Playfair_Display'] text-sm font-semibold">
                CBSE Affiliated Senior Secondary School
              </p>
              <p className="text-xs text-[#f0f4f1]/70 mt-1">Affiliation No. {SCHOOL_INFO.affiliationNo}</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-[#f6f1e6] text-[#c5a059] text-xs font-bold uppercase tracking-wider">
              From the Principal’s Desk
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl font-semibold text-[#0b2b1b]">
              Fostering Excellence, Empathy, and Scientific Inquiry
            </h2>
            <div className="space-y-4 text-[#2c3e37] text-[15px] leading-relaxed">
              <p>
                "At Greenfield International School, Singheshwar, we perceive education not as a passive transmission of textbook facts, but as an awakening of intrinsic genius. Every learner who enters our gates brings boundless potential."
              </p>
              <p>
                "Our teachers act as mentors, guiding learners through experiential labs, sports fields, stage performances, and community initiatives. We maintain an optimal 25:1 student-to-teacher ratio so that no child's unique voice is left unheard."
              </p>
              <p className="text-[#5c6b64] text-sm">
                "We extend our heartfelt gratitude to parents and guardians for entrusting their children to our care. Together, we build confident future citizens rooted in cultural heritage and prepared for a globalized world."
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <div>
                <p className="font-['Playfair_Display'] text-lg font-semibold text-[#0b2b1b]">Dr. R. K. Jha</p>
                <p className="text-xs text-[#c5a059] font-bold uppercase">Principal • Greenfield International School</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="p-8 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-4">
            <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">Our Vision</h3>
            <p className="text-sm text-[#2c3e37] leading-relaxed">
              To be the benchmark center of scholastic achievement and character building in eastern Bihar, empowering scholars with modern technological fluency and unwavering ethical grounding.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-4">
            <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">Our Mission</h3>
            <p className="text-sm text-[#2c3e37] leading-relaxed">
              To deliver experiential, value-oriented education through state-of-the-art labs, creative arts, and athletic infrastructure, cultivating resilient problem-solvers and compassionate leaders.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-4">
            <div className="p-3 bg-[#0f3822] text-[#d4af37] w-fit rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">Core Values</h3>
            <ul className="text-sm text-[#2c3e37] space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Integrity & Moral Fortitude
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Scientific Temperament & Curiosity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Inclusivity & Respect for All
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" /> Environmental Stewardship
              </li>
            </ul>
          </div>
        </div>

        {/* School Managing Committee (SMC) */}
        <div className="bg-[#faf9f5] rounded-2xl p-8 border border-[#e1e7e2] space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
                Institutional Oversight
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
                School Managing Committee (SMC)
              </h3>
            </div>
            <button
              onClick={() => onNavigate('cbse-disclosure')}
              className="text-xs bg-[#0f3822] text-white px-4 py-2 rounded font-semibold hover:bg-[#0b2b1b] transition-colors self-start md:self-auto cursor-pointer"
            >
              View Full CBSE Public Disclosure
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f0f4f1] text-[#0b2b1b] font-semibold text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Member Name</th>
                  <th className="py-3 px-4">Designation</th>
                  <th className="py-3 px-4">Occupation / Background</th>
                  <th className="py-3 px-4">Nomination Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1e7e2] text-[#2c3e37]">
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#0b2b1b]">Sri Suresh Prasad Singh</td>
                  <td className="py-3 px-4">President</td>
                  <td className="py-3 px-4">Managing Trustee, Akshar Foundation</td>
                  <td className="py-3 px-4">Trust Nominee</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#0b2b1b]">Dr. R. K. Jha</td>
                  <td className="py-3 px-4">Member Secretary</td>
                  <td className="py-3 px-4">Principal, Greenfield International School</td>
                  <td className="py-3 px-4">Ex-Officio</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#0b2b1b]">Prof. (Dr.) A. N. Roy</td>
                  <td className="py-3 px-4">Member (Educationist)</td>
                  <td className="py-3 px-4">Retd. Dean, BNMU Madhepura</td>
                  <td className="py-3 px-4">Educationist</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#0b2b1b]">Dr. Meenakshi Kumari</td>
                  <td className="py-3 px-4">Teacher Representative</td>
                  <td className="py-3 px-4">Senior PGT Biology, GIS</td>
                  <td className="py-3 px-4">Faculty Representative</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#0b2b1b]">Sri Manoj Kumar</td>
                  <td className="py-3 px-4">Parent Representative</td>
                  <td className="py-3 px-4">Advocate, District Court Madhepura</td>
                  <td className="py-3 px-4">PTA Nominee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[#0f3822] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-['Playfair_Display'] text-2xl font-semibold">Join the Greenfield Family</h4>
            <p className="text-sm text-[#f0f4f1]/80 mt-1">Registrations are ongoing for Academic Session 2024-25.</p>
          </div>
          <button
            onClick={() => onNavigate('admissions')}
            className="bg-[#c5a059] hover:bg-[#d4af37] text-[#1a2421] px-6 py-3 rounded text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
};
