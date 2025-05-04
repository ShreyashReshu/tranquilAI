
import React, { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

interface FeaturePageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
}

const FeaturePageLayout = ({ children, title, description, backgroundImage }: FeaturePageLayoutProps) => {
  // Fix for scroll issue when clicking on feature links
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed animate-fade-in">
              {description}
            </p>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-purple">
            Experience in the Tranquil AI App
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This feature is available in our mobile application. Download now to experience the full functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-purple text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Download size={20} />
              <span>Download for iOS</span>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-purple text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Download size={20} />
              <span>Download for Android</span>
            </a>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          {children}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500/90 to-blue-300/90 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Download Tranquil AI Today</h2>
          <p className="text-lg mb-8">Start your journey to better mental health with just a tap.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-white/90 text-blue-600 px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <span>GOOGLE PLAY</span>
            </a>
            <a 
              href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-blue-600 px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <span>APP STORE</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturePageLayout;