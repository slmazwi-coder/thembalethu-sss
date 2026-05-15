import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-school-blue text-white pt-12 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Col 1 — Logo + Name */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/logo/telogo.png"
                alt="Thembalethu SSS Logo"
                className="h-12 w-12 shrink-0 rounded-xl border border-white/20 shadow-lg object-contain bg-white"
              />
              <div>
                <h3 className="text-base font-bold leading-tight">Thembalethu Senior Secondary School</h3>
                <p className="text-sm italic mt-0.5" style={{ color: '#C9A84C' }}>"Striving for Excellence in All We Do"</p>
              </div>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>99 Bhongweni Location, Kokstad, KwaZulu-Natal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+27 82 611 7032</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>Contact via Facebook</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — School Hours */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">School Hours</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex justify-between gap-4"><span>Mon – Fri</span><span className="font-medium">08:00 – 14:30</span></li>
              <li className="flex justify-between gap-4"><span>Sat – Sun</span><span className="font-medium">Closed</span></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#C9A84C' }}>2026 Admissions</h4>
              <a href="/admissions" className="text-sm text-white/80 hover:text-white underline">Apply online now</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-xs">
          <p>&copy; {new Date().getFullYear()} Thembalethu Senior Secondary School. All Rights Reserved.</p>
          <p className="mt-1 text-white/40">Kokstad, Harry Gwala District, KwaZulu-Natal &middot; Quintile 4 &middot; Section 21 Public School &middot; Established 2018</p>
          <Link to="/admin/login" className="text-white/30 hover:text-white/60 text-xs mt-2 inline-block transition-colors">
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};
