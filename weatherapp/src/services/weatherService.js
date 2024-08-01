const API_KEY = 'f208527ffefcbbeb7da607cb7777df25'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (location, units) => {
  try {
    const response = await fetch(`${API_URL}?lat=${location.lat}&lon=${location.lon}&units=${units}&appid=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch weather data');
    const data = await response.json();
    return {
      ...data,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};