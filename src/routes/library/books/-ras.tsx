import type { ReactNode } from "react";
import bookCover from "@/assets/books/ras.jpg";

interface BookPost {
  slug: string;
  title: string;
  img: string;
  date: string;
  rating: string;
  content: ReactNode;
}

export const ras: BookPost = {
  slug: "ras",
  title: "Ras - ራስ",
  date: "07-20-26",
  rating: "5/5",
  img: bookCover,
  content: (
    <section className="font-anek space-y-4 text-lg">
      <img
        src={bookCover}
        alt="Book cover"
        className="float-right mb-4 w-40 h-40 md:w-64 md:h-64 object-contain"
      />
      <b>Ras Meanings</b>
      <ol className="list-decimal ml-10 my-6">
        <li>head</li>
        <li>top, summit</li>
        <li>
          leader or king <br />
        </li>
        <li>When possessed, used to form reflexive pronouns; -self, -selves</li>
      </ol>
      <p>
        The book talks about a kid whose name is Ras. He is the worst student in the school. In fact
        he always finishes last&mdash;except for one person his best friend. But that doesn't stop
        him from trying to creating his own world at such a young age. Will he succeed? The book
        answers all the questions while teaching you to be yourself, follow your heart and follow
        your own path.
      </p>
      <p>
        This book is something you can't stop reading once you start. The story is amazing and
        inspiring. you will learn so much from his journey.
      </p>
    </section>
  ),
};
