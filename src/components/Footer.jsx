import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              THE <span>NOISE</span> CLUB.
            </a>

            <p>
              An independent creative communications agency making brands
              impossible to ignore through PR, strategy, and culture.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <span className="footer-heading">
              NAVIGATE
            </span>

            <ul className="footer-links">
              <li>
                <a href="#home">HOME</a>
              </li>

              <li>
                <a href="#about">ABOUT</a>
              </li>

              <li>
                <a href="#services">SERVICES</a>
              </li>

              <li>
                <a href="#work">WORK</a>
              </li>

              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <span className="footer-heading">
              CONNECT
            </span>

            <p className="footer-email">
              HELLO@THENOISECLUB.COM
            </p>

            <div className="footer-socials">
              <a href="#">INSTAGRAM</a>
              <a href="#">LINKEDIN</a>
              <a href="#">TWITTER / X</a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 THE NOISE CLUB. ALL RIGHTS RESERVED.
          </p>

          <div className="footer-legal">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS &amp; CONDITIONS</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;