import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, GreenFab Industries',
    content: 'Sabal Green Solar transformed our energy consumption. Their EPC team was professional, and the ROI has been incredible.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Anjali Sharma',
    role: 'Operations Head, TechPark India',
    content: 'The level of engineering detail provided by Sabal Green is unmatched. Our rooftop installation is performing 15% above estimates.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">What Our <span className="text-solar-green">Clients Say</span></h2>
            <p className="text-gray-500 text-lg mb-8">
              We take pride in delivering exceptional value to our clients. Here is what some of them have to say about their experience with us.
            </p>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-solar-light p-10 rounded-[40px] relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-solar-green/10" />
                <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-solar-dark">{t.name}</h4>
                    <p className="text-solar-green text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
