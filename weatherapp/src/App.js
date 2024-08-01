
// Import necessary React functions and components
import React, { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
import LocationSearch from './components/LocationSearch';
import ThemeSwitcher from './components/ThemeSwitcher';
import UnitSwitcher from './components/UnitSwitcher';
import { fetchWeatherData } from './services/weatherService';
import { detectUserLocation } from './services/locationService';

// Define the App component
const App = () => {
  // Define and initialize state variables
  const [location, setLocation] = useState(null); // Stores the user's location
  const [weatherData, setWeatherData] = useState(null); // Stores weather data for the user's location
  const [theme, setTheme] = useState('light'); // Stores the user's selected theme
  const [units, setUnits] = useState('metric'); // Stores the user's selected units

  // Fetch the user's location and update the location state variable
  useEffect(() => {
    const getUserLocation = async () => {
      const coords = await detectUserLocation();
      if (coords) {
        setLocation(coords);
      }
    };
    getUserLocation();
  }, []);

  // Fetch weather data for the user's location and update the weatherData state variable
  useEffect(() => {
    const updateWeather = async () => {
      if (location) {
        const data = await fetchWeatherData(location, units);
        setWeatherData(data);
      }
    };
    updateWeather();
  }, [location, units]);

  // Render the App component
  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Weather App</h1>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <UnitSwitcher units={units} setUnits={setUnits} />
      </header>
      <main>
        <LocationSearch setLocation={setLocation} />
        {/* Render the WeatherInfo component if weatherData is not null */}
        {weatherData && <WeatherInfo weatherData={weatherData} units={units} />}
      </main>
    </div>
  );
};

// Export the App component as the default export
export default App;

