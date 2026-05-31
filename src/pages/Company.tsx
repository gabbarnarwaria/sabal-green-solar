import React, { useRef } from 'react';
import Navbar from '@/src/components/Navbar';
import About from '@/src/components/About';
import Team from '@/src/components/Team';
import Footer from '@/src/components/Footer';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Company() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section for Company Page */}
      <section ref={containerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-on-a-roof-4451-large.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-solar-dark/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <motion.div
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-solar-green/20 text-solar-green border border-solar-green/30 rounded-full backdrop-blur-md"
            >
              Excellence in Solar EPC
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tight"
            >
              Our <span className="text-solar-green">Company</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Sabal Green Solar is committed to excellence in renewable energy, driven by a passion for sustainability and a team of industry experts.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-solar-green rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <About />
      <Team />
      
      <Footer />
    </main>
  );
}
