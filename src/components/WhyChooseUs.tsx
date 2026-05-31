import React from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Zap, Cpu, Truck, Award, Users, Headphones } from 'lucide-react';

const features = [
  { title: 'Best Price Guarantee', desc: 'Solar solutions that fit your budget without compromising on quality.', icon: Award },
  { title: 'Premium Quality', desc: 'We only use top-tier solar panels and components that last for 25+ years.', icon: ShieldCheck },
  { title: 'We Listen to You', desc: 'Our team is dedicated to listening and solving your specific energy problems.', icon: Headphones },
  { title: 'Expert Local Team', desc: 'Hardworking professionals who understand the needs of every household.', icon: Users },
  { title: 'Fast Installation', desc: 'Quick and hassle-free setup so you can start saving from day one.', icon: Zap },
  { title: 'No Hidden Costs', desc: 'Transparent pricing with no surprises. Honest service you can trust.', icon: Cpu },
  { title: 'Lifetime Support', desc: 'We don\'t just install and leave. We are here for you for the long run.', icon: Settings },
  { title: 'Smart Savings', desc: 'Maximize your savings and say goodbye to expensive electricity bills.', icon: Truck },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-solar-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-solar-vibrant font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl mt-4">The Sabal Green <span className="text-solar-vibrant">Advantage</span></h2>
          <p className="text-gray-400 mt-6 text-lg">
            We combine technical expertise with a commitment to quality to deliver solar projects that stand the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-solar-vibrant/50 transition-all group"
            >
              <div className="w-14 h-14 bg-solar-vibrant/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-solar-vibrant transition-colors">
                <feature.icon className="w-7 h-7 text-solar-vibrant group-hover:text-solar-dark" />
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
