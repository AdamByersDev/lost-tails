import './DetailsPetSection.css';
import { Link } from 'react-router';

const DetailsPetSection = () => {
  return (
    <>
      {/* <Link to={'lost-found'}>
        <a className="go-back-btn">To go back</a>
      </Link>
      <div className="details-pet-container">
        <section className="details-pet-section">
          <img
            src="src/assets/images/pic-lost-dog-1.jpg"
            alt="pic-lost-dog-1"
            className="details-pet-section-img"
          />
          <div className="profile-pet-card">
            <div className="profile-pet-header">
              <div className="profile-pet-name">
                <span className="detail-pet-name">Danny</span>
              </div>
              <div className="icon-wrapper">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_53_20769)">
                    <rect
                      x="12"
                      y="13"
                      width="56"
                      height="56"
                      rx="28"
                      fill="white"
                    />
                    <path
                      d="M51.8453 43.5981C49.3436 47.4368 45.759 51.2549 40.5783 55.7145..."
                      fill="white"
                      stroke="#FFC4BD"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="profile-pet-info">
              <div className="details-pet-info">
                <span className="icon">📍</span>
                <span>London, ON</span>
              </div>
              <div className="info">
                <span className="icon">🏠</span>
                <span>West London, ON</span>
              </div>
              <div className="info">
                <span className="icon">⏳ lost</span>
                <span>01/22/2024</span>
              </div>
              <div className="info">
                <span className="icon">👁️</span>
                <span>18 views</span>
              </div>
            </div>
          </div>
          <div className="section about">
            <h2>About the pet</h2>
            <p>
              Danny was lost after being run over, he had a small injury to his
              back paw, he love to sleep in the box.
            </p>
            <ul>
              <li>Age: 2 years</li>
              <li>Weight: 4 kg</li>
              <li>Size: Small</li>
              <li>Neutered, vaccinated, and good with other pets</li>
            </ul>
          </div>
          <div className="section actions">
            <button className="btn btn-outline">Contact the owner</button>
            <button className="btn btn-primary">I found this pet`</button>
            <button className="btn btn-link">share on social media</button>
          </div>
          <div className="details-pet-text"> </div>
        </section>
      </div> */}
      <Link to={'lost-found'}>
        <a className="go-back-btn">&larr; To go back</a>
      </Link>
      <div className="details-pet-container">
        <section className="details-pet-section">
          <img
            src="src/assets/images/pic-lost-dog-1.jpg"
            alt="Lost Dog"
            className="details-pet-section-img"
          />
          <div className="profile-pet-card">
            <div className="profile-pet-header">
              <div className="profile-pet-name">
                <span className="detail-pet-name">Danny</span>
              </div>
              <div className="icon-wrapper">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_53_20769)">
                    <rect
                      x="12"
                      y="13"
                      width="56"
                      height="56"
                      rx="28"
                      fill="white"
                    />
                    <path
                      d="M51.8453 43.5981C49.3436 47.4368 45.759 51.2549 40.5783 55.7145..."
                      fill="white"
                      stroke="#FFC4BD"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="profile-pet-info">
              <div className="details-pet-info">
                <span className="icon">📍</span>
                <span>London, ON</span>
              </div>
              <div className="details-pet-info">
                <span className="icon">🏠</span>
                <span>West London, ON</span>
              </div>
              <div className="details-pet-info">
                <span className="icon">⏳ lost</span>
                <span>01/22/2024</span>
              </div>
              <div className="details-pet-info">
                <span className="icon">👁️</span>
                <span>18 views</span>
              </div>
            </div>
          </div>
          <div className="details-pet-about">
            <h2>About the pet</h2>
            <p>
              Danny was lost after being run over, he had a small injury to his
              back paw, he loves to sleep in the box.
            </p>
            <ul>
              <li>Age: 2 years</li>
              <li>Weight: 4 kg</li>
              <li>Size: Small</li>
              <li>Neutered, vaccinated, and good with other pets</li>
            </ul>
          </div>
          <div className="details-pet-actions">
            <button className="details-pet-btn details-pet-btn-outline">
              Contact the owner
            </button>
            <button className="details-pet-btn details-pet-btn-primary">
              I found this pet
            </button>
            <button className="details-pet-btn details-pet-btn-icon">🔗</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailsPetSection;
