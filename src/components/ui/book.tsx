import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Book = (prop: {
  title: string;
  date: string;
  rating: string;
  content: React.ReactNode;
}) => (
  <main className="bg-background text-foreground w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
    <section className="mt-32 space-y-10">
      <div className="flex items-center space-x-2">
        <ArrowLeft size={14} />
        <Link to="/library">
          <h1 className="text-lg font-anek font-medium hover:underline">Back to library</h1>
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-4xl font-grotesk">{prop.title}</h1>
        <div className="flex font-grotesk items-center space-x-5">
          <p>{prop.date}</p>
          <p>{prop.rating}</p>
        </div>
        <div className="font-sans mt-5">{prop.content}</div>
      </div>
    </section>
  </main>
);
