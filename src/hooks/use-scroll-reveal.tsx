import { useEffect, useRef, type RefObject } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends Element = HTMLDivElement>(
  opts?: Options,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const threshold = opts?.threshold ?? 0.1;
  const rootMargin = opts?.rootMargin ?? "0px 0px -48px 0px";

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // SSR or unsupported browser — make element visible immediately
      if (el) el.classList.add("revealed");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
