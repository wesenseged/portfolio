import { Dot } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Stack = () => {
  const frontend = [
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
  ];

  return (
    <section className="flex flex-col mt-32 items-start ">
      <div className="flex flex-col items-start space-y-6">
        <div className="flex items-center space-x-2">
          <Dot />
          <h3 className="text-sm md:text-lg text-muted-foreground">Tech-Stack</h3>
        </div>

        <h1 className="text-lg md:text-3xl font-bold ">My Works</h1>
        <p className="text-sm md:text-lg text-muted-foreground ">
          Discover my portolio, where purposeful interfaces meet captivating design.
        </p>
        <div className="flex items-center lg:items-start w-10/12 ">
          <AnimatedTooltip items={frontend} />
        </div>
      </div>
    </section>
  );
};

export default Stack;
