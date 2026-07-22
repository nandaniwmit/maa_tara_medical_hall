import React from 'react';
import { BUSINESS_INFO } from '../data';
import { Pill, FileText, Sparkles, Baby, Shield, Activity, Scissors, Heart, Eye, Smartphone, MessageSquare } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  items: string[];
  gradient: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "srv-prescription",
      icon: <FileText className="w-6 h-6" />,
      title: "Prescription Medicines (Rx)",
      shortDesc: "Authentic, safe medicines supplied strictly under registered pharmacist inspection.",
      items: ["Antibiotics & Antivirals", "Cardiovascular Medications", "Neurological Drugs", "Psychiatric Medications"],
      gradient: "from-sky-500/10 to-sky-500/5 text-sky-600 dark:text-sky-400"
    },
    {
      id: "srv-general",
      icon: <Pill className="w-6 h-6" />,
      title: "General & OTC Medicines",
      shortDesc: "Trusted Over-The-Counter formulations for common colds, acidity, and minor fevers.",
      items: ["Pain Relievers & NSAIDs", "Antacids & Digestives", "Antihistamines & Cold Meds", "Laxatives & Rehydration"],
      gradient: "from-emerald-500/10 to-emerald-500/5 text-emerald-600 dark:text-emerald-400"
    },
    {
      id: "srv-supplements",
      icon: <Sparkles className="w-6 h-6" />,
      title: "Health Supplements",
      shortDesc: "Premium daily micro-nutrition blends, proteins, and vitamins to boost energy levels.",
      items: ["Multivitamin Capsules", "Calcium & Vitamin D3", "Omega-3 Fish Oil", "Whey Protein & Health Drinks"],
      gradient: "from-amber-500/10 to-amber-500/5 text-amber-600 dark:text-amber-400"
    },
    {
      id: "srv-baby",
      icon: <Baby className="w-6 h-6" />,
      title: "Baby Care Products",
      shortDesc: "Safe, hypoallergenic formulas and materials for your newborn's delicate requirements.",
      items: ["Infant Formula & Cereals", "Premium Diaper Pants", "Baby Oil, Soaps & Powders", "Gentle Cleansing Wipes"],
      gradient: "from-pink-500/10 to-pink-500/5 text-pink-600 dark:text-pink-400"
    },
    {
      id: "srv-personal",
      icon: <Heart className="w-6 h-6" />,
      title: "Personal Care & Hygiene",
      shortDesc: "Dermatological, chemical-free skin solutions, sanitizers, and general wellness supplies.",
      items: ["Medicated Facewashes", "Sunscreen & Moisturizers", "Antiseptic Handwashes", "Hair Fall Treatments"],
      gradient: "from-purple-500/10 to-purple-500/5 text-purple-600 dark:text-purple-400"
    },
    {
      id: "srv-equipment",
      icon: <Activity className="w-6 h-6" />,
      title: "Medical Equipment",
      shortDesc: "Calibrated digital monitoring devices for home diagnostic measurements.",
      items: ["Digital BP Monitors", "Oximeters & Thermometers", "Mesh Nebulizers", "Glucometer Kits"],
      gradient: "from-indigo-500/10 to-indigo-500/5 text-indigo-600 dark:text-indigo-400"
    },
    {
      id: "srv-surgical",
      icon: <Scissors className="w-6 h-6" />,
      title: "Surgical Supplies",
      shortDesc: "Sterilized clinical-grade disposables, surgical dressings, and operation essentials.",
      items: ["Adhesive Dressing Plasters", "Disposable Syringes", "Surgical Gloves & Masks", "Sterile Cotton Rolls"],
      gradient: "from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400"
    },
    {
      id: "srv-firstaid",
      icon: <Shield className="w-6 h-6" />,
      title: "First Aid Products",
      shortDesc: "Essential trauma, burn, and wound-care solutions for households and schools.",
      items: ["Antiseptic Savlon/Dettol", "Crepe Muscle Bandages", "Burn Relief Ointments", "Trauma Adhesive Tapes"],
      gradient: "from-red-500/10 to-red-500/5 text-red-600 dark:text-red-400"
    },
    {
      id: "srv-diabetic",
      icon: <Activity className="w-6 h-6" />,
      title: "Diabetic Care",
      shortDesc: "A complete support ecosystem of specialized medications and monitoring tools.",
      items: ["Glucometer Testing Strips", "Insulin Pens & Cartridges", "Sugar-free Sweeteners", "Diabetic Foot Cream"],
      gradient: "from-cyan-500/10 to-cyan-500/5 text-cyan-600 dark:text-cyan-400"
    },
    {
      id: "srv-essentials",
      icon: <Shield className="w-6 h-6" />,
      title: "Healthcare Essentials",
      shortDesc: "A broad spectrum of daily wellness utilities and general safety equipment.",
      items: ["Inhalers & Vaporizers", "Adult Incontinence Diapers", "Hot Water Heating Bags", "Cervical & Back Support"],
      gradient: "from-orange-500/10 to-orange-500/5 text-orange-600 dark:text-orange-400"
    }
  ];

  const getWhatsAppInquiryUrl = (serviceTitle: string) => {
    const text = `Hello Maa Tara Medical Hall,\n\nI would like to inquire about the following category of services/medicines:\n\nService: ${serviceTitle}\n\nPlease let me know if you can assist with specific items in this range.`;
    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="animate-fade-in space-y-12 py-8 sm:py-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-xs sm:text-sm font-sans text-slate-500 dark:text-slate-400 gap-2 items-center">
          <span className="hover:text-med-teal cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">Our Services</span>
        </nav>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Medical Solutions</span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Our Dedicated <span className="text-med-teal">Healthcare Services</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            We provide a comprehensive range of genuine therapeutic pharmaceuticals, devices, and personal-care formulations sourced from the world's leading brands.
          </p>
          <div className="w-16 h-1 bg-med-teal mx-auto rounded-full mt-4" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="group glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/85 hover:border-med-teal/50 dark:hover:border-med-teal/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${srv.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {srv.icon}
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-950 dark:text-white group-hover:text-med-teal transition-colors duration-200">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {srv.shortDesc}
                </p>

                {/* Bullet Points */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                    Includes:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {srv.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-med-teal shrink-0" />
                        <span className="truncate">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-end">
                <a
                  href={getWhatsAppInquiryUrl(srv.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-med-teal/10 dark:bg-slate-950 dark:hover:bg-med-teal/15 text-slate-700 hover:text-med-teal dark:text-slate-300 dark:hover:text-med-teal text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Inquire Service
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Emergency Assistance Callout Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-red-500 to-amber-600 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl shadow-red-500/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                24/7 Support
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl tracking-tight">
                Critical Night-time Emergencies?
              </h2>
              <p className="text-xs sm:text-sm text-red-100 max-w-xl">
                We are committed to public health. For critical, life-saving medicines required during out-of-hours emergencies, call us immediately at {BUSINESS_INFO.phoneFormatted}.
              </p>
            </div>
            
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-red-600 hover:bg-slate-50 font-sans text-sm font-bold uppercase tracking-wider transition-transform duration-200 shadow-md hover:scale-103"
            >
              <Smartphone className="w-4 h-4" />
              Call Emergency Support
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
