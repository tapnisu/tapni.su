import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

export function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between items-center p-4">
      <a className={buttonVariants({ variant: "link" })} href="/">
        tapnisu
      </a>
      <ModeToggle />
    </nav>
  );
}
