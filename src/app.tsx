import { Button } from "@/components/ui/button";
import { Moon, Sun, Dot } from "lucide-react";
import { useEffect, useState } from "react";
import Projects from "./components/projects";
import Products from "./components/products";
import Stack from "./components/stack";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <main className="bg-background text-foreground w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
      <Button variant="ghost" onClick={() => setIsDark(!isDark)} className="fixed top-4 right-2">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
      <section className="flex mt-32">
        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-2">
            <Dot />
            <h3 className="text-sm md:text-lg text-muted-foreground">Full-Stack-Developer</h3>
          </div>

          <h1 className="text-lg md:text-3xl font-bold ">I'm Abenezer Wesenseged</h1>
          <p className="text-sm md:text-lg text-muted-foreground w-9/12">
            I'm a full-stack developer focused on building fast, modern web applications. I'm always
            learning and open to collaboration.
          </p>
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
      <Projects />
      <Products />
      <Stack />
    </main>
  );
}

export default App;
