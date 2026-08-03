import type { ReactNode } from "react";
import bookCover from "@/assets/books/limitless.jpg";

interface BookPost {
  slug: string;
  title: string;
  img: string;
  date: string;
  rating: string;
  content: ReactNode;
}

export const limitless: BookPost = {
  slug: "limitless",
  title: "Limitless",
  img: bookCover,
  date: "02-8-26",
  rating: "5/5",
  content: (
    <section className="font-anek space-y-4 text-lg">
      <img
        src={bookCover}
        alt="Book cover"
        className="float-right mb-4 w-40 h-40 md:w-64 md:h-64 object-contain"
      />
      <p>
        Another book in self-development catagory written by Jim Kwik. The book is about limitless
        how we can achive it and the core concepts of limiless.
        <ol className="ml-10 list-disc">
          <li>Mindset</li>
          <li>Motivation</li>
          <li>Methods</li>
        </ol>
        <ol className="mt-5 text-xl list-decimal">
          <li>Mindset + Motivation = Inspiration</li>
          <li>Mindset + Methods = Ideation</li>
          <li>Motivation + Methods = Implimentation</li>
        </ol>
      </p>
      <p>
        This book offers a unique blend of effective habits, valuable nutritional insights,
        fascinating neuroscience and the concept of achieving a flow state.
      </p>

      <p>
        I recommond for anyone that wants to find ways to efficiently master skills like reading and
        focus.
      </p>
    </section>
  ),
};
