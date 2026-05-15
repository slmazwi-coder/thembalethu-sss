import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const newsItems = [
  {
    title: '2026 Applications Now Open',
    date: 'May 2026',
    summary: 'Applications for the 2026 academic year are now open. We accept learners from Grade 8 to Grade 12.',
    link: '/admissions'
  },
  {
    title: '82% Matric Pass Rate',
    date: '2023',
    summary: 'Our learners achieved an 82% matric pass rate — progress begins here.',
    link: '/achievements'
  },
  {
    title: 'CAPS Curriculum',
    date: 'Ongoing',
    summary: 'Full academic programme from Grade 8 to 12 including Commerce, Sciences, and Arts streams.',
    link: '/subjects'
  },
];

export const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle hover play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <div className="flex flex-col">
      {/* Bigger Rotating News Card */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-xl p-8 text-center"
              style={{ border: '2px solid #800000' }}
            >
              <div className="flex items-center justify-center gap-2 text-xs font-semibold mb-3" style={{ color: '#800000' }}>
                <Calendar size={14} />
                <span>{newsItems[current].date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{newsItems[current].title}</h3>
              <p className="text-gray-600 mb-4">{newsItems[current].summary}</p>
              <a href={newsItems[current].link} className="inline-flex items-center gap-2 font-semibold" style={{ color: '#800000' }}>
                View All <ArrowRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-2 mt-4">
            {newsItems.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6' : 'w-1.5 bg-gray-300'}`} style={{ backgroundColor: i === current ? '#800000' : undefined }} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Player - Autoplay muted on hover */}
      <section className="py-6 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div 
            className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsMuted(!isMuted)}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              poster="/assets/hero/tehero1.png"
            >
              <source src="/assets/school-video.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay when not hovering */}
            {!isHovered && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                    <Play size={28} className="ml-1" />
                  </div>
                  <p className="text-sm font-medium">Hover to play</p>
                </div>
              </div>
            )}
            
            {/* Mute indicator */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Motto */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Our Motto</p>
          <p className="text-3xl md:text-4xl font-light italic" style={{ color: '#800000' }}>
            "Progress Begins Here"
          </p>
        </div>
      </section>
    </div>
  );
};
