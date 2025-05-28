import { useEffect, useState } from "react";
import { Github, LinkedinIcon, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Africa/Addis_Ababa",
    }),
  );

  const handleUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Africa/Addis_Ababa",
        }),
      );
    }, 10000); // Update every second

    return () => clearInterval(intervalID);
  }, []);

  return (
    <section
      id="let's chat"
      className="flex flex-col space-y-6 xl:space-y-0 xl:flex-row md:h-screen justify-between w-[90%] md:w-[70%] mx-auto pt-16 xl:pt-60"
    >
      <div className="">
        <h1 className="text-3xl font-bold xl:text-6xl z-10">
          Have an awesome idea? <br /> Let's bring it to life.
        </h1>
        <p className="text-xl mt-10 w-10/12 xl:w-3/5">
          I am looking for freelance opportunities or internships in startups, agencies, and design
          studios.
        </p>
        <form
          action="https://formsubmit.co/wseged@proton.me"
          method="POST"
          className="mt-5 xl:mt-20 flex flex-col  justify-between"
        >
          <div className="flex flex-col space-y-6 xl:space-y-0 xl:flex-row justify-between">
            <input
              type="text"
              name="name"
              required
              value={user.name}
              onChange={(e) => {
                handleUser(e);
              }}
              className="border-b w-full md:w-96 px-3 py-2  bg-black text-white text-xl focus:outline-none z-10"
              placeholder="Your name"
            />

            <input
              type="email"
              name="email"
              required
              value={user.email}
              onChange={(e) => {
                handleUser(e);
              }}
              className="border-b w-full md:w-96 px-3 py-2  bg-black text-white text-xl focus:outline-none z-10"
              placeholder="Your email"
            />
          </div>
          <textarea
            name="message"
            value={user.message}
            required
            onChange={(e) => {
              handleUser(e);
            }}
            className="border-b w-full md:w-96 px-3 py-2 mt-10 bg-black text-white text-xl focus:outline-none z-10"
            placeholder="Your message"
          />
          <input type="hidden" name="_captcha" value="false" />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
      <div className="relative flex flex-col justify-start px-4 ">
        <h1 className="text-2xl font-semibold">Contact Details</h1>
        <a
          href="mailto:wseged@proton.me"
          target="_blank"
          rel="noreferrer"
          className="text-xl mt-4 hover:text-[#ffff09]"
        >
          wseged@proton.me
        </a>
        <a
          href="tel:+251987274545"
          target="_blank"
          rel="noreferrer"
          className="text-xl mt-2 hover:text-[#ffff09]"
        >
          +2519 8727 4545
        </a>
        <h1 className="text-2xl font-semibold mt-3 xl:mt-14">Social Medias</h1>
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/wesenseged"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#ffff09] flex items-center mt-4"
          >
            <Github size={40} />
          </a>

          <a
            href="https://x.com/wesenseged_"
            target="_blank"
            rel="noreferrer"
            className="text-xl mt-4 hover:text-[#ffff09]"
          >
            <Twitter size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/wesenseged?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdQS5BKsCQn%2BI1Z7lIJSMkg%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-[#ffff09] flex items-center mt-3"
          >
            <LinkedinIcon size={40} />
          </a>
        </div>
        <h1 className="text-2xl font-semibold mt-4 xl:mt-14">Location</h1>
        <p className="text-xl mt-4">Addis Abeba, Ethiopia</p>
        <p className="text-xl mt-2">{time}</p>
      </div>
    </section>
  );
}
