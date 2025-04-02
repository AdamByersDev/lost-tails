import { useState } from 'react';
import { NavLink } from 'react-router';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <NavLink to="/" className="nav-item" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/lost-found" className="nav-item" activeclassname="active">
          Lost & Found
        </NavLink>
        <NavLink to="/adoption" className="nav-item" activeclassname="active">
          Adoptions
        </NavLink>
        <NavLink to="/donation" className="nav-item" activeclassname="active">
          Donation
        </NavLink>
        <NavLink
          to="/successful-cases"
          className="nav-item"
          activeclassname="active"
        >
          Success Stories
        </NavLink>
      </div>

      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className="nav-item"
          activeclassname="active"
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/lost-found"
          className="nav-item"
          activeclassname="active"
          onClick={() => setIsOpen(false)}
        >
          Lost & Found
        </NavLink>
        <NavLink
          to="/adoption"
          className="nav-item"
          activeclassname="active"
          onClick={() => setIsOpen(false)}
        >
          Adoptions
        </NavLink>
        <NavLink
          to="/donation"
          className="nav-item"
          activeclassname="active"
          onClick={() => setIsOpen(false)}
        >
          Donation
        </NavLink>
        <NavLink
          to="/successful-cases"
          className="nav-item"
          activeclassname="active"
          onClick={() => setIsOpen(false)}
        >
          Success Stories
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
