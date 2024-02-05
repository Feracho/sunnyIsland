import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';

export default function Logo(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('https://sunnyisland.s3.us-east-2.amazonaws.com/media/glb/SunnyIslandLogo.glb');
  const [scale, setScale] = useState(window.innerWidth <= 600 ? 0.8 : 1.25);
  const [position, setPosition] = useState(window.innerWidth <= 600 ? [11, 0, 0] : [0, 0, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setScale(0.9);
        setPosition([0.22, 0, 0]); // Change position when window width is <= 600px
      } else {
        setScale(1.25);
        setPosition([0, 0, 0]); // Reset position when window width is > 600px
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <group ref={group} {...props} scale={scale} position={position} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials.PaletteMaterial003} />
    </group>
  );
}

useGLTF.preload('https://sunnyisland.s3.us-east-2.amazonaws.com/media/glb/SunnyIslandLogo.glb');
