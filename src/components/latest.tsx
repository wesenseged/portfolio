import { ExpandableCardDemo } from "@/components/ui/expandable-card-demo";
import CardItem from "@/components/ui/card-items";

const Latest = () => {
  const cards = [
    {
      title: "Amharic Bible",
      description:
        "A beautiful and fast desktop app to read the Amharic Bible built using Kirigami and Qt.",
      src: "projects/Ebible.png",
      ctaText: "Open",
      ctaLink: "https://flathub.org/en/apps/io.github.wesenseged.Amharic-bible",
      content: () => (
        <p>
          Amharic Bible is a native desktop application designed for fluent and immersive Bible
          reading in Amharic. Built with <b>Kirigami</b> and <b>Qt6</b>, it provides a clean,
          distraction-free experience with support for offline access and an elegant modern KDE
          interface.
          <br />
          <br />
          Its lightweight design makes it perfect for daily reading while keeping the interface
          fully native to the Linux desktop environment.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "Qt",
          designation: "UI framework",
          image: "projects/qt.png",
        },
        {
          id: 2,
          name: "Kirigami",
          designation: "KDE Framework",
          image: "projects/tux.png",
        },
        {
          id: 3,
          name: "C++",
          designation: "Programming language",
          image: "projects/c-plus-plus.png",
        },
        {
          id: 4,
          name: "CMake",
          designation: "Build system",
          image: "projects/cmake.svg",
        },
        {
          id: 5,
          name: "Flatpak",
          designation: "Packaging format",
          image: "projects/flatpak.png",
        },
      ],
    },
    {
      title: "Pagume",
      description: "Pagume is a modern Ethiopian calendar app built with KDE Kirigami and Qt6.",
      src: "projects/calendar.png",
      ctaText: "Open",
      ctaLink: "https://flathub.org/en/apps/io.github.wesenseged.Pagume",
      content: () => (
        <p>
          Pagume is a desktop app that brings the traditional Ethiopian date system to modern
          desktops. It features accurate date conversion, event reminders, and a native KDE look.
          <br />
          <br />
          Named after Ethiopia’s unique 13th month, Pagume combines tradition with a clean, elegant
          design.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "Qt",
          designation: "UI framework",
          image: "projects/qt.png",
        },
        {
          id: 2,
          name: "Kirigami",
          designation: "KDE Framework",
          image: "projects/tux.png",
        },
        {
          id: 3,
          name: "C++",
          designation: "Programming language",
          image: "projects/c-plus-plus.png",
        },
        {
          id: 4,
          name: "CMake",
          designation: "Build system",
          image: "projects/cmake.svg",
        },
        {
          id: 5,
          name: "Flatpak",
          designation: "Packaging format",
          image: "projects/flatpak.png",
        },
      ],
    },
    {
      title: "Yeneta",
      description: "A complete amharic learning application build with Kirigami and Qt6.",
      src: "projects/yeneta.png",
      ctaText: "Building",
      ctaLink: "/",
      content: () => (
        <p>
          Yeneta is a native desktop application designed for beginner and professional Amharic
          learners. Built with <b>Kirigami</b> and <b>Qt6</b>, it provides a clean, distraction-free
          experience with support for offline access and an elegant modern KDE interface.
          <br />
          <br />
          Its interactive design makes it perfect for everyone using it and keeping the interface
          fully native to the Linux desktop environment.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "Qt",
          designation: "UI framework",
          image: "projects/qt.png",
        },
        {
          id: 2,
          name: "Kirigami",
          designation: "KDE Framework",
          image: "projects/tux.png",
        },
        {
          id: 3,
          name: "C++",
          designation: "Programming language",
          image: "projects/c-plus-plus.png",
        },
        {
          id: 4,
          name: "CMake",
          designation: "Build system",
          image: "projects/cmake.svg",
        },
        {
          id: 5,
          name: "Flatpak",
          designation: "Packaging format",
          image: "projects/flatpak.png",
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

export default Latest;
