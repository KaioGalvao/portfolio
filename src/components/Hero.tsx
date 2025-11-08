import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useMemo, useState } from "react";

export const Hero = () => {
  // Memoize the words list so it is stable across renders and not flagged by exhaustive-deps
  const words = useMemo(() => ["Dev", "Desenvolvedor", "Analista", "Engenheiro"], []);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [subText, setSubText] = useState("Full Stack");
  const subFinal = "de Software";
  const [subCharIndex, setSubCharIndex] = useState(0);
  const [subDisplay, setSubDisplay] = useState("");
  const [subDone, setSubDone] = useState(false);

  useEffect(() => {
  if (isFinished) return;

    const currentWord = words[wordIndex];
    let timeout: number;

  const typingSpeed = 100;
  const deletingSpeed = 60;
  const holdDelay = 900;
  const transitionDelay = 400;

    if (!isDeleting && charIndex === currentWord.length && wordIndex === words.length - 1) {
      setIsFinished(true);
      return;
    }

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentWord.length && wordIndex < words.length - 1) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, holdDelay);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setWordIndex(i => i + 1);
      }, transitionDelay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, wordIndex, words, isFinished]);

  useEffect(() => {
    if (!isFinished || subDone) return;
    let timeout: number;
    const subTypingSpeed = 90;

    if (subCharIndex < subFinal.length) {
      timeout = window.setTimeout(() => {
        setSubDisplay(subFinal.slice(0, subCharIndex + 1));
        setSubCharIndex(c => c + 1);
      }, subTypingSpeed);
      return () => clearTimeout(timeout);
    }

    if (subCharIndex === subFinal.length) {
      setSubDone(true);
    }
  }, [isFinished, subCharIndex, subFinal, subDone]);

  const Caret = () => (
    <span className="inline-block w-[2px] h-8 md:h-12 bg-primary ml-1 animate-pulse align-middle" aria-hidden="true" />
  );
  const SubCaret = () => (
    <span className="inline-block w-[2px] h-6 md:h-8 bg-primary ml-1 animate-pulse align-middle" aria-hidden="true" />
  );
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-circuit"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-circuit" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-secondary to-transparent animate-circuit" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-mono text-primary mb-4 animate-pulse-glow">
              console.log("Olá, mundo!")
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient font-mono">
              {displayText}
              {!isFinished && <Caret />}
            </span>
            <br />
            <span className="font-mono text-foreground transition-colors duration-500">
              {!isFinished ? subText : (
                <>
                  {subDisplay}
                  {!subDone && <SubCaret />}
                </>
              )}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Criando experiências digitais inovadoras com código limpo e design moderno. 
            Especializado em tecnologias web modernas e soluções escaláveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="btn-tech min-w-[180px]"
            >
              Ver Projetos
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="btn-outline-tech min-w-[180px]"
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <Button
              variant="outline"
              size="icon"
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 glow-primary"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 glow-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 glow-primary"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};