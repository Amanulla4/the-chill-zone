import React, { useState } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Regular Customer",
    review: "The Chill Zone is literally my second home! The ambiance is so cozy and the mocktails are out of this world. Every visit feels like a mini vacation! 🌟",
    rating: 5,
    avatar: "RS"
  },
  {
    id: 2,
    name: "Priya Desai",
    role: "Food Blogger",
    review: "As a food blogger, I've visited hundreds of cafes — but The Chill Zone stands out! The Instagram-worthy interiors and the Butterscotch Shake are absolutely divine! 📸",
    rating: 5,
    avatar: "PD"
  },
  {
    id: 3,
    name: "Arjun Patil",
    role: "College Student",
    review: "Perfect spot for hangouts with friends! Great vibe, affordable prices, and the staff is super friendly. The Oreo Shake is my absolute favorite! 🎉",
    rating: 5,
    avatar: "AP"
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Working Professional",
    review: "I celebrated my birthday here and it was magical! The team made it so special. The decor, the food, the energy — everything was perfect! 🎂",
    rating: 5,
    avatar: "SK"
  },
  {
    id: 5,
    name: "Rohan Joshi",
    role: "Local Foodie",
    review: "Finally a cafe in Latur that matches metro city vibes! The mocktails are fresh, the seating is comfortable, and the lighting is just chef's kiss! 😍",
    rating: 5,
    avatar: "RJ"
  },
  {
    id: 6,
    name: "Ananya Mehta",
    role: "Frequent Visitor",
    review: "Came here for a first date and now we're regulars! The Chill Zone has a magical way of making every moment memorable. Love this place! ❤️",
    rating: 5,
    avatar: "AM"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((active + 1) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Guests Say</h2>
        <p className="testimonials-subtitle">Real experiences from our amazing community ❤️</p>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="stars">
                {"⭐".repeat(t.rating)}
              </div>
              <p className="review-text">"{t.review}"</p>
              <div className="reviewer">
                <div className="avatar">{t.avatar}</div>
                <div className="reviewer-info">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}