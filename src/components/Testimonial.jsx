import React from "react";
import { motion } from "framer-motion";

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="section-container">

        {/* Section Label */}
        <div className="section-label testimonial-label">
          <span>07 /</span> TESTIMONIAL
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="testimonial-content"
        >
          {/* Quote Mark */}
          <div className="testimonial-quote-mark">“</div>

          {/* Testimonial */}
          <div className="testimonial-main">
            <h2 className="testimonial-text">
              THEY UNDERSTOOD THE ASSIGNMENT BEFORE WE EVEN FINISHED
              EXPLAINING IT.
            </h2>

            {/* Client */}
            <div className="testimonial-client">
              <div className="client-image">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Client Portrait"
                />
              </div>

              <div className="client-details">
                <div className="client-name">
                  JANE DOE
                </div>

                <div className="client-role">
                  MARKETING DIRECTOR, XYZ BRAND
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonial;