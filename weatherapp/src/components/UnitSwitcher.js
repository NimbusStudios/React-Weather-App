
// This is a functional component that represents a unit switcher.
// It takes two props: units, which is a string indicating the unit of temperature
// (metric or imperial), and setUnits, which is a function that sets the units prop.

import React from 'react';

// We define the UnitSwitcher component as a function that takes two props
const UnitSwitcher = ({ units, setUnits }) => {

  // When the button is clicked, we call the setUnits function with a new value.
  // If the units prop is set to 'metric', we set it to 'imperial', otherwise we set it to 'metric'.
  // This toggles between the two unit systems.
  return (
    <button onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}>

      // We display a thermometer icon using Font Awesome CSS classes.
      <i className="fas fa-thermometer-half"></i>

      // We display the text "Switch to" followed by the opposite unit system of the current units prop.
      // If the units prop is set to 'metric', we display 'Imperial', otherwise we display 'Metric'.
      // This text indicates what the button does.
      {" "}Switch to {units === 'metric' ? 'Imperial' : 'Metric'} Units
      <i className="fas fa-thermometer-half"></i> Switch to {units === 'metric' ? 'Imperial' : 'Metric'} Units
    </button>
  );
};

// We export the UnitSwitcher component so that it can be used in other parts of
// the application.
export default UnitSwitcher;

