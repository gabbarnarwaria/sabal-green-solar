import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    image: '/images/Image2_Grid.jpeg'
  },
  {
    image: '/images/Image1_Grid.jpeg'
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[40px] overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                alt={`Solar Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
