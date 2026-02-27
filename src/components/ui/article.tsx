import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const Article = (prop: { title: string; date: string; content: React.ReactNode }) => {
  return (
    <main className="bg-background text-foreground w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
      <section className="mt-32 space-y-10">
        <div className="flex items-center space-x-2">
          <ArrowLeft size={14} />
          <Link to="/blog">
            <h1 className="text-lg font-medium hover:underline">Back to blog</h1>
          </Link>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl">{prop.title}</h1>
          <p>{prop.date}</p>
          <div>{prop.content}</div>
        </div>
      </section>
    </main>
  );
};

export default Article;
