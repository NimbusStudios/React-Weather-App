import React from 'react';

const WeatherInfo = ({ weatherData, units }) => {
  return (
    <div className="weather-info">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°{units === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</p>
      {/* Add hourly and daily forecasts here */}
    </div>
  );
};

export default WeatherInfo;
