import { ExpandableCardDemo } from "./ui/expandable-card-demo";
import CardItem from "./ui/card-items";

const Products = () => {
  const cards = [
    {
      title: "Pomodoro",
      description: "A beautiful, audio-enabled Pomodoro timer that runs in your terminal.",
      src: "projects/clock.png",
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/pomodoro",
      content: () => (
        <p>
          Pomodoro is a beautifully styled and interactive terminal timer app that helps you stay
          focused using the Pomodoro technique. It features audio cues, keyboard shortcuts, and
          session tracking.
          <br />
          <br />
          Ideal for developers and productivity enthusiasts who prefer working inside the terminal.
        </p>
      ),
      items: [
        { id: 1, name: "Clack", designation: "CLI Framework", image: "projects/bash.png" },
        { id: 2, name: "pnpm", designation: "Package Manager", image: "projects/npm.png" },
        { id: 3, name: "Typescript", designation: "Typed JS", image: "projects/typescript.png" },
      ],
    },
    {
      title: "create-wsx",
      description:
        "CLI to quickly scaffold React projects with Tailwind, Shadcn UI, Biome, ESLint, and more.",
      src: "projects/react.png",
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/create-wsx",
      content: () => (
        <p>
          create-wsx is a powerful CLI tool to scaffold modern React apps with your preferred stack.
          Easily choose integrations like Tailwind CSS, shadcn/ui, ESLint, Biome, and more.
          <br />
          <br />
          Save time setting up your dev environment and start coding immediately.
        </p>
      ),
      items: [
        { id: 1, name: "Clack", designation: "CLI Framework", image: "projects/bash.png" },
        { id: 2, name: "pnpm", designation: "Package Manager", image: "projects/npm.png" },
        { id: 3, name: "Typescript", designation: "Typed JS", image: "projects/typescript.png" },
      ],
    },
    {
      title: "Neovim Config Generator",
      description:
        "An interactive CLI that builds a Neovim config based on your answers for plugins, themes, and more.",
      src: "projects/bash.png",
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/Neovim-Config-Generator",
      content: () => (
        <p>
          Neovim Config Generator is a simple terminal tool that guides you through generating a
          full Neovim configuration. Choose plugins, Tree-sitter languages, and themes—all from the
          CLI.
          <br />
          <br />
          Perfect for new users or those who want to prototype a config fast.
        </p>
      ),
      items: [
        { id: 1, name: "Clack", designation: "CLI Framework", image: "projects/bash.png" },
        { id: 2, name: "pnpm", designation: "Package Manager", image: "projects/npm.png" },
        { id: 3, name: "JavaScript", designation: "Language", image: "projects/javascript.png" },
      ],
    },
    {
      title: "nvim",
      description:
        "My minimal yet feature-rich Neovim setup optimized for TS, HTML, CSS, Lua, Bash, and C.",
      src: "projects/neovim.png",
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/nvim",
      content: () => (
        <p>
          This is my personal Neovim configuration, crafted for simplicity and power. Built with
          <code>lazy.nvim</code>, it's tuned for web and systems development with TypeScript, HTML,
          Lua, Bash, and more.
          <br />
          <br />
          Plugins are carefully selected to boost productivity, with a clean UI and fast startup
          time.
        </p>
      ),
      items: [
        { id: 1, name: "Bash", designation: "Shell", image: "projects/bash.png" },
        { id: 2, name: "Lua", designation: "Scripting", image: "projects/lua.png" },
      ],
    },
  ];

  const cardProps = {
    subTitle: "Products",
    title: "EXPLORE-MY-PRODUCTS",
    desc: "some of the digital products that i worked on as side projects, explore and try it now",
  };

  return (
    <section className="flex flex-col mt-32 items-start w-10/12">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="flex items-start w-10/12 mt-10">
          <ExpandableCardDemo cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default Products;
