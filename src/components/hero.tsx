import CardItem from "@/components/ui/card-items";

const Hero = ({ isDark }: { isDark: boolean }) => {
  const cardProps = {
    subTitle: "Full-Stack-Developer",
    title: "I'm Abenezer Wesenseged",
    desc: "I'm a full-stack developer focused on building fast, modern web applications. I'm always learning and open to collaboration.",
  };

  return (
    <section className="flex  mt-32">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="flex space-x-4">
          <a href="https://github.com/wesenseged/" target="_blank" rel="noopener noreferrer">
            <img
              src={isDark ? "projects/github-light.png" : "projects/github-dark.png"}
              alt="github logo"
              className="w-6 md:w-12 h-6 md:h-12"
            />
          </a>

          <a href="https://x.com/wesenseged_" target="_blank" rel="noopener noreferrer">
            <img
              src={isDark ? "projects/x-light.png" : "projects/x-dark.png"}
              alt="github logo"
              className="w-6 md:w-12 h-6 md:h-12"
            />
          </a>
        </div>
      </div>
      <div className="">
        <img
          src="no1.JPG"
          alt="profile"
          className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
