import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    title: '2026 Applications Now Open',
    date: 'May 2026',
    summary: 'Applications for the 2026 academic year are now open. We accept learners from Grade 8 to Grade 12.',
    category: 'Admissions',
    link: '/admissions'
  },
  {
    title: '82% Matric Pass Rate',
    date: '2023',
    summary: 'Our learners achieved an 82% matric pass rate — progress begins here.',
    category: 'Results',
    link: '/achievements'
  },
  {
    title: 'CAPS Curriculum',
    date: 'Ongoing',
    summary: 'Full academic programme from Grade 8 to 12 including Commerce, Sciences, and Arts streams.',
    category: 'Academics',
    link: '/subjects'
  },
];

export const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Single News Card with Red Border */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div 
            className="bg-white rounded-2xl p-8 relative"
            style={{ border: '3px solid #800000' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#800000' }}>
                  <Calendar size={16} />
                  <span>{newsItems[current].date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{newsItems[current].title}</h3>
                <p className="text-gray-600 mb-4">{newsItems[current].summary}</p>
                <a 
                  href={newsItems[current].link} 
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ color: '#800000' }}
                >
                  View All <ArrowRight size={16} />
                </a>
              </motion.div>
            </AnimatePresence>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {newsItems.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-6' : 'w-2 bg-gray-300'}`}
                  style={{ backgroundColor: i === current ? '#800000' : undefined }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Motto */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-400 uppercase tracking-widest mb-2">Our Motto</p>
          <p className="text-3xl md:text-4xl font-light italic" style={{ color: '#800000' }}>
            "Progress Begins Here"
          </p>
        </div>
      </section>
    </div>
  );
};
