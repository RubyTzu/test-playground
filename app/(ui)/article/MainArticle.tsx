import { Article } from "@/app/(data)/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const MainArticle = ({ articleData }: { articleData: Article }) => {
  const datetimeStr = articleData.date;
  const date = new Date(datetimeStr);
  const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const route = useRouter();
  const handleClick = () => {
    route.push("/");
  };

  return (
    <div className="grid grid-cols-1 gap-4 w-full border-transparent border-2 border-b-slate-100 py-10 first:pt-0 md:grid-cols-6 md:gap-20">
      <Image src={articleData.img} width={1920} height={1080} onClick={handleClick} className="h-36 w-full bg-red-200 border object-cover cursor-pointer md:col-span-2" alt={`Article Image ${articleData.title}`}></Image>
      <div className="flex flex-col justify-center gap-3 md:col-span-3">
        <div className="text-2xl font-medium leading-loose">{articleData.title}</div>
        <div className="">{articleData.description}</div>
        <div className="text-sm font-light leading-8">{formattedDate}</div>
      </div>
      <div className="flex w-full justify-end md:flex-col md:col-span-1">
        <Link href="/" className="border-l-red-300 border-0 border-l-2 text-center pl-2 w-16">
          Read
        </Link>
      </div>
    </div>
  );
};
