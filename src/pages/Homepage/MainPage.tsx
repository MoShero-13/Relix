import { useState } from "react";
import { FiUser, FiSearch } from "react-icons/fi";
import "../../index.css";
import spaceVideo from "../../assets/spacevideo_GfgdMU3c.mp4";
import { RotatingText } from "../../components/RotatingText";

function FlickerText({ text }: { text: string }) {
  return (
    <span className="flicker-hover">
      {text.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </span>
  );
}

export function MainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col h-full w-full overflow-hidden p-4"
      style={{
        background:
          "linear-gradient(150deg, rgba(127, 206, 196, 1) 18%, rgba(63, 106, 113, 1) 64%, rgba(1, 8, 31, 1) 92%)",
      }}
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 px-6 rounded-[16px] shadow-md relative border border-[#01081F] backdrop-blur-md bg-white/10">
        {/* القائمة الجانبية على اليسار (ديسكتوب فقط) */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-sm">
          <li className="cursor-pointer transition duration-300">
            <FlickerText text="Services" />
          </li>
          <li className="cursor-pointer transition">
            <FlickerText text="About Us" />
          </li>
          <li className="cursor-pointer transition">
            <FlickerText text="Contact" />
          </li>
        </ul>

        {/* الشعار بالنص في الديسكتوب، يسار في الموبايل */}
        <div className="text-2xl font-bold text-black select-none md:absolute md:left-1/2 md:-translate-x-1/2">
          RELIX
        </div>

        {/* الأزرار الجانبية (ديسكتوب فقط) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-black transition flex items-center space-x-1 text-sm font-medium">
            <FiSearch size={18} />
            <FlickerText text="Search" />
          </button>
          <button className="text-black transition flex items-center space-x-1 text-sm font-medium">
            <FiUser size={18} />
            <FlickerText text="Login" />
          </button>
        </div>

        {/* زر القائمة (موبايل فقط) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer ml-auto"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#01081F] rounded transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#01081F] rounded transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#01081F] rounded transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* القائمة للموبايل */}
      {mobileMenuOpen && (
        <ul className="md:hidden mt-3 space-y-3 rounded-[16px] py-4 px-6 shadow-md w-full max-w-7xl border border-[#01081F] backdrop-blur-md bg-white/10 text-white font-medium text-sm">
          <li className="cursor-pointer transition">
            <FlickerText text="Services" />
          </li>
          <li className="cursor-pointer transition">
            <FlickerText text="About Us" />
          </li>
          <li className="cursor-pointer transition">
            <FlickerText text="Contact" />
          </li>
          <li className="text-black cursor-pointer transition flex items-center space-x-2">
            <FiSearch size={18} />
            <FlickerText text="Search" />
          </li>
          <li className="text-black cursor-pointer transition flex items-center space-x-2">
            <FiUser size={18} />
            <FlickerText text="Login" />
          </li>
        </ul>
      )}

      <div className="max-w-7xl w-full mx-auto mt-8 overflow-hidden rounded-[16px] lg:rounded-[30px] relative h-[30vh] sm:h-[50vh] lg:h-[80vh]">
        {/* الفيديو بقالب SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        >
          <defs>
            <clipPath id="clipBox" clipPathUnits="objectBoundingBox">
              <path
                d="
            M 0.016 0
            Q 0 0 0 0.032
            V 0.968
            Q 0 1 0.016 1
            H 0.684
            Q 0.7 1 0.7 0.968
            V 0.86
            Q 0.7 0.828 0.716 0.828
            H 0.984
            Q 1 0.828 1 0.796
            V 0.032
            Q 1 0 0.984 0
            H 0.016
            Z"
              />
            </clipPath>
          </defs>

          {/* الفيديو */}
          <foreignObject
            width="100%"
            height="100%"
            clipPath="url(#clipBox)"
            style={{ zIndex: 1 }}
          >
            <video
              src={spaceVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </foreignObject>

          {/* التدرج الأسود */}
          <foreignObject
            width="100%"
            height="100%"
            clipPath="url(#clipBox)"
            style={{ zIndex: 2 }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to top, #000, rgba(0, 0, 0, 0))",
              }}
            />
          </foreignObject>
        </svg>
        <div
          className="absolute z-[1] bottom-0 right-0 w-[29%] h-[15%] 
             flex items-center justify-center gap-2 
             px-4 py-2 sm:rounded-[16px] rounded-[8px] 
             backdrop-blur-md bg-white/10 border border-black/30 
             text-white shadow-lg"
        >
          <span className="text-[10px] sm:text-base font-medium flicker-hover-white">
            {"Discover\u00A0more".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* النص فوق الفيديو */}
        <div className="absolute z-[3] bottom-0 sm:bottom-4 lg:bottom-8 left-[5%] text-white text-left">
          <h1
            style={{
              fontSize: "clamp(1.5rem, 2vw + 1rem, 3rem)", // من 1.5 بالجوال حتى 3 بالديسكتوب
              marginBottom: "0.5rem",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            We craft digital
          </h1>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 2vw + 1rem, 3rem)",
              marginBottom: "1rem",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            experiences
          </h1>

          <RotatingText
            texts={[
              "Web\u00A0Development",
              "App\u00A0Development",
              "UI\u00A0&\u00A0UX\u00A0Design",
            ]}
            interval={2500}
          />
        </div>
      </div>
    </div>
  );
}
