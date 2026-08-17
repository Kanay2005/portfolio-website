"use client";

import type { ReactNode } from "react";

import { scrollToSection } from "@/app/lib/scroll";

interface ScrollButtonProps {
  targetId: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
}

export default function ScrollButton({
  targetId,
  className,
  children,
  ...props
}: ScrollButtonProps) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(targetId)}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
