import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ReactNode;
};

const poem = `
So many have died guarding your [her] honor
Against those who have crossed seas to dishonor you
You are land of heroes where Adam left his footprints on
The fountainhead of Ghion river, your name is called out
Let alone watching your waving flag
Even those who hear the name Ethiopia won't keep quiet
Let alone watching your flag waving in the sky
Even those who hear the name Ethiopia won't dare to keep quiet
`;

export const teddyAfro: BlogPost = {
  slug: "teddy-afro",
  title: "8/8/2018",
  date: "04-16-2026",
  excerpt:
    "Today is 8/8/2018 in Ethiopian calendar, a historic day for music lovers. After eight long years, the king of Ethiopian music, Teddy Afro, is ...",
  content: (
    <div className="space-y-6">
      <p>
        Today is 8/8/2018 in the Ethiopian calendar, a historic day for music lovers. After eight
        long years, the king of Ethiopian music, Teddy Afro, is releasing a new album.
      </p>
      <p>
        Teddy Afro, without a doubt, one of the greatest artists of our time. Personally, I consider
        him the greatest of all time, and many would agree.
      </p>
      <p>
        Through his music, he explores every emotion: love, sorrow, joy, peace, beauty, and even
        death. Without dividing people by race or ethnicity, he stands for humanity as a whole, a
        true lion of our generation. From the depth of his lyrics to the richness of his melodies
        and his natural charisma, Teddy Afro is a powerful representation of Ethiopia.
      </p>
      <p>
        He is not only an inspiration to many, but also a true role model. In a world where people
        often sell their souls for quick gain, he chose to put music first. Even though I am still
        on my journey, I hope to follow his path and contribute something meaningful to my country
        through my own work.
      </p>
      <div className="whitespace-pre-line text-center leading-relaxed italic">{poem}</div>
      <p className="text-center">Excerpt from Ethiopia by Teddy Afro</p>
    </div>
  ),
};
