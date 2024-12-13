"use client";

import { articleDatas } from "@/app/(data)/dummyData";
import { Article } from "@/app/(data)/types";
import { MainArticle } from "@/app/(ui)/article/MainArticle";
import { SubArticle } from "@/app/(ui)/article/SubArticle";

export default function Page() {

const mainArticleDatas = articleDatas.filter((article)=> article.isMain === true);
const subArticleDatas = articleDatas.filter((article)=> article.isMain !== true);

  return (
    <>
      <div className="flex flex-col justify-start items-start w-full mb-32">
        {mainArticleDatas.map((articleData: Article) => {
          return <MainArticle key={articleData.id} articleData={articleData} />;
        })}
      </div>
      <div className="flex flex-col justify-start items-start w-full mb-64">
        {subArticleDatas.map((articleData: Article) => {
          return <SubArticle key={articleData.id} articleData={articleData} />;
        })}
      </div>
    </>
  );
}
