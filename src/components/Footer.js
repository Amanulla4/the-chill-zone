import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Tagline */}
        <div className="footer-brand">
          <img src={require('../assets/logo.png.jpg')} alt="The Chill Zone" className="footer-logo" />
          <h3>The Chill Zone</h3>
          <p>Where Good Vibes Meet Great Mocktails</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://instagram.com/thechillzone_latur" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              Instagram
            </a>
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              WhatsApp
            </a>
          </div>
          <p className="footer-address">Latur, Maharashtra, India</p>
          <p className="footer-hours">Open Daily: 11AM - 11PM</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 The Chill Zone Cafe & Mocktail. All rights reserved.</p>
        <p>Made with by Aman Pathan</p>
      </div>
    </footer>
  );
}