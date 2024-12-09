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
    <div className="grid gap-20 grid-cols-6 w-full border-transparent border-2 border-b-slate-100 py-10">
      <Image src={articleData.img} width={1920} height={1080} onClick={handleClick} className="col-span-2 h-36 w-full bg-red-200 border object-cover cursor-pointer" alt={`Article Image ${articleData.title}`}></Image>
      <div className="col-span-3 flex flex-col justify-center">
        <div className="text-2xl font-medium leading-loose">{articleData.title}</div>
        <div className="">{articleData.description}</div>
        <div className="text-sm font-light leading-8">{formattedDate}</div>
      </div>
      <div className="col-span-1 flex flex-col w-16 justify-end">
        <Link href="/" className="border-l-red-300 border-0 border-l-2 text-center pl-2">
          Read
        </Link>
      </div>
    </div>
  );
};
