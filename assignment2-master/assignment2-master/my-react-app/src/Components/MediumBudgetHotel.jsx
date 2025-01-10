import { Link } from "react-router-dom";
import './hotel.css'; 

export default function MediumBudgetHotel() {
  return (
    <>
      <div className="filler"></div>
      <div className="center">
        <h1>Affordable Hotels</h1>
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
          src="/hotelAssets/Images/Affordable Hotel 1/Thumbnail.jpg"
          alt="Affordable Hotel 1"
        />
        <h3 className="hotel-name">DoubleTree Resort By Hilton Hotel Penang</h3>
        <p className="hotel-description">
          This Peranakan-themed hotel is a treat for everybody regardless of
          age. Pools, gym, spa, and even an arcade, DoubleTree Resort has no
          shortage of facilities, ensuring both parent and child get to have
          their fun. Guests who stay in this hotel can especially look forward
          to the TeddyVille Musuem, an one-of-a-kind musuem that describes
          Penang history through teddy bears. If you are planning to bring your
          family to Penang, DoubleTree Resort is the place to stay.
        </p>
        <p className="hotel-price">Price per night: ~RM230</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-1.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-2.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-3.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-4.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-5.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-6.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-7.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 1/gallery-8.jpg"
                alt="Affordable Hotel 1"
              />
            </li>
          </ol>
        </div>
      </section>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Affordable Hotel 2/Thumbnail.jpg"
          alt="Affordable Hotel 2"
        />
        <h3 className="hotel-name">Cititel Penang</h3>
        <p className="hotel-description">
          Towering over George Town at 19-stories high, Cititel Penang is a
          hotel that is hard to miss. Dread the horrible traffic at a bustling
          city? Worry over transportaion options? Do not fret as at Citatel
          Penang, every popular tourist attraction is only a stone&apos;s throw
          away. Guests staying at this hotel can enjoy the convenience of being
          near to many popular tourist attractions, ensuring they will get to
          enjoy Penang to the fullest.
        </p>
        <p className="hotel-price">Price per night: ~RM215</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-1.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-2.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-3.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-4.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-5.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-6.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-7.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 2/gallery-8.jpg"
                alt="Affordable Hotel 2"
              />
            </li>
          </ol>
        </div>
      </section>
      <section className="hotel-section center grid-2">
        <img
          className="hotel-img"
          src="/hotelAssets/Images/Affordable Hotel 3/Thumbnail.jpg"
          alt="Affordable Hotel 3"
        />
        <h3 className="hotel-name">Lost Paradise Resort</h3>
        <p className="hotel-description">
          Urban dwellers looking for a change in scenery is more than welcome to
          visit this Balinese-inspired getaway. With a myriad of flora and
          hand-crafted wooden structures, Lost Paradise Resort makes the guests
          forget whether they are staying in a tropical resort or Penang. Want
          to make your friends jealous? At every turn and every scene, guests
          will be hard pressed to find a spot that is not Instagram-worthy.
        </p>
        <p className="hotel-price">Price per night: ~RM180</p>
        <div className="gallery-title">
          <h3>Gallery</h3>
        </div>
        <div className="hotel-gallery">
          <ol>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-1.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-2.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-3.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-4.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-5.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-6.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-7.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
            <li>
              <img
                src="/hotelAssets/Images/Affordable Hotel 3/gallery-8.jpg"
                alt="Affordable Hotel 3"
              />
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}