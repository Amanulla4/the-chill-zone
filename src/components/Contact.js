import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Find Us & Say Hello</h2>
        <p className="contact-subtitle">We'd love to have you visit us!</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>The Chill Zone Cafe & Mocktail<br />Latur, Maharashtra, India</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🕐</span>
              <div>
                <h3>Opening Hours</h3>
                <p>Monday - Sunday<br />11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>+91 00000 00000</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📸</span>
              <div>
                <h3>Instagram</h3>
                <p>@thechillzone_latur</p>
              </div>
            </div>
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              Chat on WhatsApp
            </a>
          </div>
          <div className="contact-map">
            <iframe
              title="The Chill Zone Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.95!2d76.5604!3d18.4088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf795f61234567%3A0xabcdef1234567890!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}