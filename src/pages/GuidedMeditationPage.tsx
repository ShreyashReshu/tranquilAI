
import React, { useState } from 'react';
import FeaturePageLayout from '@/components/FeaturePageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AudioPlayer from '@/components/AudioPlayer';

interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioSrc: string;
  category: string;
  image: string;
}

const meditations: Meditation[] = [
  {
    id: "med-1",
    title: "Morning Mindfulness",
    description: "Start your day with clarity and purpose through this gentle mindfulness meditation.",
    duration: "10 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/10/31/audio_864cb57258.mp3",
    category: "mindfulness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "med-2",
    title: "Anxiety Relief",
    description: "Calm your nervous system and find peace with this anxiety-reducing meditation.",
    duration: "15 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/05/16/audio_b373140b6f.mp3",
    category: "stress",
    image: "https://images.unsplash.com/photo-1515695315596-faed2cae6479?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "med-3",
    title: "Body Scan Relaxation",
    description: "Release tension throughout your body with this progressive relaxation technique.",
    duration: "20 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/01/18/audio_b0b4fbe20a.mp3",
    category: "relaxation",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "med-4",
    title: "Loving Kindness",
    description: "Cultivate compassion for yourself and others with this heart-centered practice.",
    duration: "12 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/03/08/audio_270f12887b.mp3",
    category: "mindfulness",
    image: "https://images.unsplash.com/photo-1531171673193-f175ce5f48f7?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "med-5",
    title: "Work Break Refresher",
    description: "A quick mental reset to boost focus and reduce work-related stress.",
    duration: "5 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/10/30/audio_318a96fedd.mp3",
    category: "stress",
    image: "https://images.unsplash.com/photo-1504670073073-6123e39e0754?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "med-6",
    title: "Deep Relaxation",
    description: "Release deep-seated tension and enter a state of profound relaxation.",
    duration: "25 min",
    audioSrc: "https://cdn.pixabay.com/audio/2021/12/16/audio_270ea8690b.mp3",
    category: "relaxation",
    image: "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?q=80&w=400&auto=format&fit=crop"
  }
];

const categories = [
  { id: 'all', name: 'All Meditations' },
  { id: 'mindfulness', name: 'Mindfulness' },
  { id: 'stress', name: 'Stress Relief' },
  { id: 'relaxation', name: 'Relaxation' },
];

const GuidedMeditationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredMeditations = selectedCategory === 'all' 
    ? meditations 
    : meditations.filter(med => med.category === selectedCategory);

  return (
    <FeaturePageLayout 
      title="Guided Meditation" 
      description="Relax and recharge with guided meditation sessions designed to improve mindfulness, reduce stress, and promote relaxation."
      backgroundImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
    >
      <Tabs defaultValue="library" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-2 mb-8">
          <TabsTrigger value="library">Meditation Library</TabsTrigger>
          <TabsTrigger value="courses">Meditation Courses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="library" className="animate-fade-in">
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-purple text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {filteredMeditations.map((meditation) => (
              <Card key={meditation.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={meditation.image} 
                    alt={meditation.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-black/70 text-white px-3 py-1 text-sm rounded-tl-md">
                    {meditation.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-primary-purple">{meditation.title}</h3>
                    <p className="text-gray-600">{meditation.description}</p>
                  </div>
                  
                  <AudioPlayer 
                    src={meditation.audioSrc} 
                    title={meditation.title} 
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="courses" className="animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden col-span-full">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?q=80&w=600&auto=format&fit=crop" 
                    alt="7 Days of Calm" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3 text-primary-purple">7 Days of Calm</h3>
                  <p className="text-gray-700 mb-4">A perfect introduction to meditation for beginners. This course guides you through the basics of mindfulness with short daily sessions.</p>
                  
                  <div className="grid grid-cols-7 gap-2 mb-6">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="h-2 rounded-full bg-blue-100"></div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-6">
                    <span className="px-3 py-1 bg-blue-50 rounded-full">Beginner</span>
                    <span className="px-3 py-1 bg-blue-50 rounded-full">7 Sessions</span>
                    <span className="px-3 py-1 bg-blue-50 rounded-full">5-10 min each</span>
                  </div>
                  
                  <button className="px-6 py-2 bg-primary-purple text-white rounded-md hover:bg-blue-600 transition-colors">
                    Start Course
                  </button>
                </div>
              </div>
            </Card>
            
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=400&auto=format&fit=crop" 
                  alt="Stress Management" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-purple">Stress Management</h3>
                <p className="text-gray-600 mb-4">Learn techniques to reduce stress and anxiety in daily life.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>10 sessions</span>
                  <span>Intermediate</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?q=80&w=400&auto=format&fit=crop" 
                  alt="Better Sleep" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-purple">Better Sleep</h3>
                <p className="text-gray-600 mb-4">Improve your sleep quality with evening meditation practice.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>7 sessions</span>
                  <span>All levels</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?q=80&w=400&auto=format&fit=crop" 
                  alt="Self Compassion" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-purple">Self Compassion</h3>
                <p className="text-gray-600 mb-4">Learn to treat yourself with kindness and understanding.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>14 sessions</span>
                  <span>Intermediate</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </FeaturePageLayout>
  );
};

export default GuidedMeditationPage;