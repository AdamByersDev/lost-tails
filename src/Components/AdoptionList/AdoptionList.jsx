import { Client } from '@petfinder/petfinder-js';
import { useEffect, useState } from 'react';
import styles from './AdoptionList.module.css';
import PetsFilter from '@/Components/PetsFilter';
import AdoptionPet from '@/Components/AdoptionPet';

const client = new Client({
  apiKey: 'AV1FVzdrEyl86i7G3SiXZXEIIqSYjYhbOMFNEqi2xK3D7SGfkM',
  secret: 'd2QuDuCW7NlQLYC7cIr26hUkK8kvzU2O1fb2zMox',
});

export default function PetList() {
  const [baseList, setBaseList] = useState([]);
  const [list, setList] = useState([]);

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
          limit: 50,
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
          setBaseList(tempAdoptablePets);
        });
    };
    getData();
  }, []);

  useEffect(() => {
    setList(baseList);
  }, [baseList]);

  const resetData = () => setList(baseList);

  return (
    <section className={styles.adoptionList}>
      <div
        className={['container-responsive', styles.adoptionListContainer].join(
          ' ',
        )}
      >
        <PetsFilter data={list} setter={setList} resetData={resetData} />
        <div className={styles.adoptionListGrid}>
          {!!list.length &&
            list.map(({ id, picture, name, url }) => (
              <AdoptionPet key={id} picture={picture} name={name} url={url} />
            ))}
        </div>
      </div>
    </section>
  );
}
