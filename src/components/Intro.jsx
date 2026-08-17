import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Intro() {
  return (
    <section id="about" className="intro">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-label">
          <span>01 /</span> WHO WE ARE
        </div>

        <div className="intro-grid">
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="intro-heading"
          >
            <h2>
              WE DON'T JUST CREATE CONTENT<span>.</span>
              <br />
              <span>WE CREATE ATTENTION.</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="intro-copy"
          >
            <p>
              The Noise Club is an independent creative communications studio
              helping modern brands become impossible to ignore through
              strategy, storytelling, and culture-driven campaigns.
            </p>

            <a href="#about" className="intro-link">
              ABOUT US
              <ArrowUpRight className="intro-link-icon" />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="intro-image-wrapper"
          >
            <div className="intro-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Creative Studio Team"
              />
            </div>

            <div className="intro-established">EST. 2024</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;