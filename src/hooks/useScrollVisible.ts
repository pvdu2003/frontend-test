import { useEffect, useState, useRef } from "react";

export function useScrollVisible(threshold = 60) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight - threshold && rect.bottom >= threshold;
      setVisible(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { ref, visible };
}
