import React from 'react';
import Location from './Location'; // Import the reusable Location component

function ChewJetty() {
  const images = [
    'chew-jetty-1.png',
    'chew-jetty-2.png',
    'chew-jetty-3.png',
    // Add more images as needed
  ];

  const description = `
    Step into the past at Chew Jetty, one of the iconic clan jetties of Penang. This charming wooden village on stilts stretches over the waters of George Town, offering a unique glimpse into the lives of the Chinese immigrant families who settled here over a century ago.  
    Stroll along the boardwalk and explore quaint wooden houses, small shops, and local eateries. Don’t miss the temple at the jetty’s entrance, where traditions and beliefs remain deeply rooted. Chew Jetty is also a great spot for taking in beautiful waterfront views and snapping memorable photos.  
    The jetty comes alive during festivals like the Chinese New Year, with colorful decorations, lion dances, and the vibrant energy of the Chew Clan’s celebrations.  

    <br /><br />
    <strong>Operating Hours:</strong><br />
    Free to explore any time.  

    <br /><br />
    <strong>Admission:</strong><br />
    It’s free to visit Chew Jetty!  

    <br /><br />
    <strong>Tips:</strong><br />
    - Visit in the late afternoon or early evening for cooler weather and stunning sunset views.<br />
    - Support the local community by purchasing handmade crafts or snacks from the residents.  

    <br /><br />
    A visit to Chew Jetty is a step back in time and a celebration of Penang’s multicultural history. Don’t miss this must-see spot during your trip! 🌊🏠✨
  `;

  return (
    <div>
      <Location name="Chew Jetty" description={description} images={images} />
    </div>
  );
}

export default ChewJetty;