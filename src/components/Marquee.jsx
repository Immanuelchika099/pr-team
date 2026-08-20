import React from "react";
import "./Marquee.css"

function Marquee() {
  const items = [
    "PUBLIC RELATIONS",
    "SOCIAL MEDIA",
    "CONTENT CREATION",
    "BRAND STRATEGY",
    "CAMPAIGNS",
    "INFLUENCER ACTIVATION",
  ];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-text">{item}</span>
            <span className="marquee-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;