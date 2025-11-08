import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-lg font-bold text-gradient">
              &lt;Dev/&gt;
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Desenvolvido com</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>e muito</span>
              <span className="font-mono text-primary">{"{ código }"}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span>Feito com</span>
              <span className="text-primary">React</span>
              <span>+</span>
              <span className="text-secondary">TypeScript</span>
              <span>+</span>
              <span className="text-accent">Tailwind</span>
            </div>
          </div>

          <div className="mt-6 relative">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};