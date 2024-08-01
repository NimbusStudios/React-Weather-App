export const detectUserLocation = async () => {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            reject(error);
          }
        );
      });
    } else {
      return null;
    }
  };
  
  const GEOCODING_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';
  const API_KEY = 'f208527ffefcbbeb7da607cb7777df25'; // Replace with your actual API key
  
  export const searchLocation = async (query) => {
    try {
      const response = await fetch(`${GEOCODING_API_URL}?q=${query}&limit=1&appid=${API_KEY}`);
      if (!response.ok) throw new Error('Failed to fetch location data');
      const data = await response.json();
      if (data.length > 0) {
        return {
          lat: data[0].lat,
          lon: data[0].lon,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  