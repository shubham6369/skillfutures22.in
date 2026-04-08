'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How do I enroll in a track?",
    answer: "Simply navigate to the 'Our Elite Tracks' section, choose your preferred course, and click 'Get Started'. Our streamlined application process takes less than 5 minutes."
  },
  {
    question: "Do I need prior code experience?",
    answer: "Each track has a difficulty level. While 'Expert' tracks require 2+ years of industry experience, our 'Intermediate' tracks are designed for high-potential builders with foundational knowledge."
  },
  {
    question: "How long are the programs?",
    answer: "Our intensive tracks typically range from 8 to 16 weeks, depending on the complexity of the subject matter. Each week involves roughly 15-20 hours of commitment."
  },
  {
    question: "Is there a certification provided?",
    answer: "Yes. Upon successful completion of all core modules and a final project, you will receive a verified digital certificate recognized by our network of hiring partners."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-midnight relative overflow-hidden">
      {/* Decorative center light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black tracking-[0.2em] uppercase mb-8"
            >
              <HelpCircle className="w-3 h-3" />
              Intelligence Base
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
              Common <span className="bg-gradient-to-r from-electric to-gold bg-clip-text text-transparent">Queries</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Everything you need to know about initiating your digital mastery protocol at SkillFutures.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                    isOpen 
                      ? 'border-gold/30 glass bg-white/5 shadow-[0_0_40px_rgba(255,215,0,0.05)]' 
                      : 'border-white/5 hover:border-white/10 glass bg-transparent'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left group"
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-500 ${
                      isOpen 
                        ? 'rotate-180 border-gold text-gold bg-gold/10' 
                        : 'border-white/10 text-white/20 group-hover:border-white/40 group-hover:text-white'
                    }`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-8 text-gray-400 font-semibold leading-[1.8] text-sm md:text-base border-t border-white/5 pt-8">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
