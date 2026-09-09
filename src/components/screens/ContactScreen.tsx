import React, { useState } from 'react';
import { ScreenPath } from '../../types';
import { SCHOOL_INFO } from '../../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, Bus, Building } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const ContactScreen: React.FC<Props> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Campus Location & Support</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            Contact & Campus Directions
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            We welcome visits by parents, educators, and guardians. Reach out to our administrative desk or plan an in-person tour of our academic wings and sports grounds.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
                Reach Our Helpdesk
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl font-semibold text-[#0b2b1b]">
                Administrative Office
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-2">
                <div className="flex items-center gap-2 text-[#0f3822] font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-[#c5a059]" />
                  <span>Campus Physical Address</span>
                </div>
                <p className="text-xs md:text-sm text-[#2c3e37] leading-relaxed">
                  {SCHOOL_INFO.name}
                  <br />
                  Gamharia Road, Singheshwar, District Madhepura, Bihar - 852128
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-2">
                <div className="flex items-center gap-2 text-[#0f3822] font-semibold text-sm">
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Direct Telephone Lines</span>
                </div>
                <div className="space-y-1 text-xs md:text-sm text-[#2c3e37]">
                  <p>Admission Desk: <a href="tel:6207110355" className="font-semibold text-[#0f3822] underline">{SCHOOL_INFO.phone1}</a></p>
                  <p>Accounts & Transport: <a href="tel:7646014575" className="font-semibold text-[#0f3822] underline">{SCHOOL_INFO.phone2}</a></p>
                  <p>Principal's Secretariat: <a href="tel:9431885544" className="font-semibold text-[#0f3822] underline">{SCHOOL_INFO.phone3}</a></p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-2">
                <div className="flex items-center gap-2 text-[#0f3822] font-semibold text-sm">
                  <Mail className="w-4 h-4 text-[#c5a059]" />
                  <span>Official Electronic Mail</span>
                </div>
                <div className="space-y-1 text-xs md:text-sm text-[#2c3e37]">
                  <p>Admissions: <a href={`mailto:${SCHOOL_INFO.email}`} className="font-semibold text-[#0f3822] underline">{SCHOOL_INFO.email}</a></p>
                  <p>Principal Desk: <a href="mailto:principal.gis@gmail.com" className="font-semibold text-[#0f3822] underline">principal.gis@gmail.com</a></p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0f4f1] border border-[#e1e7e2] space-y-2">
                <div className="flex items-center gap-2 text-[#0f3822] font-semibold text-sm">
                  <Clock className="w-4 h-4 text-[#c5a059]" />
                  <span>Visiting & Counter Timings</span>
                </div>
                <p className="text-xs md:text-sm text-[#2c3e37]">
                  Monday to Saturday: 08:00 AM – 03:30 PM (Except Gazetted Holidays)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7 bg-[#f0f4f1] p-8 md:p-10 rounded-2xl border border-[#e1e7e2] shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
                Direct Communication
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
                Send an Official Message
              </h3>
              <p className="text-xs text-[#5c6b64] mt-1">
                Whether you have queries regarding admissions, transport routing, or certifications, our office will reply swiftly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1">
                    Contact Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  >
                    <option>Admissions & Entrance Test</option>
                    <option>Transport Route Inquiries</option>
                    <option>Fee Structure & Scholarships</option>
                    <option>Transfer Certificate (TC) Request</option>
                    <option>General Campus Query</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please write your detailed query..."
                  className="w-full px-4 py-3 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f3822] hover:bg-[#0b2b1b] text-white py-3.5 rounded text-sm font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Message to Office</span>
                <Send className="w-4 h-4 text-[#d4af37]" />
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-[#abefbf] text-[#2e6f48] text-sm font-semibold border border-[#2e6f48]/20 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2e6f48] shrink-0" />
                  <span>Thank you! Your message has been routed to the office desk. Ticket reference #GIS-MSG-9122.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* How to reach Greenfield Guide */}
        <div className="bg-[#faf9f5] p-8 md:p-10 rounded-2xl border border-[#e1e7e2] space-y-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase text-[#c5a059] tracking-widest block mb-1">
              Travel & Route Guidance
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#0b2b1b]">
              How to Reach the Singheshwar Campus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f0f4f1] p-6 rounded-xl border border-[#e1e7e2] space-y-2">
              <div className="flex items-center gap-2 text-[#0f3822] font-semibold text-sm">
                <Navigation className="w-4 h-4 text-[#c5a059]" />
                <span>From Singheshwar Mandir</span>
              </div>
              <p className="text-xs text-[#5c6b64] leading-relaxed">
                Located approx 1.5 km along Gamharia Road from the famous historical Singheshwar Baba Temple Chowk. Auto-rickshaws available regularly.
              </p>
            </div>

            <div className="bg-[#f0f4f1] p-6 rounded-xl border border-[#e1e7e2] space-y-2">
              <div className="flex items-center gap-2 text-[#0f3822] font-semibold text-sm">
                <Building className="w-4 h-4 text-[#c5a059]" />
                <span>From Madhepura Town & Railway</span>
              </div>
              <p className="text-xs text-[#5c6b64] leading-relaxed">
                Around 9 km north via NH-106 / Madhepura-Singheshwar Highway. Direct buses, shared cabs, and school buses connect the corridor.
              </p>
            </div>

            <div className="bg-[#f0f4f1] p-6 rounded-xl border border-[#e1e7e2] space-y-2">
              <div className="flex items-center gap-2 text-[#0f3822] font-semibold text-sm">
                <Bus className="w-4 h-4 text-[#c5a059]" />
                <span>School Bus Pickup Points</span>
              </div>
              <p className="text-xs text-[#5c6b64] leading-relaxed">
                Dedicated GIS buses operate across Shankarpur, Pipra, Gamharia, Madhepura College Chowk, and Singheshwar Bazaar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
