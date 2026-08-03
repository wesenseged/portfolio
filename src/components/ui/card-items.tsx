import clsx from "clsx";
import { Dot } from "lucide-react";

const CardItem = ({ title, subTitle, desc }: { title: string; subTitle: string; desc: string }) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Dot />
        <h3 className="text-sm md:text-lg text-foreground font-grotesk">{subTitle}</h3>
      </div>

      <h1 className="text-lg text-foreground md:text-3xl font-bold font-grotesk">{title}</h1>
      <p
        className={clsx(
          "text-sm md:text-xl text-muted-foreground font-anek",
          subTitle === "Software-Developer" && "w-11/12",
        )}
      >
        {desc}
      </p>
    </>
  );
};

export default CardItem;
