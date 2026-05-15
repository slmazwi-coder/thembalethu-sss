import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const slides = [
  { url: '/assets/hero/tehero1.png', caption: 'Progress Begins Here in All We Do' },
  { url: '/assets/hero/tehero2.png', caption: 'Quality Education in Kokstad' },
  { url: '/assets/hero/tehero4.png', caption: 'Dedicated Staff & Community' },
  { url: '/assets/hero/tehero5.png', caption: 'In the Shadow of Mount Currie' },
  { url: '/assets/hero/tehero6.png', caption: 'Our Vibrant School Life' },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];
  const showImage = !!slide.url && !failed[currentIndex];

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-school-blue">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.995 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          {showImage ? (
            <img
              src={slide.url}
              alt={slide.caption}
              className="h-full w-full object-cover object-center opacity-45"
              onError={() => setFailed((p) => ({ ...p, [currentIndex]: true }))}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#0D2137] via-[#1A5276] to-[#2E86AB] opacity-95 flex items-center justify-center">
              <div className="text-center text-white/70 px-6">
                <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                  <ImageIcon />
                </div>
                <div className="font-semibold">Hero image placeholder</div>
                <div className="text-sm text-white/60">Add images to <span className="font-mono">public/assets/hero/</span></div>
              </div>
            </div>
          )}
          <div className="absolute bottom-20 left-0 right-0 text-center z-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={`caption-${currentIndex}`}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-white/85 text-lg md:text-xl font-medium tracking-wide uppercase"
            >
              {slide.caption}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          className="mb-4"
        >
          <img
            src="/assets/logo/telogo.png"
            alt="Thembalethu SSS Logo"
            className="h-24 w-24 mx-auto rounded-full border-4 border-[#C9A84C] shadow-2xl object-contain bg-white"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-2 uppercase"
        >
          Thembalethu SSS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
          className="text-lg md:text-2xl font-light italic"
          style={{ color: '#C9A84C' }}
        >
          "Progress Begins Here in All We Do"
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex gap-4"
        >
          <a href="/admissions" className="btn-primary bg-white text-school-blue hover:bg-gray-100">Admissions</a>
          <a href="/about" className="btn-primary border-2 border-white bg-transparent hover:bg-white/10">Learn More</a>
        </motion.div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors" aria-label="Previous slide">
        <ChevronLeft size={32} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors" aria-label="Next slide">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-[#C9A84C] scale-125' : 'bg-white/40 hover:bg-white/60'}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};
