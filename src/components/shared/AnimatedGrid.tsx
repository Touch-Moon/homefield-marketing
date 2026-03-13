"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}

export default function AnimatedGrid({
  children,
  className,
  stagger = 0.1,
  y = 30,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const items = ref.current.children;
    if (!items.length) return;

    gsap.fromTo(
      items,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
        },
      }
    );
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
