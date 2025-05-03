
import React, { useState, useEffect } from 'react';
import FeaturePageLayout from '@/components/FeaturePageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface BreathingExercise {
  id: number;
  name: string;
  description: string;
  inhale: number;
  hold1: number;
  exhale: number;
  hold2: number;
  cycles: number;
  benefits: string[];
}

const breathingExercises: BreathingExercise[] = [
  {
    id: 1,
    name: "4-7-8 Breathing",
    description: "A relaxing breath pattern that acts as a natural tranquilizer for the nervous system.",
    inhale: 4,
    hold1: 7,
    exhale: 8,
    hold2: 0,
    cycles: 4,
    benefits: [
      "Reduces anxiety",
      "Helps manage cravings",
      "Promotes better sleep",
      "Lowers stress response"
    ]
  },
  {
    id: 2,
    name: "Box Breathing",
    description: "A technique used by Navy SEALs to calm the mind and improve focus.",
    inhale: 4,
    hold1: 4,
    exhale: 4,
    hold2: 4,
    cycles: 5,
    benefits: [
      "Improves concentration",
      "Manages stress",
      "Heightens performance",
      "Clarifies thinking"
    ]
  },
  {
    id: 3,
    name: "Diaphragmatic Breathing",
    description: "Deep belly breathing that engages the diaphragm fully for maximum oxygen intake.",
    inhale: 5,
    hold1: 2,
    exhale: 5,
    hold2: 0,
    cycles: 10,
    benefits: [
      "Reduces blood pressure",
      "Improves core muscle stability",
      "Slows heart rate",
      "Reduces cortisol levels"
    ]
  }
];

const BreathingExercisesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<BreathingExercise | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [progress, setProgress] = useState(0);
  
  const startExercise = (exercise: BreathingExercise) => {
    setSelectedExercise(exercise);
    setIsActive(true);
    setPhase('inhale');
    setSecondsLeft(exercise.inhale);
    setCurrentCycle(1);
  };
  
  const stopExercise = () => {
    setIsActive(false);
    setSelectedExercise(null);
  };

  useEffect(() => {
    if (!isActive || !selectedExercise) return;
    
    const timer = setInterval(() => {
      if (secondsLeft > 1) {
        setSecondsLeft(prev => prev - 1);
      } else {
        // Move to next phase
        switch (phase) {
          case 'inhale':
            if (selectedExercise.hold1 > 0) {
              setPhase('hold1');
              setSecondsLeft(selectedExercise.hold1);
            } else {
              setPhase('exhale');
              setSecondsLeft(selectedExercise.exhale);
            }
            break;
          case 'hold1':
            setPhase('exhale');
            setSecondsLeft(selectedExercise.exhale);
            break;
          case 'exhale':
            if (selectedExercise.hold2 > 0) {
              setPhase('hold2');
              setSecondsLeft(selectedExercise.hold2);
            } else {
              if (currentCycle < selectedExercise.cycles) {
                setPhase('inhale');
                setSecondsLeft(selectedExercise.inhale);
                setCurrentCycle(prev => prev + 1);
              } else {
                setIsActive(false);
              }
            }
            break;
          case 'hold2':
            if (currentCycle < selectedExercise.cycles) {
              setPhase('inhale');
              setSecondsLeft(selectedExercise.inhale);
              setCurrentCycle(prev => prev + 1);
            } else {
              setIsActive(false);
            }
            break;
        }
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isActive, secondsLeft, phase, currentCycle, selectedExercise]);
  
  useEffect(() => {
    if (!isActive || !selectedExercise) {
      setProgress(0);
      return;
    }
    
    const totalTime = calcTotalTime(selectedExercise);
    const elapsedTime = calcElapsedTime(selectedExercise, currentCycle, phase, secondsLeft);
    const progressPercentage = (elapsedTime / totalTime) * 100;
    setProgress(progressPercentage);
    
    function calcTotalTime(exercise: BreathingExercise): number {
      const cycleTime = exercise.inhale + exercise.hold1 + exercise.exhale + exercise.hold2;
      return cycleTime * exercise.cycles;
    }
    
    function calcElapsedTime(
      exercise: BreathingExercise, 
      cycle: number, 
      currentPhase: string, 
      seconds: number
    ): number {
      const cycleTime = exercise.inhale + exercise.hold1 + exercise.exhale + exercise.hold2;
      const completedCyclesTime = (cycle - 1) * cycleTime;
      
      let phaseTime = 0;
      if (currentPhase === 'inhale') {
        phaseTime = exercise.inhale - seconds;
      } else if (currentPhase === 'hold1') {
        phaseTime = exercise.inhale + (exercise.hold1 - seconds);
      } else if (currentPhase === 'exhale') {
        phaseTime = exercise.inhale + exercise.hold1 + (exercise.exhale - seconds);
      } else if (currentPhase === 'hold2') {
        phaseTime = exercise.inhale + exercise.hold1 + exercise.exhale + (exercise.hold2 - seconds);
      }
      
      return completedCyclesTime + phaseTime;
    }
  }, [isActive, selectedExercise, currentCycle, phase, secondsLeft]);
  
  const getPhaseInstruction = () => {
    switch (phase) {
      case 'inhale':
        return 'Inhale slowly';
      case 'hold1':
        return 'Hold your breath';
      case 'exhale':
        return 'Exhale slowly';
      case 'hold2':
        return 'Hold your breath';
    }
  };

  return (
    <FeaturePageLayout 
      title="Breathing Exercises" 
      description="Access scientifically-backed breathing techniques to help you relax, reduce anxiety, and manage stress."
    >
      {isActive && selectedExercise ? (
        <div className="max-w-2xl mx-auto animate-fade-in">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-primary-purple mb-2 text-center">
                {selectedExercise.name}
              </h2>
              <div className="text-center mb-8 text-gray-600">
                Cycle {currentCycle} of {selectedExercise.cycles}
              </div>
              
              <div className="flex flex-col items-center justify-center mb-10">
                <div className="w-64 h-64 rounded-full border-8 border-primary-purple/20 flex items-center justify-center mb-8">
                  <div 
                    className={`w-56 h-56 rounded-full flex items-center justify-center text-3xl font-bold text-primary-purple
                      ${phase === 'inhale' ? 'animate-[pulse_4s_ease-in-out_infinite]' : ''}
                      ${phase === 'exhale' ? 'animate-[pulse_6s_ease-in-out_infinite]' : ''}
                    `}
                  >
                    <div className="text-center">
                      <div className="text-lg mb-2">{getPhaseInstruction()}</div>
                      <div className="text-5xl">{secondsLeft}</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full max-w-md mb-4">
                  <Progress value={progress} className="h-2" />
                </div>
                
                <Button 
                  onClick={stopExercise}
                  variant="outline"
                  className="mt-4"
                >
                  Stop Exercise
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {breathingExercises.map((exercise) => (
            <Card 
              key={exercise.id} 
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-purple">{exercise.name}</h3>
                <p className="text-gray-700 mb-4">{exercise.description}</p>
                
                <div className="flex justify-between mb-6 text-sm text-gray-600">
                  <div className="text-center">
                    <div className="font-semibold">Inhale</div>
                    <div>{exercise.inhale}s</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Hold</div>
                    <div>{exercise.hold1}s</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Exhale</div>
                    <div>{exercise.exhale}s</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Hold</div>
                    <div>{exercise.hold2}s</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="font-semibold text-gray-700 mb-2">Benefits:</div>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {exercise.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={() => startExercise(exercise)}
                  className="w-full bg-primary-purple hover:bg-blue-600"
                >
                  Start Exercise
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </FeaturePageLayout>
  );
};

export default BreathingExercisesPage;