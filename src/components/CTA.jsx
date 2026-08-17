import React from "react";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section className="cta">
      <div className="section-container cta-content">

        <div className="cta-copy">
          <span className="cta-label">
            LET'S WORK TOGETHER
          </span>

          <h2 className="cta-title">
            READY TO MAKE
            <br />
            SOME NOISE?
          </h2>
        </div>

        <a href="#contact" className="cta-button">
          <span>LET'S TALK</span>

          <ArrowUpRight className="cta-icon" />
        </a>

      </div>
    </section>
  );
}

export default CTA;