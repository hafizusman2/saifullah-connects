import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="flex items-center gap-8 text-sm font-medium text-navy">
          <Link href="/#how-it-works" className="transition-colors hover:text-teal">
            How it works
          </Link>
          <Link href="/contact" className="transition-colors hover:text-teal">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
