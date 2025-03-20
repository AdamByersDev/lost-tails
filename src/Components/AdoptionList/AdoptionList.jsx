import { useEffect, useState } from 'react';
import styles from './AdoptionList.module.css';
import PetsFilter from '@/Components/PetsFilter';
import AdoptionPet from '@/Components/AdoptionPet';
import useAdoptionPet from '@/hooks/useAdoptionPet';
import Container from '@/UI/Container';

export default function PetList() {
  const [list, setList] = useState([]);

  const { adoptionPets } = useAdoptionPet();

  const resetData = () => setList([...adoptionPets]);

  useEffect(() => {
    setList([...adoptionPets]);
  }, [adoptionPets]);

  return (
    <section className={styles.adoptionList}>
      <Container className={styles.adoptionListContainer}>
        <PetsFilter data={list} setter={setList} resetData={resetData} />
        <div>
          <h2 className={styles.adoptionTitle}>Adoption</h2>
          <div className={styles.adoptionListGrid}>
            {!!list.length &&
              list.map(({ id, picture, name, url }) => (
                <AdoptionPet key={id} picture={picture} name={name} url={url} />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
