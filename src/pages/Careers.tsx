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
