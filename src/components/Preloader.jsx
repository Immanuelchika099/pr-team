import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  const finishLoading = useCallback(() => {
    setProgress(100);

    setTimeout(() => {
      setFinished(true);

      setTimeout(() => {
        onFinish();
      }, 800);
    }, 500);
  }, [onFinish]);

  useEffect(() => {
    const images = Array.from(document.images);

    let loaded = 0;

    // No images = finish immediately
    if (images.length === 0) {
      finishLoading();
      return;
    }

    const imageLoaded = () => {
      loaded++;

      const percentage = Math.round(
        (loaded / images.length) * 100
      );

      setProgress(percentage);

      if (loaded >= images.length) {
        finishLoading();
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        imageLoaded();
      } else {
        image.addEventListener("load", imageLoaded);
        image.addEventListener("error", imageLoaded);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", imageLoaded);
        image.removeEventListener("error", imageLoaded);
      });
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div className="preloader-content">

            <motion.h1
              className="preloader-logo"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              PR-TEAM
            </motion.h1>

            <div className="preloader-info">
              <span>
                {progress < 100 ? "LOADING" : "WELCOME"}
              </span>

              <span>{progress}%</span>
            </div>

            <div className="preloader-track">
              <motion.div
                className="preloader-fill"
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;