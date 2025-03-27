import Pet from '@/Components/Pet';
import PetsFilter from '@/Components/PetsFilter';
import styles from './PetList.module.css';
import Container from '@/UI/Container';
import { Link } from 'react-router';
import useReports from '@/hooks/useReports';

export default function PetList() {
  const { reports, list, setList } = useReports();

  return (
    <section className={styles.list}>
      <Container className={styles.container}>
        <PetsFilter data={reports} setter={setList} />
        <div className={styles.grid}>
          {!!list.length &&
            list.map(({ id, picture, name, breed, gender, status }) => (
              <Link
                key={id}
                to={`/lost-found/${id}`}
                className={styles.cardLink}
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
