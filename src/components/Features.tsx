
import React from 'react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const featuresList = [
    {
      title: "AI Therapy",
      description: "Receive personalized therapy from an AI therapist that understands your emotional needs and provides tailored guidance and support."
    },
    {
      title: "Mood Logging",
      description: "Track your mood and emotional patterns over time to gain valuable insights and enhance your self-awareness."
    },
    {
      title: "Journaling",
      description: "Express your thoughts freely with our easy-to-use journal. AI-generated titles help you reflect and track your emotional journey."
    },
    {
      title: "Breathing Exercises",
      description: "Access scientifically-backed breathing techniques to help you relax, reduce anxiety, and manage stress."
    },
    {
      title: "Guided Meditation",
      description: "Relax and recharge with guided meditation sessions designed to improve mindfulness, reduce stress, and promote relaxation."
    },
    {
      title: "Sleep Audios",
      description: "Improve your sleep quality with calming audio designed to help you fall asleep faster and sleep more deeply."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-purple">Features That Empower You</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Tranquil AI offers a suite of powerful tools designed to support your mental health journey. 
          Our features are built to adapt to your unique needs and provide personalized care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {featuresList.map((feature, index) => (
          <Card key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-purple transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-4 text-primary-purple">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
