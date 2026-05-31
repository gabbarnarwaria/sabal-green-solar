import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    installationType: 'Industrial Rooftop',
    location: ''
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
          _subject: `New Solar Quote Request from ${formData.fullName}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          installationType: 'Industrial Rooftop',
          location: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 bg-solar-green relative overflow-hidden">
      {/* Decorative Sun */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-solar-vibrant/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-solar-dark p-12 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Get a Free <span className="text-solar-vibrant">Solar Quote</span></h3>
            <p className="text-gray-400 mb-8">
              Fill out the form and our experts will get back to you with a customized solar solution for your needs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-solar-vibrant rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-solar-dark rounded-full" />
                </div>
                <span>Free Site Survey</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-solar-vibrant rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-solar-dark rounded-full" />
                </div>
                <span>Technical Feasibility</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-solar-vibrant rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-solar-dark rounded-full" />
                </div>
                <span>Financial ROI Analysis</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-2/3 p-12">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-solar-green mb-6" />
                <h3 className="text-3xl font-bold text-solar-dark mb-4">Request Received!</h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for your interest. Our team will review your requirements and contact you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-solar-green font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder="Avinash Gaur" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder="+91 98765 43210" 
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
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder="avinash@gmail.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">Installation Type</label>
                  <select 
                    name="installationType"
                    value={formData.installationType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all"
                  >
                    <option>Industrial Rooftop</option>
                    <option>Commercial Rooftop</option>
                    <option>Residential Rooftop</option>
                    <option>Utility Scale Farm</option>
                    <option>Agricultural Pump</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-solar-dark">Project Location</label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder="City, State" 
                  />
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-solar-green text-white py-5 rounded-xl font-bold text-lg hover:bg-solar-vibrant hover:text-solar-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Request Quote'}
                    <Send className="w-5 h-5" />
                  </button>
                  {status === 'error' && (
                    <p className="mt-4 text-red-500 flex items-center gap-2 justify-center font-medium">
                      <AlertCircle className="w-5 h-5" />
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
