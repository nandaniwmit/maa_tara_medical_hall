import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactView() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) {
      setError("Please complete all required fields (Name, Phone, Message).");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      // Clear success notification after some time
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="animate-fade-in space-y-12 py-8 sm:py-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-xs sm:text-sm font-sans text-slate-500 dark:text-slate-400 gap-2 items-center">
          <span className="hover:text-med-teal cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">Contact Us</span>
        </nav>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-med-teal tracking-widest uppercase">Get in Touch</span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Connect With Our <span className="text-med-teal">Pharmacy Team</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Have questions about medicine availability, pricing, or our services? Visit our store in Tekari, call us directly, or send an instant inquiry below.
          </p>
          <div className="w-16 h-1 bg-med-teal mx-auto rounded-full mt-4" />
        </div>
      </div>

      {/* Grid: Details (Left) & Form (Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="glass-card bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/85 shadow-sm space-y-6">
              <h3 className="font-sans font-bold text-lg text-slate-950 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-med-teal" />
                Store Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-slate-950 flex items-center justify-center text-med-primary border border-sky-100 dark:border-sky-950 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Our Location
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {BUSINESS_INFO.location}
                  </p>
                  <p className="text-[11px] text-med-teal font-medium mt-1">
                    Khachiya Road, Near Tekari Castle/Market, Bihar
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-950 flex items-center justify-center text-med-teal border border-emerald-100 dark:border-emerald-950 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-med-teal transition-colors">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Available for mobile orders and prescription checks.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-slate-950 flex items-center justify-center text-purple-600 border border-purple-100 dark:border-purple-950 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider">
                    Email Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 truncate max-w-[200px] sm:max-w-xs">
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-med-teal transition-colors">
                      {BUSINESS_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Operating Times Card */}
            <div className="glass-card bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/85 shadow-sm space-y-4">
              <h3 className="font-sans font-bold text-lg text-slate-950 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Clock className="w-5 h-5 text-med-teal" />
                Working Hours
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-slate-50 dark:border-slate-800/50">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Monday - Saturday</span>
                  <span className="font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50 dark:border-slate-800/50">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Sunday</span>
                  <span className="font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.workingHours.sunday}</span>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-xl border border-red-100 dark:border-red-900/35 mt-2">
                  <p className="text-xs font-bold text-red-700 dark:text-red-400">Emergency Availability</p>
                  <p className="text-[11px] text-red-600 dark:text-red-300 mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.workingHours.emergency}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/85 shadow-lg">
              
              <h3 className="font-sans font-bold text-xl text-slate-950 dark:text-white mb-2">
                Send Us a Quick Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the secure contact form below. Our support representatives will respond as soon as possible.
              </p>

              {/* Status notifications */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-2xl flex items-center gap-3 text-red-700 dark:text-red-400 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {isSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-2xl flex items-center gap-3 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm animate-fade-in">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajeev Kumar"
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                  />
                </div>

                {/* Grid: Phone & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 08804210306"
                      required
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@gmail.com"
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Inquiry Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe your requirements (e.g. Do you have Amoxycillin 625mg in stock? How much is it?)"
                    rows={4}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-med-teal transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-med-teal hover:bg-med-teal-hover disabled:bg-slate-400 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-med-teal/15"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending message..." : "Send Message"}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Google Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="glass-card bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-md">
          <div className="flex justify-between items-center p-3">
            <span className="font-sans font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500 animate-bounce" />
              Find us on Google Maps
            </span>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.location)}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-med-teal font-bold hover:underline"
            >
              Open in Maps App
            </a>
          </div>
          
          {/* Embedded Map Frame using local coordinates for Khachiya Rd, Tekari, Bihar */}
          <div className="w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800/45">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3615.1555518290234!2d84.8329482103565!3d24.9351050777904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd36fc9cb0939%3A0xe72688b560ff00b1!2sMaa%20Tara%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maa Tara Medical Hall Google Map Location"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
