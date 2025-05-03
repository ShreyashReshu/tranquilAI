
import React, { useState } from 'react';
import FeaturePageLayout from '@/components/FeaturePageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AudioPlayer from '@/components/AudioPlayer';

interface SleepAudio {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioSrc: string;
  category: string;
  image: string;
}

const sleepSounds: SleepAudio[] = [
  {
    id: "sleep-1",
    title: "Gentle Rain",
    description: "The soothing sound of rainfall to help you drift off to sleep.",
    duration: "45 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/03/15/audio_8cb749ed4a.mp3",
    category: "nature",
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "sleep-2",
    title: "Ocean Waves",
    description: "Calming ocean waves washing against the shore.",
    duration: "60 min",
    audioSrc: "https://cdn.pixabay.com/audio/2021/08/09/audio_b15d13e93d.mp3",
    category: "nature",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "sleep-3",
    title: "White Noise",
    description: "Consistent white noise to mask disturbances and promote deep sleep.",
    duration: "8 hours",
    audioSrc: "https://cdn.pixabay.com/audio/2022/03/19/audio_c8c8a73467.mp3",
    category: "ambient",
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "sleep-4",
    title: "Night Forest",
    description: "Immerse yourself in the peaceful sounds of a forest at night.",
    duration: "90 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/10/09/audio_19dab4a01d.mp3",
    category: "nature",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "sleep-5",
    title: "Gentle Piano",
    description: "Soft piano melodies to relax your mind before sleep.",
    duration: "30 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/01/20/audio_671f05e1ce.mp3",
    category: "music",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "sleep-6",
    title: "Meditation for Sleep",
    description: "A guided meditation designed to help you relax and fall asleep.",
    duration: "25 min",
    audioSrc: "https://cdn.pixabay.com/audio/2021/11/25/audio_00ab33831d.mp3",
    category: "guided",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=400&auto=format&fit=crop"
  }
];

const storyAudios: SleepAudio[] = [
  {
    id: "story-1",
    title: "The Secret Garden",
    description: "A calming narration of this classic tale to help you drift to sleep.",
    duration: "35 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/10/25/audio_937022d554.mp3",
    category: "story",
    image: "https://images.unsplash.com/photo-1555089803-187018a9609d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "story-2",
    title: "Journey to the Stars",
    description: "A peaceful story of cosmic exploration and wonder.",
    duration: "40 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/08/24/audio_be6d100418.mp3",
    category: "story",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "story-3",
    title: "The Enchanted Forest",
    description: "A gentle tale of magical woodland creatures.",
    duration: "28 min",
    audioSrc: "https://cdn.pixabay.com/audio/2022/09/02/audio_5b5eb8295f.mp3",
    category: "story",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&auto=format&fit=crop"
  }
];

const categories = [
  { id: 'all', name: 'All Sounds' },
  { id: 'nature', name: 'Nature' },
  { id: 'ambient', name: 'Ambient' },
  { id: 'music', name: 'Music' },
  { id: 'guided', name: 'Guided' },
];

const SleepAudiosPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredSounds = selectedCategory === 'all' 
    ? sleepSounds 
    : sleepSounds.filter(sound => sound.category === selectedCategory);
  
  return (
    <FeaturePageLayout 
      title="Sleep Audios" 
      description="Improve your sleep quality with calming audio designed to help you fall asleep faster and sleep more deeply."
      backgroundImage="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?q=80&w=1200&auto=format&fit=crop"
    >
      <Tabs defaultValue="sounds" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-2 mb-8">
          <TabsTrigger value="sounds">Sleep Sounds</TabsTrigger>
          <TabsTrigger value="stories">Sleep Stories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sounds" className="animate-fade-in">
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
            {filteredSounds.map((sound) => (
              <Card key={sound.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={sound.image} 
                    alt={sound.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-black/70 text-white px-3 py-1 text-sm rounded-tl-md">
                    {sound.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-primary-purple">{sound.title}</h3>
                    <p className="text-gray-600">{sound.description}</p>
                  </div>
                  
                  <AudioPlayer 
                    src={sound.audioSrc} 
                    title={sound.title} 
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="stories" className="animate-fade-in">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-purple">About Sleep Stories</h3>
              <p className="text-gray-700">
                Sleep stories are specially crafted narratives designed to help you unwind and drift off to sleep. 
                Each story is narrated in a soothing voice, with a pace and tone that gradually becomes more calming 
                as the story progresses. These stories engage your imagination just enough to distract from thoughts 
                that might keep you awake, without being so stimulating that they prevent you from falling asleep.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {storyAudios.map((story) => (
              <Card key={story.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-black/70 text-white px-3 py-1 text-sm rounded-tl-md">
                    {story.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-primary-purple">{story.title}</h3>
                    <p className="text-gray-600">{story.description}</p>
                  </div>
                  
                  <AudioPlayer 
                    src={story.audioSrc} 
                    title={story.title} 
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">Tips for Better Sleep</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-primary-purple">•</span> 
                <span>Keep your bedroom cool, dark, and quiet</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-purple">•</span> 
                <span>Establish a regular sleep schedule, even on weekends</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-purple">•</span> 
                <span>Avoid screens at least 30 minutes before bedtime</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-purple">•</span> 
                <span>Consider using a sleep timer for your audio to automatically stop playback</span>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </FeaturePageLayout>
  );
};

export default SleepAudiosPage;