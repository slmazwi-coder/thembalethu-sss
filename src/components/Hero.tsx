import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.url}
          alt={slide.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/90 via-[#800000]/60 to-transparent" />
      </div>

      {/* Content */}
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
            {slide.btn} <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Logo at bottom - Rising Sun style */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-[#DC143C] rounded-full opacity-30 blur-xl"></div>
          <img 
            src="/assets/logo/telogo.png" 
            alt="Logo" 
            className="relative w-24 h-24 rounded-full border-4 border-white shadow-2xl bg-white"
          />
        </div>
      </div>

      {/* Navigation */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition" aria-label="Previous">
        <ChevronLeft size={28} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition" aria-label="Next">
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
