import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CloudRain, Zap, Map } from 'lucide-react';

const metrics = [
  { label: 'CO2 Reduced', value: '15,000+ Tons', icon: CloudRain, color: 'text-blue-500' },
  { label: 'Energy Generated', value: '40+ kW', icon: Zap, color: 'text-solar-vibrant' },
  { label: 'Land Powered', value: '3,000+ Sq Ft', icon: Map, color: 'text-solar-green' },
];

export default function Impact() {
  return (
    <section className="py-24 px-6 bg-solar-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-green/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-vibrant/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Our Impact</span>
          <h2 className="text-4xl md:text-5xl mt-4">Creating a <span className="text-solar-green">Positive Change</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-8 border border-black/5">
                <metric.icon className={`w-10 h-10 ${metric.color}`} />
              </div>
              <h3 className="text-4xl font-bold text-solar-dark mb-2">{metric.value}</h3>
              <p className="text-gray-500 font-medium text-lg">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-solar-green rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to switch to clean energy?</h3>
            <p className="text-white/80 text-lg">Join hundreds of businesses that have already made the transition with Sabal Green Solar.</p>
          </div>
          <Link
            to="/request-quote"
            className="bg-solar-vibrant text-solar-dark px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all transform hover:scale-105 whitespace-nowrap"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
