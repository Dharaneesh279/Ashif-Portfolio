import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop & shared header ── */}
      <header className="header">
        <Link to="/" className="logo">CUTSBYASHIF</Link>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        
        {/* ── Hamburger (mobile only) ── */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        > 
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </button>
      </header>
      {/* ── Full-screen mobile overlay ── */}
      <div className={`mobile-overlay ${menuOpen ? 'mobile-overlay--open' : ''}`}>
        {/* Close button */}
        
        <button className="mobile-overlay__close" onClick={closeMenu} aria-label="Close menu">
          <span />
          <span />
        </button>

        <nav className="mobile-nav">
          {['Home', 'Gallery', 'Services', 'Contact'].map((item, i) => (
            <Link
              key={item}
              to={
                item === 'Home'     ? '/'          :
                item === 'Gallery'  ? '/gallery'   :
                item === 'Services' ? '/#services' :
                '/#contact'
              }
              className="mobile-nav__link"
              style={{ animationDelay: menuOpen ? `${0.1 + i * 0.08}s` : '0s' }}
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;