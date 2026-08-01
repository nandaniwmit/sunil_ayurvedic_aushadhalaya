import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { galleryData } from '../data/galleryData';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filterCategories = [
    { key: 'all', label: 'All Photos' },
    { key: 'store', label: 'Store Front & Interior' },
    { key: 'ayurvedic', label: 'Ayurvedic Formulations' },
    { key: 'medicines', label: 'Prescription & Healthcare' },
    { key: 'equipment', label: 'Health Devices & Equipment' },
  ];

  const filteredImages = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeTab);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <SEO 
        title="Store & Product Gallery | Sunil Ayurvedic Aushdhalaya Gaya"
        description="Explore store photos, organized medicine racks, Ayurvedic Aushdhi collection, and medical devices at Sunil Ayurvedic Aushdhalaya, Gautam Buddha Rd, Gaya."
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>Visual Showcase & Store Infrastructure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-heading">
            Store Gallery & Healthcare Facility
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our pharmacy located at Kali Bindu Bhavan, Gautam Buddha Road, Gaya.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto space-y-8">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === cat.key
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md cursor-pointer hover:shadow-2xl hover:border-emerald-500 transition-all duration-300"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-900 relative">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                  {img.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal Popup */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center space-y-4">
            <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
              <img
                src={filteredImages[selectedImageIndex].imageUrl}
                alt={filteredImages[selectedImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-center text-white space-y-1 max-w-xl">
              <h3 className="text-lg font-bold font-serif-heading">
                {filteredImages[selectedImageIndex].title}
              </h3>
              <p className="text-xs text-slate-300">
                {filteredImages[selectedImageIndex].caption}
              </p>
              <div className="text-[10px] text-emerald-400 font-semibold pt-1">
                Image {selectedImageIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
