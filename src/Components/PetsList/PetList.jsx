import { useState } from 'react';
import Pet from '@/Components/Pet';
import PetsFilter from '@/Components/PetsFilter';
import { dummyReports } from './mockData';
import styles from './PetList.module.css';
import Container from '@/UI/Container';

export default function PetList() {
  const [list, setList] = useState(dummyReports);

  const resetData = () => setList(dummyReports);

  return (
    <section className={styles.list}>
      <Container className={styles.container}>
        <PetsFilter data={list} setter={setList} resetData={resetData} />
        <div className={styles.grid}>
          {!!list.length &&
            list.map(({ id, picture, name, breed, gender, status }) => (
              <Pet
                key={id}
                picture={picture}
                name={name}
                breed={breed}
                gender={gender}
                status={status}
              />
            ))}
        </div>
      </Container>
    </section>
  );
}
