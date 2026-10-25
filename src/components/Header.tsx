import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Logo />
        <nav className="flex items-center gap-4 text-sm font-medium text-ink sm:gap-8">
          <Link href="/#how-it-works" className="whitespace-nowrap transition-colors hover:text-teal">
            How it works
          </Link>
          <Link href="/contact" className="whitespace-nowrap transition-colors hover:text-teal">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
