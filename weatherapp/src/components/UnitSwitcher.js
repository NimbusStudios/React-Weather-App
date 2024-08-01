import React from 'react';

const UnitSwitcher = ({ units, setUnits }) => {
  return (
    <button onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}>
      Switch to {units === 'metric' ? 'Imperial' : 'Metric'} Units
    </button>
  );
};

export default UnitSwitcher;
