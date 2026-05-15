import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, Play, Pause, Volume2 } from 'lucide-react';

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

export const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Bigger Rotating News Card */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-xl p-8 text-center"
              style={{ border: '2px solid #800000' }}
            >
              <div className="flex items-center justify-center gap-2 text-xs font-semibold mb-3" style={{ color: '#800000' }}>
                <Calendar size={14} />
                <span>{newsItems[current].date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{newsItems[current].title}</h3>
              <p className="text-gray-600 mb-4">{newsItems[current].summary}</p>
              <a href={newsItems[current].link} className="inline-flex items-center gap-2 font-semibold" style={{ color: '#800000' }}>
                View All <ArrowRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-2 mt-4">
            {newsItems.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6' : 'w-1.5 bg-gray-300'}`} style={{ backgroundColor: i === current ? '#800000' : undefined }} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Player */}
      <section className="py-6 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            {/* Placeholder for video - replace with actual video URL */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#5c0000]"></div>
            <div className="relative text-center text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
              </div>
              <p className="text-sm font-medium">School Video Tour</p>
            </div>
            <div className="absolute bottom-3 right-3">
              <Volume2 size={20} className="text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Motto */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Our Motto</p>
          <p className="text-3xl md:text-4xl font-light italic" style={{ color: '#800000' }}>
            "Progress Begins Here"
          </p>
        </div>
      </section>
    </div>
  );
};
