import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { promises as fs } from "fs";
import { Navbar } from "./(ui)/shareComponent/Navbar";
import { Footer } from "./(ui)/shareComponent/Footer";
import { BackToTopButton } from "./(ui)/shareComponent/BackToTopBtn";
import { MainContainer } from "./(ui)/shareComponent/MainContainer";

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
  title: "test playground",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const file = await fs.readFile(process.cwd() + "/app/(data)/data.json", "utf8");
  const data = JSON.parse(file);
  const socialMedia = data ? data.intro.socialMedia: "";
  const routes =  data ? data.intro.pageRoute: "";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen font-[family-name:var(--font-geist-sans)]">
          <Navbar socialMedia={socialMedia} routes={routes} />
          <MainContainer>{children}</MainContainer>
          <Footer />
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}
