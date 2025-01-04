import React from 'react';
import Location from './Location'; // Import the reusable Location component

function PinangPeranakanMansion() {
  const images = [
    'pinang-peranakan-mansion-1.png',
    'pinang-peranakan-mansion-2.png',
    'pinang-peranakan-mansion-3.png',
    // Add more images as needed
  ];

  const description = `
    The Pinang Peranakan Mansion is a dazzling peek into the life of Penang’s wealthy Peranakan community from a bygone era. This grand, mint-green mansion is not just a house—it’s a treasure trove of history, culture, and stunning architecture.  
    Step inside and be transported to a world of intricate antiques, lavish furniture, and colorful tiles that tell stories of the Baba-Nyonya (Peranakan) way of life. The mansion’s mix of Chinese, European, and local designs reflects the multicultural essence of Penang. You’ll marvel at the gilded doors, ornate staircases, and rooms filled with over 1,000 antiques that bring this unique heritage to life.  
    A visit here isn’t just about history—it’s about stepping into the glamour of a Peranakan household. Whether you’re exploring the opulent jewelry collection, snapping photos of the stunning interiors, or learning about the fascinating traditions, this mansion is sure to leave you in awe.  

    <br /><br />
    <strong>Operating Hours:</strong><br />
    Monday to Sunday, 9:30 AM - 5:00 PM  

    <br /><br />
    <strong>Ticket Price:</strong><br />
    Adults: RM 25<br />
    Children (6-12 yrs) : RM 12.00<br />
    Junior Children (below 6) : Free

    <br /><br />
    Don’t miss this gem in the heart of George Town—it’s like stepping into a vibrant cultural tapestry! 🏛️✨
  `;

  return (
    <div>
      <Location name="Pinang Peranakan Mansion" description={description} images={images} />
    </div>
  );
}

export default PinangPeranakanMansion;