import { Navbar } from "./(ui)/shareComponent/Navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8 items-center">
          <div className="rounded-full w-48 h-48 bg-[#e590ab]"></div>
          <div className="flex flex-col gap-2">
            <div className="text-center">Ruby Chen</div>
            <div className="text-center">This is a place to let me practice web skill.</div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">footer</footer>
    </div>
  );
}