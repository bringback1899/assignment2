import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import TouristSpots from './TouristSpots';
import PenangHill from './touristSpots/PenangHill';
import ArmenianStreet from './touristSpots/ArmenianStreet'; // Add your components for other spots
import KekLokSi from './touristSpots/KekLokSi';
import BatuFerringhi from './touristSpots/BatuFerringhi';
import PinangPeranakanMansion from './touristSpots/PinangPeranakanMansion';
import KampungAgong from './touristSpots/KampungAgong';
import EscapeThemePark from './touristSpots/EscapeThemePark';
import ChewJetty from './touristSpots/ChewJetty';
import Entopia from './touristSpots/Entopia';

function App() {
  const location = useLocation();

  return (
    <div style={{ backgroundColor: 'var(--primary-color)', minHeight: '100vh' }}>
      {location.pathname === '/' && (
        <div>
          <h1>Welcome to Penang </h1>
          <h2>Dont know what to eat? Dont know where to go? Dont know where to stay?</h2>
          <h2>DONT WORRY WE GOT YOU!!!</h2>
          <nav>
            <Link to="/tourist-spots">Explore Tourist Spots</Link>
          </nav>
        </div>
      )}
      <Routes>
        <Route path="/tourist-spots" element={<TouristSpots />} />
        <Route path="/penang-hill" element={<PenangHill />} />
        <Route path="/armenian-street" element={<ArmenianStreet />} />
        <Route path="/kek-lok-si" element={<KekLokSi />} />
        <Route path="/batu-ferringhi" element={<BatuFerringhi />} />
        <Route path="/pinang-peranakan-mansion" element={<PinangPeranakanMansion />} />
        <Route path="/kampung-agong" element={<KampungAgong />} />
        <Route path="/escape-theme-park" element={<EscapeThemePark />} />
        <Route path="/chew-jetty" element={<ChewJetty />} />
        <Route path="/entopia" element={<Entopia />} />
      </Routes>
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
