import { useState } from "react";
import "./App.css";
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
    | "algotaShrink"
    | "algotaPause"
    | "algotaRise"
    | "algotaEmbedRise"
    | "algotaEmbedScaleUp"
  >("loading");
  const [selectedUrl, setSelectedUrl] = useState<string | undefined>();

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "auto",
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
                style={{ letterSpacing: "0.2em" }}
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
                style={{ letterSpacing: "0.2em" }}
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
              <MainPage
                onOpenProject={(url) => {
                  setSelectedUrl(url);
                  setStage("algotaShrink");
                }}
              />
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
              <MainPage
                onOpenProject={(url) => {
                  setSelectedUrl(url);
                  setStage("algotaShrink");
                }}
              />
            </motion.div>
          )}
          {/* تصغير الصفحة بدون تحريك */}
          {stage === "algotaShrink" && (
            <motion.div
              key="algota-shrink"
              initial={{ scale: 1, y: 0, opacity: 1 }}
              animate={{ scale: 0.7, y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.75, 0.02, 0.26, 1] }}
              onAnimationComplete={() => setStage("algotaPause")}
              style={mainContainerStyle}
            >
              <MainPage
                onOpenProject={(url) => {
                  setSelectedUrl(url);
                  setStage("algotaPause");
                }}
              />
            </motion.div>
          )}
          توقف ثانية بدون تغيير
          {stage === "algotaPause" && (
            <motion.div
              key="algota-pause"
              initial={{ scale: 0.7, y: 0, opacity: 1 }}
              animate={{ scale: 0.7, y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setStage("algotaRise")}
              style={mainContainerStyle}
            >
              <MainPage
                onOpenProject={(url) => {
                  setSelectedUrl(url);
                  setStage("algotaRise");
                }}
              />
            </motion.div>
          )}
          {/* رفع الصفحة الرئيسية لفوق مع اختفاء */}
          {stage === "algotaRise" && (
            <motion.div
              key="algota-rise"
              initial={{ scale: 0.7, y: 0, opacity: 1 }}
              animate={{ scale: 0.7, y: "-100vh", opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.75, 0.02, 0.26, 1] }}
              onAnimationComplete={() => setStage("algotaEmbedRise")}
              style={mainContainerStyle}
            >
              <MainPage
                onOpenProject={(url) => {
                  setSelectedUrl(url);
                  setStage("algotaEmbedRise");
                }}
              />
            </motion.div>
          )}
          {/* دخول موقع الغوطة من تحت بحجم صغير */}
          {stage === "algotaEmbedRise" && (
            <motion.div
              key="project-embed-rise"
              initial={{ y: "100vh", scale: 0.7, opacity: 0 }}
              animate={{ y: "80vh", scale: 0.7, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.75, 0.02, 0.26, 1] }}
              onAnimationComplete={() => setStage("algotaEmbedScaleUp")}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                backgroundColor: "#000",
                borderRadius: "24px",
              }}
            >
              <iframe
                src={selectedUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "24px",
                }}
              />
            </motion.div>
          )}
          {/* تكبير موقع الغوطة */}
          {stage === "algotaEmbedScaleUp" && (
            <div>
              {/* زر الرجوع */}
              <button
                onClick={() => {
                  setSelectedUrl(undefined);
                  setStage("mainMoveUp"); // أو preloaderRise لو بدك ترجع مع حركة
                }}
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "20px",
                  zIndex: 0,
                  color: "black",
                  backdropFilter: "blur(24px)",
                  border: "1px solid #000",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Back
              </button>
              <motion.div
                key="project-embed-scale-up"
                initial={{ scale: 0.7 }}
                animate={{ scale: 0.8 }}
                transition={{ duration: 0.7, ease: [0.75, 0.02, 0.26, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  backgroundColor: "#000",
                  borderRadius: "24px",
                }}
              >
                <iframe
                  src={selectedUrl}
                  style={{
                    background: "none",
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "24px",
                  }}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const preloaderStyle = {
  position: "fixed" as const,
  inset: 0,
  backgroundColor: "#01081F",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "5rem",
  color: "#ffffff",
  fontWeight: "bold",
  borderRadius: "24px",
  zIndex: 9999,
};

const getMainContainerStyle = (stage: string) => ({
  position: "absolute" as const,
  inset: 0,
  background:
    "linear-gradient(150deg, rgba(127, 206, 196, 1) 18%, rgba(63, 106, 113, 1) 64%, rgba(1, 8, 31, 1) 92%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "3rem",
  fontWeight: "bold",
  borderRadius:
    stage === "mainScaleUp" || stage.startsWith("algota") ? "0px" : "24px",
  zIndex: 1,
  overflow: "auto",
});
const mainContainerStyle = {
  position: "absolute" as const,
  background:
    "linear-gradient(150deg, rgba(127, 206, 196, 1) 18%, rgba(63, 106, 113, 1) 64%, rgba(1, 8, 31, 1) 92%)",
  inset: 0,
  backgroundColor: "#ddd",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "3rem",
  fontWeight: "bold",
  borderRadius: "24px",
  zIndex: 1,
  overflow: "hidden",
};

export default App;
