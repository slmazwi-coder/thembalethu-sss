import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, TrendingUp, Users, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Matric Pass Rate', value: '82%', icon: TrendingUp },
  { label: 'Total Learners', value: '1,187', icon: Users },
  { label: 'Educators', value: '29', icon: Award },
];

const updates = [
  {
    category: 'Admissions',
    title: '2026 Applications Open',
    desc: 'Applications for the 2026 academic year are now open. We accept learners from Grade 8 to Grade 12.',
    link: '/admissions',
    color: '#800000'
  },
  {
    category: 'Academics',
    title: 'CAPS Curriculum',
    desc: 'Full academic programme from Grade 8 to 12 including Commerce, Sciences, and Arts streams.',
    link: '/subjects',
    color: '#DC143C'
  },
  {
    category: 'Results',
    title: '82% Pass Rate',
    desc: 'Our learners achieved an 82% matric pass rate — progress begins here.',
    link: '/achievements',
    color: '#5c0000'
  },
];

export const Home = () => {
  const [currentUpdate, setCurrentUpdate] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Single Rotating Update Card */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentUpdate}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="card text-center py-8 px-6"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ backgroundColor: updates[currentUpdate].color }}>
                {updates[currentUpdate].category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{updates[currentUpdate].title}</h3>
              <p className="text-gray-600 mb-4 max-w-lg mx-auto">{updates[currentUpdate].desc}</p>
              <a href={updates[currentUpdate].link} className="inline-flex items-center gap-2 font-semibold" style={{ color: updates[currentUpdate].color }}>
                Learn more <ArrowRight size={18} />
              </a>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-4">
            {updates.map((_, i) => (
              <button key={i} onClick={() => setCurrentUpdate(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentUpdate ? 'w-6' : 'bg-gray-300'}`} style={{ backgroundColor: i === currentUpdate ? '#800000' : undefined }} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 shadow-lg"
              >
                <p className="text-4xl font-bold" style={{ color: '#800000' }}>{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#800000' }}>Our Motto</h2>
          <p className="text-2xl text-gray-700 italic mb-4">"Progress Begins Here"</p>
          <p className="text-gray-500">
            A Section 21, Quintile 4 public school in Shayamoya, Kokstad — preparing learners for the National Senior Certificate from Grade 8 through Grade 12.
          </p>
        </div>
      </section>
    </div>
  );
};
