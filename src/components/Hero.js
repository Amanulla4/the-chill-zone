import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Your Chill Zone Awaits</h1>
        <p className="hero-subtitle">Where Good Vibes Meet Great Mocktails & Cafe Culture</p>
        <p className="hero-description">
          Step into The Chill Zone—your new favorite escape in Latur. We're not just a cafe; 
          we're a vibe. Lounge in our Instagram-worthy space, sip on signature mocktails, 
          grab artisan shakes, and celebrate life's moments.
        </p>
        <button className="cta-button">Explore Menu</button>
      </div>
    </section>
  );
}