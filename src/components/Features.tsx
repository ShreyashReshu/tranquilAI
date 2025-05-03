
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Features = () => {
  const featuresList = [
    {
      title: "AI Therapy",
      description: "Receive personalized therapy from an AI therapist that understands your emotional needs and provides tailored guidance and support.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
      link: "/ai-therapy",
    },
    {
      title: "Mood Logging",
      description: "Track your mood and emotional patterns over time to gain valuable insights and enhance your self-awareness.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop",
      link: "/mood-logging",
    },
    {
      title: "Journaling",
      description: "Express your thoughts freely with our easy-to-use journal. AI-generated titles help you reflect and track your emotional journey.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=400&auto=format&fit=crop",
      link: "/journaling",
    },
    {
      title: "Breathing Exercises",
      description: "Access scientifically-backed breathing techniques to help you relax, reduce anxiety, and manage stress.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=400&auto=format&fit=crop",
      link: "/breathing-exercises",
    },
    {
      title: "Guided Meditation",
      description: "Relax and recharge with guided meditation sessions designed to improve mindfulness, reduce stress, and promote relaxation.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&auto=format&fit=crop",
      link: "/guided-meditation",
    },
    {
      title: "Sleep Audios",
      description: "Improve your sleep quality with calming audio designed to help you fall asleep faster and sleep more deeply.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
      link: "/sleep-audios",
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-purple">Features That Empower You</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Tranquil AI offers a suite of powerful tools designed to support your mental health journey. 
          Our features are built to adapt to your unique needs and provide personalized care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {featuresList.map((feature, index) => (
          <Link to={feature.link} key={index} className="block transform transition-all hover:scale-105">
            <Card 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl 
              transition-all duration-500 border border-gray-100 h-full"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-purple">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;