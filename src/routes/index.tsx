import { createFileRoute } from "@tanstack/react-router";

import Hero from "@/components/hero";
import Latest from "@/components/latest";
import Projects from "@/components/projects";
import Products from "@/components/products";
import Stack from "@/components/stack";
import Contact from "@/components/contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
      <Hero />
      <Latest />
      <Projects />
      <Products />
      <Stack />
      <Contact />
    </main>
  );
}
