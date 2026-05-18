import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  style?: CSSProperties;
  threshold?: number;
  rootMargin?: string;
}

export function ScrollReveal({
  children,
  className = "",
  stagger = false,
  style,
  threshold,
  rootMargin,
}: Props) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      {...(stagger ? { "data-reveal-stagger": "" } : { "data-reveal": "" })}
    >
      {children}
    </div>
  );
}
