import React, { useState } from 'react';
import './Location.css'; // Import the CSS file for styling

function Location({ name, description, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="location">
      <h2 className="location-name">{name}</h2>
      <div className="carousel">
        <button onClick={prevImage}>&lt;</button>
        <img
          src={images[currentIndex]}
          alt={`${name}  ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button onClick={nextImage}>&gt;</button>
      </div>
      <p 
        className="location-description"
        dangerouslySetInnerHTML={{ __html: description }} // Render HTML
      ></p>
    </div>
  );
}

export default Location;