
import React, { useState, useEffect } from 'react';
import { Home, Target, Star, Download, Eye, MessageCircleQuestion, Phone, Menu, X, Newspaper } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Mission', icon: Target, href: '#mission' },
    { name: 'Features', icon: Star, href: '#features' },
    { name: 'Testimonials', icon: MessageCircleQuestion, href: '#testimonials' },
    { name: 'Download', icon: Download, href: '#download' },
    { name: 'Coming Soon', icon: Eye, href: '#upcoming-features' },
    { name: 'Vision', icon: Eye, href: '#vision' },
    { name: 'Media', icon: Newspaper, href: '#media' },
    { name: 'Contact', icon: Phone, href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center py-5 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/d5154c15-1682-4e4b-b010-f464b83cad81.png" 
            alt="Tranquil AI Logo" 
            className="w-10 h-10"
          />
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-blue-600">
            Tranquil AI
          </div>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-purple hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-gray-700 hover:text-primary-purple transition-colors flex items-center space-x-1 group relative px-2 py-1"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-purple group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={`absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="flex items-center space-x-3 px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-primary-purple border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;