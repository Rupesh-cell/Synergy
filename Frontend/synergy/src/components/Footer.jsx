import React from "react";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* LOGO & ABOUT */}
        <div className="footer-section about">
          <h3>Synergy Diving</h3>
          <p>
            Leading provider of professional diving equipment and solutions.
            Delivering safety, reliability, and innovation since 2008.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-section newsletter">
          <h4>Subscribe</h4>
          <p>Get updates and offers directly to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Synergy Diving Equipment Trading. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
