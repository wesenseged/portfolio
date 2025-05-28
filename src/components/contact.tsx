import { Dot } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="flex flex-col mt-32 mb-20 items-start w-10/12">
      <div className="flex flex-col items-start space-y-6">
        <div className="flex items-center space-x-2">
          <Dot />
          <h3 className="text-sm md:text-lg text-muted-foreground">Contact</h3>
        </div>

        <h1 className="text-lg md:text-3xl font-bold ">Get-IN-TOUCH</h1>
        <p className="text-sm md:text-lg text-muted-foreground ">
          Got an idea and want to collaborate? Reach out now
        </p>
        <Button variant="default" asChild className="mt-4">
          <a
            href="mailto:wseged@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span>Contact Me</span>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
