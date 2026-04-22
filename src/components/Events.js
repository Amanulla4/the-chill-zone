import React from 'react';
import '../styles/Events.css';

const events = [
  {
    id: 1,
    emoji: '🎂',
    title: 'Birthday Celebrations',
    description: 'Make your special day unforgettable! We offer customized birthday setups, special mocktail combos, and a vibe that your friends will talk about for years.',
    features: ['Custom Decoration', 'Special Birthday Mocktail', 'Group Seating', 'Photo Corner'],
    tag: 'Most Popular'
  },
  {
    id: 2,
    emoji: '🎉',
    title: 'Group Hangouts',
    description: 'Planning a get-together with your squad? Book our space for your group and enjoy exclusive deals, unlimited fun, and the best mocktails in Latur!',
    features: ['Group Discounts', 'Reserved Seating', 'Custom Menu', 'Fun Atmosphere'],
    tag: 'Best for Groups'
  },
  {
    id: 3,
    emoji: '💑',
    title: 'Date Nights',
    description: 'Looking for the perfect date spot? The Chill Zone offers a cozy, romantic ambiance with mood lighting and signature mocktails crafted for two.',
    features: ['Romantic Setup', 'Couple Mocktail', 'Mood Lighting', 'Private Corner'],
    tag: 'Romantic'
  },
  {
    id: 4,
    emoji: '🎓',
    title: 'College Celebrations',
    description: 'Results out? Semester done? Come celebrate with your college crew! Special student packages available with amazing deals.',
    features: ['Student Discounts', 'Large Group Space', 'Fun Games', 'Affordable Combos'],
    tag: 'Student Special'
  },
  {
    id: 5,
    emoji: '💼',
    title: 'Corporate Meetups',
    description: 'Need a relaxed space for your team meeting or casual corporate gathering? The Chill Zone provides a refreshing alternative to boring boardrooms.',
    features: ['Professional Setup', 'WiFi Available', 'Refreshments', 'Flexible Timing'],
    tag: 'Professional'
  },
  {
    id: 6,
    emoji: '📸',
    title: 'Content Creation',
    description: 'Influencers and content creators — our Instagram-worthy interiors are your perfect backdrop! Book a slot for your photoshoot or reel creation.',
    features: ['Aesthetic Corners', 'Good Lighting', 'Flexible Hours', 'Unique Backdrops'],
    tag: 'For Creators'
  }
];

export default function Events() {
  return (
    <section id="events" className="events">
      <div className="events-container">
        <h2 className="events-title">Events & Celebrations</h2>
        <p className="events-subtitle">Every moment deserves a perfect setting — we've got yours covered! 🎊</p>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-tag">{event.tag}</div>
              <div className="event-emoji">{event.emoji}</div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <ul className="event-features">
                {event.features.map((feature, index) => (
                  <li key={index}>✅ {feature}</li>
                ))}
              </ul>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="event-btn">
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="events-cta">
          <h3>Have a Custom Event in Mind?</h3>
          <p>Contact us directly and we'll make it happen!</p>
          <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="events-whatsapp-btn">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}