import { Link } from 'react-router';
import { dummyReports } from './mockData';
import Container from '@/UI/Container'; 
import styles from './PetDetailsSection.module.css';
import { useParams } from 'react-router';

export default function PetDetailsSection() {
  const { id } = useParams();
  const pet = dummyReports.find((p) => p.id.toString() === id); 

  if (!pet) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Pet not found</h2>;
  }

  return (
      <div className={styles.container}>
      <Link to="/lost-found" className={styles.goBackBtn}>&larr; Go Back</Link>
      <Container className={styles.detailsContainer}>
        <div className={styles.card}>

          <div className={styles.header}>
            <img src={pet.picture} alt={pet.name} className={styles.petImage} />
            <span className={`${styles.tag} ${styles[pet.status]}`}>{pet.status}</span>
          </div>

          <div className={styles.details}>
            <h2>{pet.name || 'Unknown'}</h2>
            <p><strong>Breed:</strong>{pet.breed || 'Unknown'}</p>
            <p><strong>Specie:</strong>{pet.specie}</p>
            <p><strong>Gender:</strong>{pet.gender}</p>
            <p><strong>Color:</strong>{pet.color}</p>
            <p><strong>Size:</strong> {pet.size}</p>
            <p><strong>Last Location:</strong><br /> {pet.lostLocation?.join(', ') || 'N/A'}</p>
            <p><strong>Found Location:</strong><br /> {pet.foundLocation?.join(', ') || 'N/A'}</p>
            <p><strong>Description:</strong><br /> {pet.description}</p>
          </div>
        </div>
    </Container>
  </div>
  );
}
