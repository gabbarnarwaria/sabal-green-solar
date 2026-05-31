import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold text-solar-dark mb-8">Terms of Service</h1>
            <p className="text-gray-500 mb-6">Last Updated: March 18, 2026</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Sabal Green Solar Pvt Ltd's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">3. Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on our website are provided on an 'as is' basis. Sabal Green Solar Pvt Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">4. Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Sabal Green Solar Pvt Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sabal Green Solar Pvt Ltd's website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-solar-dark mb-4">5. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Madhya Pradesh, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
