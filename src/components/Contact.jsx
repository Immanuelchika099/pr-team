import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container contact-grid">

        {/* Contact Intro */}
        <div className="contact-intro">
          <div className="section-label contact-label">
            <span>08 /</span> CONTACT US
          </div>

          <h2 className="contact-title">
            TELL US
            <br />
            <span>ABOUT IT.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind, a campaign to execute, or simply want to
            elevate your brand profile? Get in touch.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* Name + Email */}
            <div className="form-row">
              <div className="form-field">
                <label>YOUR NAME *</label>

                <input
                  type="text"
                  required
                />
              </div>

              <div className="form-field">
                <label>EMAIL ADDRESS *</label>

                <input
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Company + Services */}
            <div className="form-row">
              <div className="form-field">
                <label>BRAND / COMPANY</label>

                <input
                  type="text"
                />
              </div>

              <div className="form-field">
                <label>SERVICES NEEDED</label>

                <input
                  type="text"
                  placeholder="PR, Strategy, Social..."
                />
              </div>
            </div>

            {/* Message */}
            <div className="form-field">
              <label>TELL US A LITTLE MORE</label>

              <textarea
                rows="4"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="contact-submit"
            >
              SEND INQUIRY →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}