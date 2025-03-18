import './DetailsPetSection.css';
import { Link } from 'react-router';

export default function DetailsPetSection({ animal }) {
  if (animal) {
    return (
      <>
        <Link to={'lost-found'}>
          <a className="go-back-btn">&larr; To go back</a>
        </Link>
        <div className="details-pet-container">
          <div className="details-pet-status">{animal.status}</div>
          <img
            src={animal.primary_photo_cropped.small}
            alt="Lost Dog"
            className="details-pet-img"
          />
          <div className="data-pet-type">Description:</div>
          <div className="detail-pet-description">{animal.description}</div>
  
          <section className="details-pet-section">
            <div className="profile-pet-card">
              <div className="data-pet-type">Date Reported:</div>
              <div className="detail-pet-date">March 13, 2025</div>
              <div className="data-pet-type">Last Location:</div>
              <div className="detail-pet-location">{animal.address.city}</div>
              <div className="data-pet-type">Name:</div>
              <div className="detail-pet-breed">{animal.name}</div>
              <div className="data-pet-type">Specie:</div>
              <div className="detail-pet-specie">{animal.species}</div>
              <div className="data-pet-type">Color:</div>
              <div className="detail-pet-color">{animal.colors}</div>
              <div className="data-pet-type">Size:</div>
              <div className="detail-pet-size">{animal.size}</div>
              <div className="data-pet-type">Gender:</div>
              <div className="detail-pet-gender">{animal.gender}</div>
              <div className="data-pet-type">Breed:</div>
              <div className="detail-pet-breed">{animal.breeds}</div>
            </div>
            <div className="details-pet-actions">
              <button className="details-pet-btn details-pet-btn-outline">
                Contact the owner
                <p>{animal.contact.email}</p>
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
};
