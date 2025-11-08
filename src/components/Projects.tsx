import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useProjectsFilter } from "@/hooks/projects-filter";

export const Projects = () => {
  const { query } = useProjectsFilter();
  const projects = [
    {
      title: "Global Solution - Flood Guard",
      description: "FloodGuard é uma plataforma integrada que combina prevenção tecnológica de enchentes com educação comunitária e campanhas de conscientização. Utiliza sensores IoT para monitoramento em tempo real e oferece conteúdos acessíveis para públicos diversos.",
      image: "/images/floodguard-hero.png",
      technologies: ["HTML", "CSS", "JS", "PYTHON", "C"],
      liveUrl: "https://vortech-fiap.github.io/Global-Solution/",
      githubUrl: "https://github.com/Vortech-fiap/Global-Solution",
      featured: true
    },
    {
      title: "Liga das Campeãs",
      description: "Aplicação web responsiva para acompanhar notícias, jogos, equipes, classificação, peneiras e perfil do usuário no universo do futebol feminino..",
      image: "/images/liga-das-campeas.png",
      technologies: ["React", "Javascript", "Jupyter Notebook", "Tailwind CSS"],
      liveUrl: "https://liga-das-campe-s.vercel.app",
      githubUrl: "https://github.com/Vortech-fiap/Challenge-React",
      featured: true
    },
    {
      title: "CTP Acolhe",
      description: "Plataforma Interna do IFSP que aproximava os alunos à diretoria Sócio Pedagógica.",
      image: "/images/ctp-acolhe.png",
      technologies: ["React", "Javascript", "Axios", "i18next"],
      liveUrl: "https://ctp-acolhe-v1.netlify.app",
      githubUrl: "https://github.com/lotus-pds/ctp-acolhe-frontend",
      featured: false
    },
    {
      title: "Portal IDSF",
      description: "Portal de informações do IDSF relacionadas aos fundos de investimentos, operações de clientes e recebíveis.",
      image: "/images/portal-idsf.png",
      technologies: ["C#", ".NET", "ASP.NET MVC", "Html", "CSS", "JavaScript", "SQL Server"],
      liveUrl: "https://portal.idsf.com.br",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Nutrisain",
      description: "Projeto de Nutrição, contendo informações sobre dietas, receitas e acompanhamento nutricional.",
      image: "/images/nutrisain.png",
      technologies: ["Html", "Css", "JavaScript", "JQuery"],
      liveUrl: "https://kaiogalvao.github.io/Projeto-Nutri",
      githubUrl: "https://github.com/KaioGalvao/Projeto-Nutri",
      featured: false
    },
    {
      title: "Jogo estilo Pokemon",
      description: "Um jogo em estilo Pokemon, onde os jogadores podem capturar, treinar e batalhar com criaturas em um mundo aberto.",
      image: "/images/poke-game.png",
      technologies: ["JavaScript", "Html"],
      liveUrl: "https://pokemon-game-cv9igpasd-kaiogalvao.vercel.app",
      githubUrl: "https://github.com/KaioGalvao/pokemon-game",
      featured: false
    },
    {
      title: "Vinheria Agnello",
      description: "Site institucional da Vinharia Agnello, uma empresa familiar com mais de 70 anos de tradição na produção de vinhos finos. O projeto destaca a história, os produtos e o ambiente da vinícola por meio de uma navegação intuitiva e visualmente rica.",
      image: "/images/vinheria.png",
      technologies: ["JavaScript", "Html", "Css"],
      liveUrl: "https://kaiogalvao.github.io/vinheria-agnello",
      githubUrl: "https://github.com/KaioGalvao/vinheria-agnello",
      featured: false
    }
  ];

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? projects.filter(p => {
        const haystack = [
          p.title,
          p.description,
          ...(p.technologies || [])
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : projects;

  const featuredProjects = filtered.filter(project => project.featured);
  const otherProjects = filtered.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center">
              <span className="text-primary">Projetos em Destaque</span>
            </h3>
            {featuredProjects.length === 0 && (
              <p className="text-center text-muted-foreground mb-12 font-mono text-sm">
                Nenhum projeto em destaque corresponde a "{query}".
              </p>
            )}
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="card-tech p-0 overflow-hidden group">
                      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10">
                        {project.image && project.image !== "#" ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl text-primary/20 font-mono">
                              {project.title.charAt(0)}
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          {project.liveUrl && project.liveUrl !== "#" && (
                            <Button asChild size="sm" className="btn-tech">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && project.githubUrl !== "#" && (
                            <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Código
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="card-tech">
                      <h4 className="text-2xl font-bold mb-4 text-gradient">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20 font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <Button asChild className="btn-tech">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Ver Projeto
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <Button asChild className="btn-outline-tech">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Código
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">
              <span className="text-secondary">Outros Projetos</span>
            </h3>
            {otherProjects.length === 0 && (
              <p className="text-center text-muted-foreground font-mono text-sm mb-8">
                {filtered.length === 0
                  ? `Nenhum projeto encontrado para "${query}".`
                  : "Nenhum projeto adicional encontrado."}
              </p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div key={index} className="card-tech group">
                  <div className="relative aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg mb-4 overflow-hidden">
                    {project.image && project.image !== "#" ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl text-secondary/30 font-mono">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button asChild size="sm" variant="secondary">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir Live Demo de ${project.title}`}>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title}`}>
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <h4 className="font-semibold mb-2 text-foreground">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-secondary/10 text-secondary border-secondary/20 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="bg-muted text-muted-foreground border-muted-foreground/20 font-mono text-xs"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-outline-tech">
              <a href="https://github.com/KaioGalvao" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Ver Mais no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
