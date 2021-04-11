import React from 'react';
import './App.css';
import ImageSection from './components/ImageSection/ImageSection';
import MapSection from './components/MapSection/MapSection';



const App = () => {
  return (
   <div>
      <div className="note">
          <h3>Bangladesh Map</h3>
          <p>Drag the image below to match the exact location on the map.</p>
      </div>
      <MapSection />
      <ImageSection />
   </div>
  );
}

export default App;
