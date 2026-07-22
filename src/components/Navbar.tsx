import { useState } from 'react';
import { ActivePage } from '../types';
import { BUSINESS_INFO } from '../data';
import { Menu, X, Phone, MessageSquare, Sun, Moon, Pill } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ activePage, setActivePage, darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: ActivePage }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact', value: 'contact' },
    { label: 'Order Online', value: 'whatsapp-order' },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer group"
            id="brand-logo"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-med-teal/10 dark:bg-med-teal/20 flex items-center justify-center border border-med-teal/35 text-med-teal group-hover:scale-110 transition-transform duration-300">
              <Pill className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-950 dark:text-white leading-none group-hover:text-med-teal transition-colors duration-200">
                Maa Tara
              </span>
              <span className="font-sans text-[11px] sm:text-[12px] font-medium text-med-teal tracking-wide uppercase leading-none mt-1">
                Medical Hall
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-3 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activePage === item.value
                    ? 'text-med-teal bg-med-teal/10 dark:bg-med-teal/15'
                    : 'text-slate-600 dark:text-slate-300 hover:text-med-teal hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls: Dark Mode & Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 hover:text-med-teal dark:text-slate-400 dark:hover:text-med-teal hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-med-teal hover:border-med-teal dark:hover:text-med-teal dark:hover:border-med-teal font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>

            <button
              onClick={() => handleNavClick('whatsapp-order')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-med-teal text-white hover:bg-med-teal-hover hover:scale-102 font-sans text-xs font-semibold tracking-wide uppercase shadow-md shadow-med-teal/20 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Order Medicine
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center lg:hidden gap-1.5">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 hover:text-med-teal dark:text-slate-400 dark:hover:text-med-teal hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-4 space-y-2 animate-fade-in">
          <div className="grid grid-cols-2 gap-2 pb-3 mb-2 border-b border-slate-100 dark:border-slate-800">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-med-teal text-sm font-semibold tracking-wide uppercase"
            >
              <Phone className="w-4 h-4 text-med-primary" />
              Call Now
            </a>
            <button
              onClick={() => handleNavClick('whatsapp-order')}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-med-teal text-white text-sm font-semibold tracking-wide uppercase shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Order Online
            </button>
          </div>

          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg font-sans text-base font-medium cursor-pointer ${
                activePage === item.value
                  ? 'text-med-teal bg-med-teal/10 dark:bg-med-teal/20 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-med-teal hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
