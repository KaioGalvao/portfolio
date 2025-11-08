# Portfólio 🚀

Uma SPA moderna de portfólio pessoal construída com React + TypeScript, Vite e Tailwind CSS, usando a biblioteca de componentes shadcn/ui (Radix UI) e animações suaves para entregar uma experiência fluida, acessível e responsiva.


## ✨ Destaques

- Interface elegante com tema escuro/claro e animações (float, circuit, pulse-glow)
- Seções: Hero com efeito de digitação, Sobre, Trajetória, Tecnologias, Projetos, Contato e Footer
- Filtro de projetos com busca em tempo real (contexto global simples)
- Componentização com shadcn/ui e Radix primitives
- Tipos com TypeScript e build ultrarrápido com Vite
- Acessível, responsivo e com imagens lazy-loaded

## 🧩 Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 + tailwindcss-animate
- shadcn/ui (Radix UI)
- React Router DOM
- Lucide Icons

## 📁 Estrutura do projeto

```
├─ public/
│  └─ images/               # imagens usadas nos projetos
├─ src/
│  ├─ pages/
│  │  └─ Index.tsx          # página principal (SPA)
│  ├─ components/
│  │  ├─ Navigation.tsx     # navbar com busca e ThemeToggle
│  │  ├─ Hero.tsx           # hero com efeito de digitação
│  │  ├─ About.tsx          # seção "Sobre"
│  │  ├─ Trajectory.tsx     # linha do tempo / trajetória
│  │  ├─ Technologies.tsx   # tecnologias e stacks
│  │  ├─ Projects.tsx       # listagem + filtro de projetos
│  │  └─ Contact.tsx        # CTA de contato
│  ├─ hooks/
│  │  └─ projects-filter.tsx # contexto de busca de projetos
│  └─ lib/utils.ts          # utilitários (ex.: cn)
├─ tailwind.config.ts       # tema, cores e animações customizadas
├─ vite.config.ts           # config Vite
└─ package.json
```

## ✅ Pré-requisitos

- Node.js 18 ou superior
- npm (ou outro gerenciador de pacotes compatível)

## ▶️ Como rodar localmente

1) Instale as dependências

```powershell
npm install
```

2) Inicie o servidor de desenvolvimento

```powershell
npm run dev
```

Acesse a aplicação no endereço que aparecer no terminal (geralmente http://localhost:8080).

3) (Opcional) Verifique o lint

```powershell
npm run lint
```

4) Build para produção e preview

```powershell
npm run build
npm run preview
```

## 🧪 Scripts disponíveis

- dev: inicia o Vite em modo desenvolvimento
- build: gera o build de produção
- build:dev: build em modo development (útil para inspeção)
- preview: serve o build localmente
- lint: roda o ESLint

## 🗂️ Conteúdo das seções

- Hero: título com efeito de digitação, destaque visual e CTAs rápidos
- Sobre: breve apresentação e foco profissional
- Trajetória: linha do tempo com experiências/etapas relevantes
- Tecnologias: stacks e ferramentas dominadas
- Projetos: cartões com imagem, descrição, tecnologias e links (Live e Código), com filtros por busca
- Contato: botões/CTAs para falar com você
- Footer: links e créditos

## 🔍 Como adicionar/editar projetos

Os projetos são definidos diretamente no componente `src/components/Projects.tsx` dentro do array `projects`. Cada item segue a estrutura:

```ts
{
  title: string,
  description: string,
  image: string,          // caminho público (ex.: /images/meu-projeto.png)
  technologies: string[],
  liveUrl: string,
  githubUrl: string,
  featured: boolean
}
```

- Para exibir imagens, adicione arquivos em `public/images` e referencie com `/images/nome.png`.
- O campo `featured` controla se o projeto aparece na área de destaque.
- A busca usa um contexto (`hooks/projects-filter.tsx`) e filtra por título, descrição e tecnologias.

## 🎨 Personalização rápida

- Paleta/tema: ajuste em `tailwind.config.ts` (tokens CSS via CSS variables) e `src/index.css`
- Componentes UI: em `src/components/ui/*` (shadcn/ui)
- Palavras do efeito de digitação: `src/components/Hero.tsx` (constante `words`)
- Navegação e âncoras: `src/components/Navigation.tsx` (ids das seções)

## ♿ Acessibilidade e UX

- Navegação por teclado, botões com rótulos e contraste de cores pensados
- Imagens com `loading="lazy"`
- Layout responsivo e leve

## 🧱 Notas técnicas

- Tailwind com animações customizadas: `float`, `circuit`, `pulse-glow`
- shadcn/ui + Radix: componentes acessíveis e com estilo via Tailwind

Dúvidas ou sugestões? Abra uma issue ou me chame! ✉️