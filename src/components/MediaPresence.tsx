
import React from 'react';
import { ExternalLink } from 'lucide-react';

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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-purple">As Seen In</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
          Tranquil AI has been featured in numerous media outlets for its innovative approach to mental health.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <ul className="space-y-4">
          {mediaItems.map((item, index) => (
            <li 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="font-medium text-xl text-primary-purple mb-1">{item.name}</h3>
                <p className="text-gray-600 italic">"{item.quote}"</p>
              </div>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-100/50 text-primary-purple hover:bg-blue-200/50 transition-colors"
              >
                <span className="mr-2">Visit</span>
                <ExternalLink size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MediaPresence;