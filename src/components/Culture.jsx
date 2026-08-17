import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
];

function Culture() {
  return (
    <section className="culture">
      <div className="section-container">

        {/* Section Label */}
        <div className="section-label culture-label">
          <span>06 /</span> CULTURE
        </div>

        <h2 className="culture-title">
          LATEST FROM THE <span>STUDIO.</span>
        </h2>

        {/* Gallery */}
        <div className="culture-gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className="culture-image">
              <img
                src={image}
                alt={`Studio culture ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Culture;