import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarGallery.css";

const NavbarGallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <>
      <header className="header-gallery">
        <Link to="/" className="logo-gallery">CUTSBYASHIF</Link>
        <nav className="navbar-gallery">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <button
          className={`hamburger-gallery ${menuOpen ? 'hamburger-gallery--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-gallery__line" />
          <span className="hamburger-gallery__line" />
        </button>
      </header>

      <div className={`mobile-overlay-gallery ${menuOpen ? 'mobile-overlay-gallery--open' : ''}`}>
        <button className="mobile-overlay-gallery__close" onClick={closeMenu} aria-label="Close menu">
          <span />
          <span />
        </button>

        <nav className="mobile-nav-gallery">
          {['Home', 'Gallery', 'Services', 'Contact'].map((item, i) => (
            <Link
              key={item}
              to={
                item === 'Home'     ? '/'          :
                item === 'Gallery'  ? '/gallery'   :
                item === 'Services' ? '/#services' :
                '/#contact'
              }
              className="mobile-nav-gallery__link"
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

export default NavbarGallery;