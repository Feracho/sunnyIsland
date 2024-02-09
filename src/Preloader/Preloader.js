import { Html } from '@react-three/drei';
import React from 'react';
import loadingImage from '../media/SunnyIslandSymbol.png'; // Ensure this path is correct
import "./Preloader.css";
import { Background, LoadingImage, LoadingImageWrap } from './PreloaderElements';
const Preloader = () => {
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <Html center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
  <Background
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backgroundVariants}
        transition={{ duration: 0.05 }}
      >
    <LoadingImageWrap>
      <LoadingImage
        src={loadingImage}
        className="loading-image" // Use the class for the CSS animation
      
      />
      </LoadingImageWrap>
      </Background>
    </Html>
  );
};

export default Preloader;
