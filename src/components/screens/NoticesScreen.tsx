import React, { useState, useMemo } from 'react';
import { ScreenPath, SchoolNotice } from '../../types';
import { NOTICES, SCHOOL_INFO } from '../../data/schoolData';
import { Bell, Search, Filter, Download, Calendar, ArrowRight, ShieldCheck, X, FileText } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const NoticesScreen: React.FC<Props> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNoticeModal, setActiveNoticeModal] = useState<SchoolNotice | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = ['All', 'Admissions', 'Examinations', 'Holidays', 'Support Desk'];

  const filteredNotices = useMemo(() => {
    return NOTICES.filter((n) => {
      const matchCat = selectedCategory === 'All' || n.category === selectedCategory;
      const matchSearch =
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownload = (notice: SchoolNotice) => {
    setDownloadSuccess(`Official circular "${notice.title.substring(0, 45)}..." downloaded.`);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5" />
            <span>Official Desk & Communications</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            School Notices & Circulars
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            Stay informed with verified notifications, examination routines, vacation schedules, and admission announcements directly from the Office of the Principal.
          </p>
        </div>
      </section>

      {downloadSuccess && (
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 pt-6">
          <div className="p-4 rounded-xl bg-[#abefbf] text-[#2e6f48] border border-[#2e6f48]/20 flex items-center justify-between">
            <span className="text-sm font-semibold">{downloadSuccess}</span>
            <button onClick={() => setDownloadSuccess(null)} className="text-xs underline font-bold cursor-pointer">
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main Notice Board */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-8">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#f0f4f1] p-4 md:p-6 rounded-2xl border border-[#e1e7e2]">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0f3822] text-white shadow-sm'
                    : 'bg-[#faf9f5] text-[#414942] hover:bg-[#e9e8e4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#5c6b64] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search circulars by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs md:text-sm rounded-lg bg-[#faf9f5] border border-[#e1e7e2] text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
            />
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.length === 0 ? (
            <div className="p-12 text-center bg-[#f0f4f1] rounded-2xl border border-[#e1e7e2]">
              <p className="text-[#5c6b64] font-medium text-sm">No notices found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs bg-[#0f3822] text-white px-4 py-2 rounded font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="p-6 rounded-2xl bg-[#faf9f5] border border-[#e1e7e2] hover:border-[#c5a059]/50 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#f0f4f1] text-[#0f3822] px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border border-[#e1e7e2]">
                      {notice.category}
                    </span>
                    <span className="text-xs text-[#5c6b64] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                      {notice.date}
                    </span>
                    {notice.isImportant && (
                      <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Important
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => setActiveNoticeModal(notice)}
                    className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b] hover:text-[#1b5e39] transition-colors cursor-pointer"
                  >
                    {notice.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#2c3e37] leading-relaxed">
                    {notice.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => setActiveNoticeModal(notice)}
                    className="px-4 py-2 bg-[#f0f4f1] hover:bg-[#e9e8e4] text-[#0b2b1b] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Read Circular
                  </button>
                  <button
                    onClick={() => handleDownload(notice)}
                    className="p-2 bg-[#0f3822] hover:bg-[#0b2b1b] text-white rounded-lg transition-colors cursor-pointer"
                    title="Download Official Notice PDF"
                  >
                    <Download className="w-4 h-4 text-[#d4af37]" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Notice Detail Modal */}
      {activeNoticeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf9f5] max-w-2xl w-full rounded-2xl p-8 border border-[#e1e7e2] shadow-2xl relative space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveNoticeModal(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-[#5c6b64] hover:bg-[#f0f4f1] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Circular Header Letterhead */}
            <div className="border-b border-[#e1e7e2] pb-4 flex items-center gap-3">
              <img
                src={SCHOOL_INFO.crestLogo}
                alt="Greenfield Crest"
                className="w-12 h-12 rounded-full object-cover border border-[#c5a059]/40"
              />
              <div>
                <h4 className="font-['Playfair_Display'] text-lg font-bold text-[#0b2b1b]">
                  GREENFIELD INTERNATIONAL SCHOOL
                </h4>
                <p className="text-[11px] text-[#5c6b64]">
                  Affiliated to CBSE, New Delhi (Affiliation No. {SCHOOL_INFO.affiliationNo} • School Code {SCHOOL_INFO.schoolCode})
                </p>
                <p className="text-[11px] text-[#c5a059] font-semibold">{SCHOOL_INFO.address}</p>
              </div>
            </div>

            {/* Circular Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#5c6b64]">
                <span className="font-bold text-[#0f3822] uppercase">Ref: GIS/CIRCULAR/2024/{activeNoticeModal.id}</span>
                <span>Date: {activeNoticeModal.date}</span>
              </div>

              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0b2b1b]">
                {activeNoticeModal.title}
              </h3>

              <div className="text-sm text-[#2c3e37] leading-relaxed space-y-3 bg-[#f0f4f1] p-5 rounded-xl border border-[#e1e7e2]">
                <p>{activeNoticeModal.excerpt}</p>
                {activeNoticeModal.details && <p className="pt-2">{activeNoticeModal.details}</p>}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#e1e7e2] text-xs text-[#5c6b64]">
                <div>
                  <p className="font-semibold text-[#0b2b1b]">By Order of Management</p>
                  <p>Dr. R. K. Jha, Principal</p>
                </div>
                <button
                  onClick={() => {
                    handleDownload(activeNoticeModal);
                    setActiveNoticeModal(null);
                  }}
                  className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#d4af37]" />
                  <span>Download PDF Circular</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
