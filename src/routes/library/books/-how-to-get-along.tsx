import type { ReactNode } from "react";
import bookCover from "@/assets/books/how_to.jpg";

interface BookPost {
  slug: string;
  title: string;
  img: string;
  date: string;
  rating: string;
  content: ReactNode;
}

export const howToGetAlong: BookPost = {
  slug: "how-to-get-along",
  title: "HOW TO GET ALONG WITH ALMOST ANYONE",
  img: bookCover,
  date: "05-3-26",
  rating: "5/5",
  content: (
    <section className="font-anek space-y-4 text-lg">
      <img
        src={bookCover}
        alt="Book cover"
        className="float-right mb-4 w-40 h-40 md:w-64 md:h-64 object-contain"
      />
      <p>
        This is a self-development educational type of book also the author is a Christian believer
        so you get some biblical quotes and teaching here and there. The book has ten chapters with
        many practical exercises that can help you acquire new friendships but most importantly you
        will learn so many concepts on how to get along with family members, friends, co-workers,
        neighbors, partner and other relatives, like almost anyone .
      </p>
      <b>The book discusses:</b>
      <ol className="list-disc ml-10 my-6">
        <li>How to be flexible in relating to others without denying your own personality</li>
        <li>Learning to respond to criticism constructively</li>
        <li>Becoming an endangered species-a listener</li>
        <li>Dealing positively with negative people</li>
        <li>Relating to relatives</li>
      </ol>

      <p>
        This book is filled with case histories, dialogue, self-inventories and practical
        suggestions for building loving and lasting relationships. I highly recommend that everyone
        read this book.
      </p>
    </section>
  ),
};
