import React from 'react';
import Location from './Location'; // Import the reusable Location component

function EscapeThemePark() {
  const images = [
    'escape-theme-park-1.png',
    'escape-theme-park-2.png',
    'escape-theme-park-3.png',
    // Add more images as needed
  ];

  const description = `
    If you're looking for a day packed with excitement and outdoor fun, Escape Theme Park in Penang is the perfect destination! This award-winning park combines nature and adventure, offering activities for all ages, whether you’re an adrenaline junkie or just want to enjoy some family time.  

    From high ropes courses and ziplines to water slides and obstacle courses, Escape Theme Park lets you unleash your inner adventurer. Dare to try the world’s longest tube water slide or free-fall from thrilling heights! For younger visitors, there are kid-friendly attractions like tree swings and a mini rope course.  

    The park promotes eco-conscious fun, blending its activities harmoniously with the surrounding environment, so you can play guilt-free in nature.  

    <br /><br />
    <strong>Operating Hours:</strong><br />
    Monday to Sunday:<br />
    ⏰ 10:00 AM - 6:00 PM  

    <br /><br />
    <strong>Ticket Prices:</strong><br />
    - Adults (13 years and above): RM136<br />
    - Children (4-12 years): RM90<br />
    - Toddlers (0-3 years): Free<br />
    - Senior Citizens (60+ years): Free  

    <br /><br />
    <strong>Tips:</strong><br />
    - Wear comfortable clothing for outdoor activities.<br />
    - Don’t forget sunscreen and water to stay hydrated.  

    <br /><br />
    Whether you’re swinging through the trees, racing down water slides, or testing your courage on obstacle courses, Escape Theme Park guarantees a day of unforgettable fun! 🌲🎢💦
  `;

  return (
    <div>
      <Location name="Escape Theme Park" description={description} images={images} />
    </div>
  );
}

export default EscapeThemePark;