
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-r from-blue-100/50 to-blue-200/50">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/logodownload/d5154c15-1682-4e4b-b010-f464b83cad81.png" 
            alt="Tranquil AI Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain animate-pulse"
          />
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary-purple bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-blue-600 animate-fade-in">
            Tranquil AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10 leading-relaxed animate-fade-in">
            Your Mental Health Companion – Anytime, Anywhere.
          </p>
          <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
            <Link to="/download">
              <Button 
                className="bg-primary-purple hover:bg-blue-600 text-white px-8 py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
            <a href="#mission">
              <Button 
                variant="outline"
                className="bg-white/80 hover:bg-gray-50 text-primary-purple border-2 border-primary-purple px-8 py-6 rounded-xl font-semibold text-lg hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;