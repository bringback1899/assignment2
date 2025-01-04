import React from 'react';
import Location from './Location'; // Import the reusable Location component

function Entopia() {
  const images = [
    'entopia-1.png',
    'entopia-2.png',
    'entopia-3.png',
    // Add more images as needed
  ];

  const description = `
    Enter the enchanting world of Entopia, where butterflies flutter freely in a lush, tropical sanctuary. Located in Teluk Bahang, this unique attraction is home to thousands of colorful butterflies and a diverse collection of plants, insects, and reptiles.  
    Step into the Natureland, a massive garden filled with cascading waterfalls, vibrant flowers, and a kaleidoscope of butterflies. Wander through the themed zones, where you can get up close with fascinating creatures and learn about their incredible lives.  
    Inside the Cocoon, enjoy interactive exhibits and educational activities that let you uncover the secrets of the natural world. Perfect for all ages, Entopia is both a peaceful escape and a fun learning experience.  

    <br /><br />
    <strong>Operating Hours:</strong><br />
    Open daily, including public holidays<br />
    9:00 AM – 6:00 PM<br />
    Last admission: 5:00 PM  

    <br /><br />
    <strong>Ticket Prices:</strong><br />
    - Adults: RM75<br />
    - MyKad holders (Adults): RM65<br />
    - Children (4-12 years old): RM55<br />
    - MyKad holders (Children): RM45<br />
    - Seniors (60+): RM55<br />
    - MyKad holders (Seniors): RM45<br />
    - Children under 4: FREE  

    <br /><br />
    <strong>Tips:</strong><br />
    - Wear comfortable shoes and bring a hat or umbrella for the outdoor areas.<br />
    - Check the schedule for butterfly release sessions for a magical moment!<br />
    - Don’t forget your camera to capture these unforgettable scenes.  

    <br /><br />
    A visit to Entopia is a journey into a vibrant, living classroom where nature comes alive. 🦋🌺✨
  `;

  return (
    <div>
      <Location name="Entopia" description={description} images={images} />
    </div>
  );
}

export default Entopia;