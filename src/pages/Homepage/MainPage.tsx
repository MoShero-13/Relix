import { useState } from "react";
import { FiUser, FiSearch } from "react-icons/fi";
import {
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";
import "../../index.css";
import spaceVideo from "../../assets/spacevideo_GfgdMU3c.mp4";
import { RotatingText } from "../../components/RotatingText";
import { Projects } from "./Projects";
import Services from "./Services";

function FlickerText({ text }: { text: string }) {
  return (
    <span className="flicker-hover">
      {text.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </span>
  );
}

type MainPageProps = {
  onOpenProject: (url: string) => void;
};

export function MainPage({ onOpenProject }: MainPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="h-full w-full p-4">
        {/* Navigation */}
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-3 px-4 rounded-[16px] shadow-md relative border border-[#01081F] backdrop-blur-md bg-white/10">
          <ul className="hidden md:flex space-x-8 text-white font-medium text-sm">
            {["Projects", "Services", "About Us"].map((item) => (
              <li key={item} className="cursor-pointer">
                <FlickerText text={item} />
              </li>
            ))}
          </ul>
          <div className="text-2xl font-bold text-black select-none md:absolute md:left-1/2 md:-translate-x-1/2">
            RELIX
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="relative bg-white rounded-[12px] px-4 py-2 flex items-center space-x-2 text-black text-sm font-medium cursor-pointer">
              <FlickerText text="Contact" />
              {/* السهم المائل */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 -rotate-45 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer ml-auto"
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

        {mobileMenuOpen && (
          <ul className="md:hidden mt-3 space-y-3 rounded-[16px] py-4 px-6 shadow-md w-full max-w-7xl border border-[#01081F] backdrop-blur-md bg-white/10 text-white font-medium text-sm">
            {["Services", "About Us", "Contact"].map((item) => (
              <li key={item} className="cursor-pointer">
                <FlickerText text={item} />
              </li>
            ))}
            <li className="text-black flex items-center space-x-2 cursor-pointer">
              <FiSearch size={18} />
              <FlickerText text="Search" />
            </li>
            <li className="text-black flex items-center space-x-2 cursor-pointer">
              <FiUser size={18} />
              <FlickerText text="Login" />
            </li>
          </ul>
        )}

        {/* Hero Section */}
        <div className="max-w-7xl w-full mx-auto mt-8 overflow-hidden rounded-[16px] lg:rounded-[30px] relative h-[30vh] sm:h-[50vh] lg:h-[80vh]">
          {/* Social Icons vertical */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[10] hidden md:flex flex-col gap-3 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px]">
            <a
              href="https://wa.me/963953670264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white w-6 h-6 hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://github.com/MoShero-13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white w-6 h-6 hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://t.me/+963953670264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-white w-6 h-6 hover:text-sky-400 transition-colors" />
            </a>
            <a
              href="mailto:mo3206213@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-white w-6 h-6 hover:text-red-400 transition-colors" />
            </a>
          </div>

          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 z-0"
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
                className="w-full h-full object-cover"
              />
            </foreignObject>

            <foreignObject
              width="100%"
              height="100%"
              clipPath="url(#clipBox)"
              style={{ zIndex: 2 }}
            >
              <div className="w-full h-full bg-gradient-to-t from-black to-transparent" />
            </foreignObject>
          </svg>

          {/* CTA Button */}
          <div className="absolute z-[1] bottom-0 right-0 w-[29%] h-[15%] flex items-center justify-center gap-2 px-4 py-2 sm:rounded-[16px] rounded-[8px] backdrop-blur-md bg-white/10 border border-black/30 text-white shadow-lg flicker-hover-white cursor-pointer">
            <span className="text-[10px] sm:text-base font-medium">
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

          {/* Text Overlay */}
          <div className="absolute z-[3] bottom-0 sm:bottom-4 lg:bottom-8 left-[5%] text-white text-left">
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              We craft digital
            </h1>
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4">
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
        <Projects onOpenProject={onOpenProject} />
        <Services />
      </div>
    </>
  );
}
