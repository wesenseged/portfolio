import github from "@/assets/icons/github.svg";
import githubLight from "@/assets/icons/github-light.svg";
import gitlab from "@/assets/icons/gitlab.svg";
import gitlabLight from "@/assets/icons/gitlab-light.svg";

import CardItem from "@/components/ui/card-items";
import { useTheme } from "@/components/ui/theme-context";

export const Hero = () => {
  const { isDark } = useTheme();
  const cardProps = {
    subTitle: "Software-Developer",
    title: "I'm Abenezer Wesenseged",
    desc: "Ethiopian software developer focused on building fast, modern applications. I'm always learning and open to collaboration.",
  };

  return (
    <section id="Hero" className="flex mt-32 justify-between">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="flex space-x-4">
          <a href="https://github.com/wesenseged" target="_blank" rel="noopener noreferrer">
            <img
              src={isDark ? githubLight : github}
              alt="github logo"
              className="w-6 md:w-12 h-6 md:h-12"
            />
          </a>

          <a href="https://invent.kde.org/wesenseged" target="_blank" rel="noopener noreferrer">
            <img
              src={isDark ? gitlabLight : gitlab}
              alt="gitlab logo"
              className="w-6 md:w-12 h-6 md:h-12"
            />
          </a>
        </div>
      </div>
      <div className="hidden md:block md:w-69 lg:w-72 xl:w-80 h-full rounded-full overflow-hidden ">
        <img src="no1.JPG" alt="profile" className="w-full h-full object-cover " />
      </div>
    </section>
  );
};
