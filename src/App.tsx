import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Technologies } from "@/components/Technologies";
import { Trajectory } from "@/components/Trajectory";
import { Hero } from "@/components/Hero";
import { ProjectsFilterProvider } from "@/hooks/projects-filter";

const queryClient = new QueryClient();

const PageShell = ({ children }: { children: React.ReactNode }) => (
  <ProjectsFilterProvider>
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  </ProjectsFilterProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<PageShell><About /></PageShell>} />
          <Route path="/projects" element={<PageShell><Projects /></PageShell>} />
          <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
          <Route path="/technologies" element={<PageShell><Technologies /></PageShell>} />
          <Route path="/trajectory" element={<PageShell><Trajectory /></PageShell>} />
          <Route path="/hero" element={<PageShell><Hero /></PageShell>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
