import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

const galleryImages = [
  '/images/customers/Image2_Grid.jpeg',
  '/images/customers/Image1_Grid.jpeg',
  '/images/customers/customer3.jpeg',
  '/images/customers/customer4.jpeg',
  '/images/customers/customer5.jpeg',
  '/images/customers/customer6.jpeg',
  '/images/customers/customer7.jpeg',
];

export default function ProjectGallery() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <Link to="/" className="text-solar-green font-semibold hover:text-solar-dark">
            {t('projectGallery.backToHome')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 text-solar-dark">
            {t('projectGallery.pageTitle')}
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={index} className="rounded-[32px] overflow-hidden shadow-xl h-80">
              <img src={src} alt={`${t('projectGallery.imageAlt')} ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
