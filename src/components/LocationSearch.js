import React, { useState } from 'react';
import { searchLocation } from '../services/locationService';

/**
 * LocationSearch component
 * 
 * Component for searching and setting a location.
 * 
 * @param {function} setLocation - Function to set the location.
 */
const LocationSearch = ({ setLocation }) => {
  // State to hold the search query
  const [query, setQuery] = useState('');

  /**
   * Handles the search form submission.
   * 
   * @param {Event} e - The form submit event.
   */
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Search for the location and set the location if successful
    const coords = await searchLocation(query);
    if (coords) {
      setLocation(coords);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      {/* Input field for the search query */}
      <input
        type="text"
        placeholder="Search for a location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Submit button for the search form */}
      <button type="submit">Search</button>
    </form>
  );
};

export default LocationSearch;

