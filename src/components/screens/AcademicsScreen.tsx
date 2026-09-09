import React, { useState } from 'react';
import { ScreenPath } from '../../types';
import { ACADEMIC_STAGES, HOTLINKED_IMAGES } from '../../data/schoolData';
import { BookOpen, CheckCircle2, Award, Calendar, FileText, Download, ArrowRight, Lightbulb } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const AcademicsScreen: React.FC<Props> = ({ onNavigate }) => {
  const [activeStageId, setActiveStageId] = useState<string>(ACADEMIC_STAGES[0].id);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const selectedStage = ACADEMIC_STAGES.find((s) => s.id === activeStageId) || ACADEMIC_STAGES[0];

  const handleDownload = (docName: string) => {
    setDownloadNotice(`Downloading: ${docName} (PDF). This document has been generated for academic year 2024-25.`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4000);
  };

  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CBSE Curriculum Framework</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            Academic Excellence & Pedagogy
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            From playful sensory immersion in foundational years to rigorous analytical mastery in senior secondary streams. Built upon National Curriculum Framework (NCF) and NEP 2020 guidelines.
          </p>
        </div>
      </section>

      {downloadNotice && (
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 pt-6">
          <div className="p-4 rounded-xl bg-[#abefbf] text-[#2e6f48] border border-[#2e6f48]/20 flex items-center justify-between">
            <span className="text-sm font-semibold">{downloadNotice}</span>
            <button onClick={() => setDownloadNotice(null)} className="text-xs underline font-bold cursor-pointer">
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Interactive Academic Wings Navigator */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e1e7e2] pb-6">
          <div>
            <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
              Select Developmental Wing
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl font-semibold text-[#0b2b1b]">
              Four-Tier Learning Progression
            </h2>
          </div>

          {/* Stage Buttons */}
          <div className="flex flex-wrap gap-2">
            {ACADEMIC_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f3822] text-white shadow-md'
                      : 'bg-[#f0f4f1] text-[#414942] hover:bg-[#e9e8e4]'
                  }`}
                >
                  {stage.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-[#f0f4f1] p-8 md:p-10 rounded-2xl border border-[#e1e7e2]">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-[#c5a059] text-[#1a2421] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                {selectedStage.grades}
              </span>
              <span className="text-xs font-semibold text-[#5c6b64]">{selectedStage.ageGroup}</span>
            </div>

            <h3 className="font-['Playfair_Display'] text-3xl font-semibold text-[#0b2b1b]">
              {selectedStage.title}
            </h3>

            <p className="text-sm text-[#2c3e37] leading-relaxed">{selectedStage.description}</p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-[#0f3822] tracking-wider">Key Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedStage.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#faf9f5] p-3 rounded-lg border border-[#e1e7e2]">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#2c3e37] font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase text-[#0f3822] tracking-wider">Curriculum Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {selectedStage.subjects.map((sub, i) => (
                  <span
                    key={i}
                    className="bg-[#faf9f5] text-[#0b2b1b] border border-[#e1e7e2] text-xs px-3 py-1.5 rounded-full font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden shadow-md border border-[#e1e7e2]">
              <img
                src={HOTLINKED_IMAGES.collaborativeClass}
                alt="Classroom learning at Greenfield"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-[#faf9f5] p-6 rounded-xl border border-[#e1e7e2] space-y-4">
              <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#0b2b1b]">
                Special Wing Facilities
              </h4>
              <ul className="text-xs text-[#5c6b64] space-y-2">
                {selectedStage.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#c5a059]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full bg-[#0f3822] hover:bg-[#0b2b1b] text-white py-2.5 rounded text-xs font-semibold transition-colors cursor-pointer text-center block"
              >
                Inquire for {selectedStage.title}
              </button>
            </div>
          </div>
        </div>

        {/* Academic Calendar & Downloads */}
        <div className="space-y-6 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
                Resource Library
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
                Academic Documents & Calendar 2024-25
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#faf9f5] p-6 rounded-xl border border-[#e1e7e2] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <Calendar className="w-6 h-6 text-[#0f3822]" />
                <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#0b2b1b]">
                  Annual Academic Calendar 2024-25
                </h4>
                <p className="text-xs text-[#5c6b64]">
                  Complete month-by-month itinerary of examinations, summer vacation, national festivals, and parent-teacher meetings.
                </p>
              </div>
              <button
                onClick={() => handleDownload('GIS_Academic_Calendar_2024-25')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f3822] hover:text-[#1b5e39] cursor-pointer pt-2"
              >
                <Download className="w-4 h-4 text-[#c5a059]" />
                <span>Download Calendar (PDF • 1.2 MB)</span>
              </button>
            </div>

            <div className="bg-[#faf9f5] p-6 rounded-xl border border-[#e1e7e2] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <FileText className="w-6 h-6 text-[#0f3822]" />
                <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#0b2b1b]">
                  Prescribed NCERT Book List
                </h4>
                <p className="text-xs text-[#5c6b64]">
                  Official list of authorized NCERT and CBSE-endorsed textbooks for Nursery through Class XII.
                </p>
              </div>
              <button
                onClick={() => handleDownload('GIS_NCERT_Book_List_2024-25')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f3822] hover:text-[#1b5e39] cursor-pointer pt-2"
              >
                <Download className="w-4 h-4 text-[#c5a059]" />
                <span>Download Book List (PDF • 450 KB)</span>
              </button>
            </div>

            <div className="bg-[#faf9f5] p-6 rounded-xl border border-[#e1e7e2] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <Award className="w-6 h-6 text-[#0f3822]" />
                <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#0b2b1b]">
                  Admission Qualifying Syllabus
                </h4>
                <p className="text-xs text-[#5c6b64]">
                  Subject blueprints and sample question formats for the entrance diagnostic test across classes.
                </p>
              </div>
              <button
                onClick={() => handleDownload('GIS_Entrance_Test_Syllabus')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f3822] hover:text-[#1b5e39] cursor-pointer pt-2"
              >
                <Download className="w-4 h-4 text-[#c5a059]" />
                <span>Download Syllabus (PDF • 820 KB)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
