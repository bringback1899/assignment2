import React from 'react';
import { Link } from 'react-router-dom';
import './TouristSpots.css';

function TouristSpots() {

    const spots = [
        { name: 'Penang Hill', image: '/touristSpotsImages/penang-hill.png', link: '/penang-hill' },
        { name: 'Armenian Street', image: '/touristSpotsImages/armenian-street.png', link: '/armenian-street' },
        { name: 'Kek Lok Si', image: '/touristSpotsImages/kek-lok-si.png', link: '/kek-lok-si' },
        { name: 'Batu Ferringhi', image: '/touristSpotsImages/batu-ferringhi.png', link: '/batu-ferringhi' },
        { name: 'Pinang Peranakan Mansion', image: '/touristSpotsImages/pinang-peranakan-mansion.png', link: '/pinang-peranakan-mansion' },
        { name: 'Kampung Agong', image: '/touristSpotsImages/kampung-agong.png', link: '/kampung-agong' },
        { name: 'Escape Theme Park', image: '/touristSpotsImages/escape-theme-park.png', link: '/escape-theme-park' },
        { name: 'Chew Jetty', image: '/touristSpotsImages/chew-jetty.png', link: '/chew-jetty' },
        { name: 'Entopia', image: '/touristSpotsImages/entopia.png', link: '/entopia' },
      ];

  return (
    <div className="tourist-spots">
      <h1 className="tourist-title">
        Top Tourist Spots in Penang
        <img
          src="/penang-flag.png"
          alt="Penang Flag"
          className="tourist-flag"
        />
      </h1>

      <div className="main-content">
        {spots.map((spot, index) => (
          <div className="spot" key={index}>
            <div className="image-wrapper">
              {/* Clickable Image */}
              <Link to={spot.link}>
                <img src={spot.image} alt={spot.name} className="spot-image" />
              </Link>

              {/* Clickable Button */}
              <Link to={spot.link}>
                <button className="spot-button">{spot.name.toUpperCase()}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TouristSpots;
