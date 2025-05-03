
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MissionStatement = () => {
  return (
    <section id="mission" className="py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 animate-fade-in">Our Mission</h2>
        <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/5 rounded-lg"></div>
          <CardContent className="p-8 md:p-12 relative z-10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              At <span className="font-semibold text-primary-purple">Tranquil AI</span>, our mission is to make mental health support accessible to everyone, at any time. 
              We are committed to leveraging the power of artificial intelligence to provide personalized, 
              effective, and compassionate support for emotional well-being.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We believe that mental health is a crucial part of overall health, and through our app, we aim to bridge the gap in mental 
              health care, offering tailored solutions to help individuals navigate life's emotional challenges.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Our approach goes beyond simple problem-solving. We encourage self-reflection and personal growth, guiding you 
              towards a deeper understanding of your emotions and thought patterns.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Our goal is to empower you with the tools you need to feel supported, understood, and connected—wherever you are, 
              whenever you need us. We're not just developing technology; we're nurturing well-being.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionStatement;