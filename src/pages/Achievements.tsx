import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Award, Star } from 'lucide-react';

const achievements = [
  {
    year: '2025',
    title: 'Academic Proficiency Awards',
    description: 'Learners were recognised for outstanding subject performance and dedication during the annual Celebration of Proficiency Day, receiving trophies and certificates.',
    icon: Trophy,
    highlight: true,
  },
  {
    year: 'Ongoing',
    title: 'Award-Winning Environmental Club',
    description: 'The Mzamba CHS environmental club has earned recognition for its conservation, recycling and community greening initiatives.',
    icon: Award,
    highlight: false,
  },
  {
    year: 'Ongoing',
    title: 'School Choir & Cultural Activities',
    description: 'The school maintains an active choir and cultural programme that builds confidence, discipline and school spirit.',
    icon: Star,
    highlight: false,
  },
  {
    year: 'Annual',
    title: 'Sports Participation',
    description: 'Learners compete in soccer, netball and athletics, developing teamwork, fitness and leadership on and off the field.',
    icon: TrendingUp,
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

        {/* Highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden mb-12 shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #0F172A 100%)' }}
        >
          <div className="p-8 sm:p-12 text-center text-white">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Trophy size={36} style={{ color: '#D4AF37' }} />
              </div>
            </div>
            <p className="text-white/70 uppercase tracking-widest text-sm font-bold mb-2">Academic Excellence</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Excellence in Education</h2>
            <p className="text-xl text-white/80 mb-1">Celebrating Our Learners & Educators</p>
            <p className="text-white/60 mb-6">Academic Awards, Sports, Culture & Environmental Leadership</p>
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold">#StriveForSuccess</span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold">#MzambaCHS</span>
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
              className={`rounded-2xl p-6 border-2 ${a.highlight ? 'border-[#1B2A4A] bg-red-50' : 'border-gray-100 bg-white'} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1B2A4A]/10 text-[#1B2A4A] shrink-0">
                  <a.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#1B2A4A] uppercase tracking-widest">{a.year}</span>
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
