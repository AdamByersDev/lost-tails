import { Client } from '@petfinder/petfinder-js';

const getLocation = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/', { mode: 'no-cors' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return `${json.city}, ${json.region_code}`;
  } catch (e) {
    console.error(e);
    return 'London, ON';
  }
};

const client = new Client({
  apiKey: import.meta.env.VITE_PET_FINDER_API_KEY,
  secret: import.meta.env.VITE_PET_FINDER_SECRET,
});

export const getAdoptionPets = async (limit = 50) => {
  const location = await getLocation();

  const {
    data: { animals },
  } = (await client.animal.search({
    location: location,
    limit,
    distance: 50,
  })) || { data: { animals: [] } };

  return animals.map(
    ({
      id,
      name,
      description,
      species,
      colors,
      size,
      gender,
      breeds,
      primary_photo_cropped: photo,
      status,
      url,
    }) => ({
      id,
      name,
      description,
      species,
      color: colors.primary || 'Not set',
      size,
      gender,
      breed: breeds.primary,
      picture: photo?.small || 'None',
      status,
      url,
    }),
  );
};
