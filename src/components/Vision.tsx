
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary-purple">Our Vision</h2>
        <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 md:p-10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At <span className="font-semibold text-primary-purple">Tranquil AI</span>, our vision is to create a world where mental health support is universally accessible. 
              We strive to make emotional well-being a priority for everyone, regardless of location or circumstances. 
              Our platform will continue to evolve, using cutting-edge technology to provide personalized support, 
              fostering a healthier, happier future for all.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Vision;
