import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaTelegram, FaLinkedin } from "react-icons/fa";
import spaceVideo from "../../assets/spaceVideo.mp4";

const CommingSoon = () => {
  const [isFlickering, setIsFlickering] = useState(true);

  useEffect(() => {
    const flickerTimeout = setTimeout(() => {
      setIsFlickering(false);
    }, 2000);
    return () => clearTimeout(flickerTimeout);
  }, []);

  const description = "A new digital experience is being born.";

  // الربط مع الايميل
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9c51755-d940-4805-91a1-da1bb3659d81");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-white text-center m-0 p-0 overflow-hidden">
      {/* خلفية الفيديو */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={spaceVideo}
      />
      {/* Overlay أسود */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-5" />

      {/* العنوان نسخة ديسكتوب مع تقسيم السطور عند 950px */}
      <div className="hidden md:flex flex-wrap justify-center gap-2 mb-4 z-10 max950:flex-col max950:items-center">
        {/* السطر الأول */}
        <div className="flex flex-wrap justify-center gap-2">
          {"RELIX IS ".split("").map((char, index) => {
            const delay = Math.random() * 2;
            return (
              <motion.span
                key={`line1-${index}`}
                className="text-4xl md:text-5xl xl1440:text-7xl font-bold neon-text"
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
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>

        {/* السطر الثاني */}
        <div className="flex flex-wrap justify-center gap-2">
          {"COMING SOON".split("").map((char, index) => {
            const delay = Math.random() * 2;
            return (
              <motion.span
                key={`line2-${index}`}
                className="text-4xl md:text-5xl xl1440:text-7xl font-bold neon-text"
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
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>
      </div>

      {/* نسخة الهاتف/تابلت */}
      <div className="md:hidden mb-4 z-10 text-center">
        {["RELIX IS", "COMING SOON"].map((line, lineIndex) => (
          <div key={lineIndex} className="flex flex-wrap justify-center gap-2">
            {line.split("").map((char, charIndex) => {
              const delay = Math.random() * 2;
              return (
                <motion.span
                  key={`mobile-${lineIndex}-${charIndex}`}
                  className="text-2xl font-bold neon-text"
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
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>

      {/* الوصف */}
      <div className="flex flex-wrap justify-center gap-1 mb-8 z-10">
        {description.split("").map((char, index) => {
          const delay = Math.random() * 2;
          return (
            <motion.span
              key={index}
              className="text-lg md:text-xl font-medium mb-8 z-10"
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
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>

      {/* فورم البريد */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={
          isFlickering
            ? { opacity: [0, 1, 0.6, 1], scale: 0.7 }
            : { opacity: 1, scale: 1 }
        }
        transition={
          isFlickering
            ? {
                delay: 0.5,
                duration: 0.3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }
            : {
                delay: 0.7,
                duration: 1.5,
                ease: [0.85, 0, 0.15, 1],
              }
        }
        className="flex flex-col items-center gap-2 px-4 py-4 shadow-xl rounded-2xl z-10 w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20"
      >
        {/* البريد */}
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="bg-transparent text-white placeholder-white outline-none px-4 py-2 rounded-full text-sm md:text-base w-full border border-white/30"
        />

        {/* الرسالة */}
        <textarea
          name="message"
          required
          placeholder="Your message"
          className="bg-transparent text-white placeholder-white outline-none px-4 py-2 rounded-2xl text-sm md:text-base w-full h-24 border border-white/30"
        />

        {/* زر الإرسال */}
        <button
          type="submit"
          className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition mt-2"
        >
          Send
        </button>

        {/* عرض النتيجة */}
        {result && <p className="text-sm text-white mt-2">{result}</p>}
      </motion.form>

      {/* روابط التواصل */}
      <div className="absolute bottom-6 z-10">
        <div className="backdrop-blur-md bg-white/10 min-w-[200px] px-6 py-3 rounded-[40px] flex justify-between items-center shadow-md">
          <a
            href="https://wa.me/963953670264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition text-2xl"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://t.me/+963953670264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition text-2xl"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
