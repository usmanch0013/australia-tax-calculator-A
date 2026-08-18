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
      aria-label="AU Pay Calculator logo"
    >
      <defs>
        <linearGradient
          id={`${id}-bg`}
          x1="6"
          y1="4"
          x2="42"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6b2737" />
          <stop offset="0.55" stopColor="#521d2a" />
          <stop offset="1" stopColor="#2a1018" />
        </linearGradient>
        <linearGradient
          id={`${id}-gold`}
          x1="24"
          y1="8"
          x2="24"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f0d9a8" />
          <stop offset="0.45" stopColor="#d4aa62" />
          <stop offset="1" stopColor="#b8863b" />
        </linearGradient>
      </defs>

      <rect width="48" height="48" rx="11" fill={`url(#${id}-bg)`} />
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="10"
        stroke={`url(#${id}-gold)`}
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      <rect
        x="10"
        y="28"
        width="4.5"
        height="9"
        rx="1.2"
        fill={`url(#${id}-gold)`}
        fillOpacity="0.5"
      />
      <rect
        x="16.5"
        y="23"
        width="4.5"
        height="14"
        rx="1.2"
        fill={`url(#${id}-gold)`}
        fillOpacity="0.72"
      />
      <rect
        x="23"
        y="17"
        width="4.5"
        height="20"
        rx="1.2"
        fill={`url(#${id}-gold)`}
      />

      <text
        x="35"
        y="31"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="21"
        fontWeight="700"
        fill={`url(#${id}-gold)`}
      >
        $
      </text>

      <circle cx="36" cy="11.5" r="1.15" fill="#faf7f2" fillOpacity="0.9" />
      <circle cx="39.2" cy="14.2" r="0.9" fill="#faf7f2" fillOpacity="0.75" />
      <circle cx="37.6" cy="17.8" r="0.75" fill="#faf7f2" fillOpacity="0.6" />
      <circle cx="34" cy="15.8" r="0.6" fill="#faf7f2" fillOpacity="0.5" />
    </svg>
  );
}
