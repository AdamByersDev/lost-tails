import { NavLink } from 'react-router';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Logo & About Us */}
        <div className="footer-left">
          <div className="footer-icon">
            <img src="/src/assets/images/icon.svg" alt="Icon" />
          </div>
          <div className="footer-about-container">
            <h3 className="footer-header">Who We Are</h3>
            <p className="footer-about">
              We are a team of dedicated students committed to reuniting lost
              pets with their families. Our passion also extends to supporting
              local animal rescues and helping pets in need.
            </p>
          </div>
        </div>

        {/* Center Section - Social Media Links */}
        <div className="footer-social">
          <h3 className="footer-header">Follow Us</h3>
          <div className="footer-social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/images/instagram-icon.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/images/facebook-icon.svg" alt="Facebook" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/src/assets/images/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>

          {/* Email - Centered Below Social Icons */}
          <div className="footer-email">
            <a href="mailto:losttailsapp@gmail.com">
              <img src="/src/assets/images/email-icon.svg" alt="Email" />
              losttailsapp@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="footer-nav-container">
          <h3 className="footer-header">Quick Links</h3>
          <nav className="footer-nav">
            <NavLink to="/" className="footer-link">
              Home
            </NavLink>
            <NavLink to="/lost-found" className="footer-link">
              Lost & Found
            </NavLink>
            <NavLink to="/adoption" className="footer-link">
              Adoptions
            </NavLink>
            <NavLink to="/donation" className="footer-link">
              Donate
            </NavLink>
            <NavLink to="/successful-cases" className="footer-link">
              Success Stories
            </NavLink>
          </nav>
        </div>
        <img
          src="/src/assets/images/icon.svg"
          alt="Small Icon"
          className="footer-icon-small"
        />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} G6. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
