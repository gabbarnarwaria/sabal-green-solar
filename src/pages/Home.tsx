import React from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import Services from '@/src/components/Services';
import PriceList from '@/src/components/PriceList';
import Process from '@/src/components/Process';
import Projects from '@/src/components/Projects';
import VideoSection from '@/src/components/VideoSection';
import Impact from '@/src/components/Impact';
import FAQ from '@/src/components/FAQ';
import Blog from '@/src/components/Blog';
import InquiryForm from '@/src/components/InquiryForm';
import GoogleReviews from '@/src/components/GoogleReviews';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      {/* <WhyChooseUs /> */}
      <PriceList />
      {/* <Services /> */}
      <Process />
      <Projects />
      <VideoSection />
      <FAQ />
      {/* <Blog /> */}
      <InquiryForm />
      <GoogleReviews />
      <Footer />
    </main>
  );
}
