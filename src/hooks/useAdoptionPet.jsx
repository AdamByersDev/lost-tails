import { getAdoptionPets } from '@/services/petFinder';
import { useEffect, useState } from 'react';

export default function useAdoptionPet(options) {
  const { limit } = options || {};

  const [adoptionPets, setAdoptionPets] = useState([]);

  useEffect(() => {
    getAdoptionPets(limit).then((petList) => setAdoptionPets(petList));
  }, [limit]);

  return {
    adoptionPets,
  };
}
