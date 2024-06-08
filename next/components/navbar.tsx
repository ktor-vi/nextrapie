import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav
      className="flex flex-row justify-between place-items-center min-w-screen py-0 px-4 bg-zinc-900 opacity-80 "
      style={{
        height: "10vh",
      }}
    >
      <Link href="/">
        <div className="text-teal-700 text-3xl sm:text-4xl md:text-5xl  lg:text-7xl text-center font-bold">
          <h1 className="">{process.env.NEXT_PUBLIC_PROJECT_NAME}</h1>
        </div>
      </Link>
      {/* <Link href="/resume" className={buttonVariants({ variant: "outline" })}>Resume</Link> */}
      <div className="space-x-2">
        <Link href="/projects" className={buttonVariants({ variant: "outline" })}>Projects</Link>
        <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact</Link>
      </div>
    </nav>
  );
}
