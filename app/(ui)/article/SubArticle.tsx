import { Article } from "@/app/(data)/types";
import Link from "next/link";

export const SubArticle = ({ articleData }: { articleData: Article }) => {
  const datetimeStr = articleData.date;
  const date = new Date(datetimeStr);
  const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <Link target="_blank" href={articleData.cta} className="grid grid-cols-1 gap-4 w-full border-transparent border-2 border-b-neutrals-100 py-10 md:grid-cols-6 md:gap-10">
      <div className="col-span-2 text-xl font-medium flex items-center">{articleData.title}</div>
      <div className="col-span-3 flex items-center">{articleData.description}</div>
      <div className="col-span-1 text-sm font-light flex items-center">{formattedDate}</div>
    </Link>
  );
};