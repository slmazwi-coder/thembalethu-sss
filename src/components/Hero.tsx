import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const slides = [
  { 
    url: '/assets/hero/tehero1.png', 
    title: 'Progress Begins Here',
    subtitle: 'Thembalethu Senior Secondary School',
    btn: 'Apply Now',
    link: '/admissions'
  },
  { 
    url: '/assets/hero/tehero3.png', 
    title: 'Quality Education',
    subtitle: 'CAPS Curriculum Grade 8-12',
    btn: 'View Subjects',
    link: '/subjects'
  },
  { 
    url: '/assets/hero/tehero4.png', 
    title: 'Dedicated Staff',
    subtitle: '29 Educators for 1187 Learners',
    btn: 'Meet Our Staff',
    link: '/staff'
  },
  { 
    url: '/assets/hero/tehero5.png', 
    title: 'Holistic Learning',
    subtitle: 'Sports, Arts & Academic Excellence',
    btn: 'Achievements',
    link: '/achievements'
  },
];

const newsItems = [
  {
    title: '2026 Applications Now Open',
    date: 'May 2026',
    summary: 'Applications for the 2026 academic year are now open. We accept learners from Grade 8 to Grade 12.',
    link: '/admissions'
  },
  {
    title: '82% Matric Pass Rate',
    date: '2023',
    summary: 'Our learners achieved an 82% matric pass rate — progress begins here.',
    link: '/achievements'
  },
  {
    title: 'CAPS Curriculum',
    date: 'Ongoing',
    summary: 'Full academic programme from Grade 8 to 12 including Commerce, Sciences, and Arts streams.',
    link: '/subjects'
  },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[420px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={slide.url} alt={slide.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/90 via-[#800000]/60 to-transparent" />
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6">{slide.subtitle}</p>
            <a href={slide.link} className="inline-flex items-center gap-2 bg-white text-[#800000] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              {slide.btn}
            </a>
          </motion.div>
        </div>

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition">
          <ChevronLeft size={28} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition">
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* Logo overlapping - cut off from hero */}
      <div className="relative -mt-12 flex justify-center z-10">
        <div className="relative">
          <div className="absolute -inset-3 bg-[#DC143C] rounded-full opacity-25 blur-lg"></div>
          <img 
            src="/assets/logo/telogo.png" 
            alt="Logo" 
            className="relative w-20 h-20 rounded-full border-3 border-white shadow-xl bg-white"
          />
        </div>
      </div>

      {/* Rotating News Card - directly below logo */}
      <div className="pt-10 pb-8 bg-gray-50 -mt-4">
        <div className="max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNews}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-xl p-6 text-center"
              style={{ border: '2px solid #800000' }}
            >
              <div className="flex items-center justify-center gap-2 text-xs font-semibold mb-2" style={{ color: '#800000' }}>
                <Calendar size={14} />
                <span>{newsItems[currentNews].date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{newsItems[currentNews].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{newsItems[currentNews].summary}</p>
              <a href={newsItems[currentNews].link} className="inline-flex items-center gap-1 font-semibold text-sm" style={{ color: '#800000' }}>
                View All <ArrowRight size={14} />
              </a>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-2 mt-4">
            {newsItems.map((_, i) => (
              <button key={i} onClick={() => setCurrentNews(i)} className={`h-1.5 rounded-full transition-all ${i === currentNews ? 'w-5' : 'w-1.5 bg-gray-300'}`} style={{ backgroundColor: i === currentNews ? '#800000' : undefined }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
