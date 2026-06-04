import React from 'react';

function Footer() {
  const navLinks = ['About', 'Menu', 'Highlights', 'Amenities', 'Reviews', 'Reserve'];
  return (
    <footer className="cave-footer">
      <div className="container">
        <div className="row g-5 pb-4 border-bottom border-secondary">
          <div className="col-lg-5">
            <span className="cave-logo d-block mb-3">Guhaa — The Cave Kitchen</span>
            <p className="cave-text" style={{maxWidth:'300px'}}>A continental dining experience unlike any other. Cave-themed interiors, panoramic Dhaka skyline views, and exceptional food since 2015.</p>
            <div className="d-flex gap-2 mt-3">
              <a href="https://facebook.com/guhaathecavekitchen" target="_blank" rel="noreferrer" className="social-btn">f</a>
              <a href="https://instagram.com/guhaathecave" target="_blank" rel="noreferrer" className="social-btn">in</a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5 className="footer-heading">Navigate</h5>
            <ul className="list-unstyled">
              {navLinks.map(l => (
                <li key={l} className="mb-1">
                  <a href={`#${l.toLowerCase()}`} className="footer-link">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4">
            <h5 className="footer-heading">Contact</h5>
            <ul className="list-unstyled cave-text">
              <li className="mb-1"><a href="tel:+8801971144408" className="footer-link">+880 1971-144408</a></li>
              <li className="mb-1"><a href="mailto:guhaa09@yahoo.com" className="footer-link">guhaa09@yahoo.com</a></li>
              <li className="mb-1"><a href="https://guhaabd.com" target="_blank" rel="noreferrer" className="footer-link">guhaabd.com</a></li>
            </ul>
            <h5 className="footer-heading mt-3">Address</h5>
            <p className="cave-text mb-0">Level 9, Rangs KB Square, 49/A Satmasjid Road, Dhanmondi, Dhaka-1205</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 gap-2">
          <p className="mb-0 footer-copy">© 2025 Guhaa — The Cave Kitchen. All rights reserved.</p>
          <p className="mb-0 footer-copy">Est. 2015 · Dhanmondi, Dhaka</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
