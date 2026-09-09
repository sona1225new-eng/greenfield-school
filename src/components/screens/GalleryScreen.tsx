import React, { useState } from 'react';
import { ScreenPath, GalleryPhoto } from '../../types';
import { GALLERY_PHOTOS } from '../../data/schoolData';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Props {
  onNavigate: (path: ScreenPath) => void;
}

export const GalleryScreen: React.FC<Props> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Sports', 'Science & Tech', 'Arts & Culture'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="w-full bg-[#faf9f5]">
      {/* Header */}
      <section className="bg-[#0b2b1b] text-white py-16 px-4 md:px-8 border-b border-[#0f3822]">
        <div className="max-w-[80rem] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Archives & Memories</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            Campus Gallery
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#f0f4f1]/80 max-w-3xl leading-relaxed">
            Capturing the spirit of Greenfield International School: academic breakthroughs, athletic triumphs, cultural festivals, and everyday camaraderie across our 10-acre green campus.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-[80rem] mx-auto px-4 md:px-8 py-16 space-y-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-[#e1e7e2]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0f3822] text-white shadow-sm'
                  : 'bg-[#f0f4f1] text-[#414942] hover:bg-[#e9e8e4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group bg-[#f0f4f1] rounded-2xl overflow-hidden border border-[#e1e7e2] shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={photo.imageUrl}
                  alt={photo.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#0b2b1b]/80 backdrop-blur-md text-[#d4af37] text-xs px-2.5 py-1 rounded font-semibold uppercase border border-[#c5a059]/30">
                  {photo.category}
                </span>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full text-[#0b2b1b] shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#0b2b1b] group-hover:text-[#1b5e39] transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-[#5c6b64] leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#d4af37] p-2 cursor-pointer z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] p-3 rounded-full bg-black/40 hover:bg-black/60 cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] p-3 rounded-full bg-black/40 hover:bg-black/60 cursor-pointer"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
            <div className="max-h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={filteredPhotos[lightboxIndex].imageUrl}
                alt={filteredPhotos[lightboxIndex].altText}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="text-center text-white max-w-2xl px-4 space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                {filteredPhotos[lightboxIndex].category} • Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#f0f4f1]/80">{filteredPhotos[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
