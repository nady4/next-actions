import { ModeToggle } from "@/components/theme-toggle-button";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className="text-3xl">next-actions</h1>
      <div className="flex gap-x-2 items-center">
        <Link href="/"> Home </Link>
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          {" "}
          Create Task{" "}
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
