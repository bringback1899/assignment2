import React, { useState } from 'react';
import './Location.css'; // Import the CSS file for styling

function Location({ name, description, images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State for carousel image index

  // Carousel functions
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div class="center-container">
    <div className="location">
      <h2 className="location-name">{name}</h2>

      {/* Carousel */}
      <div className="carousel">
        {/* Previous Image Button */}
        <button className="carousel-button" onClick={prevImage}>
          &lt; {/* Left arrow for previous image */}
        </button>

        {/* Current Image */}
        <img
          src={images[currentIndex]}
          alt={`${name} ${currentIndex + 1}`}
          className="carousel-image"
        />

        {/* Next Image Button */}
        <button className="carousel-button" onClick={nextImage}>
          &gt; {/* Right arrow for next image */}
        </button>
      </div>

      {/* Description */}
      <p
        className="location-description"
        dangerouslySetInnerHTML={{ __html: description }} // Render HTML
      ></p>
    </div>
    </div>
  );
}

export default Location;