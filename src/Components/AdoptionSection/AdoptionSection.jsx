import './AdoptionSection.css';
import mockData from './mockData.json';
import AdoptionPet from '../AdoptionPet';
import useAdoptionPet from '@/hooks/useAdoptionPet';

export default function AdoptionSection() {
  const { adoptionPets } = useAdoptionPet({ limit: 3 });

  const petList = adoptionPets.length
    ? adoptionPets
    : mockData.map(({ primary_photo_cropped, ...rest }) => ({
        ...rest,
        picture: primary_photo_cropped?.small || 'None',
      }));

  return (
    <section className="adoptionSection">
      <h2>Helping Pets Find Their Forever Home</h2>
      <p className="blurb">
        At Lostails, we work with shelters to help pets find loving homes. While
        reuniting lost pets with their families, we also introduce adorable
        adoptable animals—you might just find a new best friend! Together,
        we&apos;re creating new beginnings, one wag, purr, and happy reunion at
        a time!
      </p>
      <h3>Available pets</h3>
      <div className="exampleCards">
        {petList.map(({ id, picture, name, url }) => (
          <AdoptionPet key={id} picture={picture} name={name} url={url} />
        ))}
      </div>
    </section>
  );
}
