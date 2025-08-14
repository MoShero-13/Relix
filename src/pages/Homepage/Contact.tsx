import { FaWhatsapp, FaTelegram, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion, easeOut, type Variants } from "framer-motion";
import "../../index.css";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: easeOut },
  }),
};

function FlickerText({ text }: { text: string }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </span>
  );
}

const Contact = () => {
  const lines = ["Ready to", "take the", "leap?"];

  return (
    <section
      className="max-w-7xl mx-auto px-4 flex flex-col min-h-screen"
      id="contact"
    >
      {/* Motivational Quote */}
      <div className="flex-grow flex flex-col justify-center">
        <h2 className="font-bold text-black text-left w-full break-words">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={lineVariants}
              className="block text-[15vw] sm:text-[10vw] md:text-[8vw] mb-6 font-roboto"
            >
              {line}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Footer */}
      <footer className="border-t mt-12 py-10 text-sm text-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-10"
        >
          <motion.h3
            custom={0}
            variants={lineVariants}
            className="text-4xl font-bold mb-10"
          >
            RELIX
          </motion.h3>

          {/* Container: يصبح عمودي إذا الشاشة صغيرة جداً */}
          <motion.div
            custom={1}
            variants={lineVariants}
            className="flex flex-col xs:flex-col sm:flex-row justify-between items-start gap-8"
          >
            {/* Left side: Navigation + Contact */}
            <div className="flex flex-col xs:flex-col sm:flex-row gap-x-[100px] gap-y-[16px]">
              {/* Navigation */}
              <motion.div custom={2} variants={lineVariants}>
                <p className="uppercase text-sm font-semibold mb-2">
                  Navigation
                </p>
                <ul className="space-y-5 text-2xl text-white">
                  {[
                    { label: "Home", id: "home" },
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
              </motion.div>

              {/* Contact */}
              <motion.div
                custom={3}
                variants={lineVariants}
                className="mt-4 sm:mt-0"
              >
                <p className="uppercase text-xs font-semibold mb-4 text-black">
                  Contact
                </p>
                <div className="grid grid-cols-2 gap-4 text-2xl">
                  <a
                    href="https://wa.me/963953670264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-500 transition-colors duration-300"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://t.me/+963953670264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-sky-500 transition-colors duration-300"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href="https://github.com/MoShero-13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-black transition-colors duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="mailto:mo3206213@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400 transition-colors duration-300"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side: Button */}
            <motion.div
              custom={4}
              variants={lineVariants}
              className="hidden md:flex items-center mt-6 sm:mt-0"
            >
              <button className="relative bg-black rounded-[12px] px-4 py-2 flex items-center space-x-2 text-white text-sm font-medium cursor-pointer">
                <FlickerText text="Contact us" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 -rotate-45 text-white"
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
            </motion.div>
          </motion.div>

          {/* Bottom text */}
          <motion.div
            custom={5}
            variants={lineVariants}
            className="text-xs mt-8 text-white"
          >
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </motion.div>
        </motion.div>
      </footer>
    </section>
  );
};

export default Contact;
