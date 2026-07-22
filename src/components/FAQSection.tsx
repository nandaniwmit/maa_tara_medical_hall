import { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Compass } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Ordering', 'Quality', 'Prescription', 'Delivery', 'Store Timing', 'Inventory', 'Storage', 'Payment', 'Discounts'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in space-y-10 py-4" id="faq-section">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-med-teal tracking-widest uppercase flex items-center justify-center gap-1">
          <HelpCircle className="w-3.5 h-3.5" />
          Common Answers
        </span>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Have questions about prescriptions, ordering, storage, or discounts? Find quick answers prepared by our pharmacy team.
        </p>
      </div>

      {/* Accordion Filter & Search controls */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm space-y-4">
        
        {/* Search */}
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. insulin, prescription)..."
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 pl-10 pr-4 text-xs font-sans focus:outline-none focus:border-med-teal focus:ring-1 focus:ring-med-teal transition-all"
          />
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-1 overflow-x-auto max-w-full py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-med-teal text-white'
                  : 'bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {cat === 'all' ? 'All Categories' : cat}
            </button>
          ))}
        </div>

      </div>

      {/* Accordion Lists */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-xs transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
                >
                  <span className="font-sans font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/40 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed animate-fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex justify-between items-center text-[10px] text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800/30">
                      <span>Category: <span className="font-semibold text-med-teal">{faq.category}</span></span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 bg-white dark:bg-slate-900 border border-slate-200/60 rounded-2xl max-w-md mx-auto p-4">
            <Compass className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">No FAQ matches found</p>
            <p className="text-[11px] text-slate-500 mt-1">Try clearing your search filters or browse other sections.</p>
          </div>
        )}
      </div>

    </div>
  );
}
