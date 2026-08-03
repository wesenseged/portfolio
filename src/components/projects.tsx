import buug from "@/assets/icons/buug.png";
import hono from "@/assets/icons/hono-js.svg";
import olama from "@/assets/icons/ollama.png";
import react from "@/assets/icons/react.svg";
import shoes from "@/assets/icons/sneaker.svg";
import tanstack from "@/assets/icons/tanstack.svg";

import CardItem from "@/components/ui/card-items";
import { ExpandableCardDemo } from "@/components/ui/expandable-card-demo";

export const Projects = () => {
  const cards = [
    {
      title: "Buug",
      description:
        "Buug is a free app for task management, project planning, markdown writing, and progress tracking.",
      src: buug,
      ctaText: "Open",
      ctaLink: "https://buuug.netlify.app/",
      content: () => <div />,
      items: [
        {
          id: 1,
          name: "React",
          designation: "JavaScript framework",
          image: react,
        },
        {
          id: 2,
          name: "Hono",
          designation: "Web framework",
          image: hono,
        },
      ],
    },
    {
      title: "AI-Chat",
      description:
        "A real-time AI-powered chat app with authentication and multi-provider AI support.",
      src: olama,
      ctaText: "Open",
      ctaLink: "https://ai-chat-zeta-eight.vercel.app/",
      content: () => <div />,
      items: [
        {
          id: 1,
          name: "React",
          designation: "JavaScript framework",
          image: react,
        },
      ],
    },
    {
      title: "Chama",
      description: "A modern e-commerce app focused on shoes using TanStack and advanced tooling.",
      src: shoes,
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/chama",
      content: () => <div />,
      items: [
        {
          id: 1,
          name: "TanStack",
          designation: "Full-stack framework",
          image: tanstack,
        },
      ],
    },
  ];

  const cardProps = {
    subTitle: "Projects",
    title: "MY-WORKS",
    desc: "Discover my portolio, where purposeful interfaces meet captivating design.",
  };

  return (
    <section className="flex flex-col mt-32 items-start ">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="flex items-center lg:items-start w-10/12 mt-10">
          <ExpandableCardDemo cards={cards} />
        </div>
      </div>
    </section>
  );
};
