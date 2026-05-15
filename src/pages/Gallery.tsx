import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/assets/gallery/gallery1.jpg', caption: 'School assembly — our thriving community', category: 'School Life' },
  { src: '/assets/gallery/gallery2.jpg', caption: 'Football match day', category: 'Sport' },
  { src: '/assets/gallery/gallery3.jpg', caption: 'Mount Currie mountain view from school', category: 'Campus' },
  { src: '/assets/gallery/gallery4.jpg', caption: 'Science class practical', category: 'Academics' },
  { src: '/assets/gallery/gallery5.jpg', caption: 'Staff in formal attire', category: 'Staff' },
  { src: '/assets/gallery/gallery6.jpg', caption: 'Grade 12 learners studying', category: 'Academics' },
  { src: '/assets/gallery/gallery7.jpg', caption: 'Athletics track and field day', category: 'Sport' },
  { src: '/assets/gallery/gallery8.jpg', caption: 'School grounds and buildings', category: 'Campus' },
  { src: '/assets/gallery/gallery9.jpg', caption: 'Debating competition', category: 'Activities' },
  { src: '/assets/gallery/gallery10.jpg', caption: 'Netball team in action', category: 'Sport' },
  { src: '/assets/gallery/gallery11.jpg', caption: 'Cultural day celebrations', category: 'School Life' },
  { src: '/assets/gallery/gallery12.jpg', caption: 'Matric farewell', category: 'School Life' },
];

const categories = ['All', 'School Life', 'Sport', 'Academics', 'Campus', 'Staff', 'Activities'];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter(g => g.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx(p => p !== null ? (p - 1 + filtered.length) % filtered.length : null);
  const nextImage = () => setLightboxIdx(p => p !== null ? (p + 1) % filtered.length : null);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">Gallery</h1>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-10 -mt-4">
          A glimpse into life at Thembalethu SSS — from the classroom to the sports field, from assembly to the mountain backdrop.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all border-2 ${activeCategory === cat ? 'bg-school-blue text-white border-school-blue' : 'bg-white text-school-blue border-school-blue hover:bg-blue-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.25 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-3">
                <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">{img.caption}</p>
              </div>
              <span className="absolute top-2 right-2 bg-school-blue text-white text-xs px-2 py-0.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {lightboxIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-4 right-4 text-white hover:text-gray-300"><X size={28} /></button>
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"><ChevronLeft size={36} /></button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"><ChevronRight size={36} /></button>
              <div className="max-w-4xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                <img src={filtered[lightboxIdx].src} alt={filtered[lightboxIdx].caption} className="max-h-[80vh] rounded-lg object-contain mx-auto" />
                <p className="text-white text-center mt-3 text-sm">{filtered[lightboxIdx].caption}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
