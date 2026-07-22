import { useState, useEffect } from 'react';
import { ActivePage, Medicine } from './types';
import { BUSINESS_INFO, MEDICINES, CATEGORIES, TESTIMONIALS, OFFERS } from './data';
import Navbar from './components/Navbar';
import SEOMetadata from './components/SEOMetadata';
import Hero from './components/Hero';
import AboutView from './components/AboutView';
import Services from './components/Services';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { useTracker } from './hooks/useTracker';

// Icons for home page grids
import { 
  ShieldCheck, UserCheck, Coins, Zap, FileText, Heart, Award, MessageSquare, 
  ChevronRight, Phone, ArrowRight, Star, ShoppingBag, Eye, Check, AlertCircle, MapPin, Pill
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Global Page Views Tracker Integration
  useTracker(activePage);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or default to light mode
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Apply theme class to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchMedicines = (query: string) => {
    setSearchQuery(query);
  };

  const handleSelectCategory = (catSlug: string) => {
    setSelectedCategory(catSlug);
  };

  // Why choose us cards
  const whyChooseUsCards = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "100% Genuine Medicines",
      desc: "Sourced directly from authorized pharmaceutical distributors. Zero counterfeit guarantee."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-med-primary" />,
      title: "Experienced Staff",
      desc: "Our trained pharmacy team provides safe guidance, checks dosages, and clarifies usage directions."
    },
    {
      icon: <Coins className="w-6 h-6 text-amber-500" />,
      title: "Affordable Prices",
      desc: "We offer fair and competitive pricing on all generic formulations and chronic care refills."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: "Fast Service",
      desc: "Quick retrieval, minimal queues, and instant WhatsApp response for medicine preparations."
    },
    {
      icon: <FileText className="w-6 h-6 text-sky-500" />,
      title: "Prescription Medicines",
      desc: "Strict compliance in dispensing critical Rx medicines under direct pharmacist supervision."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Healthcare Products",
      desc: "Vast inventory of nutritional supplements, baby wellness, surgical kits, and home devices."
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Trusted Local Pharmacy",
      desc: "Over a decade of loyal healthcare service in Tekari, Bihar. Over 10,000+ satisfied families."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-500" />,
      title: "Easy WhatsApp Support",
      desc: "Submit prescriptions, check availability, and place orders directly on your smartphone."
    }
  ];

  // Why customers trust us bullet items
  const trustReasons = [
    { title: "Experienced Pharmacy", desc: "Serving with pharmacological integrity and patient counseling since 2015." },
    { title: "Quality Cold Chain Storage", desc: "Continual refrigeration power backup for vital vaccines and insulins." },
    { title: "Quick & Polished Service", desc: "Pre-assembled orders for immediate store collection or localized delivery." },
    { title: "Friendly Local Staff", desc: "Attentive, bilingual customer service focused on helping our community." },
    { title: "Reasonable Pricing", desc: "Loyalty and chronic-disease medication discounts to aid senior citizens." },
    { title: "Convenient Location", desc: "Located at Khachiya Road, Tekari—easily accessible with spacious parking." }
  ];

  // Working process cards
  const workingSteps = [
    {
      step: "01",
      title: "Visit Store / Share Form",
      desc: "Drop by our pharmacy at Khachiya Road, Tekari, or fill the WhatsApp slip on our website."
    },
    {
      step: "02",
      title: "Share Prescription",
      desc: "Upload or send your physician's prescription slip over our secure WhatsApp chat link."
    },
    {
      step: "03",
      title: "Get Genuine Medicines",
      desc: "Our registered pharmacist verifies the dosage, packs your medicines, and prepares it for pickup/delivery."
    },
    {
      step: "04",
      title: "Easy Payment",
      desc: "Pay easily at your convenience via cash, Google Pay, PhonePe, Paytm, cards, or UPI transfer."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors duration-300">
      
      {/* Dynamic SEO Injector Component */}
      <SEOMetadata 
        activePage={activePage} 
        currentSearchQuery={searchQuery} 
        selectedCategory={selectedCategory !== 'all' ? selectedCategory : undefined} 
      />

      {/* Sticky Navigation Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <div className="space-y-20 pb-16">
            
            {/* HERO SECTION with Medicine Search Console */}
            <Hero 
              setActivePage={setActivePage} 
              onSearchMedicines={handleSearchMedicines}
              onSelectCategory={handleSelectCategory}
            />

            {/* DYNAMIC SEARCH RESULTS PREVIEW INSET IF APPLIED */}
            {searchQuery && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-10 animate-fade-in" id="search-results-tray">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-sans font-extrabold text-xl text-slate-950 dark:text-white flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-med-teal" />
                      Inquiry Catalog Results for "{searchQuery}"
                    </h2>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-red-500 hover:underline font-semibold"
                    >
                      Clear Search & View All
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MEDICINES.filter(m => 
                      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      m.category.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map(med => (
                      <div 
                        key={med.id}
                        className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-900 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-950 dark:text-white leading-tight">
                              {med.name}
                            </h3>
                            <span className="text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-2.5 py-0.5 rounded-full shrink-0">
                              In Stock
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{med.manufacturer} · {med.packSize}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">{med.description}</p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                          <span className="text-sm font-extrabold text-med-teal">₹{med.price}</span>
                          <a
                            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Maa Tara Medical Hall, I would like to inquire about "${med.name}" (₹${med.price}). Please confirm availability.`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase bg-med-teal hover:bg-med-teal-hover text-white px-3 py-2 rounded-xl transition-colors"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            Inquire Now
                          </a>
                        </div>
                      </div>
                    ))}

                    {MEDICINES.filter(m => 
                      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      m.category.toLowerCase().includes(searchQuery.toLowerCase())
                    ).length === 0 && (
                      <div className="col-span-full text-center py-12 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                        <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                        <h4 className="font-bold text-slate-950 dark:text-white text-base">Not Found in Catalog</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                          We stock thousands of medicines. If you can't find it here, send your prescription via WhatsApp and we will check our master racks!
                        </p>
                        <button
                          onClick={() => setActivePage('whatsapp-order')}
                          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-med-teal text-white font-bold text-xs rounded-xl uppercase tracking-wider"
                        >
                          <FileText className="w-4 h-4" /> Upload prescription
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* OFFERS & DISCOUNTS CAROUSEL ROW */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-med-teal/5 to-sky-500/5 rounded-3xl p-6 sm:p-8 border border-slate-200/40 dark:border-slate-800/35">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block bg-med-teal/15 text-med-teal text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                      Exclusive Savings
                    </span>
                    <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-950 dark:text-white tracking-tight">
                      Current Store Offers & Loyalty Discounts
                    </h2>
                  </div>
                  <button 
                    onClick={() => setActivePage('whatsapp-order')}
                    className="text-xs text-med-teal font-extrabold hover:underline flex items-center gap-1"
                  >
                    Claim online offers now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {OFFERS.map(off => (
                    <div 
                      key={off.id}
                      className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-bold text-med-teal bg-med-teal/10 px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                          {off.badge}
                        </span>
                        <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {off.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                          {off.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WHY CHOOSE US SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Safe Sourcing</span>
                <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                  Why Customers Trust Maa Tara Medical Hall
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                  Over a decade, we have established our reputation on rigorous pharmaceutical standards and sincere patient care.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {whyChooseUsCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-900 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-slate-950 dark:text-white mb-2 group-hover:text-med-teal transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURED CATEGORIES SHOWCASE GRID */}
            <div className="bg-slate-100/50 dark:bg-slate-900/10 py-16 border-y border-slate-200/50 dark:border-slate-800/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Inventory Catalogue</span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                    Browse Medicines By Featured Categories
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {CATEGORIES.slice(0, 6).map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.slug);
                        setActivePage('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs text-center cursor-pointer hover:border-med-teal/50 dark:hover:border-med-teal/50 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-med-teal/10 dark:bg-med-teal/25 text-med-teal flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                        <Pill className="w-5 h-5" />
                      </div>
                      <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-950 dark:text-white truncate">
                        {cat.name}
                      </h3>
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-med-teal font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WHY CUSTOMERS TRUST US BULLETS & GRAPHICAL STATS */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Left */}
                <div className="space-y-6">
                  <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Local Integrity</span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                    Committed to Sincere Healthcare in Gaya District
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Maa Tara Medical Hall is built on values of accuracy and service. In Tekari, we ensure that you don't just receive pills, but the exact healthcare support, packaging, and safety checks required for correct treatment recovery.
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-6 pt-2">
                    {trustReasons.map((reason, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{reason.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{reason.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Graph/Image Right */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-med-teal/10 to-sky-500/10 rounded-3xl blur-2xl -m-4 pointer-events-none" />
                  <div className="relative glass-card bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
                    <h3 className="font-sans font-bold text-slate-900 dark:text-white text-base mb-4">
                      Store Efficacy & Performance Logs
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-600 dark:text-slate-400">Medicine Authenticity Check</span>
                          <span className="text-med-teal font-bold">100% Guaranteed</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-med-teal h-full w-full rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-600 dark:text-slate-400">Cold Chain Infrastructure Safety</span>
                          <span className="text-sky-500 font-bold">99.9% Efficacy</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-sky-500 h-full w-[99.9%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-600 dark:text-slate-400">Customer Satisfaction Reviews</span>
                          <span className="text-amber-500 font-bold">4.9/5 Rating</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full w-[96%] rounded-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-600 dark:text-slate-400">Average WhatsApp Order Processing</span>
                          <span className="text-purple-500 font-bold">&lt;15 Mins Response</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full w-[94%] rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                      <span>Verified: July 2026</span>
                      <span className="font-semibold text-med-teal">Chief Pharmacist Approved</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* WORKING PROCESS SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-bold text-med-teal tracking-widest uppercase">User Roadmap</span>
                <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                  Our Simple Working Process
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                  Acquiring genuine medicine shouldn't be stressful. Follow our four transparent procedural steps.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
                {workingSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-xs relative"
                  >
                    <span className="absolute top-4 right-4 text-3xl font-black text-slate-100 dark:text-slate-800 select-none">
                      {step.step}
                    </span>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-slate-950 dark:text-white mb-2 mt-4">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TESTIMONIALS SLIDER SECTION */}
            <div className="bg-slate-100/50 dark:bg-slate-900/10 py-16 border-y border-slate-200/50 dark:border-slate-800/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Verified Reviews</span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                    What Our Customers Say
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {TESTIMONIALS.map((rev) => (
                    <div 
                      key={rev.id}
                      className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Rating stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < rev.rating ? 'text-amber-400 fill-current' : 'text-slate-200 dark:text-slate-700'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                          "{rev.text}"
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800/40 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-med-teal/15 text-med-teal font-extrabold flex items-center justify-center text-xs shrink-0">
                          {rev.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{rev.name}</h4>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-0.5">
                            <span>{rev.location}</span>
                            <span>·</span>
                            <span className="text-emerald-500 font-semibold">Verified Patient</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INTEGRATED ACCORDION FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FAQSection />
            </div>

            {/* GOOGLE MAPS SECTION INSET */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-md">
                <div className="flex justify-between items-center p-3">
                  <span className="font-sans font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500 animate-bounce" />
                    Our Store Front & Location coordinates
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-med-teal font-bold hover:underline"
                  >
                    Open in Google Maps App
                  </a>
                </div>
                
                <div className="w-full h-72 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3615.1555518290234!2d84.8329482103565!3d24.9351050777904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd36fc9cb0939%3A0xe72688b560ff00b1!2sMaa%20Tara%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maa Tara Medical Hall Google Map Location Inset"
                  />
                </div>
              </div>
            </div>

            {/* CONTACT CTA BANNER */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-med-teal/20 via-sky-500/10 to-transparent pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-med-teal/10 rounded-full blur-2xl" />

                <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                  <span className="inline-block bg-med-teal/25 text-med-teal text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Quick Orders
                  </span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-4xl tracking-tight leading-tight">
                    Need Genuine Medicines Delivered? <br />
                    Or have questions?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Call our pharmacist directly, or complete our quick inquiry form to send a pre-filled list of medicines over WhatsApp now.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-50 font-sans text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <Phone className="w-4 h-4 text-med-teal" />
                      Call: {BUSINESS_INFO.phoneFormatted}
                    </a>

                    <button
                      onClick={() => {
                        setActivePage('whatsapp-order');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-med-teal hover:bg-med-teal-hover text-white font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp Order Slip
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ABOUT VIEW NAVIGATION TAB */}
        {activePage === 'about' && <AboutView />}

        {/* SERVICES VIEW NAVIGATION TAB */}
        {activePage === 'services' && <Services />}

        {/* GALLERY VIEW NAVIGATION TAB */}
        {activePage === 'gallery' && <GalleryView />}

        {/* CONTACT VIEW NAVIGATION TAB */}
        {activePage === 'contact' && <ContactView />}

        {/* WHATSAPP ORDER VIEW NAVIGATION TAB */}
        {activePage === 'whatsapp-order' && <WhatsAppOrderForm />}
      </main>

      {/* FLOATING ACTION UTILITIES (ALWAYS VISIBLE AT BOTTOM RIGHT) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        
        {/* Call Floating button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          title="Call Now"
          aria-label="Call pharmacy"
        >
          <Phone className="w-5 h-5 text-med-teal" />
        </a>

        {/* WhatsApp Floating button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          title="WhatsApp Support Chat"
          aria-label="Open chat in WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>
      </div>

      {/* STICKY BOTTOM HOURS TICKER FOR MOBILE QUICK UTILITY */}
      <div className="bg-sky-600 text-white text-center py-2 px-4 text-[10px] sm:text-xs font-medium relative z-30 flex flex-wrap justify-center items-center gap-2 sm:gap-6 border-t border-sky-500 shadow-sm leading-none">
        <span className="flex items-center gap-1">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          Meds Availability Guaranteed
        </span>
        <span className="hidden sm:inline">|</span>
        <span>
          Store Hours: <strong className="font-bold">{BUSINESS_INFO.workingHours.weekdays}</strong>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="text-amber-300 font-bold uppercase tracking-wider animate-pulse">
          Emergency Callout: {BUSINESS_INFO.phoneFormatted}
        </span>
      </div>

      {/* COMPREHENSIVE SITEMAP FOOTER */}
      <Footer 
        setActivePage={setActivePage} 
        onSelectCategory={handleSelectCategory}
      />

    </div>
  );
}
