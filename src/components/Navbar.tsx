import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Staff', path: '/staff' },
  { name: 'Subjects', path: '/subjects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Activities', path: '/activities' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="glass-nav w-full">
      <div className="w-full" style={{ background: 'linear-gradient(90deg, #800000 0%, #800000 60%, #5c0000 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
              <img
                src="/assets/logo/telogo.png"
                alt="Thembalethu SSS Logo"
                className="h-10 w-10 shrink-0 rounded-lg shadow-md object-contain bg-white p-0.5"
              />
              <div className="min-w-0">
                <span className="md:hidden text-sm font-bold text-white block leading-tight">Thembalethu SSS</span>
                <span className="hidden md:block text-base font-bold text-white leading-tight">Thembalethu Senior Secondary School</span>
                <span className="text-xs font-semibold tracking-wide uppercase text-white/80">Progress Begins Here</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link to="/student/login" className={cn('px-4 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2', location.pathname.startsWith('/student') ? 'text-school-blue bg-white' : 'text-white border border-white hover:bg-white hover:text-school-blue')}>
                <User size={15} /> Student Portal
              </Link>
            </div>
            <div className="md:hidden flex items-center shrink-0 ml-2">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-white/80 p-2" aria-label="Open menu">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-gray-50 w-full border-b-2" style={{ borderColor: '#DC143C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-x-1 gap-y-0 py-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={cn('px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap', location.pathname === link.path ? 'text-white bg-school-blue font-semibold' : 'text-gray-600 hover:text-school-blue hover:bg-gray-100')}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={cn('flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors', location.pathname === link.path ? 'text-school-blue bg-blue-50 font-semibold' : 'text-gray-700 hover:text-school-blue hover:bg-gray-50')}>
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Link to="/student/login" onClick={() => setIsOpen(false)} className={cn('flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-colors', location.pathname.startsWith('/student') ? 'text-white bg-school-blue' : 'text-school-blue bg-blue-50 hover:bg-blue-100')}>
                <User size={15} /> Student Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
