import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kaiovsagalvao@gmail.com",
      link: "mailto:kaiovsagalvao@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99428-0478",
      link: "tel:+5511994280478"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/KaioGalvao",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kaio-galvao",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-px h-64 bg-gradient-to-b from-transparent via-primary to-transparent animate-circuit"></div>
        <div className="absolute bottom-1/4 right-1/6 w-px h-64 bg-gradient-to-b from-transparent via-accent to-transparent animate-circuit" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-circuit" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Vamos Conversar?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pronto para dar vida ao seu próximo projeto? Entre em contato e vamos criar algo incrível juntos.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-tech">
              <h3 className="text-xl font-semibold mb-6 text-gradient">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-tech w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="card-tech">
                <h3 className="text-xl font-semibold mb-6 text-gradient">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <a 
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-tech">
                <h3 className="text-xl font-semibold mb-6 text-gradient">
                  Redes Sociais
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar ${social.name}`}
                      className={`w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary/50 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="card-tech">
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  Disponibilidade
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-glow"></div>
                    <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Resposta em até 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Reunião gratuita de 30min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};