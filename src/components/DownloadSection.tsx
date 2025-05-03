
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-r from-primary-purple to-blue-400 text-white rounded-3xl transform transition-all hover:scale-[1.01] duration-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Download Tranquil AI</h2>
        <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
          Ready to take control of your mental well-being? Download Tranquil AI now and start your journey toward a more balanced, peaceful life.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <Button 
            className="flex items-center justify-center gap-3 bg-white text-primary-purple px-8 py-6 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl text-lg transform hover:scale-105 duration-300 animate-fade-in"
          >
            <Download size={24} />
            <span>Download on App Store</span>
          </Button>
          <Button 
            className="flex items-center justify-center gap-3 bg-white text-primary-purple px-8 py-6 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl text-lg transform hover:scale-105 duration-300 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <Download size={24} />
            <span>Download on Google Play</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;