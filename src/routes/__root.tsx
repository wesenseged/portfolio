import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/components/ui/theme-context";

const RootLayout = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="font-anek items-center space-x-6 justify-center flex flex-row ">
        <Link to="/" className="text-lg [&.active]:font-bold z-30">
          Home
        </Link>
        <Link to="/blog" className="text-lg [&.active]:font-bold">
          Blog
        </Link>
        <Link to="/library" className="text-lg [&.active]:font-bold">
          Library
        </Link>
        <Button variant="ghost" onClick={() => setIsDark(!isDark)}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
      <Outlet />
    </ThemeContext.Provider>
  );
};

const NotFoundPage = () => {
  return (
    <div className="flex bg-background min-h-[60vh] flex-col items-center justify-center">
      <h1 className="font-grotesk text-8xl font-bold">404</h1>
      <p className="mt-4 font-anek text-gray-500">This page could not be found.</p>
    </div>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
