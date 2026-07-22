import { BUSINESS_INFO, TIMELINE_EVENTS } from '../data';
import { Heart, Eye, ShieldCheck, Award, Clock, UserCheck, MapPin, Sparkles, Quote } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "100% Genuine Direct Medicines",
      desc: "We enforce zero tolerance for fake formulations. Every pill, tonic, and device is sourced straight from official corporate warehouses."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Patient-First Healthcare",
      desc: "Our customers are not transactions; they are our Tekari neighbors. We provide clear usage counseling, safety guidance, and warm service."
    },
    {
      icon: <Award className="w-6 h-6 text-med-teal" />,
      title: "Quality Cold-Chain Storage",
      desc: "We invest in temperature-secure refrigerators with generator backups so that critical insulins and vaccines maintain full efficacy."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Reliable Emergency Support",
      desc: "When urgent health emergencies strike in Tekari late at night, our on-call team responds quickly to secure critical drugs."
    }
  ];

  return (
    <div className="animate-fade-in space-y-16 py-8 sm:py-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-xs sm:text-sm font-sans text-slate-500 dark:text-slate-400 gap-2 items-center">
          <span className="hover:text-med-teal cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">About Us</span>
        </nav>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            About <span className="text-med-teal">Maa Tara Medical Hall</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded with a vision to provide genuine, safe, and affordable healthcare solutions to the people of Tekari, Bihar. Discover our journey, core values, and our commitment to public health.
          </p>
          <div className="w-16 h-1 bg-med-teal mx-auto rounded-full mt-4" />
        </div>
      </div>

      {/* Grid: Business Story & Founder Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Story Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-med-teal/10 text-med-teal text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Our Story
            </div>
            
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              A Decade of Dedicated Care in Tekari
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Maa Tara Medical Hall was established in 2015 at Khachiya Road, Tekari with a simple mission: to build a trustworthy sanctuary for medicines where local families never have to worry about authenticity or fair pricing. In an era where counterfeit medicines cause great distress, we set out to build a platform that guarantees direct pharmaceutical-grade sourcing.
            </p>

            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Over the years, we have evolved from a small retail drug outlet into a full-scale digital healthcare partner, offering modern cold-chain infrastructure for critical insulins, extensive neonatal and pediatric support catalogs, orthopedic braces, and direct remote customer care via WhatsApp. We take immense pride in being Tekari's premier reliable pharmaceutical landmark.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="p-5 rounded-2xl bg-sky-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-med-primary/10 flex items-center justify-center text-med-primary mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Our Mission</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To safeguard community health in Tekari by maintaining 100% genuine medicine stocks, offering educational dosage guidance, and ensuring immediate, accessible healthcare support.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/30 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-med-teal/10 flex items-center justify-center text-med-teal mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Our Vision</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To remain the most trusted, patient-centric physical and digital healthcare partner in Bihar, bridging the gap between advanced pharmacology and rural accessibility.
                </p>
              </div>
            </div>
          </div>

          {/* Owner Message Right */}
          <div className="lg:col-span-5">
            <div className="glass-card bg-white dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative">
              <div className="absolute top-6 left-6 text-slate-100 dark:text-slate-800">
                <Quote className="w-16 h-16 transform -translate-x-2 -translate-y-2 fill-current" />
              </div>
              
              <div className="relative space-y-6">
                <h3 className="font-sans font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-med-teal" />
                  Owner's Message
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "At Maa Tara Medical Hall, we believe that healthcare is a basic human right, not a luxury. When a patient walks into our store or sends a prescription on WhatsApp, they place their life and trust in our hands. We honor that trust by ensuring that every tablet, syrup, and device we sell is 100% genuine, stored at the right temperature, and priced fairly. We are honored to serve the Tekari community for over a decade and pledge to keep raising our standards of service."
                </p>

                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-med-teal text-lg">
                    RK
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-950 dark:text-white">
                      {BUSINESS_INFO.owner}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Chief Pharmacist & Founder, Maa Tara Medical Hall
                    </p>
                    <p className="text-[10px] text-med-teal mt-0.5">
                      Est. {BUSINESS_INFO.established} in Tekari, Bihar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-100/50 dark:bg-slate-900/20 py-12 border-y border-slate-200/45 dark:border-slate-800/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-med-teal tracking-widest uppercase">Our Core Values</span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              The Principles That Guide Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              We stand firm on these pillars of integrity to ensure the highest standard of patient safety and satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-900">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-med-teal tracking-widest uppercase">Our Journey</span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Milestones of Trust & Sincerity
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-8 py-2">
          {TIMELINE_EVENTS.map((evt, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-med-teal group-hover:scale-125 group-hover:bg-med-teal transition-all duration-300 z-10" />
              
              <div className="space-y-1">
                <span className="inline-block text-xs font-extrabold text-med-teal bg-med-teal/10 px-2.5 py-0.5 rounded-full">
                  {evt.year}
                </span>
                <h3 className="font-sans font-bold text-base sm:text-lg text-slate-950 dark:text-white">
                  {evt.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
