import { Client } from '@petfinder/petfinder-js';
import { useEffect, useState } from 'react';
import './AdoptionSection.css';
import mockData from './mockData.json';
import AdoptionPet from '../AdoptionPet';

const client = new Client({
  apiKey: 'AV1FVzdrEyl86i7G3SiXZXEIIqSYjYhbOMFNEqi2xK3D7SGfkM',
  secret: 'd2QuDuCW7NlQLYC7cIr26hUkK8kvzU2O1fb2zMox',
});

export default function AdoptionSection() {
  const [adoptablePets, setAdoptablePets] = useState(mockData);
  const [adoptionCards, setAdoptionCards] = useState([]);
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
    <section className="adoptionSection">
      <h2>Helping Pets Find Their Forever Home</h2>
      <p className="blurb">
        At Lostails, we work with shelters to help pets find loving homes. While
        reuniting lost pets with their families, we also introduce adorable
        adoptable animals—you might just find a new best friend! Together, we’re
        creating new beginnings, one wag, purr, and happy reunion at a time!
      </p>
      <h3>Available pets</h3>
      <div className="exampleCards">{adoptionCards}</div>
    </section>
  );
}
