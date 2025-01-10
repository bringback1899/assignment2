import React, { useEffect } from "react"; // Import useEffect
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation, // Import useLocation
} from "react-router-dom";
import TouristSpots from "./TouristSpots";
import PenangHill from "./touristSpots/PenangHill";
import ArmenianStreet from "./touristSpots/ArmenianStreet";
import KekLokSi from "./touristSpots/KekLokSi";
import BatuFerringhi from "./touristSpots/BatuFerringhi";
import PinangPeranakanMansion from "./touristSpots/PinangPeranakanMansion";
import KampungAgong from "./touristSpots/KampungAgong";
import EscapeThemePark from "./touristSpots/EscapeThemePark";
import ChewJetty from "./touristSpots/ChewJetty";
import Entopia from "./touristSpots/Entopia";

// Import hotel components
import HighBudgetHotel from "./Components/HighBudgetHotel";
import MediumBudgetHotel from "./Components/MediumBudgetHotel";
import LowBudgetHotel from "./Components/LowBudgetHotel";
import Navbar from "./Navbar.jsx";

//import food components
import Food from "./Food.jsx";


function App() {
  const location = useLocation(); // Use useLocation hook to get the current location

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Trigger effect when the route changes

  return (
    <div
      className="homepage-container"
      style={{ minHeight: "100vh", paddingTop: "60px" }}
    >
      <Navbar />
      {location.pathname === "/" && (
        <div>
          <div className="landing-section">
            <h1>Welcome to Penang </h1>
            <h2>
               Don't know where to go? Don't know what to eat? Don't know where to
              stay?
            </h2>
            <h2>DON'T WORRY WE GOT YOU!!! :D</h2>
            <a href="#about-us-anchor">
              <div className="explore-button">
                <h3>Explore Penang</h3>
                <div className="chevron"></div>
              </div>
            </a>
          </div>

          {/* Image for About Us Section */}
          <div id="about-us-anchor" className="about-us-card">
      <img src="/aboutus.jpg" alt="About Us" className="about-us-image" />
      <div className="about-us-text">
        <p>
          We are students from Universiti Sains Malaysia XD <br />
          Here at Penang, we provide the best experiences, from cultural spots
          to top-tier accommodations. <br />
          Our goal is to help you explore the beauty of this amazing island!
        </p>
      </div>
    </div>

         
   {/* Three Cards */}
<div className="card-section">
  
  <div className="info-card">
    <Link to="/tourist-spots">
      <img src="/tourist.jpg" alt="Tourist Spots" className="card-image" />
      <button className="card-button">Explore Tourist Spots</button>
    </Link>
  </div>
  <div className="info-card">
    <Link to="/food">
      <img src="/food.png" alt="Food" className="card-image" />
      <button className="card-button">Explore Food</button>
    </Link>
  </div>
  <div className="info-card">
    <Link to="/high-budget-hotels">
      <img src="/hotel.png" alt="Hotels" className="card-image" />
      <button className="card-button">Explore Hotels</button>
    </Link>
  </div>
</div>

  </div>
)}
      <Routes>
        <Route path="/tourist-spots" element={<TouristSpots />} />
        <Route path="/penang-hill" element={<PenangHill />} />
        <Route path="/armenian-street" element={<ArmenianStreet />} />
        <Route path="/kek-lok-si" element={<KekLokSi />} />
        <Route path="/batu-ferringhi" element={<BatuFerringhi />} />
        <Route
          path="/pinang-peranakan-mansion"
          element={<PinangPeranakanMansion />}
        />
        <Route path="/kampung-agong" element={<KampungAgong />} />
        <Route path="/escape-theme-park" element={<EscapeThemePark />} />
        <Route path="/chew-jetty" element={<ChewJetty />} />
        <Route path="/entopia" element={<Entopia />} />

        <Route path="/high-budget-hotels" element={<HighBudgetHotel />} />
        <Route path="/medium-budget-hotels" element={<MediumBudgetHotel />} />
        <Route path="/low-budget-hotels" element={<LowBudgetHotel />} />

        <Route path="/food" element={<Food />} /> 
      </Routes>

     {/* Footer Section */}
      <footer className="footer">
        <p>
          Feel free to write to us at{" "}
          <a href="mailto:weiling@student.usm.my">triotrip@student.usm.my</a>
        </p>
      </footer>
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