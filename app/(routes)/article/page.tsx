"use client";
import { useRef, useEffect } from "react";
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";
import { motion, useScroll, useTransform } from "motion/react";

export default function Page() {
  // const items = useRef<(HTMLLIElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const xPosition = useTransform(scrollYProgress, [0, 1], [0, 1600]);
  useEffect(() => {
    // 進行滾動條動畫
    const interval = setInterval(() => {
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrollYProgress.get()})`;
      }
    }, 10);

    return () => clearInterval(interval);
  }, [scrollYProgress]);

  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-4 row-start-2  justify-center items-center">
        {/* test start */}

        <div className="App bg-black text-white min-h-screen flex flex-col">
          <header className="flex justify-between items-center p-4">
            <h1 className="text-white text-sm flex items-center space-x-2">
              <a href="https://motion.dev" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 1260 454" className="w-10 h-4">
                  <path d="M475.753 0L226.8 453.6L0 453.6L194.392 99.4116C224.526 44.5081 299.724 0 362.353 0L475.753 0Z" stroke="none" />
                  <path d="M1031.93 113.4C1031.93 50.7709 1082.7 0 1145.33 0C1207.96 0 1258.73 50.7709 1258.73 113.4C1258.73 176.029 1207.96 226.8 1145.33 226.8C1082.7 226.8 1031.93 176.029 1031.93 113.4Z" stroke="none" />
                  <path d="M518.278 0L745.078 0L496.125 453.6L269.325 453.6L518.278 0Z" stroke="none" />
                  <path d="M786.147 0L1012.95 0L818.555 354.188C788.422 409.092 713.223 453.6 650.594 453.6L537.194 453.6L786.147 0Z" stroke="none" />
                </svg>
                <pre>Fade in/out of viewport</pre>
              </a>
            </h1>
            <button id="refresh" className="p-2" onClick={() => window.location.reload()}>
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="-1.4 -0.6 18 18" className="transition-transform transform hover:rotate-360">
                <path d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2.4886-3.1-4.5308-3.1C4.8665 3.7 2.7 5.85 2.7 8.5s2.1665 4.8 4.8422 4.8c1.3035 0 2.523-.512 3.426-1.4079a.7.7 0 0 1 .986.9938C10.7915 14.0396 9.2186 14.7 7.5422 14.7 4.0957 14.7 1.3 11.9257 1.3 8.5s2.7957-6.2 6.2422-6.2c2.1801 0 4.137 1.1192 5.2578 2.8541z" fill="var(--accent)" fillRule="nonzero" />
              </svg>
            </button>
          </header>

          <main>
            <article>
              <header>
                <h2 className="text-4xl text-white">Lines of London</h2>
              </header>
              <section ref={sectionRef} className="relative h-[500vh]">
                <motion.div
                  style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: "blue",
                    position: "absolute",
                    top: "100px",
                    x: xPosition, // Set the dynamic Y position based on scroll
                  }}>
                  Scroll Me
                </motion.div>
                <ul className="flex sticky top-0">
                  <motion.li initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-100" />
                    <h3 className="text-5xl text-red-500">#1</h3>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-200" />
                    <h3 className="text-5xl text-red-500">#2</h3>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-300" />
                    <h3 className="text-5xl text-red-500">#3</h3>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-400" />
                    <h3 className="text-5xl text-red-500">#4</h3>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 5 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-500" />
                    <h3 className="text-5xl text-red-500">#5</h3>
                  </motion.li>
                  {/* {Array.from({ length: 5 }, (_, i) => (
                    <motion.li key={i} ref={(el) => (items.current[i] = el) } initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                      <div className={`w-[300px] h-[400px] bg-slate-${}00`} />
                      <h3 className="text-5xl text-red-500">#{i + 1}</h3>
                    </motion.li>
                  ))} */}
                </ul>
              </section>
              <footer className="bg-black text-center py-4">
                <p className="text-white">
                  Photos by{" "}
                  <a target="_blank" href="https://twitter.com/mattgperry" className="text-yellow-400" rel="noopener noreferrer">
                    Matt Perry
                  </a>
                </p>
              </footer>
            </article>
            <div className="fixed left-0 right-0 h-1 bg-accent transform scale-x-0" ref={progressRef}></div>
          </main>
        </div>
        {/* test end */}
      </main>
      <Footer />
    </div>
  );
}
