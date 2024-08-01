import React, { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
import LocationSearch from './components/LocationSearch';
import ThemeSwitcher from './components/ThemeSwitcher';
import UnitSwitcher from './components/UnitSwitcher';
import { fetchWeatherData } from './services/weatherService';
import { detectUserLocation } from './services/locationService';

const App = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [theme, setTheme] = useState('light');
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    const getUserLocation = async () => {
      const coords = await detectUserLocation();
      if (coords) {
        setLocation(coords);
      }
    };
    getUserLocation();
  }, []);

  useEffect(() => {
    const updateWeather = async () => {
      if (location) {
        const data = await fetchWeatherData(location, units);
        setWeatherData(data);
      }
    };
    updateWeather();
  }, [location, units]);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Weather App</h1>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <UnitSwitcher units={units} setUnits={setUnits} />
      </header>
      <main>
        <LocationSearch setLocation={setLocation} />
        {weatherData && <WeatherInfo weatherData={weatherData} units={units} />}
      </main>
    </div>
  );
};

export default App;
