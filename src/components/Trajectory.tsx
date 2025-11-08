import { Calendar, GraduationCap, Code2, Wrench, Briefcase, Rocket } from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const Trajectory = () => {
  const items: TimelineItem[] = [
    {
      year: "2020",
      title: "Entrada no IFSP",
      description:
        "Início da jornada de aprendizado em programação.",
      icon: Calendar,
    },
    {
      year: "2021",
      title: "Desafios e Olimpíadas",
      description:
        "Participação em projetos de desafio de programação e Olimpíadas de Informática.",
      icon: Code2,
    },
    {
      year: "2022",
      title: "Monitoria e Estágio",
      description:
        "Monitoria de laboratório de informática e início do estágio.",
      icon: Wrench,
    },
    {
      year: "2023",
      title: "QA, Suporte e Formatura",
      description:
        "Atuação como QA e Suporte Técnico, além da formatura no IFSP.",
      icon: GraduationCap,
    },
    {
      year: "2024",
      title: "Desenvolvedor C#",
      description:
        "Atuação como desenvolvedor C# em projetos profissionais.",
      icon: Briefcase,
    },
    {
      year: "2025",
      title: "FIAP e Engenheiro de Software",
      description:
        "Ingresso na FIAP e atuação como Engenheiro de Software.",
      icon: Rocket,
    },
  ];

  return (
    <section id="trajectory" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
        <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Minha Trajetória</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <ul className="space-y-8">
            {items.map((item, idx) => (
              <li
                key={item.year}
                className="relative flex md:grid md:grid-cols-2 gap-6 items-start"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <div className="md:text-right md:pr-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm">
                    {item.year}
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 mt-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.6)] ring-4 ring-primary/20" />

                <div className="md:pl-10">
                  <div className="card-tech group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
