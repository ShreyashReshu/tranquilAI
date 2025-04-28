
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MissionStatement = () => {
  return (
    <section id="mission" className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary-purple">Our Mission</h2>
        <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At <span className="font-semibold text-primary-purple">Tranquil AI</span>, our mission is to make mental health support accessible to everyone, at any time. 
              We are committed to leveraging the power of artificial intelligence to provide personalized, 
              effective, and compassionate support for emotional well-being. We believe that mental health 
              is a crucial part of overall health, and through our app, we aim to bridge the gap in mental 
              health care, offering tailored solutions to help individuals navigate life's emotional challenges. 
              Our goal is to empower you with the tools you need to feel supported, understood, and connected—wherever you are.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionStatement;
