import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Music, Users, Star, Dumbbell, Target, BookOpen, Mic, Volleyball } from 'lucide-react';
import { getActivities, type Activity } from '../admin/utils/storage';

const accolades = [
  { title: "District Football Champions", year: "2024", category: "Sport" },
  { title: "Provincial Netball Participants", year: "2024", category: "Sport" },
  { title: "District Athletics Meet Qualifiers", year: "2024", category: "Sport" },
  { title: "Provincial Debate Participants", year: "2023", category: "Academic" },
  { title: "District Choir Competition Qualifiers", year: "2023", category: "Culture" },
];

const ProgramCard: React.FC<{ prog: Activity }> = ({ prog }) => {
  const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
    'Football': Target, 'Netball': Users, 'Athletics': Trophy, 'Volleyball': Volleyball,
    'Debating': Mic, 'Maths Olympiad': BookOpen, 'Science Club': Star,
    'Choir': Music, 'Cultural Dance': Music,
  };
  const Icon = iconMap[prog.name] || Star;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
    >
      <div className="aspect-video bg-school-blue/10 flex items-center justify-center relative">
        <Icon size={64} className="text-school-blue/40" />
        <div className="absolute inset-0 bg-school-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Icon size={48} className="text-white" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
            prog.category === 'Sport' ? 'bg-blue-100 text-blue-700' :
            prog.category === 'Academic' ? 'bg-purple-100 text-purple-700' :
            'bg-orange-100 text-orange-700'
          }`}>{prog.category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{prog.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{prog.description}</p>
      </div>
    </motion.div>
  );
};

export const ExtraCurricular = () => {
  const [activities, setActivities] = useState<Activity[]>(getActivities());

  useEffect(() => {
    setActivities(getActivities());
  }, []);

  const sportsPrograms = activities.filter(a => a.category === 'Sport');
  const academicPrograms = activities.filter(a => a.category === 'Academic');
  const culturePrograms = activities.filter(a => a.category === 'Culture');

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-center">Sports & Culture</h1>

        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          At Thembalethu SSS, we believe in a holistic education. Our extra-curricular programs are designed to discover and nurture the diverse talents of our learners.
        </p>

        {/* Sports */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-school-blue mb-8 flex items-center gap-3">
            <Dumbbell className="text-school-blue" /> Sports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsPrograms.map(prog => <ProgramCard key={prog.id} prog={prog} />)}
          </div>
        </section>

        {/* Academic */}
        {academicPrograms.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-school-blue mb-8 flex items-center gap-3">
              <BookOpen className="text-school-blue" /> Academic
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicPrograms.map(prog => <ProgramCard key={prog.id} prog={prog} />)}
            </div>
          </section>
        )}

        {/* Culture */}
        {culturePrograms.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-school-blue mb-8 flex items-center gap-3">
              <Music className="text-school-blue" /> Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturePrograms.map(prog => <ProgramCard key={prog.id} prog={prog} />)}
            </div>
          </section>
        )}

        {/* Accolades */}
        <section>
          <h2 className="text-2xl font-bold text-school-blue mb-8 flex items-center gap-3">
            <Star className="text-school-blue" /> Accolades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accolades.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#C9A84C' }}>
                  <Trophy size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{a.title}</p>
                  <p className="text-xs text-gray-500">{a.year} &middot; {a.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
