import React, { useState } from 'react'
import DirectionMap from './DirectionsMap.jsx'


const App = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [travelMode, setTravelMode] = useState('driving');
  const [directions, setDirections] = useState(null);

  const fetchDirections = async () => {
    try {
      const response = await fetch(`http://localhost:3500/api/v1/directions/navigation?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`);
      const data = await response.json();
      if (data.routes) {
        setDirections(data);
      } else {
        alert(data.error || 'Unable to fetch directions.');
      }
    } catch (error) {
      alert('Error fetching directions.');
    }
  };

  return (
    <div className="app">
      <h1>Navigation App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <select value={travelMode} onChange={(e) => setTravelMode(e.target.value)}>
          <option value="driving">Driving</option>
          <option value="walking">Walking</option>
          <option value="bicycling">Bicycling</option>
          <option value="transit">Transit</option>
        </select>
        {/* <button onClick={fetchDirections}>Get Directions</button> IMPORTANT: */}
      </div>
      <DirectionMap directions={directions} /> {/** This line is temporary */}
      {/* {directions && <DirectionMap directions={directions} />} */}
    </div>
  );
}

export default App
