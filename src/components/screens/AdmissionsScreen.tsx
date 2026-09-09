import React, { useState } from 'react';
import { ScreenPath } from '../../types';
import { SCHOOL_INFO, FEE_STRUCTURE_DATA } from '../../data/schoolData';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  FileCheck,
  Percent,
  Download,
  Phone,
  Printer,
  ArrowRight,
  HelpCircle,
  Clock,
} from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const AdmissionsScreen: React.FC<Props> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    grade: 'Primary (Class I to V)',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    transportRequired: 'Yes',
  });

  const [applicationId, setApplicationId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `GIS-ADM-2024-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(generatedId);
    setCurrentStep(4);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Session 2024-25</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            Admissions & Enrollment
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            Welcome to the Greenfield International School online admission portal. Follow our transparent 3-step application flow for grades Nursery through Class XI.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Concession Announcement Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#0f3822] text-white border border-[#c5a059]/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#c5a059] text-[#1a2421] text-xs font-bold px-3 py-1 rounded uppercase">
              <Percent className="w-3.5 h-3.5" />
              <span>Limited Early Bird Concession</span>
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-white">
              50% Concession on Admission Fee Till Cutoff Date
            </h3>
            <p className="text-xs md:text-sm text-[#f0f4f1]/80 max-w-xl">
              Applicable for scholars who register and qualify the diagnostic entrance assessment before the scheduled session cutoff.
            </p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-xs text-[#d4af37] font-semibold">Admission Helpline</p>
            <a href="tel:6207110355" className="text-lg font-bold text-white hover:text-[#d4af37]">
              {SCHOOL_INFO.phone1}
            </a>
          </div>
        </div>

        {/* Admission Wizard Card */}
        <div className="bg-[#f0f4f1] p-8 md:p-12 rounded-2xl border border-[#e1e7e2] shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e1e7e2] pb-6">
            <div>
              <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
                Online Application Portal
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl font-semibold text-[#0b2b1b]">
                Student Registration Form
              </h2>
            </div>

            {/* Stepper indicators */}
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 1 ? 'bg-[#0f3822] text-white' : 'bg-[#faf9f5] text-[#5c6b64]'
                }`}
              >
                1
              </div>
              <div className={`w-6 h-0.5 ${currentStep >= 2 ? 'bg-[#0f3822]' : 'bg-[#e1e7e2]'}`} />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 2 ? 'bg-[#0f3822] text-white' : 'bg-[#faf9f5] text-[#5c6b64]'
                }`}
              >
                2
              </div>
              <div className={`w-6 h-0.5 ${currentStep >= 3 ? 'bg-[#0f3822]' : 'bg-[#e1e7e2]'}`} />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  currentStep >= 3 ? 'bg-[#0f3822] text-white' : 'bg-[#faf9f5] text-[#5c6b64]'
                }`}
              >
                3
              </div>
            </div>
          </div>

          {currentStep === 1 && (
            <div className="space-y-6">
              <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                Step 1: Student Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Student Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Date of Birth *
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  >
                    <option>Pre-Primary (Nursery, LKG, UKG)</option>
                    <option>Primary (Class I to V)</option>
                    <option>Middle School (Class VI to VIII)</option>
                    <option>Secondary (Class IX & X)</option>
                    <option>Senior Secondary (Class XI - Science/Commerce)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.studentName) {
                      alert('Please provide student name to continue.');
                      return;
                    }
                    setCurrentStep(2);
                  }}
                  className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white px-6 py-3 rounded text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Proceed to Guardian Info</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                Step 2: Parent & Guardian Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Father’s / Guardian’s Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Mother’s Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.motherName}
                    onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                    placeholder="e.g. Sunita Devi"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Primary Contact Mobile Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Residential Address *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. Ward No. 4, Gamharia, Singheshwar, Madhepura"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 rounded bg-[#faf9f5] text-[#5c6b64] text-sm font-semibold hover:bg-[#e9e8e4] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.fatherName || !formData.phone) {
                      alert('Please provide parent name and contact number.');
                      return;
                    }
                    setCurrentStep(3);
                  }}
                  className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white px-6 py-3 rounded text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Proceed to School & Transport</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                Step 3: Academic History & Transport Request
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    Previous School Attended (If any)
                  </label>
                  <input
                    type="text"
                    value={formData.previousSchool}
                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                    placeholder="e.g. St. Joseph Convent / DAV School"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                    School Bus Transport Required?
                  </label>
                  <select
                    value={formData.transportRequired}
                    onChange={(e) => setFormData({ ...formData, transportRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  >
                    <option>Yes (Required)</option>
                    <option>No (Self Commute)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e1e7e2] space-y-2 text-xs text-[#5c6b64]">
                <p className="font-bold text-[#0b2b1b]">Important Undertaking:</p>
                <p>
                  I hereby declare that the information provided above is true and authentic to the best of my knowledge. I understand that admission will be formalized upon successfully clearing the qualifying test and submitting the required Transfer Certificate and Birth Certificate.
                </p>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded bg-[#faf9f5] text-[#5c6b64] text-sm font-semibold hover:bg-[#e9e8e4] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>Submit Registration & Generate Slip</span>
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                </button>
              </div>
            </form>
          )}

          {currentStep === 4 && applicationId && (
            <div className="bg-[#faf9f5] p-8 rounded-2xl border-2 border-[#c5a059] space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#0f3822] text-[#d4af37] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block">
                  Registration Successfully Logged
                </span>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#0b2b1b]">
                  Admission Registration Slip
                </h3>
                <p className="text-xs text-[#5c6b64]">
                  Please quote this Application ID for all future communications and diagnostic assessment scheduling.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#f0f4f1] border border-[#e1e7e2] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                <div>
                  <span className="text-[#5c6b64]">Application Reference No:</span>
                  <p className="text-lg font-bold text-[#0f3822] font-mono">{applicationId}</p>
                </div>
                <div>
                  <span className="text-[#5c6b64]">Grade Applying:</span>
                  <p className="font-semibold text-[#0b2b1b]">{formData.grade}</p>
                </div>
                <div>
                  <span className="text-[#5c6b64]">Student Name:</span>
                  <p className="font-semibold text-[#0b2b1b]">{formData.studentName}</p>
                </div>
                <div>
                  <span className="text-[#5c6b64]">Parent / Contact:</span>
                  <p className="font-semibold text-[#0b2b1b]">{formData.fatherName} ({formData.phone})</p>
                </div>
                <div>
                  <span className="text-[#5c6b64]">Admission Status:</span>
                  <p className="font-semibold text-[#c5a059] uppercase">Pending Diagnostic Assessment</p>
                </div>
                <div>
                  <span className="text-[#5c6b64]">Concession Eligibility:</span>
                  <p className="font-semibold text-[#2e6f48]">Eligible for 50% Early Bird Concession</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e1e7e2]">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setApplicationId(null);
                  }}
                  className="text-xs text-[#0f3822] font-semibold hover:underline cursor-pointer"
                >
                  Submit Another Application
                </button>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="bg-[#0f3822] hover:bg-[#0b2b1b] text-white px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Printer className="w-4 h-4 text-[#d4af37]" />
                    <span>Print Confirmation Slip</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Transparent Fee Schedule Table */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
              Transparent Institutional Policy
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
              Fee Structure Schedule (Session 2024-25)
            </h3>
            <p className="text-xs text-[#5c6b64] mt-1">
              All fees are compliant with CBSE norms and Bihar state education guidelines. No hidden capitation fees.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#faf9f5] rounded-2xl border border-[#e1e7e2] shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-[#f0f4f1] text-[#0b2b1b] font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-4 px-6">Class Wing / Grade</th>
                  <th className="py-4 px-6">One-Time Admission Fee</th>
                  <th className="py-4 px-6">Composite Monthly Tuition</th>
                  <th className="py-4 px-6">Annual Examination Fee</th>
                  <th className="py-4 px-6">Sports & Activity Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1e7e2] text-[#2c3e37]">
                {FEE_STRUCTURE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f0f4f1]/50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[#0b2b1b]">{row.grade}</td>
                    <td className="py-3.5 px-6">{row.admissionFee}</td>
                    <td className="py-3.5 px-6 font-semibold text-[#0f3822]">{row.monthlyTuition}</td>
                    <td className="py-3.5 px-6">{row.examFeeAnnual}</td>
                    <td className="py-3.5 px-6">{row.activityFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-[#5c6b64]">
            * Note: School transport fee is billed separately according to route distance slabs ranging from ₹600 to ₹1,200 per month.
          </p>
        </div>
      </section>
    </div>
  );
};
