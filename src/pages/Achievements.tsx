import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Award, Star } from 'lucide-react';

const achievements = [
  {
    year: '2023',
    title: 'Matric Pass Rate 82%',
    description: 'Our learners achieved an 82% matric pass rate — progress begins here.',
    icon: Trophy,
    highlight: true,
  },
  {
    year: 'Ongoing',
    title: 'Sports & Athletics',
    description: 'Our learners participate in football, netball, athletics and volleyball, regularly competing at district and provincial levels.',
    icon: Award,
    highlight: false,
  },
  {
    year: 'Ongoing',
    title: 'Academic Clubs',
    description: 'From debating to mathematics olympiad preparation, our academic clubs push learners to excel and compete.',
    icon: Star,
    highlight: false,
  },
];

export const Achievements = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Achievements</h1>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-12 -mt-4">
          We celebrate the academic excellence and extracurricular accomplishments of our learners and staff.
        </p>

        {/* Matric highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden mb-12 shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #800000 0%, #5c0000 100%)' }}
        >
          <div className="p-8 sm:p-12 text-center text-white">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Trophy size={36} style={{ color: '#DC143C' }} />
              </div>
            </div>
            <p className="text-white/70 uppercase tracking-widest text-sm font-bold mb-2">Class of 2023</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">82%</h2>
            <p className="text-xl text-white/80 mb-1">Matric Pass Rate</p>
            <p className="text-white/60 mb-6">Thembalethu SSS continues to strive for excellence</p>
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold">#ProgressBeginsHere</span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold">#ThembalethuSSS</span>
            </div>
          </div>
        </motion.div>

        {/* All achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl p-6 border-2 ${a.highlight ? 'border-[#800000] bg-red-50' : 'border-gray-100 bg-white'} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#800000]/10 text-[#800000] shrink-0">
                  <a.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#800000] uppercase tracking-widest">{a.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
