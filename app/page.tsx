import { promises as fs } from "fs";
import { IntroImg } from "@/app/(ui)/home/IntroImg";
import { IntroText } from "@/app/(ui)/home/IntroText";


export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/(data)/data.json", "utf8");
  const data = JSON.parse(file);

  const introImg = data ? data.intro.img : "";
  const name = data ? data.intro.name : "";
  const intro = data ? data.intro.intro : "";
  const resumeUrl = data ? data.intro.resumeUrl : "";

  return (
    <>
      <div className="mt-16 mb-80 flex flex-col gap-8 items-center xl:mt-36">
        <IntroImg img={introImg} />
        <IntroText name={name} intro={intro} resumeUrl={resumeUrl} />
      </div>
    </>
  );
}