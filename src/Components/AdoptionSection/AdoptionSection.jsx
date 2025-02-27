/* import { Client } from "@petfinder/petfinder-js"; */
import { useEffect, useState } from 'react';
import AdoptionCard from '../AdoptionCard';
import './AdoptionSection.css';
import mockData from './mockData.json';

/* const client = new Client({
  apiKey: "AV1FVzdrEyl86i7G3SiXZXEIIqSYjYhbOMFNEqi2xK3D7SGfkM",
  secret: "d2QuDuCW7NlQLYC7cIr26hUkK8kvzU2O1fb2zMox"
}); */

export default function AdoptionSection() {
  const [adoptablePets /* , setAdoptablePets */] = useState(mockData);
  const [adoptionCards, setAdoptionCards] = useState([]);
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
