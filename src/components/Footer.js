import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-title">CONTACT US</div>
      <ul className="footer-contact">
        <li className="footer-contact-item">Email: example@example.com</li>
        <li className="footer-contact-item">Phone: +1234567890</li>
        <li className="footer-contact-item">Address: 123 Street, City, Country</li>
      </ul>
    </footer>
  );
}

export default Footer;
