import { ExpandableCardDemo } from "./ui/expandable-card-demo";
import CardItem from "./ui/card-items";

const Latest = () => {
  const cards = [
    {
      title: "Amharic Bible",
      description:
        "A beautiful and fast desktop app to read the Amharic Bible built using Kirigami and Qt.",
      src: "projects/Ebible.png",
      ctaText: "Open",
      ctaLink: "https://github.com/wesenseged/Amharic-bible",
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
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg",
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
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-plain.svg",
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
      title: "Ethiopian Calendar",
      description:
        "A modern and elegant Ethiopian Calendar app built using Kirigami and Qt for Linux.",
      src: "projects/calendar-alt.png",
      ctaText: "Building",
      ctaLink: "https://github.com/hbey/ethiopian-calendar",
      content: () => (
        <p>
          Ethiopian Calendar is a desktop app that brings the traditional Ethiopian date system to
          modern desktops. It features accurate date conversion, event reminders, and a native KDE
          look.
          <br />
          <br />
          Developed using <b>Qt6</b> and <b>Kirigami</b>, it integrates seamlessly into Plasma
          environments and supports both <b>Gregorian</b> and <b>Ethiopian</b> date views.
        </p>
      ),
      items: [
        {
          id: 1,
          name: "Qt",
          designation: "UI framework",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg",
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
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-plain.svg",
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
