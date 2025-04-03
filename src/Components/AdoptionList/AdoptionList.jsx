import styles from './AdoptionList.module.css';
import PetsFilter from '@/Components/PetsFilter';
import AdoptionPet from '@/Components/AdoptionPet';
import AdoptionPetLoading from '@/Components/AdoptionPetLoading';
import useAdoptionPet from '@/hooks/useAdoptionPet';
import Container from '@/UI/Container';

export default function PetList() {
  const { adoptionPets, list, setList, loading } = useAdoptionPet();
  return (
    <section className={styles.adoptionList}>
      <Container className={styles.adoptionListContainer}>
        <PetsFilter data={adoptionPets} setter={setList} />
        <div>
          <h2 className={styles.adoptionTitle}>Adoption</h2>
          <div className={styles.adoptionListGrid}>
            {loading ? (
              <AdoptionPetLoading length={6} />
            ) : (
              !!list.length &&
              list.map(({ id, picture, name, url, species, city, state }) => (
                <AdoptionPet
                  key={id}
                  picture={picture}
                  name={name}
                  url={url}
                  species={species}
                  city={city}
                  state={state}
                />
              ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
