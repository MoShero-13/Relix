import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Preloader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFlickering, setIsFlickering] = useState(true);

  useEffect(() => {
    const flickerTimeout = setTimeout(() => {
      setIsFlickering(false);
    }, 2000);
    return () => clearTimeout(flickerTimeout);
  }, []);

  useEffect(() => {
    const sequence = [
      { target: 30, duration: 1500 },
      { wait: 500 },
      { target: 88, duration: 1000 },
      { wait: 300 },
      { target: 100, duration: 800 },
    ];

    let currentIndex = 0;
    let currentProgress = 0;

    const runNext = () => {
      if (currentIndex >= sequence.length) {
        setProgress(100);
        onFinish();
        return;
      }

      const step = sequence[currentIndex];

      if ("wait" in step) {
        setTimeout(() => {
          currentIndex++;
          runNext();
        }, step.wait);
      } else {
        const { target, duration } = step;
        const start = currentProgress;
        const delta = target - start;
        const startTime = performance.now();

        const animateStep = (now: number) => {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          const eased = t * t; // easeIn
          const value = start + delta * eased;
          setProgress(value);

          if (t < 1) {
            requestAnimationFrame(animateStep);
          } else {
            currentProgress = target;
            currentIndex++;
            runNext();
          }
        };

        requestAnimationFrame(animateStep);
      }
    };

    runNext();
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#01081F] flex items-center justify-center z-[9999]">
      {/* Logo */}
      <div className="flex space-x-2">
        {"RELIX".split("").map((char, index) => {
          const delay = Math.random() * 2;
          return (
            <motion.span
              key={`relix-char-${index}`}
              className="text-[#29E8D1] text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-widest"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                isFlickering
                  ? { opacity: [0, 1, 0.6, 1], scale: 0.7 }
                  : { opacity: 1, scale: 1 }
              }
              transition={
                isFlickering
                  ? {
                      delay,
                      duration: 0.3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }
                  : {
                      duration: 1.5,
                      ease: [0.85, 0, 0.15, 1],
                    }
              }
            >
              {char}
            </motion.span>
          );
        })}
      </div>

      {/* Progress Counter */}
      <div className="absolute bottom-6 right-8 text-[#29E8D1] text-5xl sm:text-6xl font-extrabold font-mono tracking-wider opacity-95">
        {Math.floor(progress)}%
      </div>
    </div>
  );
}
