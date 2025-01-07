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
    Batu Ferringhi is where the magic of Penang truly comes alive! By day, this stunning stretch of golden sand and turquoise waters invites you to relax, soak up the sun, or dive into adventure with activities like parasailing and jet skiing. The warm sea breeze and breathtaking ocean views make it the perfect tropical escape.  
    As the sun sets, Batu Ferringhi transforms into a bustling wonderland. The famous Night Market lights up the streets with colorful stalls offering everything from handmade crafts to delicious local treats. It's the best place to hunt for unique souvenirs or sample Penang's vibrant street food scene.  
    For a laid-back evening, head to Bora Bora by Sunset</strong>, a beachside gem where you can sip on chilled cocktails, enjoy mouthwatering dishes, and watch the sky turn into a canvas of fiery hues. The cozy ambiance and lively music make it a must-visit spot to end your day in paradise.  

    <br /><br />
    <strong>Operating Hours:</strong><br />
    The beach is open all day, while the night market kicks off around 6:00 PM and goes late into the evening.  

    <br /><br />
    <strong>Ticket Price:</strong><br />
    Access to the beach and market is completely free! Spend as much or as little as you want on food, souvenirs, or activities. 🌴
  `;

  return (
    <div>
      <Location name="Batu Ferringhi" description={description} images={images} />
    </div>
  );
}

export default BatuFerringhi;
