import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Process() {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; description: string }>;
  
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-solar-green font-bold tracking-widest uppercase text-sm">{t('process.badge')}</span>
          <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark">{t('process.title')} <span className="text-solar-green">{t('process.titleHighlight')}</span></h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-solar-green/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white border-2 border-solar-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-solar-green group-hover:text-white transition-all shadow-lg group-hover:scale-110 duration-300">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h4 className="font-bold text-lg mb-3 group-hover:text-solar-green transition-colors text-solar-dark">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
