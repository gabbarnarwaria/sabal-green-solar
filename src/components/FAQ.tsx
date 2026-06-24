import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = t('faq.questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string | {
      intro: string;
      maintenance?: string;
      cleaning?: { title: string; description: string };
      inverter?: { title: string; description: string };
      monthlySavings?: { title: string; description: string };
      paybackPeriod?: { title: string; description: string };
      longTermProfits?: { title: string; description: string };
    };
  }>;

  const renderAnswer = (answer: string | any) => {
    if (typeof answer === 'string') {
      return answer;
    }

    // Handle complex answers with nested structure
    return (
      <div>
        {answer.intro && <p className="mb-3">{answer.intro}</p>}
        {answer.maintenance && <p className="mb-2">{answer.maintenance}</p>}
        {(answer.cleaning || answer.inverter || answer.monthlySavings || answer.paybackPeriod || answer.longTermProfits) && (
          <ul className="list-disc pl-5 space-y-2">
            {answer.cleaning && (
              <li>
                <strong>{answer.cleaning.title}</strong> {answer.cleaning.description}
              </li>
            )}
            {answer.inverter && (
              <li>
                <strong>{answer.inverter.title}</strong> {answer.inverter.description}
              </li>
            )}
            {answer.monthlySavings && (
              <li>
                <strong>{answer.monthlySavings.title}</strong> {answer.monthlySavings.description}
              </li>
            )}
            {answer.paybackPeriod && (
              <li>
                <strong>{answer.paybackPeriod.title}</strong> {answer.paybackPeriod.description}
              </li>
            )}
            {answer.longTermProfits && (
              <li>
                <strong>{answer.longTermProfits.title}</strong> {answer.longTermProfits.description}
              </li>
            )}
          </ul>
        )}
      </div>
    );
  };

  return (
    <section className="py-24 px-6 bg-solar-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-solar-green font-bold tracking-widest uppercase text-sm">{t('faq.commonQuestions')}</span>
          <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark font-bold">{t('faq.faqTitle')} <span className="text-solar-green">{t('faq.faqTitleHighlight')}</span></h2>
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
                      {renderAnswer(faq.answer)}
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
