import { createFileRoute, Link } from "@tanstack/react-router";
import { Dot } from "lucide-react";
import { blogs } from "@/lib/blog-data";

interface BlogType {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const Blog = ({ slug, title, date, excerpt }: BlogType) => (
  <div className="flex w-full flex-col space-y-2 font-grotesk">
    <p className="text-muted-foreground text-sm ml-8">{date}</p>
    <div className="flex items-center space-x-2">
      <Dot />
      <Link to="/blog/$slug" params={{ slug }}>
        <h1 className=" text-xl font-medium hover:underline">{title}</h1>
      </Link>
    </div>
    <div className="text-muted-foreground text-lg ml-8 font-anek w-2/3">{excerpt}</div>
  </div>
);

function RouteComponent() {
  return (
    <main className="bg-background text-foreground w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
      <section className="flex flex-col mt-32 space-y-6">
        <h1 className="text-4xl font-grotesk font-semibold">From the blog</h1>
        <p className="font-grotesk text-lg text-muted-foreground">
          Nothing <b className="text-foreground">deep,</b> just some thoughts.
        </p>
        <div className="h-px w-full bg-zinc-700" />
        {blogs.map((blog) => (
          <Blog
            key={blog.slug}
            slug={blog.slug}
            title={blog.title}
            date={blog.date}
            excerpt={blog.excerpt}
          />
        ))}
      </section>
    </main>
  );
}

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});
