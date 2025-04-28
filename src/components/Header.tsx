
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary-purple bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-blue-600">
          Tranquil AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10 leading-relaxed">
          Your Mental Health Companion – Anytime, Anywhere.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <Button 
            className="bg-primary-purple hover:bg-primary-purple/90 text-white px-8 py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="bg-white hover:bg-gray-50 text-primary-purple border-2 border-primary-purple px-8 py-6 rounded-xl font-semibold text-lg hover:shadow-md transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
