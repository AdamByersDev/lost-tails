// import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { auth } from '@/services/firebase';
import { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';
import icon from '@/assets/images/icon.svg?url';
import instagramIcon from '@/assets/images/instagram-icon.svg?url';
import facebookIcon from '@/assets/images/facebook-icon.svg?url';
import linkedinIcon from '@/assets/images/linkedin-icon.svg?url';
import emailIcon from '@/assets/images/email-icon.svg?url';

export default function Footer() {
  // <<<<<<< HEAD
  //   const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //       setUser(currentUser);
  //     });
  //     return () => unsubscribe();}, []);
  // =======
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight - 125) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
    // >>>>>>> main
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.footerContent}>
        {/* Left Section - Logo & About Us */}
        <div className={styles.footerLeft}>
          <div className={styles.footerIcon}>
            <img src={icon} alt="Icon" />
          </div>
          <div className={styles.footerAboutContainer}>
            <h3 className={styles.footerHeader}>Who We Are</h3>
            <p className={styles.footerAbout}>
              We are a team of dedicated students committed to reuniting lost
              pets with their families. Our passion also extends to supporting
              local animal rescues and helping pets in need.
            </p>
          </div>
        </div>

        {/* Center Section - Social Media Links */}
        <div className={styles.footerSocial}>
          <h3 className={styles.footerHeader}>Follow Us</h3>
          <div className={styles.footerSocialLinks}>
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
          <div className={styles.footerEmail}>
            <a href="mailto:losttailsapp@gmail.com">
              <img src={emailIcon} alt="Email" />
              losttailsapp@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className={styles.footerNavContainer}>
          <h3 className={styles.footerHeader}>Quick Links</h3>
          <nav className={styles.footerNav}>
            <NavLink to="/" className={styles.footerLink}>
              Home
            </NavLink>
            <NavLink to="/lost-found" className={styles.footerLink}>
              Lost & Found
            </NavLink>
            <NavLink to="/adoption" className={styles.footerLink}>
              Adoptions
            </NavLink>
            <NavLink to="/donation" className={styles.footerLink}>
              Donate
            </NavLink>

            {user && (
              <NavLink to="/my-reports" className={styles.footerLink}>
                My Reports
              </NavLink>
            )}
          </nav>
        </div>

        {/* Small Icon - Shows Only in Footer */}
        {isVisible && (
          <img src={icon} alt="Small Icon" className={styles.footerIconSmall} />
        )}
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} G6. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
