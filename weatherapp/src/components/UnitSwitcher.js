
// This is a functional component that represents a unit switcher.
// It takes two props: units, which is a string indicating the unit of temperature
// (metric or imperial), and setUnits, which is a function that sets the units prop.

import React from 'react';

// We define the UnitSwitcher component as a function that takes two props
const UnitSwitcher = ({ units, setUnits }) => {
  return (
    <button onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}>
      <i className="fas fa-thermometer-half"></i> Switch to {units === 'metric' ? 'Imperial' : 'Metric'} Units
    </button>
  );
};

export default UnitSwitcher;

