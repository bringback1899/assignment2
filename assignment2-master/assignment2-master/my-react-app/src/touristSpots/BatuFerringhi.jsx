import React from 'react';
import Location from './Location'; // Import the reusable Location component

function BatuFerringhi() {
  const images = [
    '/touristSpotsImages/batu-ferringhi-1.png',
    '/touristSpotsImages/batu-ferringhi-2.png',
    '/touristSpotsImages/batu-ferringhi-3.png',
    // Add more images as needed
  ];

  const description = `
    Batu Ferringhi is Penang's tropical paradise! 🌴 By day, enjoy golden sands, turquoise waters, and thrilling activities like parasailing and jet skiing. Soak in the sun and let the warm sea breeze whisk your worries away.  
    At night, the vibrant Night Market takes center stage with colorful stalls offering handmade crafts, delicious street food, and unique souvenirs.  

    For a perfect evening, visit Bora Bora by Sunset. Savor cocktails and mouthwatering dishes as you relax to lively music and breathtaking sunsets—a magical end to your day!  

    <br /><br />
    <strong>Operating Hours:</strong><br />
    Beach: Open all day 
    <br/> Night Market: From 6:00 PM till late  <br/>
    <br/>
    <strong>Ticket Price:</strong><br />
    Free entry! Spend on food, souvenirs, or activities at your leisure. 🌊
  `;


  return (
    <div>
      <Location name="Batu Ferringhi" description={description} images={images} />
    </div>
  );
}

export default BatuFerringhi;
