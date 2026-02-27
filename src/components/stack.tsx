import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import CardItem from "@/components/ui/card-items";

const Stack = () => {
  const tools = [
    {
      id: 1,
      name: "zig",
      designation: "A general-purpose programming",
      image: "projects/zig.svg",
    },
    {
      id: 2,
      name: "C++",
      designation: "A general-purpose programming",
      image: "projects/c-plus-plus.png",
    },
    {
      id: 3,
      name: "Qt",
      designation: "Software development framework",
      image: "projects/qt.png",
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "JavaScript by Microsoft",
      image: "projects/typescript.png",
    },
    {
      id: 5,
      name: "Lua",
      designation: "Lightweight scripting language",
      image: "projects/lua.png",
    },
    {
      id: 6,
      name: "React",
      designation: "A JavaScript library",
      image: "projects/react.png",
    },
    {
      id: 7,
      name: "GNU/Linux",
      designation: "Open-source operating system",
      image: "projects/tux.png",
    },
    {
      id: 8,
      name: "Neovim",
      designation: "Modern Vim-based text editor",
      image: "projects/neovim.png",
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
        <div className="grid grid-cols-4 items-center mt-10 lg:items-start w-10/12 ">
          <AnimatedTooltip items={tools} />
        </div>
      </div>
    </section>
  );
};

export default Stack;
