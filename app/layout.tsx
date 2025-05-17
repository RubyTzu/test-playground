import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./(ui)/shareComponent/Navbar";
import { Footer } from "./(ui)/shareComponent/Footer";
import { BackToTopButton } from "./(ui)/shareComponent/BackToTopBtn";
import { MainContainer } from "./(ui)/shareComponent/MainContainer";
import { Providers } from "./(data)/Provider";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
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
          alt: "A descriptive alt text for the image",
        },
      ],
      locale: "zh_TW",
      type: "website",
    },
  };
}

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutrals-0 text-neutrals-300 selection:text-primary-500 selection:bg-primary-200 2xl:text-lg`}>
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
