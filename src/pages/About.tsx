import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';

export const About = () => {
  const [campusFailed, setCampusFailed] = useState(false);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">About Thembalethu SSS</h1>

        {/* Our School */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-4 pl-5 mb-6" style={{ borderColor: '#C9A84C' }}>
              <h2 className="text-2xl font-bold text-school-blue">Our School</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>Thembalethu Senior Secondary School is a public no-fee secondary school located in Bhongweni Township, Kokstad, KwaZulu-Natal. Our school was established in January 2018 to alleviate overcrowding at existing schools in the Kokstad area and serve the growing educational needs of our community.</p>
              <p>As a no-fee public school managed by the KwaZulu-Natal Department of Education, we are committed to providing quality education to every learner. We offer the National Senior Certificate (NSC) CAPS curriculum across Grades 8–12, preparing our learners for successful futures.</p>
              <p>Under the leadership of Principal Ms. N. Magwaza, the school serves approximately 1,187 learners with a dedicated team of 29 educators, committed to excellence and the holistic development of every student in the Harry Gwala District.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#eef0f7] h-[280px] sm:h-[360px]"
          >
            {!campusFailed ? (
              <img
                src="/assets/about/mccamups.png"
                alt="Thembalethu SSS campus"
                className="w-full h-full object-cover"
                onError={() => setCampusFailed(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0D2137] via-[#1A5276] to-[#2E86AB] flex items-center justify-center">
                <div className="text-center text-white/70 px-6">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                    <ImageIcon />
                  </div>
                  <div className="font-semibold">Campus image</div>
                  <div className="text-sm text-white/60 font-mono">public/assets/about/</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Principal's Message */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-blue mb-2">Principal's Message</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C9A84C' }} />
          </div>

          <div className="bg-[#f0f6fa] rounded-3xl overflow-hidden shadow-lg border border-[#d6e5ef]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center bg-school-blue p-8 md:p-10">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-xl mb-5" style={{ borderColor: '#C9A84C' }}>
                  <div className="w-full h-full flex items-center justify-center bg-[#133d58]">
                    <img src="/assets/about/principal.jpg" alt="Ms. N. Magwaza" className="w-full h-full object-cover object-top" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white text-center leading-tight">Ms. N. Magwaza</h3>
                <p className="text-sm font-semibold mt-1 text-center" style={{ color: '#C9A84C' }}>Principal</p>
                <div className="w-10 h-0.5 mt-4 rounded-full opacity-60" style={{ backgroundColor: '#C9A84C' }} />
              </div>

              <div className="col-span-2 flex flex-col justify-center p-8 md:p-12">
                <div className="text-6xl font-serif leading-none mb-2 opacity-40 select-none" style={{ color: '#C9A84C' }}>"</div>
                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>At Thembalethu Senior Secondary School, we are committed to providing a safe, inclusive and stimulating environment that enables every learner to reach their full potential through quality teaching, strong values and community partnership.</p>
                  <p>We are proud of our learners who achieved an 82% matric pass rate — a testament to the dedication of both our staff and our learners in striving for excellence in all we do. Our school may be new, but our commitment to academic excellence and holistic development is unwavering.</p>
                  <p>Situated in the heart of Bhongweni Township, we invite families and learners to join us in this journey of growth, learning, and achievement.</p>
                </div>
                <div className="text-6xl font-serif leading-none mt-2 text-right opacity-40 select-none" style={{ color: '#C9A84C' }}>"</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Facts */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-blue mb-2">Key Facts</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#C9A84C' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'School Type', value: 'Public No-Fee School' },
              { label: 'Grades', value: 'Grade 8 – 12' },
              { label: 'Location', value: 'Bhongweni, Kokstad' },
              { label: 'Established', value: '2018' },
            ].map((fact, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow border border-gray-100 border-b-4" style={{ borderBottomColor: '#1A5276' }}>
                <p className="text-2xl font-bold text-school-blue">{fact.value}</p>
                <p className="text-gray-500 font-medium mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};
