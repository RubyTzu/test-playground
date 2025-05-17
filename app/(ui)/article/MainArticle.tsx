import { Article } from "@/app/(data)/types";
import Image from "next/image";
import Link from "next/link";

export const MainArticle = ({ articleData }: { articleData: Article }) => {
  const datetimeStr = articleData.date;
  const date = new Date(datetimeStr);
  const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className="grid grid-cols-1 gap-4 w-full border-transparent border-2 border-b-neutrals-100 py-10 first:pt-0 md:grid-cols-6 md:gap-20">
      <Link target="_blank" href={articleData.cta} className="h-48 w-full bg-primary-200 border object-cover cursor-pointer md:col-span-2">
        <Image src={articleData.img} width={1920} height={1080} className="h-48 w-full bg-primary-200 border object-cover md:col-span-2" alt={`Article Image ${articleData.title}`}></Image>
      </Link>
      <div className="flex flex-col justify-center gap-3 md:col-span-3">
        <div className="text-2xl font-medium leading-loose">{articleData.title}</div>
        <div className="">{articleData.description}</div>
        <div className="text-sm font-light leading-8">{formattedDate}</div>
      </div>
      <div className="flex w-full justify-end md:flex-col md:col-span-1">
        <Link target="_blank" href={articleData.cta} className="border-l-primary-400 border-0 border-l-2 text-center pl-2 w-16">
          Read
        </Link>
      </div>
    </div>
  );
};
