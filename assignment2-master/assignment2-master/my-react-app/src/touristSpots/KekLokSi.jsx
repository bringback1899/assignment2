import React from 'react';
import Location from './Location'; // Import the reusable Location component

function KekLokSi() {
  const images = [
    '/touristSpotsImages/kek-lok-si-1.png',
    '/touristSpotsImages/kek-lok-si-2.png',
    '/touristSpotsImages/kek-lok-si-3.png',
    // Add more images as needed
  ];

  const description = `
    Kek Lok Si is one of the most beautiful and significant temples in Penang, often referred to as the "Temple of Supreme Bliss." Located in Air Itam, this sprawling temple complex offers stunning views of the island and a peaceful escape into spirituality. The temple is a blend of traditional Chinese, Thai, and Burmese architectural styles, and it's famous for its majestic pagoda, intricate statues, and vibrant decorations. Visitors can also see the impressive giant statue of the Goddess of Mercy, Kuan Yin. The temple is a place of worship and a must-visit for those interested in culture, history, and natural beauty.🙏

    <br /><br />
    <strong>Operating Days & Hours:</strong><br />
    Open every day from 8:30 AM to 5:30 PM

    <br /><br />
    <strong>Ticket Price:</strong><br />
    Free to enter, but some attractions inside may require a fee.
  `;

  return (
    <div>
      <Location name="Kek Lok Si" description={description} images={images} />
    </div>
  );
}

export default KekLokSi;