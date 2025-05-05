
import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [animationState, setAnimationState] = useState<'initial' | 'mentalIn' | 'healthIn' | 'mattersIn' | 'recommendationIn' | 'complete'>('initial');
  
  useEffect(() => {
    // Animation sequence timing
    const mentalTimer = setTimeout(() => setAnimationState('mentalIn'), 300);
    const healthTimer = setTimeout(() => setAnimationState('healthIn'), 1300);
    const mattersTimer = setTimeout(() => setAnimationState('mattersIn'), 2300);
    const recommendationTimer = setTimeout(() => setAnimationState('recommendationIn'), 3200);
    const completeTimer = setTimeout(() => {
      setAnimationState('complete');
      setTimeout(onComplete, 600); // Fade out and call the completion callback
    }, 5000);
    
    return () => {
      clearTimeout(mentalTimer);
      clearTimeout(healthTimer);
      clearTimeout(mattersTimer);
      clearTimeout(recommendationTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary-purple to-blue-700 transition-opacity duration-700 ${animationState === 'complete' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center mb-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-white text-3xl md:text-6xl font-bold">
          <div className={`transform transition-all duration-700 ${animationState === 'initial' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            MENTAL
          </div>
          <div className={`transform transition-all duration-700 ${animationState === 'initial' || animationState === 'mentalIn' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            HEALTH
          </div>
          <div className={`transform transition-all duration-700 ${animationState === 'initial' || animationState === 'mentalIn' || animationState === 'healthIn' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            MATTERS<span className="text-blue-200">!!!</span>
          </div>
        </div>
      </div>
      
      <div className={`mt-8 transform transition-all duration-700 
        ${animationState === 'initial' || animationState === 'mentalIn' || animationState === 'healthIn' || animationState === 'mattersIn' ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}>
        <div className="bg-white/20 backdrop-blur-md rounded-xl px-8 py-4 shadow-lg border border-white/30 max-w-md">
          <p className="text-white/90 text-lg md:text-xl font-light italic">
            "Your journey to inner peace begins with <span className="font-semibold text-blue-200">Tranquil AI</span> — where technology meets tranquility"
          </p>
          <div className="flex justify-center mt-3">
            <div className="bg-blue-200/30 px-4 py-1 rounded-full backdrop-blur-sm border border-blue-200/50">
              <p className="text-white text-sm">★★★★★ Trusted by 500+ users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
