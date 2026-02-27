import { createFileRoute, notFound } from "@tanstack/react-router";
import { blogs } from "@/lib/blog-data";

import Article from "@/components/ui/article";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) throw notFound();

  return <Article title={blog.title} date={blog.date} content={blog.content} />;
}
