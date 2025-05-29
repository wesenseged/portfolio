import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Products from "@/components/products";
import Stack from "@/components/stack";
import Contact from "@/components/contact";

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

      <Hero isDark={isDark} />
      <Projects />
      <Products />
      <Stack />
      <Contact />
    </main>
  );
}

export default App;
