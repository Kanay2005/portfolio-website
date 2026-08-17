"use client";

import type { ReactNode } from "react";

import { useIntersectionObserver } from "@/app/hooks/use-intersection-observer";

type Direction = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
}

// Offset the element starts at, in the direction it travels *from*.
const offsets: Record<Direction, [x: number, y: number]> = {
  up: [0, 1],
  down: [0, -1],
  left: [1, 0],
  right: [-1, 0],
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  once = true,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    freezeOnceVisible: once,
  });

  // Applied as an inline transform rather than a `translate-y-[${distance}px]`
  // class: Tailwind only emits utilities it finds as literal strings in the
  // source, so an interpolated class name compiles to nothing.
  const [x, y] = offsets[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting
          ? "none"
          : `translate(${x * distance}px, ${y * distance}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
