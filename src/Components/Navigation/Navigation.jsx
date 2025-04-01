import { useState } from 'react';
import { NavLink } from 'react-router';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <NavLink to="/" className="nav-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/lost-found" className="nav-item" activeClassName="active">
          Lost & Found
        </NavLink>
        <NavLink to="/adoption" className="nav-item" activeClassName="active">
          Adoptions
        </NavLink>
        <NavLink to="/donation" className="nav-item" activeClassName="active">
          Donation
        </NavLink>
        <NavLink to="/my-reports" className="nav-item" activeClassName="active">
          My Reports
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
          activeClassName="active"
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/lost-found"
          className="nav-item"
          activeClassName="active"
          onClick={() => setIsOpen(false)}
        >
          Lost & Found
        </NavLink>
        <NavLink
          to="/adoption"
          className="nav-item"
          activeClassName="active"
          onClick={() => setIsOpen(false)}
        >
          Adoptions
        </NavLink>
        <NavLink
          to="/donation"
          className="nav-item"
          activeClassName="active"
          onClick={() => setIsOpen(false)}
        >
          Donation
        </NavLink>
        <NavLink
          to="/my-reports"
          className="nav-item"
          activeClassName="active"
          onClick={() => setIsOpen(false)}
        >
          My Reports
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
