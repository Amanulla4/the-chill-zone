import React, { useState } from 'react';
import '../styles/Gallery.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: require('../assets/cafe1.jpg'), alt: 'The Chill Zone Interior', category: 'interior' },
    { id: 2, src: require('../assets/cafe2.jpg'), alt: 'Cozy Seating Area', category: 'interior' },
    { id: 3, src: require('../assets/cafe3.jpg'), alt: 'Mocktails Bar', category: 'drinks' },
    { id: 4, src: require('../assets/cafe4.jpg'), alt: 'Cafe Corner', category: 'interior' },
    { id: 5, src: require('../assets/cafe5.jpg'), alt: 'Delicious Food', category: 'food' },
    { id: 6, src: require('../assets/cafe6.jpg'), alt: 'Happy Hours', category: 'events' },
    { id: 7, src: require('../assets/cafe7.jpg'), alt: 'Chill Vibes', category: 'interior' },
  ];

  const categories = [
    { id: 'all', label: 'All Photos', emoji: '📸' },
    { id: 'interior', label: 'Interior', emoji: '🏠' },
    { id: 'drinks', label: 'Drinks', emoji: '🍹' },
    { id: 'food', label: 'Food', emoji: '🍕' },
    { id: 'events', label: 'Events', emoji: '🎉' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Gallery</h2>
        <p className="gallery-subtitle">Step into The Chill Zone - Where Every Corner is Instagram-Worthy! 📸</p>

        {/* Category Filters */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="filter-emoji">{cat.emoji}</span>
              <span className="filter-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="view-icon">🔍</span>
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
            <div className="lightbox-caption">
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}