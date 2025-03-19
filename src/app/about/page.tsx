import Link from "next/link";

export default async function About() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          About page
        </h1>
        <p className="text-lg mb-8">
          About page
        </p>
        <div className="flex justify-center">
          <Link
            href={`/`}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
