import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center">
          <SiNextdotjs className="w-[180px] h-[38px] dark:text-white" />
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-center max-w-lg">Description</p>
        </div>

        <div className="flex gap-4 mt-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href={`/about`}
          >
            About
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={`/contact`}
        >
          <FaGlobe className="w-4 h-4" />
          Contact
        </Link>
      </footer>
    </div>
  );
}
