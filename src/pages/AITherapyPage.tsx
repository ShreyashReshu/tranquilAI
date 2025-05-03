
import React, { useState } from 'react';
import FeaturePageLayout from '@/components/FeaturePageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AITherapyPage = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<{role: 'user' | 'ai', content: string}[]>([
    {role: 'ai', content: 'Hello! I\'m your AI therapist. How are you feeling today?'}
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to conversation
    setConversation(prev => [...prev, {role: 'user', content: message}]);
    setMessage('');
    setIsTyping(true);
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const responses = [
        "I understand how you feel. Can you tell me more about what's causing these emotions?",
        "Thank you for sharing that with me. How long have you been experiencing this?",
        "That's quite insightful. Have you tried any coping strategies that have worked for you before?",
        "I'm here to support you. Let's explore some techniques that might help you with this situation.",
        "Your feelings are valid. Would you like to discuss some practical steps you can take?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setConversation(prev => [...prev, {role: 'ai', content: randomResponse}]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <FeaturePageLayout 
      title="AI Therapy" 
      description="Receive personalized therapy from our AI therapist that understands your emotional needs and provides tailored guidance and support."
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4 mb-4 h-[400px] overflow-y-auto">
                {conversation.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl max-w-[80%] ${
                      msg.role === 'user' 
                        ? 'bg-blue-100 ml-auto' 
                        : 'bg-gray-100'
                    } animate-fade-in`}
                  >
                    {msg.content}
                  </div>
                ))}
                {isTyping && (
                  <div className="p-4 rounded-xl bg-gray-100 max-w-[80%] animate-pulse">
                    Typing...
                  </div>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="flex items-end gap-4">
                <Textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 resize-none"
                  rows={3}
                />
                <Button 
                  type="submit" 
                  className="bg-primary-purple hover:bg-blue-600"
                >
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-purple">How It Works</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Share your thoughts and feelings with our AI therapist</li>
                <li>Receive personalized responses based on evidence-based therapy techniques</li>
                <li>Explore coping strategies tailored to your specific situation</li>
                <li>Track your emotional progress over time</li>
                <li>Access support 24/7, whenever you need it</li>
              </ol>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong className="text-primary-purple">Note:</strong> While our AI therapist can provide support and guidance, it is not a replacement for professional mental health care. If you're experiencing a crisis or emergency, please contact a healthcare professional.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Button
            className="mt-4 w-full bg-primary-purple hover:bg-blue-600 py-6"
            onClick={() => toast.success("Reminder set for weekly check-in session")}
          >
            Schedule Regular Check-ins
          </Button>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default AITherapyPage;