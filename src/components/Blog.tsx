import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Solar Energy in India: 2026 Trends',
    excerpt: 'Discover the latest technological advancements and policy changes shaping the Indian solar landscape.',
    author: 'Dr. Amit Singh',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Maximizing ROI on Industrial Solar Projects',
    excerpt: 'Learn how smart design and procurement can significantly reduce the payback period for your solar plant.',
    author: 'Sanjay Verma',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Why O&M is Critical for Solar Plant Longevity',
    excerpt: 'A deep dive into why proactive maintenance is the key to consistent energy yields over 25 years.',
    author: 'Priya Das',
    date: 'February 28, 2026',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Blog() {
  return (
    <section className="py-24 px-6 bg-solar-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Solar Insights</span>
            <h2 className="text-4xl md:text-5xl mt-4 text-solar-dark">Latest from Our <span className="text-solar-green">Blog</span></h2>
          </div>
          <button className="text-solar-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer bg-white p-6 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-solar-green" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4 text-solar-green" />
                  {post.author}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-solar-green transition-colors text-solar-dark">{post.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <span className="text-solar-green font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Read More
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
