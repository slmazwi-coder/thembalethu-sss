import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calculator, Globe, Languages, FlaskConical, Briefcase, Palette, Sprout } from 'lucide-react';

const subjects = [
  {
    category: 'Languages & Communication',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-700',
    items: [
      { name: 'isiXhosa Home Language', icon: Languages, description: 'Mother tongue development in reading, writing, oral communication and literature.' },
      { name: 'English First Additional Language', icon: Languages, description: 'English as a first additional language, building communication, comprehension and writing skills.' },
      { name: 'English Home Language', icon: Languages, description: 'Advanced English language and literature for learners with English as a home language.' },
    ]
  },
  {
    category: 'Mathematics & Sciences',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-school-blue',
    items: [
      { name: 'Mathematics', icon: Calculator, description: 'Mathematical reasoning, algebra, geometry, trigonometry and introductory calculus.' },
      { name: 'Mathematical Literacy', icon: Calculator, description: 'Practical mathematics applied to everyday life, finance and real-world problem solving.' },
      { name: 'Physical Sciences', icon: FlaskConical, description: 'Physics and chemistry — mechanics, electricity, chemical reactions and material science.' },
      { name: 'Life Sciences', icon: FlaskConical, description: 'Biology, ecology, human physiology and environmental studies.' },
      { name: 'Agricultural Sciences', icon: Sprout, description: 'Crop, animal and agricultural management studies linked to sustainable farming and food security.' },
    ]
  },
  {
    category: 'Social & Commercial Sciences',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-700',
    items: [
      { name: 'History', icon: Globe, description: 'South African and world history — understanding the past to shape informed citizens.' },
      { name: 'Geography', icon: Globe, description: 'Physical and human geography, climate, landforms, population and environmental management.' },
      { name: 'Accounting', icon: Briefcase, description: 'Financial record keeping, reporting and analysis for business and personal finance.' },
      { name: 'Business Studies', icon: Briefcase, description: 'Business environments, management, entrepreneurship and enterprise development.' },
      { name: 'Economics', icon: Briefcase, description: 'Micro and macroeconomics, market systems, fiscal policy and economic development.' },
    ]
  },
  {
    category: 'Creative & Life Skills',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-700',
    items: [
      { name: 'Life Orientation', icon: BookOpen, description: 'Personal development, citizenship, physical education and career guidance (compulsory).' },
      { name: 'Creative Arts', icon: Palette, description: 'Visual and performing arts, developing creativity, expression and cultural awareness.' },
      { name: 'Technology', icon: Palette, description: 'Design, systems and technology skills for the modern world.' },
      { name: 'Economic & Management Sciences', icon: Briefcase, description: 'Introduction to entrepreneurship, the economy and financial literacy in the GET phase.' },
    ]
  }
];

export const Subjects = () => {
  const [activeCategory, setActiveCategory] = useState('Mathematics & Sciences');
  const current = subjects.find(s => s.category === activeCategory)!;

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">Subjects & Curriculum</h1>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 -mt-4">
          We offer a comprehensive CAPS curriculum from Grade 8 to Grade 12, including academic, commercial and agricultural streams for the National Senior Certificate.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {subjects.map(s => (
            <button
              key={s.category}
              onClick={() => setActiveCategory(s.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${activeCategory === s.category ? 'bg-school-blue text-white border-school-blue' : 'bg-white text-school-blue border-school-blue hover:bg-blue-50'}`}
            >
              {s.category}
            </button>
          ))}
        </div>

        {/* Subjects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((subj, i) => (
            <motion.div
              key={subj.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className={`rounded-2xl border-2 p-6 hover:shadow-md transition-shadow ${current.color}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm ${current.iconColor}`}>
                <subj.icon size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{subj.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{subj.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission banner */}
        <div className="mt-12 bg-gradient-to-r from-school-blue to-[#7B1B2B] rounded-3xl p-8 text-center text-white">
          <p className="text-white/70 uppercase tracking-widest text-sm font-bold mb-2">Our Commitment</p>
          <p className="text-2xl font-bold mb-2">Excellence in Education</p>
          <p className="text-white/80">Preparing learners for tertiary study, skills development and meaningful careers through quality teaching and holistic support.</p>
        </div>
      </div>
    </div>
  );
};
