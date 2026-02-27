import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ReactNode;
};

const poem = `
Once, a wild dog moved into a man's house and made it his home.
This nameless dog, only understands gestures.
He growls when he wants something.
Finally he bit, wounding his master's leg.
enraged by his brazen act,
the master threw him out of his home.
With his tail coiled up and desperately posturing,
he merched back leading a pack of his fellow wild dogs.
The summit of wild dogs sent a message to the master,
demanding that he vacate from his own village.
The man slit one of them with his sword,
The summit of wild dogs scattered.
From their scatterd hair and droplets of their blood
rabies was spread into our country.
`;

export const blackLion: BlogPost = {
  slug: "black-lion",
  title: "Black Lions, Roman Wolves",
  date: "02-27-2026",
  excerpt:
    "Black Lions, Roman Wolves is a five-part documentary about Ethiopia’s decisive anti-colonial victory against Italy’s second invasion in 1935...",
  content: (
    <div className="space-y-6">
      <p>
        Black Lions, Roman Wolves is a five-part documentary about Ethiopia’s decisive anti-colonial
        victory against Italy’s second invasion in 1935, a punitive expedition designed to revenge
        her defeat at the Battle of Adwa in 1896.
      </p>
      <p>
        Black Lions, Roman Wolves links these two invasions through collective memory and
        generational stories, threading themes of resistance, survival, and hope imparted through
        warnings about the imminent return of Italians by warriors of the Battle of Adwa to their
        children.
      </p>
      <div className="whitespace-pre-line text-center leading-relaxed italic">{poem}</div>
      <p className="text-center">Excerpt from Black Lions, Roman Wolves by Haile Gerima</p>
    </div>
  ),
};
