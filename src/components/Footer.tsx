import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-solar-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
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
            <span className="text-xl font-bold tracking-tight">
              SABAL GREEN <span className="text-solar-green">SOLAR</span> PVT LTD
            </span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61588784233867' },
              { Icon: Star, url: 'https://www.google.com/search?q=sabal+green+solar&sca_esv=ec2bff8bd1e2ef21&hl=en-IN&gl=in&sxsrf=ANbL-n69Rwb-EJm9e6C-UwV99wCn7nPimg%3A1781587461538&ei=Bd4waq2nIOLKwPAPw5LR2Q4&biw=1536&bih=758&gs_ssp=eJzj4tVP1zc0rDKuNKkoMDIyYLRSNagwtjQ3SzY0MDAyTjIzM0tOsjKoSElKM081sLQwtbCwSE5MNPESLE5MSsxRSC9KTc1TKM7PSSwCAOHNFWk&oq=Sabal+green+solar&gs_lp=Egxnd3Mtd2l6LXNlcnAiEVNhYmFsIGdyZWVuIHNvbGFyKgIIADIQEC4YgAQYigUYxwEYrwEYJzIKEAAYgAQYFBiHAjICECYyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wUyBRAAGO8FMh0QLhiABBiKBRjHARivARiXBRjcBBjeBBjgBNgBAUjuNlAAWK0fcAB4AJABAJgB3QKgAbccqgEHMC44LjguMbgBAcgBAPgBAZgCEqAC3CzCAgQQIxgnwgITEC4YgAQYigUYxwEYrwEYjgUYJ8ICChAuGIAEGIoFGCfCAgoQLhiABBiKBRhDwgIKEAAYgAQYigUYQ8ICCxAAGIAEGIoFGJECwgIHECMY8AUYJ8ICChAjGIAEGIoFGCfCAhQQLhivARjHARiRAhiABBiKBRiOBcICEBAAGIAEGIoFGEMYsQMYgwHCAhcQLhiABBiKBRiXBRjcBBjeBBjgBNgBAcICEBAuGIAEGIoFGEMYxwEYrwHCAg0QLhiABBiKBRhDGLEDwgIIEC4YgAQYsQPCAg0QABiABBiKBRhDGLEDwgIFEAAYgATCAhAQLhiABBiKBRhDGLEDGIMBwgIFEC4YgATCAg0QLhhDGLEDGIAEGIoFwgITEC4YgAQYigUYQxixAxjHARivAcICChAuGEMYgAQYigXCAg8QABiABBgKGAsYsQMYgwHCAgoQABiABBgCGMsBwgIHEC4YgAQYCsICBxAAGIAEGArCAgYQABgWGB7CAggQABgWGB4YCpgDALoGBggBEAEYFJIHCzAuNy45LjEuNy0xoAejnwKyBwcwLjcuOS4xuAe3HcIHCjAuMi4xNS4wLjHIB2qACAE&sclient=gws-wiz-serp' },
            ].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-solar-green hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-solar-green">{t('footer.quickLinks')}</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
            <li><Link to="/calculator" className="hover:text-white transition-colors">{t('nav.calculator')}</Link></li>
            <li><Link to="/company" className="hover:text-white transition-colors">{t('footer.about')}</Link></li>
            <li><Link to="/company#team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link to="/#projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">{t('footer.careers')}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link></li>
          </ul>
        </div>

      

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-solar-green">{t('footer.contact')}</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-solar-green shrink-0" />
              <span>BL 135 Deen Dayal Nagar, Gwalior, Madhya Pradesh, India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-solar-green shrink-0" />
              <span>+91 8982823613</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-solar-green shrink-0" />
              <span>+91 8962295336</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-solar-green shrink-0" />
              <span>info@sabalgreensolar.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>{t('footer.copyright')}</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-white">{t('footer.privacy')}</Link>
          <Link to="/terms-of-service" className="hover:text-white">{t('footer.terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
