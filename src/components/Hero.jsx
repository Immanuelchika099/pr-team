import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background-text">NOISE</div>

      <div className="hero-container">
        {/* Hero Text */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-eyebrow">WE MAKE</span>

            <h1 className="hero-title">
              BRANDS <br />
              <span>IMPOSSIBLE</span> <br />
              TO IGNORE<span>.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-services"
          >
            <span>PR</span>
            <span className="hero-dot">•</span>
            <span>SOCIAL</span>
            <span className="hero-dot">•</span>
            <span>CONTENT</span>
            <span className="hero-dot">•</span>
            <span>STRATEGY</span>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-image-wrapper"
          >
            {/* Main Image */}
            <div className="hero-main-image">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Editorial Portrait"
              />
            </div>

            {/* Floating Image */}
            <div className="hero-floating-image">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
                alt="Live Event"
              />
            </div>

            {/* Floating Quote */}
            <div className="hero-quote">
              <p>
                WE DON'T FOLLOW TRENDS. WE START CONVERSATIONS.
              </p>
            </div>

            {/* Rotating Circle */}
            <div className="hero-circle">
              <svg viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />

                <text>
                  <textPath href="#circlePath">
                    CREATING CULTURE • MAKING NOISE •
                  </textPath>
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Hero Bar */}
      <div className="hero-bottom">
        <div className="hero-scroll">
          <ArrowDown className="hero-scroll-icon" />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-counter">01 / 05</div>
      </div>
    </section>
  );
}

export default Hero;