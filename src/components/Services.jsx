import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    id: "01",
    title: "PUBLIC RELATIONS",
    desc: "Securing top-tier media placement, narrative architecture, and strategic crisis management.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "02",
    title: "SOCIAL MEDIA & COMMUNITY",
    desc: "Building social strategies that spark conversation, foster high engagement, and drive cultural momentum.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "03",
    title: "CONTENT & STORYTELLING",
    desc: "High-end visual production, editorial art direction, film, and photography.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "04",
    title: "BRAND STRATEGY",
    desc: "Positioning, voice, visual identity systems, and long-term audience roadmap development.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "05",
    title: "CAMPAIGNS & ACTIVATIONS",
    desc: "Experiential marketing, pop-ups, launch activations, and viral moments.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="services">
      <div className="section-container">
        {/* Section Label */}
        <div className="section-label services-label">
          <span>02 /</span> WHAT WE DO
        </div>

        <div className="services-grid">
          {/* Services List */}
          <div className="services-list">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className={`service-item ${
                  activeService === index ? "active" : ""
                }`}
              >
                <div className="service-title-wrapper">
                  <span className="service-number">{service.id}</span>

                  <h3 className="service-title">{service.title}</h3>
                </div>

                <ArrowUpRight
                  className={`service-icon ${
                    activeService === index ? "active" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Service Preview */}
          <div className="services-preview">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="service-card"
            >
              <div className="service-image">
                <img
                  src={servicesData[activeService].image}
                  alt={servicesData[activeService].title}
                />
              </div>

              <h4>{servicesData[activeService].title}</h4>

              <p>{servicesData[activeService].desc}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;