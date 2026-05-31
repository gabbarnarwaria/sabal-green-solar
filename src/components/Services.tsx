import React from 'react';
import { motion } from 'motion/react';
import {
  DraftingCompass,
  Construction,
  Briefcase,
  FileSearch,
  Truck,
  Lightbulb,
  Wrench,
  Home
} from 'lucide-react';

const services = [
  {
    title: 'Solar Plant Design & Engineering',
    desc: 'Customized engineering solutions using advanced 3D modeling and simulation tools.',
    icon: DraftingCompass,
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Solar EPC',
    desc: 'Full-scale Engineering, Procurement, and Construction for utility and industrial projects.',
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Solar Project Management',
    desc: 'Expert oversight to ensure projects are delivered on time, within budget, and to spec.',
    icon: Briefcase,
    image: '/images/solar-project-management.jpg'
  },
  {
    title: 'Feasibility Studies',
    desc: 'Comprehensive technical and financial analysis to determine project viability.',
    icon: FileSearch,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Supply Chain & Procurement',
    desc: 'Strategic sourcing of high-quality components from global tier-1 manufacturers.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Advisory & Energy Consulting',
    desc: 'Strategic guidance on energy transition, policy, and investment opportunities.',
    icon: Lightbulb,
    image: '/images/energy-consultant.jpg'
  },
  {
    title: 'Solar O&M Services',
    desc: 'Proactive maintenance and real-time monitoring to maximize energy yield.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Rooftop Solar Solutions',
    desc: 'Efficient rooftop installations for residential, commercial, and industrial buildings.',
    icon: Home,
    image: '/images/roof-top.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-solar-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Our Services</span>
            <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark">Comprehensive <span className="text-solar-green">Solar Solutions</span></h2>
          </div>
          <p className="text-gray-500 max-w-md">
            From initial feasibility to long-term maintenance, we provide end-to-end services to power your transition to clean energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-solar-green" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-4 group-hover:text-solar-green transition-colors text-solar-dark">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-solar-green font-bold text-sm hover:gap-3 transition-all">
                  Learn More
                  <DraftingCompass className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
