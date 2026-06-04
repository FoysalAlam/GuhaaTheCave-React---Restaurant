import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Menu', 'Highlights', 'Amenities', 'Reviews', 'Reserve'];

  return (
    <nav className={`cave-nav navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid px-4">
        <a className="navbar-brand cave-logo" href="#hero">Guhaa</a>
        <button
          className="navbar-toggler cave-toggler"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-lg-3">
            {links.map(link => (
              <li className="nav-item" key={link}>
                <a
                  className="nav-link cave-nav-link"
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
