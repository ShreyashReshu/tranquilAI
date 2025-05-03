
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MediaPresence = () => {
  const mediaItems = [
    {
      name: "Tech Today",
      quote: "Tranquil AI revolutionizes mental health care with personalized AI therapy.",
      link: "https://techtoday.example"
    },
    {
      name: "Mental Health Innovations Magazine",
      quote: "A breakthrough in accessible mental health solutions.",
      link: "https://mhinnovations.example"
    },
    {
      name: "The Wellness Journal",
      quote: "Transforming how we approach mental wellness through technology.",
      link: "https://wellnessjournal.example"
    },
    {
      name: "AI for Good Conference 2025",
      quote: "Selected as one of the most impactful AI solutions for social good.",
      link: "https://aiforgood.example"
    }
  ];

  return (
    <section id="media" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-purple">As Seen In</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
          Tranquil AI has been featured in numerous media outlets for its innovative approach to mental health.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
        {mediaItems.map((item, index) => (
          <Card key={index} 
            className="group bg-gradient-to-br from-white to-purple-50 hover:from-purple-50 hover:to-blue-50 
            transition-all duration-500 border-none shadow-lg hover:shadow-xl 
            transform hover:-translate-y-2">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-4 text-primary-purple">{item.name}</h3>
              <p className="text-gray-600 text-lg italic mb-6 flex-grow">"{item.quote}"</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-primary-purple hover:text-blue-600 transition-colors mt-auto"
              >
                <span className="mr-2">Visit website</span>
                <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MediaPresence;