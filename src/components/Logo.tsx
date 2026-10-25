import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const textColor = inverted ? "text-white" : "text-navy";

  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoMark variant={inverted ? "white" : "navy"} className="h-8 w-auto shrink-0" />
      <span className={`text-[15px] font-semibold tracking-tight ${textColor}`}>
        Saifullah Connects
      </span>
    </Link>
  );
}
