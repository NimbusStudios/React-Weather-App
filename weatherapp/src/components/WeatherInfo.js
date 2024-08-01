
// This is a functional component that displays weather information. It takes
// two props: weatherData, which is an object containing weather data for a
// location, and units, which is a string indicating the unit of temperature
// (metric or imperial).

import React from 'react';

// We define the WeatherInfo component as a function that takes two props
const WeatherInfo = ({ weatherData, units }) => {

  // We return a JSX element that contains the weather information. The className
  // property is used to apply CSS styles to the element.
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

// We export the WeatherInfo component so that it can be used in other parts of
// the application.
export default WeatherInfo;


