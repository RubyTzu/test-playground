import { IntroImg } from "@/app/(ui)/home/IntroImg";
import { IntroText } from "@/app/(ui)/home/IntroText";

export default async function Home() {

  return (
    <>
      <div className="mt-16 mb-80 flex flex-col gap-8 items-center md:mt-12 lg:36">
        <IntroImg />
        <IntroText />
      </div>
    </>
  );
}