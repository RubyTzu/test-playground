import { Navbar } from "@/app/(ui)/shareComponent/Navbar";

export default function page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">about</main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">footer</footer>
    </div>
  );
}