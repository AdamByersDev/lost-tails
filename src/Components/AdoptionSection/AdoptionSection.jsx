import { Client } from '@petfinder/petfinder-js';
import { useEffect, useState } from 'react';
import styles from './AdoptionSection.module.css';
import mockData from './mockData.json';
import Container from '@/UI/Container';
import Button from '@/UI/Button';
import { useNavigate } from 'react-router';
import AdoptionPet from '../AdoptionPet';

const client = new Client({
  apiKey: 'AV1FVzdrEyl86i7G3SiXZXEIIqSYjYhbOMFNEqi2xK3D7SGfkM',
  secret: 'd2QuDuCW7NlQLYC7cIr26hUkK8kvzU2O1fb2zMox',
});

export default function AdoptionSection() {
  const [adoptablePets, setAdoptablePets] = useState(mockData);
  const [adoptionCards, setAdoptionCards] = useState([]);
  const navigate = useNavigate();

  // redirect page when click button on adoption home section
  const handleRedirect = () => navigate('/adoption');

  const getLocation = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) {
        throw new Error('Response status: ${response.status}');
      }

      const json = await response.json();
      return `${json.city}, ${json.region_code}`;
    } catch (e) {
      console.error(e);
      return 'London, ON';
    }
  };

  useEffect(() => {
    const getData = async () => {
      /* Pull the data from the API */
      let location = await getLocation();
      console.log(location);
      client.animal
        .search({
          location: location,
          limit: 3,
          distance: 50,
        })
        .then((response) => {
          let tempAdoptablePets = [];
          response.data.animals.forEach((animal) => {
            console.log(animal);
            let colors = animal.colors || { primary: 'Not set' };
            let photo = animal.primary_photo_cropped || { small: null };
            tempAdoptablePets.push({
              id: animal.id,
              name: animal.name,
              description: animal.description,
              specie: animal.species,
              color: colors.primary,
              size: animal.size,
              gender: animal.gender,
              breed: animal.breeds.primary,
              picture: photo.small || 'None',
              status: animal.status,
              url: animal.url,
            });
          });
          setAdoptablePets(tempAdoptablePets);
        });
    };
    getData();
  }, []);

  useEffect(() => {
    let tempAdoptionCards = [];
    adoptablePets.forEach((animal) => {
      tempAdoptionCards.push(
        <AdoptionPet
          picture={animal.picture}
          key={animal.id}
          name={animal.name}
          url={animal.url}
        />,
      );
    });
    setAdoptionCards(tempAdoptionCards);
  }, [adoptablePets]);
  return (
    <section className={styles.adoptionSection}>
      <Container>
        <div className={styles.adoptionText}>
          <h2>Adoption</h2>
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
