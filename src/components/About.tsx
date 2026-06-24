import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800"
                alt="Solar Engineers"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-solar-vibrant rounded-3xl -z-10 hidden md:block" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-solar-green rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-solar-green font-bold tracking-widest uppercase text-sm">{t('about.badge')}</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-6">{t('about.title')} <span className="text-solar-green">{t('about.titleHighlight')}</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                {t('about.paragraph2')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-solar-light rounded-2xl border border-solar-green/10">
                <div className="w-12 h-12 bg-solar-green rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{t('about.mission.title')}</h4>
                <p className="text-gray-500 text-sm">{t('about.mission.description')}</p>
              </div>
              <div className="p-6 bg-solar-light rounded-2xl border border-solar-green/10">
                <div className="w-12 h-12 bg-solar-vibrant rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-solar-dark" />
                </div>
                <h4 className="font-bold text-lg mb-2">{t('about.team.title')}</h4>
                <p className="text-gray-500 text-sm">{t('about.team.description')}</p>
              </div>
            </div>

            <button className="group flex items-center gap-3 font-bold text-solar-green hover:gap-5 transition-all">
              {t('about.learnMore')}
              <div className="w-10 h-10 bg-solar-green text-white rounded-full flex items-center justify-center group-hover:bg-solar-vibrant group-hover:text-solar-dark transition-colors">
                <Shield className="w-5 h-5" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
