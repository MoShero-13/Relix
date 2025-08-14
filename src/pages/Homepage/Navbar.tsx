import { useEffect, useRef, useState } from "react";

function FlickerText({ text }: { text: string }) {
  return (
    <span className="flicker-hover">
      {text.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </span>
  );
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0); // استخدم useRef هنا بدل state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // تمرير لأسفل
        setShowNavbar(false);
      } else {
        // تمرير لأعلى
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY; // حدّث القيمة
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // بدون dependency، يعمل مرة وحدة فقط
  return (
    <>
      {/* النافبار ثابت في الأعلى */}
      <nav
        className="fixed top-0 left-1/2 max-w-[90%] w-full md:max-w-7xl py-3 px-6 rounded-[16px] shadow-md border border-[#01081F] backdrop-blur-md bg-white/10 text-white font-medium text-sm z-50 flex items-center mt-3 transition-transform duration-300"
        style={{
          transform: `translateX(-50%) translateY(${
            showNavbar ? "0" : "-100px"
          })`,
        }}
      >
        {/* القائمة الرئيسية ديسكتوب */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-sm flex-1">
          {[
            { label: "Projects", id: "projects" },
            { label: "Services", id: "services" },
            { label: "About Us", id: "about-us" },
          ].map(({ label, id }) => (
            <li
              key={label}
              className="cursor-pointer"
              onClick={() => {
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <FlickerText text={label} />
            </li>
          ))}
        </ul>

        {/* الشعار في الوسط */}
        <div className="text-2xl font-bold text-black select-none flex-shrink-0 ">
          RELIX
        </div>

        {/* زر Contact على اليمين */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
          <a
            href="#contact"
            className="relative bg-white rounded-[12px] px-4 py-2 flex items-center space-x-2 text-black text-sm font-medium cursor-pointer"
          >
            <FlickerText text="Contact" />
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
          </a>
        </div>

        {/* زر الهامبرغر للموبايل */}
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
        <ul
          className="md:hidden space-y-3 rounded-[16px] py-4 px-6 shadow-md border border-[#01081F] backdrop-blur-md bg-white/10 text-white font-medium text-sm "
          style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "1120px",
            width: "90%",
            zIndex: 51,
            marginTop: 0,
          }}
        >
          {[
            { label: "Projects", id: "projects" },
            { label: "Services", id: "services" },
            { label: "About Us", id: "about-us" },
            { label: "Contact", id: "contactUs" },
          ].map(({ label, id }) => (
            <li
              key={label}
              className="cursor-pointer"
              onClick={() => {
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
                setMobileMenuOpen(false); // يغلق المينيو بعد الضغط
              }}
            >
              <FlickerText text={label} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
