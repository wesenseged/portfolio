import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/components/ui/theme-context";
import { Moon, Sun } from "lucide-react";

export type RouterContext = {
  isDark: boolean;
};

const RootLayout = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="fixed top-4 right-2 items-center space-x-6 justify-center flex">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/blog" className="[&.active]:font-bold">
          Blog
        </Link>
        <Button variant="ghost" onClick={() => setIsDark(!isDark)}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
      <Outlet />
    </ThemeContext.Provider>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});
