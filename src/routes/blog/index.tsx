import { createFileRoute, Link } from "@tanstack/react-router";
import { blogs } from "@/lib/blog-data";

import { Dot } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

type BlogType = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const Blog = ({ slug, title, date, excerpt }: BlogType) => {
  return (
    <div className="flex w-full flex-col space-y-2">
      <div className="h-px w-full bg-zinc-700" />
      <div className="flex items-center space-x-2">
        <Dot />
        <Link to="/blog/$slug" params={{ slug }}>
          <h1 className="text-lg font-medium hover:underline">{title}</h1>
        </Link>
      </div>
      <p className="text-zinc-500 text-sm ml-8">{date}</p>
      <div className="text-zinc-500 ml-8">{excerpt}</div>
    </div>
  );
};

function RouteComponent() {
  return (
    <main className="bg-background text-foreground w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
      <section className="flex flex-col mt-32 space-y-8">
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog.slug}
              slug={blog.slug}
              title={blog.title}
              date={blog.date}
              excerpt={blog.excerpt}
            />
          );
        })}
      </section>
    </main>
  );
}
