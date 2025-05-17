import { IntroImg } from "@/app/(ui)/home/IntroImg";
import { IntroText } from "@/app/(ui)/home/IntroText";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

  return {
    title: "Ruby Yi Tzu Chen",
    description: "An explorer passionate about learning new skills.",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "zh-TW": "/zh-TW",
      },
    },
    openGraph: {
      title: "Ruby Yi Tzu Chen",
      description: "An explorer passionate about learning new skills.",
      url: siteUrl,
      siteName: "Ruby Yi Tzu Chen",
      images: [
        {
          url: `${siteUrl}/images/openGraph/1200x630.png`,
          width: 1200,
          height: 630,
          alt: "Large preview",
        },
      ],
      locale: "zh_TW",
      type: "website",
    },
  };
}

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