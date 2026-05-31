import React from 'react';
import { motion } from 'motion/react';

const clients = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Logo.svg/2560px-Google_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_logo.svg/1200px-Tata_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png',
];

export default function Clients() {
  return (
    <section className="py-20 px-6 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm mb-12">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity">
          {clients.map((logo, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              src={logo}
              alt="Client Logo"
              className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all cursor-pointer"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
