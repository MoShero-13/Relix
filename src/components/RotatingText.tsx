import { useEffect, useState } from "react";
import "../index.css";

export function RotatingText({
  texts,
  interval = 5000,
}: {
  texts: string[];
  interval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="rotating-text flicker-hover1">
      {texts[currentIndex].split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
}
