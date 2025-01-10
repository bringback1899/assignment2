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

//import hotel components
import HighBudgetHotel from './Components/HighBudgetHotel';
import MediumBudgetHotel from './Components/MediumBudgetHotel';
import LowBudgetHotel from './Components/LowBudgetHotel';
import Navbar from './Navbar.jsx';


function App() {
  const location = useLocation();

  return (
    <div  className="homepage-container" style={{  minHeight: '100vh',paddingTop: '80px'  }}>
      <Navbar />
      {location.pathname === '/' && (
        <div>
          <h1>Welcome to Penang </h1>
          <h2>Dont know what to eat? Dont know where to go? Dont know where to stay?</h2>
          <h2>DONT WORRY WE GOT YOU!!!</h2>

          {/* Image for About Us Section */}
          <div>
            <img 
              src="/aboutus.jpg" 
              alt="About Us" 
              className="about-us-image" 
            />
            <div className="about-us-description">
              <p>We are students from Universiti Sains Malaysia XD Here at Penang, we provide the best experiences, from cultural spots to top-tier accommodations. Our goal is to help you explore the beauty of this amazing island!</p>
            </div>
          </div>

          <nav>
  <Link to="/tourist-spots">
    <button>Explore Tourist Spots</button>
  </Link>
  <Link to="/HighBudgetHotel">
    <button>High Budget Hotels</button>
  </Link>
  <Link to="/MediumBudgetHotel">
    <button>Medium Budget Hotels</button>
  </Link>
  <Link to="/LowBudgetHotel">
    <button>Low Budget Hotels</button>
  </Link>
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

        <Route path="/HighBudgetHotel" element={<HighBudgetHotel />} />
        <Route path="/MediumBudgetHotel" element={<MediumBudgetHotel />} />
        <Route path="/LowBudgetHotel" element={<LowBudgetHotel />} />

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
