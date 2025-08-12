import { FaWhatsapp, FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, easeOut, type Variants } from "framer-motion";

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
    <span className="flicker-hover">
      {text.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </span>
  );
}

const Contact = () => {
  const lines = ["Ready to", "take the", "leap?"];

  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col min-h-screen">
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
              className="block text-[15vw] sm:text-[10vw] md:text-[8vw] mb-6"
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

          <motion.div
            custom={1}
            variants={lineVariants}
            className="flex justify-between items-start"
          >
            {/* Left side: Navigation + Contact */}
            <div className="flex gap-40">
              {/* Navigation */}
              <motion.div custom={2} variants={lineVariants}>
                <p className="uppercase text-sm font-semibold mb-2">
                  Navigation
                </p>
                <ul className="space-y-5 text-2xl text-white">
                  <li>Home</li>
                  <li>Project</li>
                  <li>Services</li>
                  <li>About Us</li>
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div custom={3} variants={lineVariants}>
                <p className="uppercase text-xs font-semibold mb-4 text-black">
                  Contact
                </p>
                <div className="grid grid-cols-2 gap-4 text-2xl">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-500 transition-colors duration-300"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-sky-500 transition-colors duration-300"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-black transition-colors duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-700 transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side: Button */}
            <motion.div
              custom={4}
              variants={lineVariants}
              className="hidden md:flex items-center"
            >
              <button className="relative bg-white rounded-[12px] px-4 py-2 flex items-center space-x-2 text-black text-sm font-medium cursor-pointer">
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
              </button>
            </motion.div>
          </motion.div>

          {/* Bottom text */}
          <motion.div
            custom={5}
            variants={lineVariants}
            className="text-xs mt-8"
          >
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </motion.div>
        </motion.div>
      </footer>
    </section>
  );
};

export default Contact;
