
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Publication</TableHead>
              <TableHead className="w-1/2">What They Said</TableHead>
              <TableHead className="w-1/6 text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mediaItems.map((item, index) => (
              <TableRow 
                key={index}
                className="hover:bg-blue-50/50 transition-colors"
              >
                <TableCell className="font-medium text-primary-purple">{item.name}</TableCell>
                <TableCell className="text-gray-600 italic">"{item.quote}"</TableCell>
                <TableCell className="text-right">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary-purple hover:text-blue-600 transition-colors"
                  >
                    <span className="mr-1">Visit</span>
                    <ExternalLink size={16} />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default MediaPresence;