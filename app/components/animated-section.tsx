"use client"

import type React from "react"

import { useIntersectionObserver } from "@/app/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  once = true,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: once,
  })

  const directionMap = {
    up: `translate-y-[${distance}px]`,
    down: `translate-y-[-${distance}px]`,
    left: `translate-x-[${distance}px]`,
    right: `translate-x-[-${distance}px]`,
  }

  const animationClass = isIntersecting
    ? "opacity-100 translate-y-0 translate-x-0"
    : `opacity-0 ${directionMap[direction]}`

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

