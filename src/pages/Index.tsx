import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Trajectory } from "@/components/Trajectory";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ProjectsFilterProvider } from "@/hooks/projects-filter";

const Index = () => {
  return (
    <ProjectsFilterProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Trajectory />
          <Technologies />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ProjectsFilterProvider>
  );
};

export default Index;
