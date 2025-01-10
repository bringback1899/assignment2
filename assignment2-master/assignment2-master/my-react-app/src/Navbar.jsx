import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="navbar">
     <div className="logo-container"> 
      <div className="logo">
        
          <img src="/logo.jpg" alt="Logo" />
        
        </div>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/" className="navbutton">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tourist-spots" className="navbutton">
              Tourist Spots
            </Link>
          </li>
          <li>
          <Link to="/food" className="navbutton">
              Food
          </Link>
          </li>
          <li>
            <Link to="/high-budget-hotels" className="navbutton">
              Hotels
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
