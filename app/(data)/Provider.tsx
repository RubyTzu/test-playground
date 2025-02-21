// "use client";
// import { createContext, useContext, useEffect, useState } from "react";
// import { getIntroData } from "@/app/(data)/API";
// import { Intro } from "@/app/(data)/types";

// interface AllContextType {
//   introData: Intro;
// }

// const AllContext = createContext<AllContextType | undefined>(undefined);

// export const Providers = ({ children }: { children: React.ReactNode }) => {
//   const [introData, setIntroData] = useState({} as Intro);

//   useEffect(() => {
//     fetchIntro();
//   }, []);

//   const fetchIntro = async () => {
//     try {
//       const intro = await getIntroData();

//       setIntroData(intro);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return <AllContext.Provider value={{ introData }}>{children}</AllContext.Provider>;
// };

// export const useAllContext = () => {
//   const context = useContext(AllContext);
//   if (!context) {
//     throw new Error("useUser must be used within a Provider");
//   }

//   return context;
// };