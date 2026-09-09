import React, { useState } from 'react';
import { ScreenPath } from '../../types';
import { SCHOOL_INFO } from '../../data/schoolData';
import {
  UserCheck,
  Lock,
  User,
  CheckCircle2,
  Calendar,
  FileSpreadsheet,
  CreditCard,
  Bell,
  BookOpen,
  LogOut,
  Sparkles,
} from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const SchoolERPScreen: React.FC<Props> = ({ onNavigate }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'Student' | 'Parent' | 'Staff'>('Student');
  const [username, setUsername] = useState('GIS-2023-4412');
  const [password, setPassword] = useState('password123');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>GIS e-Campus Management System</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            Greenfield School ERP Portal
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            Secure digital access for students, parents, and faculty. Real-time attendance monitoring, academic marksheets, fee payment ledger, and circular tracking.
          </p>
        </div>
      </section>

      {/* Main Area */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16">
        {!isLoggedIn ? (
          /* Login Form */
          <div className="max-w-md mx-auto bg-[#f0f4f1] p-8 md:p-10 rounded-2xl border border-[#e1e7e2] shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#0f3822] text-[#d4af37] flex items-center justify-center mx-auto shadow-md">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0b2b1b]">
                Sign In to ERP Portal
              </h3>
              <p className="text-xs text-[#5c6b64]">Enter your school issued credentials</p>
            </div>

            {/* Role Switcher */}
            <div className="grid grid-cols-3 gap-1 bg-[#faf9f5] p-1 rounded-lg border border-[#e1e7e2]">
              {(['Student', 'Parent', 'Staff'] as const).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setUserRole(role)}
                  className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    userRole === role
                      ? 'bg-[#0f3822] text-white'
                      : 'text-[#5c6b64] hover:text-[#0b2b1b]'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                  Admission No. / User ID
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#5c6b64] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2c3e37] uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#5c6b64] absolute left-3 top-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded bg-[#faf9f5] border border-[#e1e7e2] text-sm text-[#1a2421] outline-none focus:ring-2 focus:ring-[#1b5e39]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#5c6b64]">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-[#0f3822]" />
                  <span>Remember session</span>
                </label>
                <a href="#help" className="text-[#0f3822] font-semibold hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f3822] hover:bg-[#0b2b1b] text-white py-3 rounded text-sm font-semibold transition-colors cursor-pointer shadow-md"
              >
                Sign In to Dashboard
              </button>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-[#5c6b64] block">
                  Quick Demo: Click <strong>"Sign In to Dashboard"</strong> directly to preview.
                </span>
              </div>
            </form>
          </div>
        ) : (
          /* Logged In Dashboard View */
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Student Profile Card */}
            <div className="bg-[#f0f4f1] p-6 md:p-8 rounded-2xl border border-[#e1e7e2] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#0f3822] text-[#d4af37] font-['Playfair_Display'] text-2xl font-bold flex items-center justify-center shadow-md">
                  AK
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0b2b1b]">
                      Aarav Kumar
                    </h3>
                    <span className="bg-[#0f3822] text-[#d4af37] text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                      Class IX - A
                    </span>
                  </div>
                  <p className="text-xs text-[#5c6b64] mt-0.5">
                    Admission No: <strong>GIS-2021-0842</strong> • House: <strong className="text-red-700">Agni House</strong> • Roll No: 14
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-[#faf9f5] hover:bg-[#e9e8e4] text-xs font-semibold text-[#0b2b1b] flex items-center gap-2 border border-[#e1e7e2] cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#faf9f5] p-6 rounded-2xl border border-[#e1e7e2] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#0f3822]">
                  <span className="text-xs font-bold uppercase text-[#c5a059]">Attendance</span>
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-[#0b2b1b]">94.2%</div>
                <p className="text-xs text-[#2e6f48] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High regular attendance
                </p>
              </div>

              <div className="bg-[#faf9f5] p-6 rounded-2xl border border-[#e1e7e2] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#0f3822]">
                  <span className="text-xs font-bold uppercase text-[#c5a059]">Latest Grade</span>
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-[#0b2b1b]">A1 (91%)</div>
                <p className="text-xs text-[#5c6b64]">Term 1 Evaluation</p>
              </div>

              <div className="bg-[#faf9f5] p-6 rounded-2xl border border-[#e1e7e2] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#0f3822]">
                  <span className="text-xs font-bold uppercase text-[#c5a059]">Fee Balance</span>
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-[#2e6f48]">₹ 0.00</div>
                <p className="text-xs text-[#5c6b64]">All dues cleared till March 2024</p>
              </div>

              <div className="bg-[#faf9f5] p-6 rounded-2xl border border-[#e1e7e2] shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#0f3822]">
                  <span className="text-xs font-bold uppercase text-[#c5a059]">Upcoming Exam</span>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-xl font-bold text-[#0b2b1b]">Annual Board Prep</div>
                <p className="text-xs text-[#5c6b64]">Commencing March 4, 2024</p>
              </div>
            </div>

            {/* Academic Marksheet Table */}
            <div className="bg-[#faf9f5] rounded-2xl p-6 md:p-8 border border-[#e1e7e2] shadow-sm space-y-4">
              <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#0b2b1b]">
                Term 1 Academic Performance Summary
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-[#f0f4f1] text-[#0b2b1b] font-semibold uppercase text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Subject</th>
                      <th className="py-3 px-4">Max Marks</th>
                      <th className="py-3 px-4">Marks Scored</th>
                      <th className="py-3 px-4">Subject Grade</th>
                      <th className="py-3 px-4">Teacher Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e1e7e2] text-[#2c3e37]">
                    <tr>
                      <td className="py-3 px-4 font-semibold">English Language & Literature</td>
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 font-bold text-[#0f3822]">92</td>
                      <td className="py-3 px-4 font-bold">A1</td>
                      <td className="py-3 px-4 text-[#5c6b64]">Exceptional creative expression</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Mathematics</td>
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 font-bold text-[#0f3822]">95</td>
                      <td className="py-3 px-4 font-bold">A1</td>
                      <td className="py-3 px-4 text-[#5c6b64]">Strong algebraic problem solving</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Science (Physics / Chemistry / Bio)</td>
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 font-bold text-[#0f3822]">88</td>
                      <td className="py-3 px-4 font-bold">A2</td>
                      <td className="py-3 px-4 text-[#5c6b64]">Excellent laboratory demonstration</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Social Science</td>
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 font-bold text-[#0f3822]">90</td>
                      <td className="py-3 px-4 font-bold">A1</td>
                      <td className="py-3 px-4 text-[#5c6b64]">Consistent analytical writing</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Hindi Course A</td>
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 font-bold text-[#0f3822]">89</td>
                      <td className="py-3 px-4 font-bold">A2</td>
                      <td className="py-3 px-4 text-[#5c6b64]">Good poetic understanding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
