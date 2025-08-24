import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
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
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/voice" element={<VoiceControl />} />
            <Route path="/family" element={<FamilyDashboard />} />
            <Route path="/insights" element={<EnergyInsights />} />
            <Route path="/community" element={<CommunityTrading />} />
            <Route path="/safety" element={<SafetyCenter />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
