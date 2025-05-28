import { Dot } from "lucide-react";
import { ExpandableCardDemo } from "./ui/expandable-card-demo";

const Projects = () => {
  const cards = [
    {
      title: "Buug",
      description:
        "Buug is a free app for task management, project planning, markdown writing, and progress tracking.",
      src: "projects/buug.png",
      ctaText: "Open",
      ctaLink: "https://buuug.netlify.app/",
      content: () => (
        <p>
          Buug brings structure and clarity to productivity. It merges to-dos, markdown notes, and
          visual progress tracking into one seamless experience. <br /> <br />
          Whether you're managing daily tasks or organizing large projects, Buug offers a minimalist
          yet powerful interface. Features like Vim keybindings and drag-and-drop project planning
          make it a developer-friendly choice with end-user simplicity.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "React",
          designation: "JavaScript framework",
          image: "projects/react.png",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS framework",
          image: "projects/tailwind-css.png",
        },
        {
          id: 3,
          name: "Shadcn UI",
          designation: "UI components",
          image: "projects/shadcn-ui.png",
        },
        {
          id: 4,
          name: "Bun",
          designation: "JavaScript runtime",
          image: "projects/bun.png",
        },
        {
          id: 5,
          name: "Hono",
          designation: "Web framework",
          image: "projects/hono-js.png",
        },
        {
          id: 6,
          name: "Neon",
          designation: "Postgres hosting",
          image: "projects/neon.png",
        },
      ],
    },
    {
      title: "AI-Chat",
      description:
        "A real-time AI-powered chat app with authentication and multi-provider AI support.",
      src: "projects/ollama.png",
      ctaText: "Open",
      ctaLink: "https://ai-chat-zeta-eight.vercel.app/",
      content: () => (
        <p>
          AI-Chat is a sleek modern application combining real-time messaging and AI integrations
          like Groq and Gemini. <br /> <br />
          Built with a robust stack—React, Zustand, Convex, Clerk, and Shadcn UI—it ensures
          authenticated and responsive AI conversations. A smooth user experience meets powerful
          capabilities, making it ideal for collaborative or assistant-based workflows.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "React",
          designation: "JavaScript framework",
          image: "projects/react.png",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS framework",
          image: "projects/tailwind-css.png",
        },
        {
          id: 3,
          name: "Shadcn UI",
          designation: "UI components",
          image: "projects/shadcn-ui.png",
        },
        {
          id: 4,
          name: "TypeScript",
          designation: "Typed JavaScript",
          image: "projects/typescript.png",
        },
        {
          id: 5,
          name: "Convex",
          designation: "Backend service",
          image: "projects/convex.png",
        },
        {
          id: 6,
          name: "Clerk",
          designation: "Auth system",
          image: "projects/clerk.png",
        },
      ],
    },
    {
      title: "Chama",
      description: "A modern e-commerce app focused on shoes using TanStack and advanced tooling.",
      src: "/projects/boot.png",
      ctaText: "Open",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => (
        <p>
          Chama is a full-stack TanStack Start-based e-commerce app crafted for selling footwear.
          <br /> <br />
          It leverages the latest in frontend and backend tech: React 19, Tailwind CSS v4,
          Shadcn/UI, TanStack Router, and Drizzle ORM with PostgreSQL. Built for performance and
          scalability, it offers a blazing-fast shopping experience with robust auth and clean UI
          patterns.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "TanStack",
          designation: "Full-stack framework",
          image: "projects/next-js.png",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS framework",
          image: "projects/tailwind-css.png",
        },
        {
          id: 3,
          name: "PostgreSQL",
          designation: "Database",
          image: "projects/postgresql.png",
        },
        {
          id: 4,
          name: "Better Auth",
          designation: "Auth system",
          image: "projects/better-auth.png",
        },
      ],
    },
    {
      title: "Buug-Doc",
      description: "A simple React-based documentation site for the Buug app with guides and FAQs.",
      src: "projects/doc.png",
      ctaText: "Open",
      ctaLink: "https://buug-doc.netlify.app/",
      content: () => (
        <p>
          Buug-Doc is the official front-end documentation for the Buug productivity app. <br />{" "}
          <br />
          It provides clear and comprehensive guidance for both end users and developers, including
          setup instructions, usage tutorials, markdown reference, and FAQs. Designed with clarity
          and minimalism, it's an essential part of onboarding and support.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "React",
          designation: "JavaScript framework",
          image: "projects/react.png",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS framework",
          image: "projects/tailwind-css.png",
        },
        {
          id: 3,
          name: "Shadcn UI",
          designation: "UI components",
          image: "projects/shadcn-ui.png",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col mt-32 items-start ">
      <div className="flex flex-col items-start space-y-6">
        <div className="flex items-center space-x-2">
          <Dot />
          <h3 className="text-sm md:text-lg text-muted-foreground">Projects</h3>
        </div>

        <h1 className="text-lg md:text-3xl font-bold ">My Works</h1>
        <p className="text-sm md:text-lg text-muted-foreground ">
          Discover my portolio, where purposeful interfaces meet captivating design.
        </p>
        <div className="flex items-center lg:items-start w-10/12 mt-10">
          <ExpandableCardDemo cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
