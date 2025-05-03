
import React, { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface FeaturePageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
}

const FeaturePageLayout = ({ children, title, description, backgroundImage }: FeaturePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white text-dark-charcoal">
      <Navigation />
      <header 
        className={`pt-32 pb-16 md:pt-40 md:pb-20 ${backgroundImage ? 
          'bg-cover bg-center' : 
          'bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-green-400/10'}`}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundBlendMode: 'overlay' } : undefined}
      >
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center text-primary-purple mb-6 hover:text-blue-700 transition-colors w-fit group">
            <ArrowLeft size={20} className="mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed animate-fade-in">
            {description}
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Download Tranquil AI Today</h2>
          <p className="text-lg mb-8">Start your journey to better mental health with just a tap.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow">
              <span>GOOGLE PLAY</span>
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow">
              <span>APP STORE</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturePageLayout;