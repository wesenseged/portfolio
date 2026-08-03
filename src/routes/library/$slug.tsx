import { createFileRoute, notFound } from "@tanstack/react-router";
import { Book } from "@/components/ui/book";
import { libraries } from "@/lib/library-data";

function LibPost() {
  const { slug } = Route.useParams();
  const lib = libraries.find((library) => library.slug === slug);

  if (!lib) {
    throw notFound();
  }

  return <Book title={lib.title} content={lib.content} date={lib.date} rating={lib.rating} />;
}

const NotFoundPage = () => {
  return (
    <div className="flex bg-background min-h-[60vh] flex-col items-center justify-center">
      <h1 className="font-grotesk text-8xl font-bold">404</h1>
      <p className="mt-4 font-anek text-gray-500">This page could not be found.</p>
    </div>
  );
};

export const Route = createFileRoute("/library/$slug")({
  component: LibPost,
  notFoundComponent: NotFoundPage,
});
