import { useState } from "react";
import "./App.css";
// import CommingSoon from "./pages/Comming Soon/CommingSoon";
import { AnimatePresence, motion } from "framer-motion";
import { MainPage } from "./pages/Homepage/MainPage";
import { Preloader } from "./components/Preloader";

const App = () => {
  const [stage, setStage] = useState<
    | "loading"
    | "preloaderShrink"
    | "preloaderRise"
    | "mainMoveUp"
    | "mainScaleUp"
  >("loading");
  return (
    <>
      {/* <CommingSoon /> */}
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          position: "relative",
          background:
            "radial-gradient(circle,rgba(1, 8, 31, 1) 25%, rgba(166, 224, 216, 1) 100%)",
        }}
      >
        <AnimatePresence mode="wait">
          {stage === "loading" && (
            <Preloader
              key="preloader"
              onFinish={() => setStage("preloaderShrink")}
            />
          )}

          {stage === "preloaderShrink" && (
            <motion.div
              key="preloader-shrink"
              initial={{ scale: 1, y: 0 }}
              animate={{ scale: 0.7, y: 0 }}
              transition={{ duration: 0.7, ease: [0.75, 0.02, 0.26, 1] }}
              onAnimationComplete={() => setStage("preloaderRise")}
              style={preloaderStyle}
            >
              <span
                className="shimmer-effect text-[#7FCEC4] text-6xl sm:text-7xl md:text-8xl font-extrabold"
                style={{ letterSpacing: "0.2em" }} // زيد القيمة حسب ما يناسبك
              >
                RELIX
              </span>
            </motion.div>
          )}

          {stage === "preloaderRise" && (
            <motion.div
              key="preloader-rise"
              initial={{ scale: 0.7, y: 0 }}
              animate={{ scale: 0.7, y: "-100vh" }}
              transition={{ duration: 0.5, ease: [0.75, 0.02, 0.26, 1] }}
              onAnimationComplete={() => setStage("mainMoveUp")}
              style={preloaderStyle}
            >
              <span
                className="shimmer-effect text-[#7FCEC4] text-6xl sm:text-7xl md:text-8xl font-extrabold"
                style={{ letterSpacing: "0.2em" }} // زيد القيمة حسب ما يناسبك
              >
                RELIX
              </span>
            </motion.div>
          )}

          {stage === "mainMoveUp" && (
            <motion.div
              key="main-move-up"
              initial={{ y: "100vh", scale: 0.75 }}
              animate={{ y: 0, scale: 0.75 }}
              transition={{ duration: 0.7, ease: [0.75, 0.02, 0.26, 1] }}
              onAnimationComplete={() => setStage("mainScaleUp")}
              style={getMainContainerStyle(stage)}
            >
              <MainPage />
            </motion.div>
          )}

          {stage === "mainScaleUp" && (
            <motion.div
              key="main-scale-up"
              initial={{ y: 0, scale: 0.75 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.75, 0.02, 0.26, 1] }}
              style={getMainContainerStyle(stage)}
            >
              <MainPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const preloaderStyle = {
  position: "fixed" as const,
  inset: 0,
  backgroundColor: "#01081F", // ← نفس لون الصفحة
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "5rem",
  color: "#ffffff", // ← نفس لون النص
  fontWeight: "bold",
  borderRadius: "24px",
  zIndex: 9999,
};

const getMainContainerStyle = (stage: string) => ({
  position: "absolute" as const,
  inset: 0,
  backgroundColor: "#ddd",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "3rem",
  fontWeight: "bold",
  borderRadius:
    stage === "mainScaleUp" || stage.startsWith("algota") ? "0px" : "24px",
  zIndex: 1,
  overflow: "hidden", // مهم حتى ما يخرج محتوى MainPage عن الشكل الدائري
});

export default App;
