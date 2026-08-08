import { ActivePage } from '../types';
import { BUSINESS_INFO, CATEGORIES } from '../data';
import { Phone, MessageSquare, MapPin, Mail, Pill, Heart, ArrowUp, ExternalLink, ShieldAlert } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onSelectCategory: (categorySlug: string) => void;
}

export default function Footer({ setActivePage, onSelectCategory }: FooterProps) {
  
  const handlePageLink = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryLink = (slug: string) => {
    onSelectCategory(slug);
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative z-10" id="main-footer">
      
      {/* Scroll To Top button floating relative */}
      <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-med-teal hover:bg-med-teal-hover text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-all"
          title="Scroll To Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-med-teal/20 flex items-center justify-center border border-med-teal/30 text-med-teal">
                <Pill className="w-5 h-5" />
              </div>
              <span className="font-sans font-bold text-lg text-white">
                Maa Tara Medical Hall
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted retail healthcare pharmacy in Tekari, Bihar since 2015. We are fully committed to dispensing 100% genuine medical supplies and offering warm customer counseling.
            </p>

            {/* Quick Contact Numbers */}
            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 hover:text-med-teal transition-colors"
              >
                <Phone className="w-4 h-4 text-med-teal shrink-0" />
                <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 hover:text-med-teal transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp Order & Chat</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Sitemap Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => handlePageLink('home')} className="hover:text-med-teal cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handlePageLink('about')} className="hover:text-med-teal cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handlePageLink('services')} className="hover:text-med-teal cursor-pointer">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handlePageLink('gallery')} className="hover:text-med-teal cursor-pointer">
                  Store Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handlePageLink('contact')} className="hover:text-med-teal cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handlePageLink('whatsapp-order')} className="hover:text-med-teal cursor-pointer font-semibold text-med-teal">
                  Order Online
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryLink(cat.slug)}
                    className="hover:text-med-teal cursor-pointer text-slate-400 flex items-center gap-1.5"
                  >
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Working Hours & Store Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase">
              Working Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span className="text-slate-400">Mon - Sat:</span>
                <span className="font-bold text-white">{BUSINESS_INFO.workingHours.weekdays}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800">
                <span className="text-slate-400">Sunday:</span>
                <span className="font-bold text-white">{BUSINESS_INFO.workingHours.sunday}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mt-2">
                <p className="text-[11px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Emergencies 24/7
                </p>
                <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                  Call {BUSINESS_INFO.phoneFormatted} directly for urgent night emergencies.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer section */}
        <div className="py-6 border-b border-slate-800/60 text-[10px] sm:text-xs text-slate-500 leading-relaxed space-y-2">
          <p className="font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
            Medical Disclaimer
          </p>
          <p>
            Maa Tara Medical Hall is an authorized retail pharmacy. The products, medicines, and equipment listed on this website are for general informational purposes only and are subject to availability. This website is not a substitute for professional medical advice, diagnosis, or treatment. Please strictly follow your physician's instructions. A valid prescription from a registered medical practitioner is mandatory for dispensing prescription-only (Rx) medications.
          </p>
        </div>

        {/* Copyright, legal pages and bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Maa Tara Medical Hall. All rights reserved. | Developed by{' '}
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[11px] font-semibold uppercase tracking-wider">
            <button className="hover:text-med-teal cursor-pointer">Privacy Policy</button>
            <span>·</span>
            <button className="hover:text-med-teal cursor-pointer">Terms & Conditions</button>
            <span>·</span>
            <button className="hover:text-med-teal cursor-pointer">Disclaimer</button>
          </div>
          <p className="text-[10px] flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Tekari, Gaya, Bihar
          </p>
        </div>

      </div>
    </footer>
  );
}
