import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Search, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter logic
  const filteredItems = GALLERY_ITEMS.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = [
    { label: 'All Images', value: 'all' },
    { label: 'Storefront', value: 'storefront' },
    { label: 'Medicine Shelves', value: 'shelves' },
    { label: 'Products', value: 'products' },
    { label: 'Equipment', value: 'equipment' },
    { label: 'Pharmacist & Patients', value: 'customers' }
  ];

  const openLightbox = (item: GalleryItem) => {
    // Find the index of the item in the *filtered list* or *full list*
    const idx = filteredItems.findIndex(f => f.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(filteredItems.length - 1); // loop back
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === filteredItems.length - 1) {
      setLightboxIndex(0); // loop back
    }
  };

  return (
    <div className="animate-fade-in space-y-12 py-8 sm:py-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-xs sm:text-sm font-sans text-slate-500 dark:text-slate-400 gap-2 items-center">
          <span className="hover:text-med-teal cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">Store Gallery</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Visual Tour</span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Our Store <span className="text-med-teal">Photo Gallery</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Take a high-resolution visual walk through Maa Tara Medical Hall in Tekari, Bihar. Inspect our hygiene standards, organized drug displays, and diagnostics inventory.
          </p>
          <div className="w-16 h-1 bg-med-teal mx-auto rounded-full mt-4" />
        </div>
      </div>

      {/* Controls Container: Search & Filtering Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm">
          
          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto max-w-full py-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-med-teal text-white shadow-sm shadow-med-teal/20'
                    : 'bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Caption Search */}
          <div className="relative w-full md:w-72">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search captions (e.g. shelves)..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-2.5 pl-10 pr-4 text-xs font-sans focus:outline-none focus:border-med-teal focus:ring-1 focus:ring-med-teal transition-all"
            />
          </div>

        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo container */}
                <div className="aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-950 relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Glassmorphism Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/95 border border-slate-200/50 dark:border-slate-800/80 text-med-teal font-sans text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-5">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-med-teal transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/85 p-8 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto mb-4">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-slate-900 dark:text-white text-base">No Matching Photos</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              No gallery items matched your search filters. Try selecting "All Images" or clearing your query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-med-teal font-bold hover:underline mt-4 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Overlay Popup Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Lightbox Header Controls */}
          <div className="flex justify-between items-center w-full max-w-5xl mx-auto text-white">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-med-teal" />
              <span className="font-sans text-xs sm:text-sm font-semibold text-slate-300">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Content with navigation triggers */}
          <div className="flex items-center justify-center gap-2 sm:gap-6 w-full max-w-5xl mx-auto my-auto relative">
            
            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:border-white/25 transition-all cursor-pointer select-none shrink-0"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Display Image Container */}
            <div 
              className="relative max-h-[60vh] sm:max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
              onClick={(e) => e.stopPropagation()} // don't close when clicking image
            >
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] sm:max-h-[70vh] object-contain mx-auto"
              />
            </div>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:border-white/25 transition-all cursor-pointer select-none shrink-0"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
          </div>

          {/* Lightbox Footer Captions */}
          <div 
            className="w-full max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 p-5 rounded-2xl text-center space-y-1.5 mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-block bg-med-teal/20 text-med-teal text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-1">
              {filteredItems[lightboxIndex].category}
            </span>
            <h4 className="font-sans font-bold text-base sm:text-lg text-white">
              {filteredItems[lightboxIndex].title}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {filteredItems[lightboxIndex].description}
            </p>
          </div>

        </div>
      )}

    </div>
  );
}
