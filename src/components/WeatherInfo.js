import React from 'react';

/**
 * WeatherInfo component displays the current weather data of a location.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.weatherData - The weather data object.
 * @param {string} props.units - The units for temperature (metric or imperial).
 * @return {JSX.Element} The WeatherInfo component.
 */
const WeatherInfo = ({ weatherData, units }) => {
  // Render the weather information
  return (
    <div className="weather-info">
      {/* Display the location name */}
      <h2>{weatherData.name}</h2>

      {/* Display the weather icon */}
      <img src={weatherData.icon} alt={weatherData.weather[0].description} />

      {/* Display the temperature */}
      <p>
        Temperature: {weatherData.main.temp}°{units === 'metric' ? 'C' : 'F'}
      </p>

      {/* Display the humidity */}
      <p>Humidity: {weatherData.main.humidity}%</p>

      {/* Display the wind speed */}
      <p>
        Wind Speed: {weatherData.wind.speed}
        {units === 'metric' ? 'm/s' : 'mph'}
      </p>

      {/* Display the weather description */}
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;

