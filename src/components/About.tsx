import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Escrevo código limpo, mantível e bem documentado"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre buscando novas tecnologias e soluções criativas"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimização e escalabilidade são sempre prioridades"
    },
    {
      icon: Coffee,
      title: "Dedicação",
      description: "Comprometido com a excelência em cada projeto"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Sobre Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="card-tech">
                <p className="text-lg leading-relaxed mb-6">
                  Bem-vindo! Meu nome é Kaio Galvão.
                  Sou um desenvolvedor apaixonado por tecnologia com mais de 3 anos de experiência 
                  criando soluções digitais inovadoras. Especializo-me em desenvolvimento full-stack 
                  com foco em performance, usabilidade e código limpo.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Minha jornada começou com curiosidade sobre como as coisas funcionam por trás das telas. 
                  Hoje, transformo ideias em aplicações web modernas, sempre buscando as melhores práticas 
                  e tecnologias mais atuais do mercado.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-mono">
                    Problem Solver
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-mono">
                    Tech Enthusiast
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-mono">
                    Continuous Learner
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="card-tech group text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projetos Concluídos" },
              { number: "3+", label: "Anos de Experiência" },
              { number: "15+", label: "Tecnologias" },
              { number: "100%", label: "Comprometimento" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};