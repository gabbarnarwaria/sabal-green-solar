import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Heart, Coffee, Globe, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const benefits = [
  { title: 'Work Environment', desc: 'A collaborative and inclusive culture that fosters innovation.', icon: Globe },
  { title: 'Health Benefits', desc: 'Comprehensive health and wellness programs for you and your family.', icon: Heart },
  { title: 'Growth Opportunities', desc: 'Continuous learning and clear career progression paths.', icon: Briefcase },
  { title: 'Work-Life Balance', desc: 'Flexible working hours and remote work options.', icon: Coffee },
];

export default function Careers() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    areaOfInterest: 'Engineering',
    resumeUrl: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@sabalgreensolar.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Career Application: ${formData.fullName} - ${formData.areaOfInterest}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          areaOfInterest: 'Engineering',
          resumeUrl: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-solar-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
            alt="Team"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Join Our Team</span>
            <h1 className="text-5xl md:text-6xl mt-6 mb-8 text-solar-dark">Build Your Career in <span className="text-solar-green">Renewable Energy</span></h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Sabal Green Solar, we are looking for passionate individuals who want to make a real impact on the planet. Join us in our mission to power a greener future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-solar-dark">Why Work With Us?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We offer more than just a job; we offer a platform to grow and contribute to a sustainable world.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-solar-light p-8 rounded-3xl shadow-sm border border-gray-100 hover:bg-solar-green group transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-solar-green" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-solar-dark group-hover:text-white transition-colors">{benefit.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 px-6 bg-solar-light">
        <div className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-solar-green p-10 text-white">
            <h3 className="text-3xl font-bold mb-2">Join Our Talent Pool</h3>
            <p className="text-white/80">Don't see a role that fits? Send us your resume anyway!</p>
          </div>
          <div className="p-10">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-solar-green mb-6" />
                <h3 className="text-3xl font-bold text-solar-dark mb-4">Application Submitted!</h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for your interest in joining Sabal Green Solar. We have received your application and our HR team will review it.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-solar-green font-bold hover:underline"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-solar-dark">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all" 
                      placeholder="Avinash Gaur" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-solar-dark">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all" 
                      placeholder="avinash@gmail.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">Area of Interest</label>
                  <select 
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all"
                  >
                    <option>Engineering</option>
                    <option>Project Management</option>
                    <option>Sales & Marketing</option>
                    <option>Operations & Maintenance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">Resume (URL)</label>
                  <input 
                    type="url" 
                    name="resumeUrl"
                    required
                    value={formData.resumeUrl}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder="https://link-to-your-resume.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all h-32" 
                    placeholder="Tell us about yourself..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-solar-green text-white py-5 rounded-xl font-bold text-lg hover:bg-solar-accent transition-all flex items-center justify-center gap-2 shadow-lg shadow-solar-green/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                  <ArrowRight className="w-5 h-5" />
                </button>
                {status === 'error' && (
                  <p className="mt-4 text-red-500 flex items-center gap-2 justify-center font-medium">
                    <AlertCircle className="w-5 h-5" />
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
