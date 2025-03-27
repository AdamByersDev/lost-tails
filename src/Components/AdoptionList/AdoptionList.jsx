import styles from './AdoptionList.module.css';
import PetsFilter from '@/Components/PetsFilter';
import AdoptionPet from '@/Components/AdoptionPet';
import useAdoptionPet from '@/hooks/useAdoptionPet';
import Container from '@/UI/Container';

export default function PetList() {
  const { adoptionPets, list, setList } = useAdoptionPet();

  return (
    <section className={styles.adoptionList}>
      <Container className={styles.adoptionListContainer}>
        <PetsFilter data={adoptionPets} setter={setList} />
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
