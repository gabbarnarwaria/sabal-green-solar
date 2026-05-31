import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Solar EPC?",
    answer: "EPC stands for Engineering, Procurement, and Construction. A Solar EPC company like Sabal Green provides end-to-end solar energy solutions, including designing the system, procuring all necessary components, and installing the entire project."
  },
  {
    question: "How long does a solar installation take?",
    answer: "The timeline varies based on the project size. A residential rooftop system typically takes 2-4 days, while large industrial or utility-scale projects can take several weeks to months, including planning and approvals."
  },
  {
    question: "What are the maintenance requirements for solar panels?",
    answer: "Solar panels require minimal maintenance. Regular cleaning to remove dust and debris is usually sufficient. We also provide professional O&M (Operations & Maintenance) services to ensure your system performs at peak efficiency."
  },
  {
    question: "Is my roof suitable for solar panels?",
    answer: "Most roofs are suitable for solar. Our engineering team conducts a thorough site assessment to evaluate roof structural integrity, orientation, and potential shading issues before designing your custom solar solution."
  },
  {
    question: "What is the typical ROI for a solar project?",
    answer: "For industrial and commercial projects, the typical return on investment (ROI) is between 3 to 5 years, depending on energy consumption patterns and local electricity tariffs. After that, the electricity generated is essentially free for the remaining 20+ years of the system's life."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-solar-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark font-bold">Frequently Asked <span className="text-solar-green">Questions</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-solar-dark">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-solar-green" />
                ) : (
                  <Plus className="w-5 h-5 text-solar-green" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
