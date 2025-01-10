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
    Discover the vibrant charm of Armenian Street in George Town, Penang! 🌟 This historic area is a lively blend of cultures, boasting stunning architecture, quirky street art, and spontaneous creativity. Explore murals, heritage buildings, and festivals that showcase Penang's rich history and UNESCO charm. 

    <br /><br />
    <strong>Operating Days & Hours:</strong><br />
    Open daily, anytime!

    <br /><br />
    <strong>Ticket Price:</strong><br />
    Absolutely free!

    <br /><br />
    Stroll through this artistic haven and uncover Penang's cultural heartbeat!✨
  `;

  

  return (
    <div>
      <Location name="Armenian Street" 
      description={description} 
      images={images} 
  
        />
    </div>
  );
}

export default ArmenianStreet;