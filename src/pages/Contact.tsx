import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: 'Solar Installation Inquiry',
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
          _subject: `New Contact Message: ${formData.subject}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: 'Solar Installation Inquiry',
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
      <section className="pt-40 pb-20 px-6 bg-solar-light text-solar-dark">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-solar-green font-bold tracking-widest uppercase text-sm">{t('contact.badge')}</span>
            <h1 className="text-5xl md:text-6xl mt-6 mb-8 text-solar-dark">{t('contact.heroTitle')} <span className="text-solar-green">{t('contact.heroTitleHighlight')}</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('contact.heroDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-solar-light p-8 rounded-[32px] border border-gray-100">
                <h3 className="text-2xl font-bold mb-8 text-solar-dark">{t('contact.title')}</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white text-solar-green rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-solar-dark">{t('contact.officeAddress')}</p>
                      <p className="text-gray-500 text-sm">{t('contact.officeAddressText')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white text-solar-green rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-solar-dark">{t('contact.phoneNumber')}</p>
                      <p className="text-gray-500 text-sm">{t('contact.phoneNumber1')}</p>
                      <p className="text-gray-500 text-sm">{t('contact.phoneNumber2')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white text-solar-green rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-solar-dark">{t('contact.emailAddress')}</p>
                      <p className="text-gray-500 text-sm">{t('contact.emailText')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white text-solar-green rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-solar-dark">{t('contact.workingHours')}</p>
                      <p className="text-gray-500 text-sm">{t('contact.workingHoursText')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-solar-green p-8 rounded-[32px] text-white shadow-lg shadow-solar-green/20">
                <h4 className="text-xl font-bold mb-6">{t('contact.followUs')}</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61588784233867' },
                  ].map(({ Icon, url }, i) => (
                    <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-solar-green transition-all">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle2 className="w-20 h-20 text-solar-green mb-6" />
                    <h3 className="text-3xl font-bold text-solar-dark mb-4">{t('contact.successTitle')}</h3>
                    <p className="text-gray-600 max-w-md">
                      {t('contact.successMessage')}
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-solar-green font-bold hover:underline"
                    >
                      {t('contact.sendAnother')}
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold mb-8 text-solar-dark">{t('contact.formTitle')}</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-solar-dark">{t('contact.firstName')}</label>
                          <input 
                            type="text" 
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all" 
                            placeholder={t('contact.firstNamePlaceholder')}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-solar-dark">{t('contact.lastName')}</label>
                          <input 
                            type="text" 
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all" 
                            placeholder={t('contact.lastNamePlaceholder')}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-solar-dark">{t('contact.email')}</label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all" 
                            placeholder={t('contact.emailPlaceholder')}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-solar-dark">{t('contact.phone')}</label>
                          <input 
                            type="tel" 
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all" 
                            placeholder={t('contact.phonePlaceholder')}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-solar-dark">{t('contact.subject')}</label>
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all"
                        >
                          <option>{t('contact.subjectOptions.inquiry')}</option>
                          <option>{t('contact.subjectOptions.service')}</option>
                          <option>{t('contact.subjectOptions.partnership')}</option>
                          <option>{t('contact.subjectOptions.other')}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-solar-dark">{t('contact.message')}</label>
                        <textarea 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-solar-green transition-all h-40" 
                          placeholder={t('contact.messagePlaceholder')}
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-solar-green text-white py-5 rounded-xl font-bold text-lg hover:bg-solar-accent transition-all flex items-center justify-center gap-2 shadow-lg shadow-solar-green/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? t('contact.sending') : t('contact.sendButton')}
                        <Send className="w-5 h-5" />
                      </button>
                      {status === 'error' && (
                        <p className="mt-4 text-red-500 flex items-center gap-2 justify-center font-medium">
                          <AlertCircle className="w-5 h-5" />
                          {t('contact.errorMessage')}
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200">
        <iframe
          src="https://maps.google.com/maps?q=apna+adda,+bl+135,+Gwalior,+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-none grayscale"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}
