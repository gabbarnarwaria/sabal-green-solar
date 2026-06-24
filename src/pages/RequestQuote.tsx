import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function RequestQuote() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section for Request Quote */}
      <section className="pt-40 pb-20 px-6 bg-solar-light text-solar-dark">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">{t('quote.badge')}</span>
            <h1 className="text-5xl md:text-6xl mt-6 mb-8 text-solar-dark">{t('quote.heroTitle')} <span className="text-solar-green">{t('quote.heroTitleHighlight')}</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('quote.heroDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      <InquiryForm />
      
      <Footer />
    </main>
  );
}
