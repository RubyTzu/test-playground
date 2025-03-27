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
  description: "I am an explorer passionate about learning new skills, with a diverse background in design, development, and website operations, all while emphasizing communication, collaboration, and organization",
  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
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
