import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Megaphone, ArrowRight, BookOpen } from 'lucide-react';

const stats = [
  { label: 'Matric Pass Rate', value: '82%', icon: TrendingUp },
  { label: 'Total Learners', value: '1,187', icon: Users },
  { label: 'Educators', value: '29', icon: Award },
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Notices */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#800000] text-white">Admissions</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2026 Applications Open</h3>
              <p className="text-gray-600 mb-4 flex-1">Applications for the 2026 academic year are now open. We accept learners from Grade 8 to Grade 12.</p>
              <a href="/admissions" className="mt-auto inline-flex items-center gap-2 text-[#800000] font-semibold hover:underline">
                Apply now <ArrowRight size={18} />
              </a>
            </div>

            <div className="card flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#DC143C] text-white">Academics</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CAPS Curriculum</h3>
              <p className="text-gray-600 mb-4 flex-1">Full academic programme from Grade 8 to 12 including Commerce, Sciences, and Arts streams.</p>
              <a href="/subjects" className="mt-auto inline-flex items-center gap-2 text-[#800000] font-semibold hover:underline">
                View subjects <ArrowRight size={18} />
              </a>
            </div>

            <div className="card flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#5c0000] text-white">Results</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">82% Pass Rate</h3>
              <p className="text-gray-600 mb-4 flex-1">Our learners achieved an 82% matric pass rate — progress begins here.</p>
              <a href="/achievements" className="mt-auto inline-flex items-center gap-2 text-[#800000] font-semibold hover:underline">
                See achievements <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white -mt-4 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg flex items-center gap-6 border-b-4"
              style={{ borderBottomColor: '#800000' }}
            >
              <div className="p-4 bg-[#800000]/10 rounded-xl text-[#800000]">
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Our Motto</h2>
          <p className="text-2xl text-gray-700 leading-relaxed font-light italic">
            "Progress Begins Here"
          </p>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            A Section 21, Quintile 4 public school in Shayamoya, Kokstad, KwaZulu-Natal — preparing learners for the National Senior Certificate from Grade 8 through Grade 12.
          </p>
        </div>
      </section>
    </div>
  );
};
