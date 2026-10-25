import Link from "next/link";
import Logo from "./Logo";

export default function Footer({ variant = "home" }: { variant?: "home" | "contact" }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Logo />
        <nav className="flex items-center gap-2 text-sm text-navy-soft">
          {variant === "home" ? (
            <Link href="/contact" className="hover:text-teal">
              Contact
            </Link>
          ) : (
            <Link href="/" className="hover:text-teal">
              Home
            </Link>
          )}
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-teal">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
