import Pet from '@/Components/Pet';
import PetsFilter from '@/Components/PetsFilter';
import styles from './PetList.module.css';
import Container from '@/UI/Container';
import { Link, useNavigate } from 'react-router';
import useReports from '@/hooks/useReports';
import useUser from '@/hooks/useUser';
import Button from '@/UI/Button';

export default function PetList() {
  const { reports, list, setList } = useReports();

  const { user } = useUser();

  const navigate = useNavigate();

  return (
    <section className={styles.list}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h1>Lost & Found</h1>
          <Button
            disabled={!user}
            onClick={() => navigate('new-report')}
            tooltip="Please Login"
          >
            + Report a new pet
          </Button>
        </div>
        <div className={styles.content}>
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
        </div>
      </Container>
    </section>
  );
}
