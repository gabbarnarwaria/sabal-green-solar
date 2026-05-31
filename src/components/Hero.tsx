import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920"
          alt="Solar Plant"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Animated Clouds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: ['-20%', '110%'] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-0 w-[400px] h-[150px] bg-white/10 blur-[80px] rounded-full"
          />
          <motion.div
            animate={{ x: ['-30%', '120%'] }}
            transition={{ duration: 85, repeat: Infinity, ease: "linear", delay: -20 }}
            className="absolute top-[25%] left-0 w-[500px] h-[200px] bg-white/5 blur-[100px] rounded-full"
          />
          <motion.div
            animate={{ x: ['-10%', '130%'] }}
            transition={{ duration: 110, repeat: Infinity, ease: "linear", delay: -45 }}
            className="absolute top-[40%] left-0 w-[600px] h-[250px] bg-white/10 blur-[120px] rounded-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-solar-dark/90 via-solar-dark/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-solar-green/20 text-solar-green text-sm font-bold mb-6 border border-solar-green/30 backdrop-blur-sm"
          >
            Renewable Energy Excellence
          </motion.span>

          <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6 font-bold tracking-tight">
            Powering a <span className="text-solar-green italic">Sustainable</span> Future with Solar Energy
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Leading solar energy company in Gwalior, MP specializing in the engineering, procurement, and construction of large-scale solar power plants for utilities,IPP and commercial clients.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/request-quote"
              className="bg-solar-green text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-solar-accent transition-all transform hover:-translate-y-1 shadow-lg shadow-solar-green/20"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/company"
              className="bg-white text-solar-dark border border-gray-200 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-solar-green/10 flex items-center justify-center">
                <Play className="w-4 h-4 text-solar-green fill-current" />
              </div>
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-solar-vibrant rounded-full flex items-center justify-center">
              <Sun className="w-6 h-6 text-solar-dark" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">40+ Kw</p>
              <p className="text-gray-400 text-sm">Clean Energy Generated</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
