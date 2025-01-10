import React from 'react';
import Location from './Location'; // Import the reusable Location component

function ArmenianStreet() {
  const images = [
    '/touristSpotsImages/armenian-street-1.png',
    '/touristSpotsImages/armenian-street-2.png',
    '/touristSpotsImages/armenian-street-3.png',
    '/touristSpotsImages/armenian-street-4.png',
    // Add more images as needed
  ];

  const description = `
    Armenian Street in Penang is a lively and colorful part of George Town, where the rich history of the city comes to life. This vibrant area blends Malay, Chinese, Indian, Peranakan, and European influences, making it a unique and exciting place to explore. The streets are filled with old buildings, street art, and lively festivals that celebrate Penang’s heritage and culture. You’ll find stunning architecture, quirky murals, and spontaneous art around every corner, offering a true taste of George Town’s UNESCO World Heritage charm.

    <br /><br />
    <strong>Operating Days & Hours:</strong><br />
    Open every day, available at any time

    <br /><br />
    <strong>Ticket Price:</strong><br />
    Free!

    <br /><br />
    Come and wander through this artistic street, filled with surprises and the beauty of Penang's culture!
  `;

  return (
    <div>
      <Location name="Armenian Street" description={description} images={images} />
    </div>
  );
}

export default ArmenianStreet;