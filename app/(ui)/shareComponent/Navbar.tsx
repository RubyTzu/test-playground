import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-fit flex gap-5 h-fit">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/project">project</Link>
        <Link href="/article">article</Link>
      </div>
      <div className="flex gap-5">
        <div className="rounded-full w-8 h-8 bg-slate-100"/>
        <div className="rounded-full w-8 h-8 bg-slate-200"/>
        <div className="rounded-full w-8 h-8 bg-slate-300"/>
        <div className="rounded-full w-8 h-8 bg-slate-400"/>
      </div>
    </div>
  );
}
