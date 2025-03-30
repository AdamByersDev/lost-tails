import { Link } from 'react-router';
import Container from '@/UI/Container';
import styles from './PetDetailsSection.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PetNotFoundAnimation from '@/assets/lottie/petnotfound-animation.json';
import useReport from '@/hooks/useReport';

export default function PetDetailsSection() {
  const { report } = useReport();

  if (!report) {
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

  const {
    name,
    picture,
    status,
    date,
    email,
    breed,
    species,
    gender,
    color,
    size,
    lostLocation,
    foundLocation,
  } = report;

  return (
    <div className={styles.container}>
      <Link to="/lost-found" className={styles.goBackBtn}>
        &larr; Go Back
      </Link>
      <Container className={styles.detailsContainer}>
        <div className={styles.header}>
          <img src={picture} alt={name} className={styles.petImage} />
          <span className={`${styles.tag} ${styles[status]}`}>{status}</span>
        </div>
        <div className={styles.card}>
          <div className={styles.details}>
            <h2>{name || 'Unknown'}</h2>
            <p>
              <strong>Date Report:</strong>
              <br />
              {date || 'Unknown'}
            </p>
            <p>
              <strong>Email Contact</strong>
              <br />
              {email || 'Unknown'}
            </p>
            <p>
              <strong>Breed:</strong>
              <br />
              {breed || 'Unknown'}
            </p>
            <p>
              <strong>Species:</strong>
              <br />
              {species}
            </p>
            <p>
              <strong>Gender:</strong>
              <br />
              {gender}
            </p>
            <p>
              <strong>Color:</strong>
              <br />
              {color}
            </p>
            <p>
              <strong>Size:</strong> <br />
              {size}
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
