import { useState } from 'react';
import './Navigation.css';
// import logo from '@assets/images/logo.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/images/logo.svg" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/about" className="nav-item">
          Lost & Found
        </a>
        <a href="/contact" className="nav-item">
          Adoptions
        </a>
        <a href="/contact" className="nav-item">
          About
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/about" className="nav-item">
          About
        </a>
        <a href="/contact" className="nav-item">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
