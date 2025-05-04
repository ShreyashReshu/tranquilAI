
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white text-dark-charcoal">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center text-primary-purple mb-6 hover:text-blue-700 transition-colors w-fit group">
            <ArrowLeft size={20} className="mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary-purple">Download Tranquil AI</h1>
              <p className="text-xl text-center mb-12">
                Start your journey to better mental health today by downloading our app on your preferred platform.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50/80 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center text-center">
                  <img 
                    src="/logodownload/d5154c15-1682-4e4b-b010-f464b83cad81.png" 
                    alt="iOS App" 
                    className="w-24 h-24 mb-6" 
                  />
                  <h2 className="text-2xl font-semibold mb-4">iOS App</h2>
                  <p className="mb-8 text-gray-700">
                    Download Tranquil AI from the Apple App Store for your iPhone or iPad.
                  </p>
                  <a 
                    href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-purple text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Download size={20} />
                    <span>App Store</span>
                  </a>
                </div>
                
                <div className="bg-blue-50/80 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center text-center">
                  <img 
                    src="/logodownload/d5154c15-1682-4e4b-b010-f464b83cad81.png" 
                    alt="Android App" 
                    className="w-24 h-24 mb-6" 
                  />
                  <h2 className="text-2xl font-semibold mb-4">Android App</h2>
                  <p className="mb-8 text-gray-700">
                    Download Tranquil AI from the Google Play Store for your Android device.
                  </p>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-purple text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Download size={20} />
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold mb-4">Why Download Tranquil AI?</h3>
                <ul className="text-left max-w-2xl mx-auto space-y-4 list-disc list-inside text-gray-700">
                  <li>Access personalized therapy sessions anytime, anywhere</li>
                  <li>Track your mood and emotional patterns</li>
                  <li>Practice guided meditation and breathing exercises</li>
                  <li>Keep a digital journal with AI insights</li>
                  <li>Fall asleep faster with specialized sleep audios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;