import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Utility-Scale Solar Farm',
    location: 'Rajasthan, India',
    capacity: '50 MW',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    category: 'Utility'
  },
  {
    title: 'Industrial Rooftop Project',
    location: 'Gujarat, India',
    capacity: '5 MW',
    image: '/images/industry_roof_top.jpg',
    category: 'Industrial'
  },
  {
    title: 'Agricultural Solar Pump Scheme',
    location: 'Madhya Pradesh, India',
    capacity: '2 MW (Total)',
    image: '/images/agriculture-pump-solar.jpg',
    category: 'Agricultural'
  },
  {
    title: 'Government Smart City Solar',
    location: 'Maharashtra, India',
    capacity: '10 MW',
    image: '/images/goverment-smart-city-solar.jpg',
    category: 'Government'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark">Featured <span className="text-solar-green">Solar Projects</span></h2>
          </div>
          <button className="px-8 py-3 border border-gray-200 rounded-xl font-bold hover:bg-solar-green hover:text-white transition-all text-solar-dark">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/90 via-solar-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="flex justify-between items-end">
                  <div className="text-white">
                    <span className="text-solar-vibrant text-sm font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h4 className="text-3xl font-bold mb-2">{project.title}</h4>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      {project.location} • {project.capacity}
                    </p>
                  </div>
                  <button className="w-14 h-14 bg-solar-green text-white rounded-2xl flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-lg">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
