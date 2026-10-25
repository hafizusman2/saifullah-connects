import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-ink">
      <LogoMark className="h-8 w-auto shrink-0" />
      <span className="text-[15px] font-semibold tracking-tight">Saifullah Connects</span>
    </Link>
  );
}
