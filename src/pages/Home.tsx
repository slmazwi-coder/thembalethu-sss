import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Megaphone, ArrowRight, BookOpen } from 'lucide-react';

const stats = [
  { label: 'Matric Pass Rate 2023', value: '82%', icon: TrendingUp },
  { label: 'Total Learners', value: '1,187', icon: Users },
  { label: 'Educators', value: '29', icon: Award },
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Notices */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-blue-100 text-school-blue shrink-0">
                <Megaphone size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-school-blue">Notice</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white border border-blue-100 text-gray-700">2026</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">2026 Admissions applications are open</h3>
                <p className="text-gray-700 mt-1">Applications for the <span className="font-bold">2026</span> academic year are now open. Grades 8–12.</p>
                <a href="/admissions" className="mt-4 inline-flex items-center gap-2 text-school-blue font-bold">
                  Apply now <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-7 flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white border border-amber-100 text-school-blue shrink-0">
                <BookOpen size={22} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-black uppercase tracking-widest text-school-blue">Academics</div>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white border border-amber-100 text-gray-700">CAPS</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-2">Comprehensive CAPS curriculum</h3>
                <p className="text-gray-700 mt-1">Full academic programme from Grade 8 to 12 including Commerce, Sciences, and Arts.</p>
                <a href="/subjects" className="mt-4 inline-flex items-center gap-2 text-school-blue font-bold">
                  View subjects <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 -mt-4 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border-b-4 border-school-blue"
            >
              <div className="p-4 bg-blue-50 rounded-xl text-school-blue">
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
            "Progress Begins Here in All We Do"
          </p>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            A Section 21, Quintile 4 public school in Kokstad, KwaZulu-Natal — 
            nestled in the shadow of the majestic Mount Currie mountain, preparing learners for the National Senior Certificate from Grade 8 through Grade 12.
          </p>
        </div>
      </section>
    </div>
  );
};
