import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { auth } from '@/services/firebase';
import './Footer.css';
import icon from '@/assets/images/icon.svg?url';
import instagramIcon from '@/assets/images/instagram-icon.svg?url';
import facebookIcon from '@/assets/images/facebook-icon.svg?url';
import linkedinIcon from '@/assets/images/linkedin-icon.svg?url';
import emailIcon from '@/assets/images/email-icon.svg?url';

export default function Footer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Logo & About Us */}
        <div className="footer-left">
          <div className="footer-icon">
            <img src={icon} alt="Icon" />
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
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>

          {/* Email - Centered Below Social Icons */}
          <div className="footer-email">
            <a href="mailto:losttailsapp@gmail.com">
              <img src={emailIcon} alt="Email" />
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
            {user && (
              <NavLink to="/my-reports" className="footer-link">
                My Reports
              </NavLink>
            )}
          </nav>
        </div>
        <img src={icon} alt="Small Icon" className="footer-icon-small" />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} G6. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
