import { useBox } from '@react-three/cannon';
import {
  AccumulativeShadows,
  CubeCamera,
  Environment,
  Lightformer,
  OrbitControls,
  PerformanceMonitor,
  RandomizedLight,
  useGLTF
} from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import glsl from 'babel-plugin-glsl/macro';
import { easing } from 'maath';
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';
import { GlobalStyle } from './AppElements';
import Peppers from './Models/Peppers';
import Logo from './Models/SunnyIslandLogo';
import PepperSauce from './Models/SunnyIslandPepperSauce';
import { Overlay } from './Overlay/Overlay';
import Preloader from './Preloader/Preloader';
const innerMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: 'black',
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 2
})

function PhysicsPepperSauce() {
  const [ref] = useBox(() => ({
    position: [0, 0.5, 0], // Adjust based on actual position
    args: [1, 1, 1], // Adjust the size to match PepperSauce
    static: true,
  }));

  return (
    <mesh ref={ref}>
      <PepperSauce />
    </mesh>
  );
}
export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Placeholder for your loading logic
    // Set isLoading to false when you're sure all components have loaded
    // For demonstration, using a timeout
    const timer = setTimeout(() => setIsLoading(false), 3000); // Assume everything loads in 3 seconds

    return () => clearTimeout(timer);
  }, []);
  const [inspectMode, setInspectMode] = useState(false);
  // Other state initialization
  const overlay = document.getElementById('overlay');

  if (overlay) {
    overlay.classList.remove('hidden'); // Make the overlay visible
  }
  // Function to call when loading is complete
  // Handle loading completion
  const handleLoaded = () => {
    setLoading(false); // Set loading to false when content is ready
  };
  const [perfSucks, degrade] = useState(false);
  // Reduced number of instances for performance
  const redPepperCount = perfSucks ? 5 : 10;
  const yellowPepperCount = perfSucks ? 10 : 30;
  const [showEffectComposer, setShowEffectComposer] = useState(true);
  const [showPeppers, setShowPeppers] = useState(true);
  const [flameOn, setFlameOn] = useState(false);

  const toggleFlame = () => setFlameOn(!flameOn);
  const togglePeppers = () => {
    setShowPeppers(!showPeppers);
  };

  const toggleLights = () => {
    setShowEffectComposer(!showEffectComposer);
  };
  // Lowering DPR if performance sucks
  const dprValue = perfSucks ? [1, 1] : [1, 2];
  return (
    <>
<GlobalStyle />
  
 
    <Canvas
 antialias={!perfSucks} shadows dpr={dprValue}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
      
      camera={{ position: [20, 0.9, 20], fov: 26 }} >

<Suspense fallback={<Preloader onLoaded={handleLoaded} />}>
      <group position={[0,0,-5]}>
            {showPeppers && (
          <>
          {/*
            <RedPepper count={redPepperCount} />
            <YellowPepper count={yellowPepperCount} />
           */} 
           <Peppers speed={2} />
           
      
 
          </>
        )}
        </group>
       {inspectMode && <OrbitControls />}
      {/** PerfMon will detect performance issues */}
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <color attach="background" args={['#000']} />
      <group  position={[-0.82, 0.75, 0]} rotation={[1.5, 0, 0]}>
        <Logo/>
        </group>
      <group position={[0, -0.25, 0]} rotation={[0, -0.75, 0]}>
      <group position={[0, 0, -2]}> {/* Adjust position to place behind the model */}

      </group>
      
      <group position={[-1, 0, 0]}>


             {flameOn &&<> <Fire color="red" position={[0.5, 1.5, 0]} scale={10} />      <FlickeringLight position={[0, 1, 0]} /> </>}
      
      </group>
        <PepperSauce onLoaded={() => setLoading(true)} />
 

        <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="red" scale={20} position={[0, -0.005, 0]}>
          <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={10} position={[-1.5, 2.5, -2.5]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      
 <Env inspectMode={inspectMode} perfSucks={perfSucks} />


      {showEffectComposer && (
 <></>
        )}
        </Suspense>
    </Canvas>

            <Overlay
id="overlay" className={isLoading ? 'hidden' : ''}
    flameOn = {flameOn}
    setFlameOn={setFlameOn}
    inspectMode={inspectMode}
        setInspectMode={setInspectMode}
        togglePeppers={togglePeppers}
        toggleLights={toggleLights}
        toggleFlame={toggleFlame} />
    </>
  )
}

/*
Kit-bash auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 scene.glb --transform
Licenses: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Authors:
  matousekfoto (https://sketchfab.com/matousekfoto) (Fruit Cake Slice)
    https://sketchfab.com/3d-models/fruit-cake-slice-7b9a33386eab4dd986aa0980054ead3c
  Felix Yadomi (https://sketchfab.com/felixyadomi) (Cute milkshake)
    https://sketchfab.com/3d-models/cute-milkshake-3ba52a41b4b248df953684861d9e7a20
  Second Studio (https://sketchfab.com/kayaaku) (Dry flower)
    https://sketchfab.com/3d-models/dry-flower-ff0005d6eb4d4077bd08b8992299c45c
  CDcruz (https://sketchfab.com/cdcruz) (Ikea - Pokal Glass Cups)
    https://sketchfab.com/3d-models/ikea-pokal-glass-cups-21837e54a14346aa900e1ae719779b86
*/

function Env({ perfSucks, inspectMode }) {
  const ref = useRef()
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    if (!perfSucks && !inspectMode) {
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
      easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
      state.camera.lookAt(0, 0, 0)
    }
  })
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  return (
    <Environment frames={perfSucks ? 1 : Infinity} >
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={10} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
      </group>
      <group ref={ref}>

      </group>
    </Environment>
  )
}


class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { ITERATIONS: '10', OCTIVES: '3' },
      uniforms: {
        fireTex: { type: 't', value: null },
        color: { type: 'c', value: null },
        time: { type: 'f', value: 0.0 },
        seed: { type: 'f', value: 0.0 },
        invModelMatrix: { type: 'm4', value: null },
        scale: { type: 'v3', value: null },
        noiseScale: { type: 'v4', value: new THREE.Vector4(1, 2, 1, 0.3) },
        magnitude: { type: 'f', value: 2.5 },
        lacunarity: { type: 'f', value: 3.0 },
        gain: { type: 'f', value: 0.6 }
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        }`,
      fragmentShader: glsl`
        #pragma glslify: snoise = require(glsl-noise/simplex/3d.glsl) 

        uniform vec3 color;
        uniform float time;
        uniform float seed;
        uniform mat4 invModelMatrix;
        uniform vec3 scale;
        uniform vec4 noiseScale;
        uniform float magnitude;
        uniform float lacunarity;
        uniform float gain;
        uniform sampler2D fireTex;
        varying vec3 vWorldPos;              

        float turbulence(vec3 p) {
          float sum = 0.0;
          float freq = 1.0;
          float amp = 1.0;
          for(int i = 0; i < OCTIVES; i++) {
            sum += abs(snoise(p * freq)) * amp;
            freq *= lacunarity;
            amp *= gain;
          }
          return sum;
        }

        vec4 samplerFire (vec3 p, vec4 scale) {
          vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);
          if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          p.y -= (seed + time) * scale.w;
          p *= scale.xyz;
          st.y += sqrt(st.y) * magnitude * turbulence(p);
          if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
          return texture2D(fireTex, st);
        }

        vec3 localize(vec3 p) {
          return (invModelMatrix * vec4(p, 1.0)).xyz;
        }

        void main() {
          vec3 rayPos = vWorldPos;
          vec3 rayDir = normalize(rayPos - cameraPosition);
          float rayLen = 0.0288 * length(scale.xyz);
          vec4 col = vec4(0.0);
          for(int i = 0; i < ITERATIONS; i++) {
            rayPos += rayDir * rayLen;
            vec3 lp = localize(rayPos);
            lp.y += 0.5;
            lp.xz *= 2.0;
            col += samplerFire(lp, noiseScale);
          }
          col.a = col.r;
          gl_FragColor = col;
        }`
    })
  }
}

extend({ FireMaterial })

function Fire({ color, ...props }) {
  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, '/fire.png')
  useFrame((state) => {
    const invModelMatrix = ref.current.material.uniforms.invModelMatrix.value
    ref.current.updateMatrixWorld()
    invModelMatrix.copy(ref.current.matrixWorld).invert()
    ref.current.material.uniforms.time.value = state.clock.elapsedTime
    ref.current.material.uniforms.invModelMatrix.value = invModelMatrix
    ref.current.material.uniforms.scale.value = ref.current.scale
  })
  useLayoutEffect(() => {
    texture.magFilter = texture.minFilter = THREE.LinearFilter
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
    ref.current.material.uniforms.fireTex.value = texture
    ref.current.material.uniforms.color.value = color || new THREE.Color(0xeeeeee)
    ref.current.material.uniforms.invModelMatrix.value = new THREE.Matrix4()
    ref.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1)
    ref.current.material.uniforms.seed.value = Math.random() * 19.19
  }, [])
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <fireMaterial transparent depthWrite={false} depthTest={false} />
    </mesh>
  )
}


function FlickeringLight() {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    lightRef.current.intensity = 1.5 + Math.sin(clock.getElapsedTime() * 10) * 0.5;
  });

  return <pointLight ref={lightRef} color="orange" />;
}




//RedPeppers YellowPeppers


function RedPepper({ count = 5 }) {
  const { viewport, clock } = useThree()
  const model = useRef()
  const { nodes } = useGLTF('https://sunnyisland.s3.us-east-2.amazonaws.com/media/glb/redPepper.glb');
  // Create random position data
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const pepper = useMemo(
    () => new Array(count).fill().map((_, i) => ({
      position: [
        THREE.MathUtils.randFloatSpread(viewport.width), // Adjust the spread to cover more x space
        40 - Math.random() * 40,
        THREE.MathUtils.randFloatSpread(15) - 30
      ],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        rotation: [Math.sin(Math.random()) * Math.PI, Math.sin(Math.random()) * Math.PI, Math.cos(Math.random()) * Math.PI]
      })),
    []
  )

  // Render-loop
  useFrame((state, delta) => {
    // Update instanced pepper
    pepper.forEach((data, i) => {
      const t = clock.getElapsedTime()
      data.position[1] -= data.factor * 1 * delta * data.direction
      if (data.direction === 1 ? data.position[1] < -20 : data.position[1] > 20)
        data.position = [viewport.width / 2 - Math.random() * viewport.width, 50 * data.direction, data.position[2]]
      const { position, rotation, factor } = data
      dummy.position.set(position[0], position[1], position[2])
      dummy.rotation.set(rotation[0] + (t * factor) / 10, rotation[1] + (t * factor) / 10, rotation[2] + (t * factor) / 10)
      dummy.scale.setScalar(1 + factor)
      dummy.updateMatrix()
      model.current.setMatrixAt(i, dummy.matrix)
    })
    model.current.instanceMatrix.needsUpdate = true
  })

  return (
    <CubeCamera>
      {(texture) => (
        <instancedMesh scale={0.15} ref={model} args={[nodes.modelobj.geometry, nodes.modelobj.material, pepper.length]}>
        
        </instancedMesh>
      )}
    </CubeCamera>
  )
}

function YellowPepper({ count = 10 }) {
  const { viewport, clock } = useThree()
  const model = useRef()
  const { nodes } = useGLTF('https://sunnyisland.s3.us-east-2.amazonaws.com/media/glb/yellowPepper.glb');
  // Create random position data
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const pepper = useMemo(
    () =>
      new Array(count).fill().map((_, i) => ({
        position: [THREE.MathUtils.randFloatSpread(viewport.width * 20), 40 - Math.random() * 40, THREE.MathUtils.randFloatSpread(15) - 20],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        rotation: [Math.sin(Math.random()) * Math.PI, Math.sin(Math.random()) * Math.PI, Math.cos(Math.random()) * Math.PI]
      })),
    []
  )

  // Render-loop
  useFrame((state, delta) => {
    // Update instanced pepper
    pepper.forEach((data, i) => {
      const t = clock.getElapsedTime()
      data.position[1] -= data.factor * 1 * delta * data.direction
      if (data.direction === 1 ? data.position[1] < -20 : data.position[1] > 20)
        data.position = [viewport.width / 2 - Math.random() * viewport.width, 50 * data.direction, data.position[2]]
      const { position, rotation, factor } = data
      dummy.position.set(position[0], position[1], position[2])
      dummy.rotation.set(rotation[0] + (t * factor) / 10, rotation[1] + (t * factor) / 10, rotation[2] + (t * factor) / 10)
      dummy.scale.setScalar(1 + factor)
      dummy.updateMatrix()
      model.current.setMatrixAt(i, dummy.matrix)
    })
    model.current.instanceMatrix.needsUpdate = true
  })



  return (
    <CubeCamera>
      {(texture) => (
        <instancedMesh  scale={0.15} ref={model} args={[nodes.modelobj.geometry, nodes.modelobj.material, pepper.length]}>
      
        </instancedMesh>
      )}
    </CubeCamera>
  )
}