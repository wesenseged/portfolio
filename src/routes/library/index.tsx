import { createFileRoute, Link } from "@tanstack/react-router";
import { libraries } from "@/lib/library-data";

export const Route = createFileRoute("/library/")({
  component: RouteComponent,
});

interface LibType {
  slug: string;
  img: string;
}

const Lib = ({ slug, img }: LibType) => (
  <Link to="/library/$slug" params={{ slug }}>
    <img src={img} alt="Book cover" />
  </Link>
);

function RouteComponent() {
  return (
    <main className="bg-background text-foreground w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
      <section className="flex flex-col mt-32 space-y-6">
        <h1 className="text-4xl font-grotesk font-semibold">From the Library</h1>
        <p className="font-grotesk text-lg text-muted-foreground">
          A collection of <b className="text-foreground">books</b> I've read and enjoyed.
        </p>
        <div className="h-px w-full  bg-zinc-700" />
        <div className="grid grid-cols-4 gap-6 w-full md:w-8/12 mt-10">
          {libraries.map((lib) => (
            <Lib key={lib.slug} slug={lib.slug} img={lib.img} />
          ))}
        </div>
      </section>
    </main>
  );
}
