import './AdoptionCard.css';
import PropTypes from 'prop-types';

export default function AdoptionCard({ animal }) {
  if (animal) {
    return (
      <div className="adoptionCard">
        <img src={animal.primary_photo_cropped.small} />
        <div>
          <h4>{animal.name}</h4>
          <p>
            {animal.contact.address.city}, {animal.contact.address.state}
          </p>
          <p>{animal.description}</p>
          <a href={animal.url}>More Information</a>
        </div>
      </div>
    );
  }
}

AdoptionCard.propTypes = {
  animal: PropTypes.object.isRequired,
};
