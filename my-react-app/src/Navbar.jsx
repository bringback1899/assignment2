import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="#"><img src="/assets/react.svg" alt="Logo"/></a>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/" className="navbutton">
              Home
            </Link>
          </li>
          <li>
          <Link to="/tourist-spots" className="navbutton">Tourist Spots</Link>
          </li>
          <li>
            <a href="#" className="navbutton">
              Food
            </a>
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
