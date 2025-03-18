import styles from './AdoptionPet.module.css';
import { IoOpenOutline } from 'react-icons/io5';

export default function AdoptionPet({ picture, name, url }) {
  return (
    <article className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.picture}>
        <span
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${picture})` }}
        ></span>
        <img src={picture} alt={name} />
      </div>
      <a href={url} className={styles.link} target="_blank">
        More details <IoOpenOutline />
      </a>
    </article>
  );
}
