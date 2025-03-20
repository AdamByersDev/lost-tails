import { Link } from 'react-router';
import { dummyReports } from './mockData';
import Container from '@/UI/Container';
import styles from './PetDetailsSection.module.css';
import { useParams } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PetNotFoundAnimation from '@/assets/lottie/petnotfound-animation.json';
import { useEffect, useState } from 'react';

// const getAddressFromCoordinates = async (lat, lng) => {
//   const API_KEY = 'AIzaSyAnq_9Kn1-FN2wXsi3Ci_SHdEGxUCnvNYk';
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.status === 'OK') {
//       return data.results[0].formatted_address;
//     } else {
//       console.error('Geocoding error:', data.status);
//       return 'Unknown Location';
//     }
//   } catch (error) {
//     console.error('Error fetching address:', error);
//     return 'Unknown Location';
//   }
// };

const getAddressFromCoordinates = async (lat, lng) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.display_name || 'Unknown Location';
  } catch (error) {
    console.error('Error fetching address:', error);
    return 'Unknown Location';
  }
};

export default function PetDetailsSection() {
  const { id } = useParams();
  const pet = dummyReports.find((p) => p.id.toString() === id);

  const [lostLocation, setLostLocation] = useState('Fetching location...');
  const [foundLocation, setFoundLocation] = useState('Fetching location...');

  useEffect(() => {
    if (pet?.lostLocation?.length) {
      const [lat, lng] = pet.lostLocation[0].split(', ').map(Number);
      getAddressFromCoordinates(lat, lng).then(setLostLocation);
    }
    if (pet?.foundLocation?.length) {
      const [lat, lng] = pet.foundLocation[0].split(', ').map(Number);
      getAddressFromCoordinates(lat, lng).then(setFoundLocation);
    }
  }, [pet]);

  if (!pet) {
    return (
      <Container className={styles.notFoundContainer}>
        <h2>Sorry, Pet not found.</h2>
        <DotLottieReact
          data={PetNotFoundAnimation}
          loop
          autoplay
          className={styles.PetNotFoundAnimation}
        />
      </Container>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/lost-found" className={styles.goBackBtn}>
        &larr; Go Back
      </Link>
      <Container className={styles.detailsContainer}>
        <div className={styles.header}>
          <img src={pet.picture} alt={pet.name} className={styles.petImage} />
          <span className={`${styles.tag} ${styles[pet.status]}`}>
            {pet.status}
          </span>
        </div>
        <div className={styles.card}>
          <div className={styles.details}>
            <h2>{pet.name || 'Unknown'}</h2>
            <p>
              <strong>Date Report:</strong>
              <br />
              {pet.date || 'Unknown'}
            </p>
            <p>
              <strong>Email Contact</strong>
              <br />
              {pet.email || 'Unknown'}
            </p>
            <p>
              <strong>Breed:</strong>
              <br />
              {pet.breed || 'Unknown'}
            </p>
            <p>
              <strong>Specie:</strong>
              <br />
              {pet.specie}
            </p>
            <p>
              <strong>Gender:</strong>
              <br />
              {pet.gender}
            </p>
            <p>
              <strong>Color:</strong>
              <br />
              {pet.color}
            </p>
            <p>
              <strong>Size:</strong> <br />
              {pet.size}
            </p>
            <p>
              <strong>Last Location:</strong>
              <br /> {lostLocation}
            </p>
            <p>
              <strong>Found Location:</strong>
              <br /> {foundLocation}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
