import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function InquiryForm() {
  const { t } = useTranslation();
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
            <h3 className="text-3xl font-bold mb-6">{t('inquiryForm.title')} <span className="text-solar-vibrant">{t('inquiryForm.titleHighlight')}</span></h3>
            <p className="text-gray-400 mb-8">
              {t('inquiryForm.description')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-solar-vibrant rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-solar-dark rounded-full" />
                </div>
                <span>{t('inquiryForm.benefits.survey')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-solar-vibrant rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-solar-dark rounded-full" />
                </div>
                <span>{t('inquiryForm.benefits.feasibility')}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-solar-vibrant rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-solar-dark rounded-full" />
                </div>
                <span>{t('inquiryForm.benefits.roi')}</span>
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
                <h3 className="text-3xl font-bold text-solar-dark mb-4">{t('inquiryForm.successTitle')}</h3>
                <p className="text-gray-600 max-w-md">
                  {t('inquiryForm.successMessage')}
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-solar-green font-bold hover:underline"
                >
                  {t('inquiryForm.sendAnother')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">{t('inquiryForm.fields.fullName')}</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder={t('inquiryForm.fields.fullNamePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">{t('inquiryForm.fields.phoneNumber')}</label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder={t('inquiryForm.fields.phoneNumberPlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">{t('inquiryForm.fields.email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder={t('inquiryForm.fields.emailPlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-solar-dark">{t('inquiryForm.fields.installationType')}</label>
                  <select 
                    name="installationType"
                    value={formData.installationType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all"
                  >
                    <option>{t('inquiryForm.installationTypes.industrialRooftop')}</option>
                    <option>{t('inquiryForm.installationTypes.commercialRooftop')}</option>
                    <option>{t('inquiryForm.installationTypes.residentialRooftop')}</option>
                    <option>{t('inquiryForm.installationTypes.utilityScale')}</option>
                    <option>{t('inquiryForm.installationTypes.agricultural')}</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-solar-dark">{t('inquiryForm.fields.location')}</label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-solar-light border-none focus:ring-2 focus:ring-solar-green transition-all" 
                    placeholder={t('inquiryForm.fields.locationPlaceholder')}
                  />
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-solar-green text-white py-5 rounded-xl font-bold text-lg hover:bg-solar-vibrant hover:text-solar-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? t('inquiryForm.submitting') : t('inquiryForm.submitButton')}
                    <Send className="w-5 h-5" />
                  </button>
                  {status === 'error' && (
                    <p className="mt-4 text-red-500 flex items-center gap-2 justify-center font-medium">
                      <AlertCircle className="w-5 h-5" />
                      {t('inquiryForm.errorMessage')}
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
