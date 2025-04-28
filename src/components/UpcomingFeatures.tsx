
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UpcomingFeatures = () => {
  const upcomingFeatures = [
    {
      title: "AI Mood Insights",
      description: "Gain deeper insights into your mood patterns with our advanced AI-driven analysis, designed to help you improve your emotional well-being."
    },
    {
      title: "Peer Support Communities",
      description: "Connect with others who are on similar mental health journeys. Share experiences, support each other, and build a stronger community."
    },
    {
      title: "Customizable Meditation Programs",
      description: "Personalize your meditation sessions to target specific areas of your mental health, like stress relief, sleep, or focus."
    }
  ];

  return (
    <section id="upcoming-features" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-purple">Exciting New Features Coming Soon</h2>
        <div className="flex justify-center mb-6">
          <Badge variant="default" className="bg-primary-purple text-white text-lg py-1 px-4">Coming Soon</Badge>
        </div>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We're constantly improving Tranquil AI to better serve your mental health needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 px-4">
        {upcomingFeatures.map((feature, index) => (
          <Card key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary-purple hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-2 w-16 bg-gradient-to-r from-primary-purple to-blue-600 rounded mb-6"></div>
            <h3 className="text-2xl font-semibold mb-4 text-primary-purple">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UpcomingFeatures;
