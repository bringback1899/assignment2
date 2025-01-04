import React from 'react';
import Location from './Location'; // Import the reusable Location component

function KampungAgong() {
  const images = [
    'kampung-agong-1.png',
    'kampung-agong-2.png',
    'kampung-agong-3.png',
    // Add more images as needed
  ];

  const description = `
    Escape to the countryside at Kampung Agong, a charming rural retreat that offers a glimpse of traditional Malaysian village life. Surrounded by lush greenery, swaying coconut trees, and picturesque paddy fields, this serene spot is perfect for relaxing, snapping unique photos, and soaking in the beauty of nature.  
    Walk through quaint kampung houses, take a ride on a traditional swing, or explore the scenic pathways dotted with rustic decorations. Kampung Agong is also a great place for family outings, with fun activities and plenty of Instagram-worthy spots!  

    <br /><br />
    <strong>Operating Days& Hours:</strong><br />
    Monday to Sunday (including public holidays)<br />
    ⏰ 9:00 AM - 6:00 PM  

    <br /><br />
    <strong>Ticket Prices:</strong><br />
    - Adult: RM10<br />
    - Children (4-12 years): RM5 (Promo Price, Regular RM7)<br />
    - Infants (0-3 years): Free  

    

    <br /><br />
    Whether you're looking for a peaceful escape or a fun cultural experience, Kampung Agong is a must-visit destination for all ages! 🌴🏡✨
  `;

  return (
    <div>
      <Location name="Kampung Agong" description={description} images={images} />
    </div>
  );
}

export default KampungAgong;