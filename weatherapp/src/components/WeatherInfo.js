
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

      // We display the name of the location in an h2 element.
      <h2>{weatherData.name}</h2>

      // We display the current temperature in a p element. If the units prop is
      // set to 'metric', we display the temperature in degrees Celsius, otherwise
      // we display it in degrees Fahrenheit.
      <p>Temperature: {weatherData.main.temp}°{units === 'metric' ? 'C' : 'F'}</p>

      // We display the current humidity in a p element, specifying the units
      // as a percentage.
      <p>Humidity: {weatherData.main.humidity}%</p>

      // We display the current wind speed in a p element. If the units prop is
      // set to 'metric', we display the wind speed in meters per second, otherwise
      // we display it in miles per hour.
      <p>Wind Speed: {weatherData.wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</p>

      // We leave a comment indicating that we should add hourly and daily forecasts
      // here. We don't have to do anything at the moment, but we can add this
      // functionality later.
      {/* Add hourly and daily forecasts here */}

    </div>
  );
};

// We export the WeatherInfo component so that it can be used in other parts of
// the application.
export default WeatherInfo;


