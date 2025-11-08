import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useProjectsFilter } from "@/hooks/projects-filter";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { query, setQuery } = useProjectsFilter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "Sobre" },
    { id: "trajectory", label: "Trajetória" },
    { id: "technologies", label: "Tecnologias" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  const scrollProjectsFromSearch = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="font-mono text-xl font-bold text-gradient cursor-pointer hover:scale-105 transition-transform"
            onClick={() => scrollToSection("hero")}
          >
            &lt;Dev/&gt;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <div className="relative">
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  scrollProjectsFromSearch();
                }}
                onFocus={scrollProjectsFromSearch}
                placeholder="Pesquisar projetos..."
                className="h-10 w-60 rounded-md bg-card/60 border border-border/60 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card/90 backdrop-blur-md rounded-xl border border-border/50">
            <div className="mb-3">
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  scrollProjectsFromSearch();
                }}
                onFocus={scrollProjectsFromSearch}
                placeholder="Pesquisar projetos..."
                className="w-full h-10 rounded-md bg-card/60 border border-border/60 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};