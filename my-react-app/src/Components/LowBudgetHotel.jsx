import { Link } from "react-router-dom";
import './hotel.css'; 

export default function LowBudgetHotel() {
  return (
    <>
      <div className="filler"></div>
      <div className="center">
        <h1>Budget Hotels</h1>
        <div className="title-underline"></div>
      </div>
      <div className="budget-filter center">
        <p>Budget Choice:</p>
        <Link to="/HighBudgetHotel" className="filter-button">
          High Budget
        </Link>
        <Link to="/MediumBudgetHotel" className="filter-button">
          Medium Budget
        </Link>
        <Link to="/LowBudgetHotel" className="filter-button">
          Low Budget
        </Link>
      </div>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Budget Hotel 1/Thumbnail.jpg"
          alt="Budget Hotel 1"
        />
        <h3 className="hotel-name">The Frame Guesthouse</h3>
        <p className="hotel-description">
          Guests looking for a cheap and affortable place to stay while
          travelling in Penang should consider staying at The Frame Guesthouse.
          This place was once a frame maker shop but was transformed into a
          hotel. However, its authenticity has not been removed but rather
          preserved. Its surface, concrete floor and wall were kept to maintain
          the original look of the shop. Guests staying at this hotel are sure
          to experience an unique but comfortable stay.
        </p>
        <p className="hotel-price">Price per night: ~RM50</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-1.jpg"
                alt="Budget Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-2.jpg"
                alt="Budget Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-3.jpg"
                alt="Budget Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-4.jpg"
                alt="Budget Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-5.jpg"
                alt="Budget Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-6.jpg"
                alt="Budget Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-7.jpg"
                alt="Budget Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 1/gallery-8.jpg"
                alt="Budget Hotel 1"
              />
            </li>
          </ol>
        </div>
      </section>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Budget Hotel 2/Thumbnail.jpg"
          alt="Budget Hotel 2"
        />
        <h3 className="hotel-name">M Qube Hotel Penang</h3>
        <p className="hotel-description">
          M Qube Hotel Penang is a hotel that specialises in capsule rooms.
          However, do not be fooled as the well-maintained amenities and
          facilities more than makes up for the lack of space. Each capsule is
          equipped with air-conditioning and even a personal TV, ensuring the
          comfort of the guests. Guests interested in capsule hotels should
          definitely put this place on their list.
        </p>
        <p className="hotel-price">Price per night: ~RM79</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-1.jpg"
                alt="Budget Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-2.jpg"
                alt="Budget Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-3.jpg"
                alt="Budget Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-4.jpg"
                alt="Budget Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-5.jpg"
                alt="Budget Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-6.jpg"
                alt="Budget Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-7.jpg"
                alt="Budget Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 2/gallery-8.jpg"
                alt="Budget Hotel 2"
              />
            </li>
          </ol>
        </div>
      </section>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Budget Hotel 3/Thumbnail.jpg"
          alt="Budget Hotel 3"
        />
        <h3 className="hotel-name">Saturn Hotel</h3>
        <p className="hotel-description">
          What&apos;s that? You want both affordability AND comfort? Well then
          you are in luck as Saturn Hotel strives to answer every
          travellers&apos; greed by providing the best of both worlds. This
          newly renovated hotel prides in its ability to provide world-class
          comfort to its guest with its clean, sleek and modern interior design
          as well as brand-new furnitures while staying affordable to the
          average joe. There is no hotel other than Saturn Hotel that will
          provide this lucrative deal to travellers, so do not hesitate to book
          a room there when travelling to Penang!
        </p>
        <p className="hotel-price">Price per night: ~RM94</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-1.jpg"
                alt="Budget Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-2.jpg"
                alt="Budget Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-3.jpg"
                alt="Budget Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-4.jpg"
                alt="Budget Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-5.jpg"
                alt="Budget Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-6.jpg"
                alt="Budget Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-7.jpg"
                alt="Budget Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Budget Hotel 3/gallery-8.jpg"
                alt="Budget Hotel 3"
              />
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}