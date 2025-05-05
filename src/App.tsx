
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AITherapyPage from "./pages/AITherapyPage";
import MoodLoggingPage from "./pages/MoodLoggingPage";
import JournalingPage from "./pages/JournalingPage";
import BreathingExercisesPage from "./pages/BreathingExercisesPage";
import GuidedMeditationPage from "./pages/GuidedMeditationPage";
import SleepAudiosPage from "./pages/SleepAudiosPage";
import DownloadPage from "./pages/DownloadPage";
import SplashScreen from "./components/SplashScreen";

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  // State to control splash screen visibility
  const [showSplash, setShowSplash] = useState(true);
  
  // Show splash screen on every page load/refresh
  // We're removing the sessionStorage check which was preventing the splash screen on refresh

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <div className={`transition-opacity duration-700 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/ai-therapy" element={<AITherapyPage />} />
              <Route path="/mood-logging" element={<MoodLoggingPage />} />
              <Route path="/journaling" element={<JournalingPage />} />
              <Route path="/breathing-exercises" element={<BreathingExercisesPage />} />
              <Route path="/guided-meditation" element={<GuidedMeditationPage />} />
              <Route path="/sleep-audios" element={<SleepAudiosPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
