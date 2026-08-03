import cpp from "@/assets/icons/cpp.svg";
import lua from "@/assets/icons/lua.png";
import neovim from "@/assets/icons/neovim.svg";
import qt from "@/assets/icons/qt.png";
import react from "@/assets/icons/react.svg";
import linux from "@/assets/icons/tux.svg";
import typescript from "@/assets/icons/typescript.svg";
import zig from "@/assets/icons/zig.svg";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import CardItem from "@/components/ui/card-items";

export const Stack = () => {
  const tools = [
    {
      id: 1,
      name: "zig",
      designation: "A general-purpose programming",
      image: zig,
    },
    {
      id: 2,
      name: "C++",
      designation: "A general-purpose programming",
      image: cpp,
    },
    {
      id: 3,
      name: "Qt",
      designation: "Software development framework",
      image: qt,
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "JavaScript by Microsoft",
      image: typescript,
    },
    {
      id: 5,
      name: "Lua",
      designation: "Lightweight scripting language",
      image: lua,
    },
    {
      id: 6,
      name: "React",
      designation: "A JavaScript library",
      image: react,
    },
    {
      id: 7,
      name: "GNU/Linux",
      designation: "Open-source operating system",
      image: linux,
    },
    {
      id: 8,
      name: "Neovim",
      designation: "Modern Vim-based text editor",
      image: neovim,
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
