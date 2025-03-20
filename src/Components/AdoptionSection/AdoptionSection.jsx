/* import { Client } from "@petfinder/petfinder-js"; */
import { useEffect, useState } from 'react';
import AdoptionCard from '../AdoptionCard';
import styles from './AdoptionSection.module.css';
import mockData from './mockData.json';
import Container from '@/UI/Container';
import Button from '@/UI/Button';
import { useNavigate } from 'react-router';

/* const client = new Client({
  apiKey: "AV1FVzdrEyl86i7G3SiXZXEIIqSYjYhbOMFNEqi2xK3D7SGfkM",
  secret: "d2QuDuCW7NlQLYC7cIr26hUkK8kvzU2O1fb2zMox"
}); */

export default function AdoptionSection() {
  const [adoptablePets /* , setAdoptablePets */] = useState(mockData);
  const [adoptionCards, setAdoptionCards] = useState([]);
  const navigate = useNavigate();

  // redirect page when click button on adoption home section
  const handleRedirect = () => navigate('/adoption');

  /* Pull the data from the API */
  /* client.animal.search({
    location: 'London, ON',
    limit: 3,
    distance: 25,
  }).then((response) => {
    let tempAdoptablePets = [];
    response.data.animals.forEach(animal => {
      tempAdoptablePets.push(animal)
    });
    console.log(tempAdoptablePets)
    setAdoptablePets(tempAdoptablePets);
  }); */
  useEffect(() => {
    let tempAdoptionCards = [];
    adoptablePets.forEach((animal) => {
      tempAdoptionCards.push(<AdoptionCard animal={animal} />);
    });
    setAdoptionCards(tempAdoptionCards);
  }, [adoptablePets]);
  return (
    <section className={styles.adoptionSection}>
      <Container>
        <h2>Adoption</h2>
        <div className={styles.textInfo}>
          <p>
            At Lostails,<strong>we connect you</strong> with shelters to help
            find loving homes.
          </p>
          <p>
            <strong>Check some available:</strong>
          </p>
        </div>
        <div className={styles.exampleCards}>{adoptionCards}</div>
        <Button className={styles.btn} onClick={handleRedirect}>
          See All
        </Button>
      </Container>
    </section>
  );
}
