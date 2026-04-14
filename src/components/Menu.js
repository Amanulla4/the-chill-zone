import React, { useState } from 'react';
import '../styles/Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('milkshakes');

  const menuData = {
    milkshakes: [
      { name: 'Strawberry Shake', price: '₹120' },
      { name: 'Butterscotch Shake', price: '₹130' },
      { name: 'Oreo Shake', price: '₹140' },
      { name: 'Chocolate Shake', price: '₹150' },
      { name: 'Kitkat Shake', price: '₹160' },
      { name: 'Nutella Shake', price: '₹170' },
      { name: 'Banana Shake', price: '₹150' },
      { name: 'Banana Nutella Shake', price: '₹180' },
    ],
    mocktails: [
      { name: 'Fresh Mint Mojito', price: '₹100' },
      { name: 'Green Apple Spark', price: '₹100' },
      { name: 'Blue Orange Twist', price: '₹100' },
      { name: 'Watermelon Chill', price: '₹110' },
      { name: 'Virgin', price: '₹110' },
      { name: 'Pinacolda', price: '₹120' },
      { name: 'Ice Tea', price: '₹120' },
    ],
    beverages: [
      { name: 'Hot Coffee', price: '₹80' },
      { name: 'Cold Coffee', price: '₹90' },
      { name: 'Thick Cold Coffee', price: '₹100' },
      { name: 'Ice Cold Coffee', price: '₹80' },
      { name: 'Cold Chocolate Coffee', price: '₹160' },
      { name: 'Cold Coffee with Crush', price: '₹100' },
      { name: 'Cold Coffee with Icecream', price: '₹130' },
      { name: 'Oreo Coffee', price: '₹150' },
      { name: 'Caramel Coffee', price: '₹150' },
      { name: 'Kitkat Coffee', price: '₹150' },
    ],
    food: [
      { name: 'Veg Grill Sandwich', price: '₹110' },
      { name: 'Veg Cheese Grill', price: '₹120' },
      { name: 'Chilli Cheese', price: '₹130' },
      { name: 'Cheese Corn Grill', price: '₹140' },
      { name: 'Paneer Cheese Grill', price: '₹150' },
      { name: 'Paneer & Corn Grill', price: '₹170' },
      { name: 'Chocolate Toast', price: '₹170' },
      { name: 'Salted Fries', price: '₹110' },
      { name: 'Cheese Fries', price: '₹120' },
      { name: 'Peri Peri Fries', price: '₹140' },
    ],
    pizza: [
      { name: 'Margherita', price: '₹200' },
      { name: 'Veg Cheese', price: '₹200' },
      { name: 'Spicy Veg', price: '₹210' },
      { name: 'Hot & Spicy', price: '₹220' },
      { name: 'Cheese & Corn', price: '₹220' },
      { name: 'Paneer Tikka Delight', price: '₹240' },
      { name: 'Peri Peri Paneer', price: '₹240' },
      { name: 'Paneer Corn', price: '₹250' },
      { name: 'Fantastic Italian', price: '₹260' },
    ],
  };

  const categories = [
    { id: 'milkshakes', label: 'Milkshakes', emoji: '🥤' },
    { id: 'mocktails', label: 'Mocktails', emoji: '🍹' },
    { id: 'beverages', label: 'Beverages', emoji: '☕' },
    { id: 'food', label: 'Food', emoji: '🍴' },
    { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  ];

  return (
    <section id="menu" className="menu">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <p className="menu-subtitle">Signature Sips & Bites Crafted with Love</p>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="tab-emoji">{cat.emoji}</span>
              <span className="tab-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-header">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-price">{item.price}</span>
              </div>
              <div className="item-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}