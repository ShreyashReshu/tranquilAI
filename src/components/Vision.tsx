
import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary-purple animate-fade-in">Our Vision</h2>
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold text-primary-purple">Tranquil AI</span>, our vision is to create a world where mental health support is universally accessible. 
            We strive to make emotional well-being a priority for everyone, regardless of location or circumstances. 
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            We envision a future where technology and compassion work hand in hand to provide personalized mental health support. 
            A world where no one has to face emotional challenges alone, and where quality care is just a tap away.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our platform will continue to evolve, using cutting-edge technology to provide personalized support, 
            fostering a healthier, happier future for all. Through constant innovation and a deep understanding of human needs, 
            we're building more than just an app—we're creating a companion for your mental health journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;