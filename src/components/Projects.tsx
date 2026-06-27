import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const projects = [
  { image: '/images/customers/Image2_Grid.jpeg' },
  { image: '/images/customers/Image1_Grid.jpeg' },
  { image: '/images/customers/customer3.jpeg' },
  { image: '/images/customers/customer4.jpeg' },
  { image: '/images/customers/customer5.jpeg' },
  { image: '/images/customers/customer6.jpeg' },
  { image: '/images/customers/customer7.jpeg' }
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">{t('projects.badge')}</span>
            <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark">{t('projects.title')} <span className="text-solar-green">{t('projects.titleHighlight')}</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[40px] overflow-hidden shadow-xl h-80"
            >
              <img
                src={project.image}
                alt={`Solar Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/project-gallery"
            className="inline-block rounded-full bg-solar-green px-8 py-4 text-white font-semibold transition hover:bg-solar-dark"
          >
            {t('projects.showMoreImages')}
          </a>
        </div>
      </div>
    </section>
  );
}
