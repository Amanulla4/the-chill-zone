import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">More Than Just Coffee</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              The Chill Zone was born from a simple idea: create a space where people actually want to hang out. 
              A place where:
            </p>

            <div className="about-points">
              <div className="about-point">
                <h3>🎨 The Ambiance is Curated</h3>
                <p>
                  Every hanging plant, every neon sign, every warm light is designed to make you feel at home. 
                  Instagram-worthy corners at every turn.
                </p>
              </div>

              <div className="about-point">
                <h3>🍹 The Drinks are Thoughtful</h3>
                <p>
                  Our mocktails and shakes aren't just beverages; they're experiences. Fresh, flavorful, 
                  and crafted with care. Every sip tells a story.
                </p>
              </div>

              <div className="about-point">
                <h3>🎉 Moments are Celebrated</h3>
                <p>
                  Birthdays? Get-togethers? First dates? We've got the perfect backdrop and the perfect energy. 
                  Your milestones matter to us.
                </p>
              </div>

              <div className="about-point">
                <h3>👥 Good People Gather</h3>
                <p>
                  Our space brings strangers together and turns them into regulars. Community is at the heart 
                  of everything we do.
                </p>
              </div>
            </div>

            <p className="about-closing">
              <strong>We believe that great spaces create great memories. Welcome to yours.</strong>
            </p>
          </div>

          <div className="about-image">
            <img 
              src={require('../assets/cafe1.jpg')} 
              alt="The Chill Zone Interior" 
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}