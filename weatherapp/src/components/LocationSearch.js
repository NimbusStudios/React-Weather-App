import React, { useState } from 'react';
import { searchLocation } from '../services/locationService';

const LocationSearch = ({ setLocation }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const coords = await searchLocation(query);
    if (coords) {
      setLocation(coords);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default LocationSearch;
