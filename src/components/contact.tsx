import { Button } from "@/components/ui/button";
import CardItem from "@/components/ui/card-items";

export const Contact = () => {
  const cardProps = {
    subTitle: "Contact",
    title: "Get-IN-TOUCH",
    desc: "Got an idea and want to collaborate? Reach out now",
  };

  const userContact = { email: "wseged@proton.me", matrix: "@wesenseged:matrix.org" };

  return (
    <section className="flex flex-col mt-32 mb-20 items-start w-10/12">
      <div className="flex flex-col items-start space-y-6">
        <CardItem subTitle={cardProps.subTitle} title={cardProps.title} desc={cardProps.desc} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 items-start md:items-center mt-4">
          <Button variant="default" asChild={true}>
            <a
              href="mailto:wseged@proton.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-anek flex items-center space-x-2"
            >
              {userContact.email}
            </a>
          </Button>
          <Button variant="default" asChild={true}>
            <a
              href="https://matrix.to/#/@wesenseged:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-anek flex items-center space-x-2"
            >
              {userContact.matrix}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
