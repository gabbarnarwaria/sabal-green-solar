import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-solar-light">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-[40px] shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-solar-dark mb-8">Privacy Policy</h1>
            <p className="text-gray-500 mb-6">Last Updated: March 18, 2026</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Sabal Green Solar Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Fill out a contact or inquiry form</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for a job through our careers page</li>
                <li>Contact us directly via email or phone</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process job applications</li>
                <li>Send administrative information, such as updates to our terms and policies</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">5. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions or comments about this policy, you may email us at info@sabalgreensolar.com or by post to:
                <br /><br />
                Sabal Green Solar Pvt Ltd<br />
                135 DD Nagar, Gwalior<br />
                Madhya Pradesh, India
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
