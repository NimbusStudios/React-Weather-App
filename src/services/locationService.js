/**
 * Detects the user's location using the Geolocation API.
 *
 * @return {Promise<Object|null>} An object containing the latitude and longitude of the user's location, or null if the user's location is not available.
 */
export const detectUserLocation = async () => {
  // Check if the Geolocation API is supported by the browser
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      // Request the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Resolve the promise with the latitude and longitude of the user's location
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          // Reject the promise if there is an error
          reject(error);
        }
      );
    });
  } else {
    // Return null if the Geolocation API is not supported
    return null;
  }
};

// Base URL for the OpenWeatherMap Geocoding API
const GEOCODING_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';
// API key from OpenWeatherMap
const API_KEY = 'f208527ffefcbbeb7da607cb7777df25';

/**
 * Searches for a location using the OpenWeatherMap Geocoding API.
 *
 * @param {string} query - The search query for the location.
 * @return {Promise<Object|null>} An object containing the latitude and longitude of the searched location, or null if the location is not found.
 */
export const searchLocation = async (query) => {
  try {
    // Construct the API request URL
    const url = `${GEOCODING_API_URL}?q=${query}&limit=1&appid=${API_KEY}`;

    // Make the API request
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the latitude and longitude of the first location in the response, or null if no location is found
    if (data.length > 0) {
      return {
        lat: data[0].lat,
        lon: data[0].lon,
      };
    } else {
      return null;
    }
  } catch (error) {
    // Log and return an error if the request fails
    console.error(error);
    return null;
  }
};
