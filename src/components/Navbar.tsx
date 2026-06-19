import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Phone, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.company'), href: '/company' },
    // { name: t('nav.services'), href: '/#services' },
    { name: t('nav.calculator'), href: '/calculator' },
    { name: t('nav.careers'), href: '/careers' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-16 h-16 bg-white rounded-lg overflow-hidden group-hover:scale-110 transition-transform shadow-sm">
            <img
              src="/images/logo.png"
              alt="Sabal Green Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x100/1B4332/white?text=SG";
              }}
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-solar-dark">
            SABAL GREEN <span className="text-solar-green">SOLAR</span> PVT LTD
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium transition-colors hover:text-solar-green text-solar-dark"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-solar-green/10 hover:bg-solar-green/20 text-solar-dark transition-all border border-solar-green/30"
            title="Toggle Language"
          >
            <Languages className="w-4 h-4" />
            <span className="text-xs font-semibold">
              {i18n.language === 'en' ? 'हिं' : 'EN'}
            </span>
          </button>
          <Link
            to="/request-quote"
            className="bg-solar-green text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-solar-accent transition-all shadow-md shadow-solar-green/20"
          >
            <Phone className="w-4 h-4" />
            {t('nav.getQuote')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-solar-green/10 hover:bg-solar-green/20 text-solar-dark transition-all border border-solar-green/30"
            title="Toggle Language"
          >
            <Languages className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold">
              {i18n.language === 'en' ? 'हिं' : 'EN'}
            </span>
          </button>
          <button
            className="text-solar-vibrant"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-solar-dark hover:text-solar-green"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/request-quote"
              onClick={() => setIsOpen(false)}
              className="bg-solar-green text-white px-6 py-3 rounded-xl text-center font-bold"
            >
              {t('nav.getQuote')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
