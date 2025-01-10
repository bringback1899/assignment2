import { Link } from "react-router-dom";
import './hotel.css'; 

export default function HighBudgetHotel() {
  return (
    <>
      <div className="filler"></div>
      <div className="center">
        <h1>Luxury Hotels</h1>
        <div className="title-underline"></div>
      </div>
      <div className="budget-filter center">
        <p>Budget Choice:</p>
        <Link to="/high-budget-hotels" className="filter-button">
          High Budget
        </Link>
        <Link to="/medium-budget-hotels" className="filter-button">
          Medium Budget
        </Link>
        <Link to="/low-budget-hotels" className="filter-button">
          Low Budget
        </Link>
      </div>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Luxury Hotel 1/Thumbnail.jpg"
          alt="Luxury Hotel 1"
        />
        <h3 className="hotel-name">Eastern & Oriental Hotel</h3>
        <p className="hotel-description">
          This British colonial-style luxury hotel located in the heart of
          George Town provides personalised luxury for each and every single
          guest. Guests staying in this hotel not only get to enjoy an opulent
          and extravagant stay, but will also get to experience authentic
          elegance of the British colonial era. Guests looking for a lavish stay
          in Penang should look no further than the Eastern & Oriental Hotel as
          this hotel provides everything: grace, comfort and finesse.
        </p>
        <p className="hotel-price">Price per night: ~RM1000</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-1.jpg"
                alt="Luxury Hotel 1 Gallery 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-2.jpg"
                alt="Luxury Hotel 1 Gallery 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-3.jpg"
                alt="Luxury Hotel 1 Gallery 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-4.jpg"
                alt="Luxury Hotel 1 Gallery 4"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-5.jpg"
                alt="Luxury Hotel 1 Gallery 5"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-6.jpg"
                alt="Luxury Hotel 1 Gallery 6"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-7.jpg"
                alt="Luxury Hotel 1 Gallery 7"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 1/gallery-8.jpg"
                alt="Luxury Hotel 1 Gallery 8"
              />
            </li>
          </ol>
        </div>
      </section>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Luxury Hotel 2/Thumbnail.png"
          alt="Luxury Hotel 2"
        />
        <h3 className="hotel-name">PARKROYAL Penang Resort</h3>
        <p className="hotel-description">
          Want to enjoy the beach and Penang? PARKROYAL Penang Resort got you
          covered. Located along Batu Ferringhi Beach, this five-star hotel is
          only a mere 45-minute drive away from the Penang International
          Airport. Guests staying at this hotel will get to enjoy the pristine
          seaside scenery while endulging themselves in the luxurious amenities
          and facilities provided by the hotel. Additionally, this hotel is
          located near many popular tourist attractions, ensuring travellers are
          able to enjoy Penang to the fullest while on their stay.
        </p>
        <p className="hotel-price">Price per night: ~RM400</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-1.jpg"
                alt="Luxury Hotel 2 Gallery 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-2.jpg"
                alt="Luxury Hotel 2 Gallery 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-3.jpg"
                alt="Luxury Hotel 2 Gallery 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-4.jpg"
                alt="Luxury Hotel 2 Gallery 4"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-5.jpg"
                alt="Luxury Hotel 2 Gallery 5"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-6.jpg"
                alt="Luxury Hotel 2 Gallery 6"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-7.jpg"
                alt="Luxury Hotel 2 Gallery 7"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 2/gallery-8.jpg"
                alt="Luxury Hotel 2 Gallery 8"
              />
            </li>
          </ol>
        </div>
      </section>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Luxury Hotel 3/Thumbnail.jpg"
          alt="Luxury Hotel 3"
        />
        <h3 className="hotel-name">G Hotel Gurney</h3>
        <p className="hotel-description">
          Whether you are travelling to penang for business or leisurely
          reasons, G Hotel Gurney is the perfect hotel for you. With a wide
          selection of rooms, G Hotel Gurney ensures that even the most
          distinguised businessmen&apos;s need are left unattended. Who says
          modern architecture is boring? Be prepared to be awestruck as you step
          foot into the hotel as its modern and sleek design classifies as it
          own form of art. G Hotel Gurney may be pricey, but there is no price
          tag for happiness.
        </p>
        <p className="hotel-price">Price per night: ~RM600</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-1.jpg"
                alt="Luxury Hotel 3 Gallery 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-2.jpg"
                alt="Luxury Hotel 3 Gallery 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-3.jpg"
                alt="Luxury Hotel 3 Gallery 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-4.jpg"
                alt="Luxury Hotel 3 Gallery 4"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-5.jpg"
                alt="Luxury Hotel 3 Gallery 5"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-6.jpg"
                alt="Luxury Hotel 3 Gallery 6"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-7.jpg"
                alt="Luxury Hotel 3 Gallery 7"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Luxury Hotel 3/gallery-8.jpg"
                alt="Luxury Hotel 3 Gallery 8"
              />
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}