import type { ReactNode } from "react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ReactNode;
}

export const localization: BlogPost = {
  slug: "kde-l10n-am",
  title: "Kde-l10n-am Amharic translators",
  date: "08-3-2026",
  excerpt:
    "Writing code is more enjoyable than localization at least for me. Still I do localization because if I don't, there's a good chance no one else will...",
  content: (
    <div className="font-anek text-lg space-y-6">
      <p>
        Writing code is more enjoyable than localization at least for me. Still I do localization
        because if I don't, there's a good chance no one else will. There's a quote that says,
        &quot;If I don't do it, someone else will.&quot; I don't agree; that is a poor mindset. We
        shouldn't wait for someone to show up. Just start. Special thanks to
        <b className="text-[#7e54ff] font-normal mx-1">Albert Astals</b>
        for guiding me through all the steps from setting up the enviroment to starting the
        localization process.
      </p>
      <p>
        Currently I'm the only one localizing Kde plasma into Amharic. I hope more people join and
        contribute in the future and i know this takes a lot of time and effort especially while
        learning a new language & developing software but i force myself to work on this project in
        my free time at least once a week.
      </p>
      <p>
        Anyone who is interested can join this
        <a
          href="https://mail.kde.org/cgi-bin/mailman/listinfo/kde-l10n-am"
          target="_blank"
          rel="noopener"
          className="text-[#7e54ff] underline mx-1 font-anek"
        >
          mailing list
        </a>
        and help this project reach its goal. Join now and introduce yourself everyone is welcome.
      </p>
    </div>
  ),
};
