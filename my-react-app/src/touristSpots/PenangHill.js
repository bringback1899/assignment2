import React from 'react';
import Location from './Location'; // Import the reusable Location component

function PenangHill() {
  const images = [
    '/touristSpotsImages/penang-hill-1.png',
    '/touristSpotsImages/penang-hill-2.png',
    '/touristSpotsImages/penang-hill-3.png',
    // Add more images as needed
  ];

  const description = `
    Penang Hill, also known as Bukit Bendera, is a beautiful hilltop with stunning views, lush greenery, and charming British-style bungalows, making it an ideal spot for afternoon tea in a cooler atmosphere. Visitors can reach the top in just seven minutes by taking the funicular train, or for those who enjoy adventure, a jungle hike is an option. One of the newest attractions is The Habitat, which offers a unique rainforest experience. It's home to a variety of plants, animals, insects, and reptiles, allowing you to enjoy the beauty of nature up close.

    <br /><br />
    <strong>Operating Days:</strong><br />
    Open every day from Monday to Sunday

    <br /><br />
    <strong>Operating Hours:</strong><br />
    6:30 AM to 11:00 PM (Last train departs from the top station)

    <br /><br />
    <strong>Ticket Price:</strong><br />
    Adult: RM30 (for a return ticket)<br />
    Child: RM15 (for a return ticket)

    <br /><br />
    Enjoy a peaceful escape and explore the natural wonders of Penang Hill!
  `;

  return (
    <div>
      <Location name="Penang Hill" description={description} images={images} />
    </div>
  );
}

export default PenangHill;