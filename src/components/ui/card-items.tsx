import { Dot } from "lucide-react";
import clsx from "clsx";

const CardItem = ({ title, subTitle, desc }: { title: string; subTitle: string; desc: string }) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Dot />
        <h3 className="text-sm md:text-lg text-muted-foreground">{subTitle}</h3>
      </div>

      <h1 className="text-lg md:text-3xl font-bold ">{title}</h1>
      <p
        className={clsx(
          "text-sm md:text-lg text-muted-foreground",
          subTitle === "Full-Stack-Developer" && "w-9/12",
        )}
      >
        {desc}
      </p>
    </>
  );
};

export default CardItem;
