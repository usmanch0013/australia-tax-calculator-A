"use client";

import { useId } from "react";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 40, className }: LogoMarkProps) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="AU Salary After Tax logo"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#166534" />
          <stop offset="1" stopColor="#052e16" />
        </linearGradient>
        <linearGradient id={`${id}-coin`} x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde68a" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <rect width="48" height="48" rx="11" fill={`url(#${id}-bg)`} />
      <rect
        x="12"
        y="14"
        width="24"
        height="20"
        rx="3"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
      />
      <circle cx="24" cy="24" r="7" fill={`url(#${id}-coin)`} />
      <text
        x="24"
        y="27.5"
        textAnchor="middle"
        fontFamily="Outfit, system-ui, sans-serif"
        fontSize="11"
        fontWeight="800"
        fill="#14532d"
      >
        $
      </text>
      <path
        d="M18 34 H30"
        stroke={`url(#${id}-coin)`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 38 H28"
        stroke={`url(#${id}-coin)`}
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
