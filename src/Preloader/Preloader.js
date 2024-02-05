import { Html } from '@react-three/drei';
import React from 'react';
import loadingImage from '../media/SunnyIslandSymbol.png'; // Ensure this path is correct
import "./Preloader.css";
const Preloader = () => {
  return (
    <Html center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <img
        src={loadingImage}
        className="loading-image" // Use the class for the CSS animation
      
      />
    </Html>
  );
};

export default Preloader;
