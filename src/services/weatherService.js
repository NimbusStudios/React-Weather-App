// API key for OpenWeatherMap
const API_KEY = 'f208527ffefcbbeb7da607cb7777df25'; 

// Base URL for OpenWeatherMap API
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


/**
 * Fetches weather data for a given location and units.
 * 
 * @param {Object} location - The location object containing latitude and longitude.
 * @param {string} units - The units for temperature (metric or imperial).
 * @returns {Object|null} The weather data object or null if the request fails.
 * @throws {Error} If the request fails.
 */
export const fetchWeatherData = async (location, units) => {
  try {
    // Construct the API request URL
    const url = `${API_URL}?lat=${location.lat}&lon=${location.lon}&units=${units}&appid=${API_KEY}`;

    // Make the API request
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) throw new Error('Failed to fetch weather data');

    // Parse the response as JSON
    const data = await response.json();

    // Add the icon URL to the data object
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherData = { ...data, icon: iconUrl };

    // Return the weather data object
    return weatherData;
  } catch (error) {
    // Log and return an error if the request fails
    console.error(error);
    return null;
  }
};
