"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Intro, About, ProjectDetails, Article } from "@/app/(data)/types";

interface AllContextType {
  introData: Intro;
  aboutData: About;
  projectData: ProjectDetails[];
  articleData: Article[];
}

const AllContext = createContext<AllContextType | undefined>(undefined);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<AllContextType>({
    introData: {} as Intro,
    aboutData: {} as About,
    projectData: [] as ProjectDetails[],
    articleData: [] as Article[],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const json = await response.json();
      setData({
        introData: json.intro,
        aboutData: json.about,
        projectData: json.project,
        articleData: json.article,
      });
    };

    fetchData();
  }, []);

  return <AllContext.Provider value={data}>{children}</AllContext.Provider>;
};

const useContextData = <T extends keyof AllContextType>(key: T) => {
  const context = useContext(AllContext);
  if (!context) {
    throw new Error("useContextData must be used within a Provider");
  }
  return context[key];
};

export const useIntroContext = () => useContextData("introData");
export const useAboutContext = () => useContextData("aboutData");
export const useProjectContext = () => useContextData("projectData");
export const useArticlesContext = () => useContextData("articleData");