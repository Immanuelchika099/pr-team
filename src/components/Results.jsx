import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    id: "01",
    number: "20+",
    label: "GLOBAL BRANDS",
    sub: "Serviced across Europe, US, and Asia",
  },
  {
    id: "02",
    number: "50+",
    label: "CAMPAIGNS",
    sub: "From viral launches to long-term PR",
  },
  {
    id: "03",
    number: "100%",
    label: "COMMITMENT",
    sub: "Every project receives creative focus",
  },
];

function Results() {
  return (
    <section className="results">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-label results-label">
          <span>04 /</span> RESULTS THAT SPEAK
        </div>

        {/* Stats */}
        <div className="results-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="result-item"
            >
              <div className="result-number">
                {stat.number}
              </div>

              <div className="result-label">
                {stat.label}
              </div>

              <p className="result-description">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;