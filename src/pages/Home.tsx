import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, ArrowRight, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const stats = [
  { label: 'Matric Pass Rate', value: '82%', icon: TrendingUp },
  { label: 'Total Learners', value: '1,187', icon: Users },
  { label: 'Educators', value: '29', icon: Award },
];

const quickLinks = [
  { name: 'Apply Now', path: '/admissions', primary: true },
  { name: 'Our Subjects', path: '/subjects', primary: false },
  { name: 'Contact Us', path: '/contact', primary: false },
];

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative py-20 px-4" style={{ background: 'linear-gradient(135deg, #800000 0%, #5c0000 100%)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Thembalethu SSS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 italic mb-2">
              "Progress Begins Here"
            </p>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              A public no-fee secondary school in Shayamoya, Kokstad — shaping futures from Grade 8 to Grade 12
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/admissions" className="bg-white text-[#800000] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Apply for 2026
              </a>
              <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-6 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin size={20} className="text-[#DC143C]" />
            <span>Shayamoya, Kokstad</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <Phone size={20} className="text-[#DC143C]" />
            <span>+27 82 611 7032</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <GraduationCap size={20} className="text-[#DC143C]" />
            <span>Grade 8 – 12</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg"
              >
                <p className="text-4xl font-bold" style={{ color: '#800000' }}>{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#800000' }}>About Our School</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Thembalethu Senior Secondary School was established in January 2018 to serve the growing educational needs of our community in Shayamoya, Kokstad. Under the leadership of <span className="font-bold">Principal Ms. N. Magwaza</span>, we are committed to providing quality education to approximately 1,187 learners with a dedicated team of 29 educators.
          </p>
          <a href="/about" className="inline-flex items-center gap-2 font-semibold" style={{ color: '#800000' }}>
            Read more <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12" style={{ background: '#f8f8f8' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className={`block text-center py-4 px-6 rounded-xl font-semibold transition ${
                  link.primary
                    ? 'text-white'
                    : 'bg-white border-2'
                }`}
                style={{
                  backgroundColor: link.primary ? '#800000' : 'white',
                  borderColor: '#800000',
                  color: link.primary ? 'white' : '#800000'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
