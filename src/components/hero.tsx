import CardItem from "@/components/ui/card-items";
import { useTheme } from "@/components/ui/theme-context";

const Hero = () => {
  const { isDark } = useTheme();
  const cardProps = {
    subTitle: "Software-Developer",
    title: "I'm Abenezer Wesenseged",
    desc: "Ethiopian software developer focused on building fast, modern applications. I'm always learning and open to collaboration.",
  };

  return (
    <section className="flex  mt-32">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="flex space-x-4">
          <a href="https://github.com/wesenseged" target="_blank" rel="noopener noreferrer">
            <img
              src={isDark ? "projects/github-light.png" : "projects/github-dark.png"}
              alt="github logo"
              className="w-6 md:w-12 h-6 md:h-12"
            />
          </a>

          <a href="https://codeberg.org/wesenseged/" target="_blank" rel="noopener noreferrer">
            <img
              src="projects/codeberg.png"
              alt="codeberg logo"
              className="w-6 md:w-12 h-6 md:h-12"
            />
          </a>

          <a href="https://invent.kde.org/wesenseged" target="_blank" rel="noopener noreferrer">
            <img
              src={isDark ? "projects/gitlab-light.png" : "projects/gitlab-dark.png"}
              alt="gitlab logo"
              className="w-6 md:w-12 h-6 md:h-12"
            />
          </a>
        </div>
      </div>
      <div className="">
        <img
          src="no1.JPG"
          alt="profile"
          className="hidden md:flex md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
