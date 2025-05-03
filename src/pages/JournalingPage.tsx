
import React, { useState } from 'react';
import FeaturePageLayout from '@/components/FeaturePageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface JournalEntry {
  id: number;
  title: string;
  content: string;
  date: string;
}

const sampleEntries: JournalEntry[] = [
  {
    id: 1,
    title: "Finding Balance in Chaos",
    content: "Today was challenging but I found moments of peace...",
    date: "May 1, 2023"
  },
  {
    id: 2,
    title: "Unexpected Joy",
    content: "I was surprised by how much I enjoyed the simple things today...",
    date: "April 28, 2023"
  },
  {
    id: 3,
    title: "Reflections on Growth",
    content: "Looking back at where I was a month ago...",
    date: "April 23, 2023"
  }
];

const suggestionPrompts = [
  "What made you smile today?",
  "Describe a challenge you faced and how you handled it.",
  "What are three things you're grateful for today?",
  "How did you take care of yourself today?",
  "What's something you're looking forward to?",
  "Describe a moment when you felt proud of yourself recently."
];

const JournalingPage = () => {
  const [entries, setEntries] = useState<JournalEntry[]>(sampleEntries);
  const [isWriting, setIsWriting] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({ title: '', content: '' });
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const startNewEntry = () => {
    setIsWriting(true);
    setCurrentEntry({ title: '', content: '' });
    setSelectedPrompt('');
  };

  const usePrompt = (prompt: string) => {
    setSelectedPrompt(prompt);
    setIsWriting(true);
    // Generate a title based on the prompt
    const titles = [
      "Reflections on " + prompt.split(' ').slice(1, 3).join(' '),
      "Thoughts about " + prompt.split(' ').slice(-2).join(' '),
      "Exploring " + prompt.split(' ').slice(1, 4).join(' ')
    ];
    setCurrentEntry({ 
      title: titles[Math.floor(Math.random() * titles.length)], 
      content: '' 
    });
  };

  const saveEntry = () => {
    if (!currentEntry.title.trim() || !currentEntry.content.trim()) {
      toast.error("Please add a title and content to your journal entry");
      return;
    }
    
    const newEntry = {
      id: Date.now(),
      title: currentEntry.title,
      content: currentEntry.content,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    
    setEntries([newEntry, ...entries]);
    setIsWriting(false);
    toast.success("Journal entry saved");
  };

  const cancelEntry = () => {
    setIsWriting(false);
    setCurrentEntry({ title: '', content: '' });
  };

  const generateTitle = () => {
    const aiTitles = [
      "Moments of Clarity",
      "Finding My Path",
      "The Journey Within",
      "Unexpected Realizations",
      "Embracing Change",
      "Peaceful Reflections"
    ];
    
    setCurrentEntry({
      ...currentEntry,
      title: aiTitles[Math.floor(Math.random() * aiTitles.length)]
    });
    
    toast.success("AI-generated title added");
  };

  return (
    <FeaturePageLayout 
      title="Journaling" 
      description="Express your thoughts freely with our easy-to-use journal. AI-generated titles help you reflect and track your emotional journey."
    >
      {isWriting ? (
        <div className="animate-fade-in">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Journal Entry Title
                  </label>
                  <div className="flex gap-3">
                    <Input
                      value={currentEntry.title}
                      onChange={(e) => setCurrentEntry({...currentEntry, title: e.target.value})}
                      placeholder="Enter a title for your journal entry"
                      className="flex-1"
                    />
                    <Button 
                      onClick={generateTitle}
                      variant="outline"
                      className="whitespace-nowrap"
                    >
                      Generate Title
                    </Button>
                  </div>
                </div>
              </div>
              
              {selectedPrompt && (
                <div className="p-4 bg-blue-50 rounded-lg mb-6 text-gray-700">
                  <strong className="text-primary-purple">Writing Prompt:</strong> {selectedPrompt}
                </div>
              )}
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Thoughts
                </label>
                <Textarea
                  value={currentEntry.content}
                  onChange={(e) => setCurrentEntry({...currentEntry, content: e.target.value})}
                  placeholder="Start writing your thoughts here..."
                  className="w-full min-h-[300px]"
                />
              </div>
              
              <div className="flex justify-end gap-4">
                <Button 
                  variant="outline" 
                  onClick={cancelEntry}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={saveEntry}
                  className="bg-primary-purple hover:bg-blue-600"
                >
                  Save Entry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-primary-purple">Your Journal Entries</h2>
              <Button 
                onClick={startNewEntry}
                className="bg-primary-purple hover:bg-blue-600"
              >
                New Entry
              </Button>
            </div>
            
            <div className="space-y-6">
              {entries.length === 0 ? (
                <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-600 mb-4">You haven't created any journal entries yet.</p>
                    <Button 
                      onClick={startNewEntry}
                      className="bg-primary-purple hover:bg-blue-600"
                    >
                      Create Your First Entry
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                entries.map((entry) => (
                  <Card key={entry.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-primary-purple">{entry.title}</h3>
                        <span className="text-sm text-gray-500">{entry.date}</span>
                      </div>
                      <p className="text-gray-700 line-clamp-3">{entry.content}</p>
                      <Button 
                        variant="ghost" 
                        className="mt-4 text-primary-purple hover:bg-blue-50"
                        onClick={() => toast.info("Full entry view coming soon")}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
          
          <div>
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-purple">Writing Prompts</h3>
                <div className="space-y-3">
                  {suggestionPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-blue-50 hover:text-primary-purple"
                      onClick={() => usePrompt(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong className="text-primary-purple">Tip:</strong> Regular journaling has been shown to reduce stress and improve mental clarity. Try to write for at least 5 minutes each day.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </FeaturePageLayout>
  );
};

export default JournalingPage;