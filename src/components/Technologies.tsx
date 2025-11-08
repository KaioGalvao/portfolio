import { Badge } from "./ui/badge";

export const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend",
      color: "primary",
      technologies: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Styled Components", "Sass", "Redux", "Axios","Vite"
      ]
    },
    {
      title: "Backend",
      color: "secondary",
      technologies: [
        "Node.js", "Express", "Python", "SQL",
        "PostgreSQL", "Redis", "GraphQL", "REST APIs", "Java", "Spring Boot",
        "C#", "ASP.NET Core", "Entity Framework", "C", "Dapper", "SQLite" 
      ]
    },
    {
      title: "DevOps & Tools",
      color: "accent",
      technologies: [
        "Docker", "AWS", "Vercel", "Git", "GitHub Actions", "Linux",
        "Azure", "TortoiseSvn", "Jenkins", "Kubernetes", "CI/CD", "RabbitMQ", "Kafka",
        "Grafana", "Dynatrace"
      ]
    },
    {
      title: "Design",
      color: "primary",
      technologies: [
        "Figma", "Adobe XD", "Photoshop",
        "UI/UX Design", "Responsive Design", "Accessibility"
      ]
    }
  ];

  const getVariantClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20";
      case "accent":
        return "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20";
      default:
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
    }
  };

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-circuit"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-circuit" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-primary to-transparent animate-circuit" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Tecnologias</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stack moderno e versátil para criar soluções completas e escaláveis
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="card-tech group"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${
                    category.color === 'primary' ? 'bg-primary glow-primary' :
                    category.color === 'secondary' ? 'bg-secondary glow-secondary' :
                    'bg-accent glow-accent'
                  }`}></div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className={`${getVariantClass(category.color)} transition-all duration-300 hover:scale-105 cursor-default font-mono text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card-tech max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-gradient">
                Sempre Aprendendo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A tecnologia evolui rapidamente, e eu evoluo junto. Atualmente continuo estudando 
                <span className="text-primary font-mono mx-2">React + Typescript</span>, 
                <span className="text-secondary font-mono mx-2">C#</span> e
                <span className="text-accent font-mono mx-2">Serviços de Mensageria</span> 
                para manter-me sempre na vanguarda do desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};