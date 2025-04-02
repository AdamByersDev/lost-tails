import styles from './AdoptionPetLoading.module.css';

export default function AdoptionPetLoading() {
  return (
    <article className={styles.container}>
      <span className={styles.name}></span>
      <span className={styles.location}></span>
      <span className={styles.picture}></span>
      <span className={styles.link}></span>
    </article>
  );
}
