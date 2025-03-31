export const getAddressFromCoordinates = async (lat, lng) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.display_name || 'Unknown Location';
  } catch (error) {
    console.error('Error fetching address:', error);
    return 'Unknown Location';
  }
};

export const getCoordinatesFromAddress = async (address) => {
  const url =
    'https://nominatim.openstreetmap.org/search?format=json&q=' + address;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.map(({ display_name, lat, lon }) => ({
      label: display_name,
      value: [lat, lon].toString(),
    }));
  } catch (error) {
    console.error('Error fetching address:', error);
    return [{ display_name: 'Unknown Location', lat: 0, lon: 0 }];
  }
};

// const getAddressFromCoordinates = async (lat, lng) => {
//   const API_KEY = 'AIzaSyAnq_9Kn1-FN2wXsi3Ci_SHdEGxUCnvNYk';
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.status === 'OK') {
//       return data.results[0].formatted_address;
//     } else {
//       console.error('Geocoding error:', data.status);
//       return 'Unknown Location';
//     }
//   } catch (error) {
//     console.error('Error fetching address:', error);
//     return 'Unknown Location';
//   }
// };
