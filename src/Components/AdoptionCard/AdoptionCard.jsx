import './AdoptionCard.css';

export default function AdoptionCard({ animal }) {
  return (
    <div className='adoptionCard'>
      <img src={animal.primary_photo_cropped.small} />
      <div>
        <h4>{animal.name}</h4>
        <p>{animal.contact.address.city}, {animal.contact.address.state}</p>
        <p>
          {animal.description}
        </p>
        <a href={animal.url}>More Information</a>
      </div>
    </div>
  )
}