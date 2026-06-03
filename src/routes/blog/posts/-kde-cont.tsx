import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ReactNode;
};


export const kdeCont: BlogPost = {
  slug: "kde-cont",
  title: "My first kde contribution",
  date: "06-3-2026",
  excerpt:
  "I started using Linux around seven years ago. My first desktop environment was Xfce; extremely lightweight and easy to use. After that i... ",
  content: (
    <div className="space-y-6">
    <p>I started using Linux around seven years ago. My first desktop environment was Xfce; extremely lightweight and easy to use. After that i tried gnome, i3, awesome, and eventually I found KDE Plasma. So far, it has been the desktop environment I enjoy the most; clean ,customizable, and very professional, with some room for improvement.</p>
    <p>One thing I quickly noticed was the lack of localized tools for Ethiopians. Applications like calendar, Amharic bible, Amharic keyboard were either missing or difficult to find. <b>Wait why a calendar app </b>🤷‍♂️ it's because Ethiopia uses its own calendar system, which is approximately eight years behind the Gregorian calendar and has thirteen months. So I started building those apps; they are not yet in the KDE ecosystem, but they can be found in Flatpak.</p>
    <p>My first KDE contribution was on a project called plasma-keyboard, a virtual Keyboard for Qt-based desktops. Plasma keyboard uses Qt's layouts for different languages, but Amharic was not there, so I submitted a merge request to add an Amharic keyboard layout with pre-edit based Ge'ez fidel composition. The merge request <a href="https://invent.kde.org/plasma/plasma-keyboard/-/merge_requests/118" target="_blank" className="text-blue-500 dark:text-blue-300">plasma-keyboard MR #118</a> has been accepted and is planned for inclusion in Plasma 6.8.</p>
      <video  controls className="mb-10">
        <source src="https://invent.kde.org/-/project/18430/uploads/923211774445787697fec18ba222a481/plasma_keyboard.mp4" type=""/>
      </video>
    </div>
  ),
};
