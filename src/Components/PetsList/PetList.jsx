import { useState } from 'react';
import Pet from '@/Components/Pet';
import PetsFilter from '@/Components/PetsFilter';
import { dummyReports } from './mockData';
import styles from './PetList.module.css';
import Container from '@/UI/Container';
import { Link } from 'react-router';

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
              <Link 
                key={id} 
                to={`/lost-found/${id}`}
                className={styles.cardLink} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Pet
                  key={id}
                  picture={picture}
                  name={name}
                  breed={breed}
                  gender={gender}
                  status={status}
                />
              </Link>
            ))}
        </div>
      </Container>
    </section>
  );
}
