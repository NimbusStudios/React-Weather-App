const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (location, units) => {
  try {
    const response = await fetch(`${API_URL}?lat=${location.lat}&lon=${location.lon}&units=${units}&appid=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch weather data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
