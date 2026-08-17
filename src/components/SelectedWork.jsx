import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "SHEIN SUMMER CAMPAIGN",
    category: "PR / SOCIAL / CONTENT",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "KINETIC AUDIO LABS",
    category: "BRAND STRATEGY & EXPERIENTIAL",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "VANGUARD VISION REPAIR",
    category: "DIGITAL CAMPAIGN",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
  },
];

function SelectedWork() {
  return (
    <section id="work" className="selected-work">
      <div className="section-container">
        {/* Section Header */}
        <div className="selected-work-header">
          <div>
            <div className="section-label">
              <span>03 /</span> SELECTED WORK
            </div>

            <h2 className="selected-work-title">
              SELECTED <span>PROJECTS.</span>
            </h2>
          </div>

          <a href="#work" className="selected-work-link">
            VIEW ALL WORK
            <ArrowUpRight className="selected-work-link-icon" />
          </a>
        </div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`project ${
                index % 2 === 1 ? "project-reversed" : ""
              }`}
            >
              {/* Project Image */}
              <div className="project-image-wrapper">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>

              {/* Project Information */}
              <div className="project-info">
                <span className="project-number">{project.id}</span>

                <div className="project-meta">
                  {project.category} — {project.year}
                </div>

                <h3 className="project-title">{project.title}</h3>

                <div className="project-case-study">
                  <span>
                    VIEW CASE STUDY
                    <ArrowUpRight className="case-study-icon" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;