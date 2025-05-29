import { AnimatedTooltip } from "./ui/animated-tooltip";
import CardItem from "./ui/card-items";

const Stack = () => {
  const tools = [
    {
      id: 1,
      name: "React",
      designation: "A powerful library",
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
      name: "JavaScript",
      designation: "JavaScript with ",
      image: "projects/javascript.png",
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "JavaScript with ",
      image: "projects/typescript.png",
    },
    {
      id: 5,
      name: "Hono",
      designation: "web framework",
      image: "projects/hono-js.png",
    },
    {
      id: 6,
      name: "Bun",
      designation: "JavaScript runtime",
      image: "projects/bun.png",
    },
    {
      id: 7,
      name: "Neon",
      designation: "PostgreSQL database",
      image: "projects/neon.png",
    },
    {
      id: 8,
      name: "Convex",
      designation: "PostgreSQL database",
      image: "projects/convex.png",
    },
    {
      id: 9,
      name: "PostgreSQL",
      designation: "PostgreSQL database",
      image: "projects/postgresql.png",
    },
    {
      id: 10,
      name: "Linux",
      designation: "Open-source operating system",
      image: "projects/tux.png",
    },
    {
      id: 11,
      name: "Neovim",
      designation: "Modern Vim-based text editor",
      image: "projects/neovim.png",
    },
    {
      id: 12,
      name: "Lua",
      designation: "Lightweight scripting language",
      image: "projects/lua.png",
    },
    {
      id: 13,
      name: "Shadcn UI",
      designation: "Accessible component library",
      image: "projects/shadcn-ui.png",
    },
    {
      id: 14,
      name: "Next.js",
      designation: "React framework for production",
      image: "projects/next-js.png",
    },
    {
      id: 15,
      name: "Clerk",
      designation: "Authentication toolkit",
      image: "projects/clerk.png",
    },
    {
      id: 16,
      name: "Better Auth",
      designation: "Improved authentication solutions",
      image: "projects/better-auth.png",
    },
    {
      id: 17,
      name: "Bash",
      designation: "Unix shell and scripting language",
      image: "projects/bash.png",
    },
    {
      id: 18,
      name: "Dotenv",
      designation: "Environment variables loader",
      image: "projects/dot-env.png",
    },
    {
      id: 19,
      name: "GitHub",
      designation: "Code hosting platform",
      image: "projects/github.png",
    },
    {
      id: 20,
      name: "Drizzle ORM",
      designation: "Type-safe ORM for SQL databases",
      image: "projects/drizzle-orm.png",
    },
    {
      id: 21,
      name: "Figma",
      designation: "Design and prototyping tool",
      image: "projects/figma.png",
    },
    {
      id: 22,
      name: "npm",
      designation: "JavaScript package manager",
      image: "projects/npm.png",
    },
  ];

  const cardProps = {
    subTitle: "Tech-Stack",
    title: "TECHNOLOGIES-&-TOOLS",
    desc: "The key technologies, frameworks, and tools that power my projects.",
  };

  return (
    <section className="flex flex-col mt-32 items-start ">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="grid grid-cols-6 items-center mt-10 lg:items-start w-10/12 ">
          <AnimatedTooltip items={tools} />
        </div>
      </div>
    </section>
  );
};

export default Stack;
