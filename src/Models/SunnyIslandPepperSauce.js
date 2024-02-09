/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export default function PepperSauce(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://sunnyisland.s3.us-east-2.amazonaws.com/media/glb/SunnyIslandPepperSauce.glb')
  return (
    <group ref={group} scale={.0075} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.002']}
        position={[2.13, -58.22, 135.84]}
        scale={[139.7, 103.96, 139.03]}
      />
      <mesh
        geometry={nodes.Material1.geometry}
        material={materials['Mat.1']}
        position={[0, -38.95, 0]}
        scale={[1.18, 1.15, 1.18]}
      />
      <mesh
        geometry={nodes.Material1001.geometry}
        material={materials['Mat.2']}
        position={[0, 93.08, 0]}
        scale={[1.19, 1.3, 1.19]}
      />
      <mesh
        geometry={nodes.Material1002.geometry}
        material={materials['Mat.5']}
        position={[0, 232.81, 0]}
        scale={[1.19, 1.15, 1.16]}
      />
    </group>
  )
}

useGLTF.preload('https://sunnyisland.s3.us-east-2.amazonaws.com/media/glb/SunnyIslandPepperSauce.glb')
