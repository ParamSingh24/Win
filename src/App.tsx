import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import VoiceControl from "./pages/VoiceControl";
import FamilyDashboard from "./pages/FamilyDashboard";
import EnergyInsights from "./pages/EnergyInsights";
import CommunityTrading from "./pages/CommunityTrading";
import SafetyCenter from "./pages/SafetyCenter";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing page without layout */}
          <Route path="/" element={<Landing />} />
          
          {/* All other pages with layout */}
          <Route path="/home" element={<Layout><Index /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/voice" element={<Layout><VoiceControl /></Layout>} />
          <Route path="/family" element={<Layout><FamilyDashboard /></Layout>} />
          <Route path="/insights" element={<Layout><EnergyInsights /></Layout>} />
          <Route path="/community" element={<Layout><CommunityTrading /></Layout>} />
          <Route path="/safety" element={<Layout><SafetyCenter /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
