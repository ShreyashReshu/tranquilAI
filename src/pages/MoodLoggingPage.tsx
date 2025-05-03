
import React, { useState } from 'react';
import FeaturePageLayout from '@/components/FeaturePageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const moods = [
  { name: 'Happy', emoji: '😊', color: 'bg-yellow-100 border-yellow-400' },
  { name: 'Calm', emoji: '😌', color: 'bg-blue-100 border-blue-400' },
  { name: 'Sad', emoji: '😢', color: 'bg-indigo-100 border-indigo-400' },
  { name: 'Anxious', emoji: '😰', color: 'bg-orange-100 border-orange-400' },
  { name: 'Angry', emoji: '😠', color: 'bg-red-100 border-red-400' },
  { name: 'Tired', emoji: '😴', color: 'bg-gray-100 border-gray-400' },
];

// Sample data for the mood chart
const sampleMoodData = [
  { date: 'Mon', mood: 4 },
  { date: 'Tue', mood: 3 },
  { date: 'Wed', mood: 5 },
  { date: 'Thu', mood: 2 },
  { date: 'Fri', mood: 3 },
  { date: 'Sat', mood: 4 },
  { date: 'Sun', mood: 5 },
];

const MoodLoggingPage = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [notes, setNotes] = useState('');

  const handleLogMood = () => {
    if (!selectedMood) {
      toast.error("Please select a mood");
      return;
    }
    
    toast.success(`Mood logged: ${selectedMood}`);
    setSelectedMood(null);
    setNotes('');
  };

  return (
    <FeaturePageLayout 
      title="Mood Logging" 
      description="Track your mood and emotional patterns over time to gain valuable insights and enhance your self-awareness."
    >
      <Tabs defaultValue="log-mood" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-3 mb-8">
          <TabsTrigger value="log-mood">Log Mood</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="log-mood" className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary-purple">How are you feeling today?</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {moods.map((mood) => (
                    <Button
                      key={mood.name}
                      variant="outline"
                      className={`h-24 flex flex-col items-center justify-center border-2 transition-all ${
                        selectedMood === mood.name 
                          ? `${mood.color} border-opacity-100 scale-105` 
                          : 'border-transparent hover:border-gray-200'
                      }`}
                      onClick={() => setSelectedMood(mood.name)}
                    >
                      <span className="text-3xl mb-2">{mood.emoji}</span>
                      <span>{mood.name}</span>
                    </Button>
                  ))}
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's contributing to this feeling? (Optional)
                  </label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes about your mood..."
                    className="w-full"
                    rows={4}
                  />
                </div>
                
                <Button 
                  onClick={handleLogMood}
                  className="w-full bg-primary-purple hover:bg-blue-600"
                >
                  Log Mood
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-purple">Benefits of Mood Tracking</h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Identify patterns and triggers in your emotional responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Develop greater self-awareness about your emotional health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Track the effectiveness of different coping strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Notice improvements in your mental well-being over time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Share insights with healthcare providers if needed</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong className="text-primary-purple">Tip:</strong> For best results, log your mood at the same times each day to establish consistent data points.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="animate-fade-in">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary-purple">Your Mood History</h3>
              
              <div className="h-64 w-full">
                <div className="flex justify-between items-end h-48 border-b border-l border-gray-300 relative">
                  {sampleMoodData.map((day, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-3/4 bg-primary-purple rounded-t-md transition-all hover:bg-blue-600"
                        style={{ 
                          height: `${day.mood * 20}%`,
                        }}
                      ></div>
                      <span className="text-xs mt-2 text-gray-600">{day.date}</span>
                    </div>
                  ))}
                  
                  <div className="absolute left-0 bottom-0 h-full flex flex-col justify-between items-start -ml-6">
                    {[5, 4, 3, 2, 1].map((level) => (
                      <span key={level} className="text-xs text-gray-500">{level}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <Button variant="outline">Previous Week</Button>
                <Button variant="outline">Next Week</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="insights" className="animate-fade-in">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary-purple">Your Mood Insights</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-primary-purple mb-2">Mood Patterns</h4>
                  <p className="text-gray-700">Your mood tends to be higher on weekends and lower mid-week. This pattern might be related to work or school stress.</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-700 mb-2">Positive Triggers</h4>
                  <p className="text-gray-700">Activities like exercise, spending time outdoors, and social interactions are frequently associated with your improved mood states.</p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-700 mb-2">Areas for Attention</h4>
                  <p className="text-gray-700">Poor sleep quality and high caffeine intake seem to correlate with your lower mood days. Consider adjusting these factors.</p>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="font-medium text-primary-purple mb-3">Recommendations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Add a short meditation session on Tuesday and Wednesday mornings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Consider reducing screen time in the evenings to improve sleep quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-purple">•</span> 
                    <span>Schedule at least one enjoyable social activity mid-week</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </FeaturePageLayout>
  );
};

export default MoodLoggingPage;