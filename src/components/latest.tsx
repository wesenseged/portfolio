import calendar from "@/assets/icons/calendar.png";
import cpp from "@/assets/icons/cpp.svg";
import bible from "@/assets/icons/Ebible.png";
import qt from "@/assets/icons/qt.png";
import yeneta from "@/assets/icons/yeneta.png";

import CardItem from "@/components/ui/card-items";
import { ExpandableCardDemo } from "@/components/ui/expandable-card-demo";

export const Latest = () => {
  const bibleStats = [
    { id: 1, title: "Size", data: "2 MiB" },
    { id: 2, title: "Age", data: "3+" },
    { id: 3, title: "Installs", data: "2000+" },
    { id: 4, title: "Free", data: "GPL-3.0" },
  ];
  const pagumeStats = [
    { id: 1, title: "Size", data: "681 KiB" },
    { id: 2, title: "Age", data: "3+" },
    { id: 3, title: "Installs", data: "590+" },
    { id: 4, title: "Free", data: "GPL-3.0" },
  ];

  const yenetaStats = [
    { id: 1, title: "Size", data: "Null" },
    { id: 2, title: "Age", data: "3+" },
    { id: 3, title: "Installs", data: "Null" },
    { id: 4, title: "Free", data: "GPL-3.0" },
  ];

  const cards = [
    {
      title: "Amharic Bible",
      description:
        "A beautiful and fast desktop app to read the Amharic Bible built using Kirigami and Qt.",
      src: bible,
      ctaText: "Open",
      ctaLink: "https://flathub.org/en/apps/io.github.wesenseged.Amharic-bible",
      content: () => (
        <div className="font-grotesk grid grid-cols-4 items-start gap-4 w-full">
          {bibleStats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2 items-center"
            >
              <div>{stat.title}</div>
              <div className="font-semibold text-foreground">{stat.data}</div>
            </div>
          ))}
        </div>
      ),
      items: [
        {
          id: 1,
          name: "Qt",
          designation: "UI framework",
          image: qt,
        },
        {
          id: 2,
          name: "C++",
          designation: "Programming language",
          image: cpp,
        },
      ],
    },
    {
      title: "Pagume",
      description: "Pagume is a modern Ethiopian calendar app built with KDE Kirigami and Qt6.",
      src: calendar,
      ctaText: "Open",
      ctaLink: "https://flathub.org/en/apps/io.github.wesenseged.Pagume",
      content: () => (
        <div className="font-grotesk grid grid-cols-4 items-start gap-4 w-full">
          {pagumeStats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2 items-center"
            >
              <div>{stat.title}</div>
              <div className="font-semibold text-foreground">{stat.data}</div>
            </div>
          ))}
        </div>
      ),
      items: [
        {
          id: 1,
          name: "Qt",
          designation: "UI framework",
          image: qt,
        },
        {
          id: 2,
          name: "C++",
          designation: "Programming language",
          image: cpp,
        },
      ],
    },
    {
      title: "Yeneta",
      description: "A complete amharic learning application build with Kirigami and Qt6.",
      src: yeneta,
      ctaText: "Building",
      ctaLink: "/",
      content: () => (
        <div className="font-grotesk grid grid-cols-4 items-start gap-4 w-full">
          {yenetaStats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2 items-center"
            >
              <div>{stat.title}</div>
              <div className="font-semibold text-black dark:text-white">{stat.data}</div>
            </div>
          ))}
        </div>
      ),
      items: [
        {
          id: 1,
          name: "Qt",
          designation: "UI framework",
          image: qt,
        },
        {
          id: 2,
          name: "C++",
          designation: "Programming language",
          image: cpp,
        },
      ],
    },
  ];

  const cardProps = {
    subTitle: "Latest",
    title: "Linux-Apps",
    desc: "Flatpak apps for Linux desktop built with Kirigami and Qt.",
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
