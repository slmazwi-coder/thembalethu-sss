import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1B2A4A] text-white pt-10 pb-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          {/* Col 1 — Logo + Name - blends with footer */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/logo/logo.png"
                alt="Mzamba CHS Logo"
                className="h-14 w-14 shrink-0 rounded-lg shadow-md object-contain bg-white/10"
              />
              <div>
                <h3 className="text-base font-bold leading-tight">Mzamba Comprehensive High School</h3>
                <p className="text-sm italic mt-0.5" style={{ color: '#D4AF37' }}>"Strive for success"</p>
              </div>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>Esikhumbeni A/A, Mzamba Location, Bizana, 4800, Eastern Cape</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>039 251 3715</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>200500824@ecschools.org.za</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link to="/subjects" className="hover:text-white">Subjects</Link></li>
              <li><Link to="/achievements" className="hover:text-white">Achievements</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-4 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Mzamba Comprehensive High School. All rights reserved.
          <p className="mt-1 text-xs text-white/40">Bizana, Alfred Nzo East District, Eastern Cape &middot; Quintile 2 &middot; No-Fee School &middot; EMIS: 200500824</p>
          <Link to="/admin/login" className="text-white/30 hover:text-white/60 text-xs mt-2 inline-block transition-colors">Staff Portal</Link>
        </div>
      </div>
    </footer>
  );
};
