import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./(ui)/shareComponent/Navbar";
import { Footer } from "./(ui)/shareComponent/Footer";
import { BackToTopButton } from "./(ui)/shareComponent/BackToTopBtn";
import { MainContainer } from "./(ui)/shareComponent/MainContainer";
import { Providers } from "./(data)/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ruby Yi Tzu Chen",
  description: "An explorer passionate about learning new skills.",
  metadataBase: new URL("https://rrubyitzuchen.vercel.app"),
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
    url: "https://rrubyitzuchen.vercel.app",
    siteName: "Ruby Yi Tzu Chen",
    images: [
      {
        url: "/images/openGraph/1200x630.png",
        width: 1200,
        height: 630,
        alt: "A descriptive alt text for the image",
      },
      {
        url: "/images/openGraph/600x315.png",
        width: 600,
        height: 315,
        alt: "A descriptive alt text for the image",
      },
      {
        url: "/images/openGraph/200x200.png",
        width: 200,
        height: 200,
        alt: "A descriptive alt text for the image",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Ruby Yi Tzu Chen" />
        <meta property="og:description" content="An explorer passionate about learning new skills." />
        <meta property="og:url" content="https://rrubyitzuchen.vercel.app" />
        <meta property="og:site_name" content="Ruby Yi Tzu Chen" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:image:url" content="/images/openGraph/1200_630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="My custom alt" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutrals-0 text-neutrals-300 selection:text-primary-500 selection:bg-primary-200`}>
        <Providers>
          <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <MainContainer>{children}</MainContainer>
            <Footer />
            <BackToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
