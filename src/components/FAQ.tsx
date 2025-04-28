import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-primary-purple text-center">Frequently Asked Questions</h2>
        
        <div className="flex flex-col gap-8">
          {/* FAQ Item 1 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary-purple mb-2">What is Tranquil AI?</h3>
              <p className="text-gray-700">
                Tranquil AI is your mental health companion, offering AI-powered emotional support anytime, anywhere.
              </p>
            </CardContent>
          </Card>

          {/* FAQ Item 2 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary-purple mb-2">Is Tranquil AI a replacement for professional therapy?</h3>
              <p className="text-gray-700">
                No, Tranquil AI is designed to provide supplementary emotional support, not a replacement for licensed mental health professionals.
              </p>
            </CardContent>
          </Card>

          {/* FAQ Item 3 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary-purple mb-2">Is my data safe with Tranquil AI?</h3>
              <p className="text-gray-700">
                Yes, your privacy is our top priority. We use industry-standard security measures to protect your data.
              </p>
            </CardContent>
          </Card>

          {/* FAQ Item 4 */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary-purple mb-2">How can I get started?</h3>
              <p className="text-gray-700">
                Simply click on "Get Started" on the homepage to begin your journey towards emotional well-being with Tranquil AI.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
