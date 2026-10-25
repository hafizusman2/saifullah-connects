import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const textColor = inverted ? "text-white" : "text-navy";
  const ringColor = inverted ? "#ffffff" : "#10263D";
  const markColor = inverted ? "#10263D" : "#ffffff";
  const markBg = inverted ? "#ffffff" : "#10263D";

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="15" cy="15" r="14" stroke={ringColor} strokeWidth="1.4" />
        <circle cx="15" cy="15" r="9" fill={markBg} />
        <text
          x="15"
          y="19.5"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="10"
          fontWeight="700"
          fill={markColor}
        >
          SC
        </text>
      </svg>
      <span className={`text-[15px] font-semibold tracking-tight ${textColor}`}>
        Saifullah Connects
      </span>
    </Link>
  );
}
