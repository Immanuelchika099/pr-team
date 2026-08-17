import React from "react";
import { motion } from "framer-motion";

function Statement() {
  return (
    <section className="statement">
      <div className="statement-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="statement-title">
            YOUR BRAND DESERVES MORE THAN ATTENTION
            <span>.</span>
            <br />
            <span>IT DESERVES CULTURE.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

export default Statement;