"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Animação de entrada ao rolar (fade-in + slide), via IntersectionObserver.
 * Sem dependências extras. As classes ficam em globals.css (.reveal).
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect(); // anima só uma vez
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-dir={direction}
      className={`reveal ${className}`}
      style={{ ["--delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
