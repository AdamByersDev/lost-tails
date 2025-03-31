import styles from './AdoptionPet.module.css';
import RedirectIcon from '@/assets/images/redirectArrow.svg';
import placeholderDog from '@/assets/images/placeholder-dog.svg?url';
import placeholderCat from '@/assets/images/placeholder-cat.svg?url';

export default function AdoptionPet({
  picture,
  name,
  url,
  species,
  city,
  state,
}) {
  if (picture === null || picture.toLowerCase() === 'none') {
    switch (species.toLowerCase()) {
      case 'dog':
        picture = placeholderDog;
        break;
      case 'cat':
        picture = placeholderCat;
        break;
      default:
        picture == null;
        break;
    }
  }
  return (
    <article className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <p>
        {city}, {state}
      </p>
      <div className={styles.picture}>
        <span
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${picture})` }}
        ></span>
        <img src={picture} alt={name} />
      </div>
      <a href={url} className={styles.link} target="_blank">
        More details <RedirectIcon />
      </a>
    </article>
  );
}
