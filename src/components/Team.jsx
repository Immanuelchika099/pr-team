import React from "react";
import { motion } from "framer-motion";

const approachItems = [
  {
    num: "01",
    title: "LISTEN",
    desc: "We dissect your brand DNA and market context.",
  },
  {
    num: "02",
    title: "STRATEGIZE",
    desc: "We formulate angles that demand media and audience focus.",
  },
  {
    num: "03",
    title: "CREATE",
    desc: "We execute visual and written narrative with high precision.",
  },
  {
    num: "04",
    title: "AMPLIFY",
    desc: "We launch across key PR, social, and cultural channels.",
  },
];

function Team() {
  return (
    <section className="team">
      <div className="section-container">

        {/* Section Label */}
        <div className="section-label team-label">
          <span>05 /</span> ABOUT THE TEAM
        </div>

        <div className="team-grid">

          {/* Team Introduction */}
          <div className="team-intro">
            <h2 className="team-title">
              MEET THE
              <span> NOISE MAKERS.</span>
            </h2>

            <p className="team-description">
              We are a collective of publicists, creative directors,
              strategists, and visual artists driven by a single purpose:
              elevating brands into cultural icons.
            </p>

            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Agency Team"
              />
            </div>
          </div>

          {/* Our Approach */}
          <div className="approach">
            <div className="approach-heading">
              OUR APPROACH
            </div>

            <div className="approach-list">
              {approachItems.map((item) => (
                <motion.div
                  key={item.num}
                  whileHover={{ x: 6 }}
                  className="approach-item"
                >
                  <div className="approach-title-row">
                    <span className="approach-number">
                      {item.num}
                    </span>

                    <h3>{item.title}</h3>
                  </div>

                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;