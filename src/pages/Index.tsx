
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import MissionStatement from '@/components/MissionStatement';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import DownloadSection from '@/components/DownloadSection';
import UpcomingFeatures from '@/components/UpcomingFeatures';
import Vision from '@/components/Vision';
import MediaPresence from '@/components/MediaPresence';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white text-dark-charcoal">
      <Navigation />
      <Header />
      <div className="container mx-auto px-4 space-y-24">
        <MissionStatement />
        <Features />
        <Testimonials />
        <DownloadSection />
        <UpcomingFeatures />
        <Vision />
        <MediaPresence />
      </div>
      <Footer />
    </div>
  );
};

export default Index;