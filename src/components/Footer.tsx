
import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-blue-400">Tranquil AI</h3>
            <p className="text-gray-300 text-lg mb-6">
              Your mental health companion – anytime, anywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-purple transition-colors p-2 bg-gray-800 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-purple transition-colors p-2 bg-gray-800 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-purple transition-colors p-2 bg-gray-800 rounded-full">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <form className="space-y-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary-purple"
              />
              <textarea 
                placeholder="Your message" 
                className="w-full h-24 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary-purple"
              ></textarea>
              <Button className="w-full bg-primary-purple hover:bg-primary-purple/90">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-purple transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary-purple transition-colors">Features</a>
              </li>
              <li>
                <a href="#download" className="text-gray-300 hover:text-primary-purple transition-colors">Download</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-purple transition-colors">Contact</a>
              </li>
              <li>
                <div className="flex items-center gap-2 mt-6">
                  <Mail size={18} className="text-primary-purple" />
                  <span className="text-gray-300">support@tranquilai.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tranquil AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
