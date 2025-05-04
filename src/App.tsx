
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

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;