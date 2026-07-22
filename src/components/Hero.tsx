import React, { useState, useRef, useEffect } from 'react';
import { ActivePage, Medicine } from '../types';
import { BUSINESS_INFO, MEDICINES, CATEGORIES } from '../data';
import { Search, MessageSquare, Phone, MapPin, Check, AlertCircle, Sparkles, Filter, X } from 'lucide-react';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  onSearchMedicines: (query: string) => void;
  onSelectCategory: (categorySlug: string) => void;
}

export default function Hero({ setActivePage, onSearchMedicines, onSelectCategory }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 1) {
      const filtered = MEDICINES.filter(med => 
        med.name.toLowerCase().includes(val.toLowerCase()) || 
        med.category.toLowerCase().includes(val.toLowerCase()) ||
        med.manufacturer.toLowerCase().includes(val.toLowerCase())
      );
      setSearchResults(filtered);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchMedicines(searchQuery);
      setShowDropdown(false);
    }
  };

  const selectSuggestion = (medName: string) => {
    setSearchQuery(medName);
    onSearchMedicines(medName);
    setShowDropdown(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowDropdown(false);
    onSearchMedicines('');
  };

  const generateWhatsAppInquiry = (medicine: Medicine) => {
    const text = `Hello Maa Tara Medical Hall,\n\nI want to inquire about the availability of the following medicine:\n\nMedicine Name: ${medicine.name}\nPack Size: ${medicine.packSize}\nPrice: ₹${medicine.price}\nRequires Prescription: ${medicine.requiresPrescription ? 'Yes' : 'No'}\n\nIs this currently in stock?`;
    const encoded = encodeURIComponent(text);
    return `${BUSINESS_INFO.whatsappUrl}?text=${encoded}`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/35 to-emerald-50/20 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-900/20 py-12 lg:py-24 border-b border-slate-200/50 dark:border-slate-800/50">
      
      {/* Visual background ambient details */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 rounded-full bg-med-teal/5 dark:bg-med-teal/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 rounded-full bg-sky-400/10 dark:bg-sky-400/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-med-teal/10 dark:bg-med-teal/20 text-med-teal text-xs sm:text-sm font-semibold tracking-wide uppercase mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Your Trusted Pharmacy in Tekari
            </div>

            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-none">
              Maa Tara <br className="hidden sm:block" />
              <span className="text-med-teal">Medical Hall</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Providing genuine medicines, premium healthcare products, orthopedic support, surgical supplies, baby care essentials, and daily medical equipment at affordable, fair prices.
            </p>

            {/* Quick Actions Panel */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-sans text-sm font-bold tracking-wider uppercase transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-med-teal" />
                Call Now
              </a>

              <button
                onClick={() => setActivePage('whatsapp-order')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-med-teal text-white hover:bg-med-teal-hover hover:scale-102 font-sans text-sm font-bold tracking-wider uppercase shadow-lg shadow-med-teal/25 transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Order
              </button>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.location)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-med-teal dark:hover:border-med-teal text-slate-700 dark:text-slate-200 hover:text-med-teal dark:hover:text-med-teal font-sans text-sm font-bold tracking-wider uppercase transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-emerald-500" />
                Get Directions
              </a>
            </div>

            {/* Store Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-none">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Genuine Meds</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-none">10K+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Happy Patients</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-none">10+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Years Trust</p>
              </div>
            </div>
          </div>

          {/* Hero Right - Smart Medicine Search Terminal */}
          <div className="lg:col-span-5" id="hero-search-console">
            <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-med-teal/5 dark:bg-med-teal/10 rounded-bl-full" />
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-med-teal/10 dark:bg-med-teal/20 flex items-center justify-center text-med-teal">
                  <Search className="w-4 h-4" />
                </div>
                <h2 className="font-sans font-bold text-lg text-slate-900 dark:text-white">
                  Medicine Inquiry Box
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Search our verified store inventory catalog to check availability, prices, and easily submit inquiries on WhatsApp.
              </p>

              {/* Form Search Input */}
              <form onSubmit={handleSearchSubmit} className="relative mb-6" ref={dropdownRef}>
                <div className="flex items-center">
                  <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search Paracetamol, Insulin, BP Monitor..."
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3.5 pl-11 pr-10 text-sm font-sans focus:outline-none focus:border-med-teal focus:ring-1 focus:ring-med-teal transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Suggestions Dropdown */}
                {showDropdown && searchResults.length > 0 && (
                  <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg max-h-64 overflow-y-auto z-30 divide-y divide-slate-100 dark:divide-slate-800">
                    {searchResults.map((med) => (
                      <div
                        key={med.id}
                        onClick={() => selectSuggestion(med.name)}
                        className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer flex justify-between items-start text-left"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{med.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{med.manufacturer} · {med.packSize}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-med-teal bg-med-teal/10 px-2 py-0.5 rounded-full">
                            ₹{med.price}
                          </span>
                          <span className="block text-[10px] text-slate-400 mt-1">
                            {med.requiresPrescription ? 'Prescription Req.' : 'OTC'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {showDropdown && searchResults.length === 0 && searchQuery.trim().length > 1 && (
                  <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg p-4 text-center z-30">
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      "{searchQuery}" not found in quick catalog.
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      You can still order/inquire by sending the prescription directly!
                    </p>
                  </div>
                )}
              </form>

              {/* Dynamic catalog item detail if exactly matched or selected */}
              {searchQuery && (
                <div className="bg-slate-50 dark:bg-slate-950/65 rounded-2xl p-4 border border-slate-100 dark:border-slate-900/40 mb-6 animate-slide-up text-left">
                  {MEDICINES.find(m => m.name.toLowerCase() === searchQuery.toLowerCase()) ? (
                    (() => {
                      const found = MEDICINES.find(m => m.name.toLowerCase() === searchQuery.toLowerCase())!;
                      return (
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-slate-900 dark:text-white text-base">{found.name}</h3>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> In Stock
                            </span>
                          </div>
                          
                          <p className="text-xs text-slate-500 dark:text-slate-400">{found.description}</p>
                          
                          <div className="flex flex-wrap justify-between items-center text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                            <div>Pack: <span className="font-semibold text-slate-950 dark:text-white">{found.packSize}</span></div>
                            <div>Price: <span className="font-extrabold text-med-teal text-sm">₹{found.price}</span></div>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] text-amber-600 dark:text-amber-400">
                            {found.requiresPrescription ? (
                              <>
                                <AlertCircle className="w-3.5 h-3.5" />
                                <span>Valid Doctor Prescription Required</span>
                              </>
                            ) : (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span className="text-emerald-600 dark:text-emerald-400">No prescription required (OTC)</span>
                              </>
                            )}
                          </div>

                          <a
                            href={generateWhatsAppInquiry(found)}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-med-teal text-white hover:bg-med-teal-hover text-xs font-bold uppercase tracking-wider shadow-sm"
                          >
                            <MessageSquare className="w-4 h-4" />
                            Inquire availability on WhatsApp
                          </a>
                        </div>
                      );
                    })()
                  ) : (
                    <div>
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300">Searching catalog for "{searchQuery}"...</p>
                      <button 
                        onClick={() => setActivePage('whatsapp-order')}
                        className="text-xs text-med-teal hover:underline font-semibold mt-2 block"
                      >
                        Can't find it? Open our WhatsApp Order Form →
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Category Presets Pills */}
              <div>
                <p className="text-[11px] font-sans font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-3 flex items-center gap-1">
                  <Filter className="w-3 h-3 text-med-teal" />
                  Quick Category Filters
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                  {CATEGORIES.slice(0, 6).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory(cat.slug)}
                      className="text-[11px] sm:text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-med-teal/15 hover:text-med-teal dark:hover:text-med-teal text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      {cat.name}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      onSelectCategory('all');
                      setActivePage('services');
                    }}
                    className="text-[11px] sm:text-xs font-bold text-med-teal bg-med-teal/10 hover:bg-med-teal/20 px-3 py-1.5 rounded-lg cursor-pointer"
                  >
                    View All Categories
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
