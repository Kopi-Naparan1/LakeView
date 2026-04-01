import { useEffect, useRef, useState } from "react";

export default function DeferredSection({
  children,
  minHeight = "24rem",
  rootMargin = "600px 0px",
  once = true,
  className = "",
}) {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) return undefined;

    const node = containerRef.current;
    if (!node) return undefined;

    let cancelled = false;

    function mountSection() {
      if (cancelled) return;

      setIsMounted(true);
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      const timeoutId = globalThis.setTimeout(mountSection, 0);

      return () => {
        cancelled = true;
        globalThis.clearTimeout(timeoutId);
      };
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        const shouldMount = entries.some(
          (entry) => entry.isIntersecting || entry.intersectionRatio > 0,
        );
        if (!shouldMount) return;

        mountSection();

        if (once) {
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0.01,
      },
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [isMounted, once, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={isMounted ? undefined : { minHeight }}
    >
      {isMounted ? children : null}
    </div>
  );
}
