
import React, { useState } from 'react';
import { Home, Target, Star, Download, Eye, MessageCircleQuestion, Phone, Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Mission', icon: Target, href: '#mission' },
    { name: 'Features', icon: Star, href: '#features' },
    { name: 'Download', icon: Download, href: '#download' },
    { name: 'Vision', icon: Eye, href: '#vision' },
    { name: 'FAQ', icon: MessageCircleQuestion, href: '#faq' },
    { name: 'Contact', icon: Phone, href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-5 px-4">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-blue-600">Tranquil AI</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-purple hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
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
        <div className={`absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
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
