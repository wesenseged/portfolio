import bash from "@/assets/icons/bash.svg";
import clock from "@/assets/icons/clock.svg";
import lua from "@/assets/icons/lua.png";
import neovim from "@/assets/icons/neovim.svg";
import react from "@/assets/icons/react.svg";
import typescrpit from "@/assets/icons/typescript.svg";

import CardItem from "@/components/ui/card-items";
import { ExpandableCardDemo } from "@/components/ui/expandable-card-demo";

export const Products = () => {
  const cards = [
    {
      title: "Pomodoro",
      description: "A beautiful, audio-enabled Pomodoro timer that runs in your terminal.",
      src: clock,
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/pomodoro",
      content: () => <div />,
      items: [
        {
          id: 1,
          name: "Clack",
          designation: "CLI Framework",
          image: bash,
        },
        {
          id: 2,
          name: "Typescript",
          designation: "Typed JS",
          image: typescrpit,
        },
      ],
    },
    {
      title: "create-wsx",
      description:
        "CLI to quickly scaffold React projects with Tailwind, Shadcn UI, Biome, ESLint, and more.",
      src: react,
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/create-wsx",
      content: () => <div />,
      items: [
        {
          id: 1,
          name: "Clack",
          designation: "CLI Framework",
          image: bash,
        },
        {
          id: 2,
          name: "Typescript",
          designation: "Typed JS",
          image: typescrpit,
        },
      ],
    },
    {
      title: "stone.nvim",
      description:
        "A clean, minimal and versatile Neovim colorscheme with base, dark and light variants.",
      src: neovim,
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/stone.nvim",
      content: () => <div />,
      items: [
        {
          id: 1,
          name: "Bash",
          designation: "Shell",
          image: bash,
        },
        {
          id: 2,
          name: "Lua",
          designation: "Scripting",
          image: lua,
        },
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
