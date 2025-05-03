
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Tranquil AI has been a game-changer for my mental health. The personalized therapy and journaling features really helped me stay grounded.",
      author: "Alex Johnson",
      role: "App User",
      initials: "AJ"
    },
    {
      quote: "I love the mood logging feature. It helped me track my emotions and see my progress over time. It's like having a daily check-in with myself.",
      author: "Sam Taylor",
      role: "App User",
      initials: "ST"
    },
    {
      quote: "The sleep audios are amazing! I've struggled with insomnia, and Tranquil AI has helped me relax and sleep more peacefully.",
      author: "Jordan Riley",
      role: "App User",
      initials: "JR"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-3xl">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-purple">What Our Users Say</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
          Real stories from our users highlight how Tranquil AI has made a difference in their lives.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardContent className="p-0 flex-grow">
              <div className="mb-6">
                <svg className="h-8 w-8 text-primary-purple opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6 text-lg">{testimonial.quote}</p>
            </CardContent>
            <div className="flex items-center mt-4">
              <Avatar className="h-12 w-12 bg-gradient-to-br from-primary-purple/20 to-blue-400/20 text-primary-purple">
                <AvatarFallback className="font-medium">{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-semibold text-primary-purple">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;