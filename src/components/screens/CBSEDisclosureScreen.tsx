import React from 'react';
import { ScreenPath } from '../../types';
import { CBSE_DISCLOSURE_INFO, SCHOOL_INFO } from '../../data/schoolData';
import { ShieldCheck, FileCheck, CheckCircle2, Download, Building, Users } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const CBSEDisclosureScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Statutory Compliance</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            CBSE Mandatory Public Disclosure
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            In compliance with Central Board of Secondary Education (CBSE) Circular No. 03/2021 dated 05.03.2021, the following institutional documents and academic details are uploaded for public transparency.
          </p>
        </div>
      </section>

      {/* Tables A to E */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-12">
        {/* Section A: General Information */}
        <div className="bg-[#faf9f5] rounded-2xl border border-[#e1e7e2] overflow-hidden shadow-sm">
          <div className="bg-[#0f3822] text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white">
              A: General Information
            </h3>
            <span className="text-xs text-[#d4af37] font-mono">Affiliation: 331149</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <tbody className="divide-y divide-[#e1e7e2] text-[#2c3e37]">
                <tr>
                  <td className="py-3.5 px-6 font-semibold w-1/3 bg-[#f0f4f1]/60">Name of the School</td>
                  <td className="py-3.5 px-6 font-bold text-[#0b2b1b]">{SCHOOL_INFO.name}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Affiliation No. (CBSE)</td>
                  <td className="py-3.5 px-6 font-bold text-[#0f3822]">{CBSE_DISCLOSURE_INFO.affiliationNumber}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">School Code</td>
                  <td className="py-3.5 px-6 font-bold text-[#0f3822]">{CBSE_DISCLOSURE_INFO.schoolCode}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Complete Address with PIN Code</td>
                  <td className="py-3.5 px-6">{SCHOOL_INFO.address}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Principal Name & Qualifications</td>
                  <td className="py-3.5 px-6 font-semibold">{CBSE_DISCLOSURE_INFO.principalName}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">School Email ID</td>
                  <td className="py-3.5 px-6 font-semibold text-[#0f3822]">{SCHOOL_INFO.email}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Contact Details</td>
                  <td className="py-3.5 px-6">{SCHOOL_INFO.phone1} / {SCHOOL_INFO.phone2}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section B: Documents & Information */}
        <div className="bg-[#faf9f5] rounded-2xl border border-[#e1e7e2] overflow-hidden shadow-sm">
          <div className="bg-[#0f3822] text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white">
              B: Documents & Certifications
            </h3>
            <span className="text-xs text-[#d4af37]">Verified Status</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-[#f0f4f1] text-[#0b2b1b] uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-6">Document Type</th>
                  <th className="py-3 px-6">Issuing Authority</th>
                  <th className="py-3 px-6">Verification Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1e7e2] text-[#2c3e37]">
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Affiliation Letter from CBSE</td>
                  <td className="py-3.5 px-6">Central Board of Secondary Education, Delhi</td>
                  <td className="py-3.5 px-6 text-[#0f3822] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2e6f48]" /> Verified on SARAS Portal
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Trust Registration Deed</td>
                  <td className="py-3.5 px-6">Registrar of Societies & Trusts, Bihar</td>
                  <td className="py-3.5 px-6 text-[#0f3822] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2e6f48]" /> Akshar Foundation Regd.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">No Objection Certificate (NOC)</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.nocIssuingAuthority}</td>
                  <td className="py-3.5 px-6 text-[#0f3822] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2e6f48]" /> Valid & Enforced
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Building Safety Certificate</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.buildingSafetyCert}</td>
                  <td className="py-3.5 px-6 text-[#0f3822] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2e6f48]" /> Structural Fitness Passed
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Fire Safety Certificate</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.fireSafetyCert}</td>
                  <td className="py-3.5 px-6 text-[#0f3822] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2e6f48]" /> Full Fire Hydrant NOC
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold">Water, Health & Sanitation Certificate</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.waterSanitationCert}</td>
                  <td className="py-3.5 px-6 text-[#0f3822] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2e6f48]" /> PHED Lab Verified Potable
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section E: Infrastructure Details */}
        <div className="bg-[#faf9f5] rounded-2xl border border-[#e1e7e2] overflow-hidden shadow-sm">
          <div className="bg-[#0f3822] text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white">
              E: Campus Infrastructure & Room Sizing
            </h3>
            <span className="text-xs text-[#d4af37]">Physical Assets</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <tbody className="divide-y divide-[#e1e7e2] text-[#2c3e37]">
                <tr>
                  <td className="py-3.5 px-6 font-semibold w-1/3 bg-[#f0f4f1]/60">Total Campus Land Area</td>
                  <td className="py-3.5 px-6 font-bold">{CBSE_DISCLOSURE_INFO.landArea}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Number of Classrooms</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.classroomsCount}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Science Laboratories</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.compositeScienceLab}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Computer Laboratories</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.computerLab}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold bg-[#f0f4f1]/60">Library & Reading Hall</td>
                  <td className="py-3.5 px-6">{CBSE_DISCLOSURE_INFO.libraryCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
