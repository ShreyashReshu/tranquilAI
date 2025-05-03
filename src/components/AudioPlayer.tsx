
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

interface AudioPlayerProps {
  src: string;
  title: string;
  description?: string;
}

const AudioPlayer = ({ src, title, description }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent);
  };

  const onLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const onProgressChange = (value: number[]) => {
    if (!audioRef.current) return;
    
    const newTime = (value[0] / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(value[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Card className="overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 mb-6">
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-primary-purple">{title}</h3>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={togglePlay} 
              className="w-12 h-12 rounded-full bg-primary-purple hover:bg-blue-600 text-white flex items-center justify-center"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            
            <div className="flex-1">
              <Slider
                value={[progress]}
                min={0}
                max={100}
                step={0.1}
                onValueChange={onProgressChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{formatTime((progress / 100) * duration)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            <Button
              onClick={toggleMute}
              variant="ghost"
              className="text-primary-purple hover:text-blue-600"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </Button>
          </div>
        </div>
        
        <audio 
          ref={audioRef}
          src={src}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      </CardContent>
    </Card>
  );
};

export default AudioPlayer;