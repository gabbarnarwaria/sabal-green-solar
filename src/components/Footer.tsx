import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
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
            Leading the transition to sustainable energy with innovative solar EPC solutions. Powering industries and communities for a cleaner tomorrow.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61588784233867' },
              { Icon: Twitter, url: '#' },
              { Icon: Linkedin, url: '#' },
              { Icon: Instagram, url: '#' },
            ].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-solar-green hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-solar-green">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/calculator" className="hover:text-white transition-colors">Solar Calculator</Link></li>
            <li><Link to="/company" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/company#team" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link to="/#projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-solar-green">Our Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/#services" className="hover:text-white transition-colors">Solar EPC</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Design & Engineering</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Project Management</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">O&M Services</Link></li>
            <li><Link to="/#services" className="hover:text-white transition-colors">Rooftop Solutions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-solar-green">Contact Us</h4>
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
        <p>© 2026 Sabal Green Solar Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
