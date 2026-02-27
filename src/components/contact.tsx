import { Button } from "@/components/ui/button";
import CardItem from "@/components/ui/card-items";

const Contact = () => {
  const cardProps = {
    subTitle: "Contact",
    title: "Get-IN-TOUCH",
    desc: "Got an idea and want to collaborate? Reach out now",
  };

  return (
    <section className="flex flex-col mt-32 mb-20 items-start w-10/12">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="flex flex-row space-x-4 md:space-x-16 items-center mt-4">
          <Button variant="default" asChild>
            <a
              href="mailto:wseged@proton.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              wseged@proton.me
            </a>
          </Button>
          <Button variant="default" asChild>
            <a
              href="https://matrix.to/#/@wesenseged:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              @wesenseged:matrix.org
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
