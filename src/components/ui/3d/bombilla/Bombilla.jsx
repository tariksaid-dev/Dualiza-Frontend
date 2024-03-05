import { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera, SpotLight, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { initialCamera } from './constants';


function Model() {
  return (
    <Suspense fallback={null}>
      <ModelComponent />
    </Suspense>
  );
}

function CameraHelper() {
  const camera = new THREE.PerspectiveCamera(90, 1, 1, 7)
  return <group position={[0, 1.5, 3]}>
    <cameraHelper args={[camera]} />
  </group>
}

function ModelComponent() {
  const groupRef = useRef();
  let { camera } = useThree();

  console.log(camera.position.toArray())
  
  useFrame((state) => {
    groupRef.current.rotation._w = 0
    groupRef.current.up.y = 0
    const { clock } = state;
    const time = clock.getElapsedTime();
    const rotation = time * 0.5;
    groupRef.current.rotation.y = rotation;
    
    
    
  });

  const gltf = useLoader(GLTFLoader, 'public/3d-models/bombilla/bombilla.gltf');
  const { nodes, materials } = useGLTF('public/3d-models/bombilla/bombilla.gltf');

  nodes.Icosphere.material.color.setRGB(204/255, 204/255, 153/255);
  nodes.Icosphere001.material.color.setRGB(204/255, 204/255, 153/255);
  nodes.Icosphere002.material.color.setRGB(204/255, 204/255, 153/255);

  materials.planta['_transmission'] = 0;

  materials['bombilla']['_transmission'] = 0;
  materials['bombilla'].transparent = true;
  materials['bombilla'].opacity = 0.2;

  materials['bombilla-2'].color.setRGB(1, 1, 1);

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  );
}

function Bombilla() {
  
  return (
    <Canvas camera={initialCamera} style={{ width: '300px', height: '500px', paddingTop: '100px', margin: '0 auto', display: 'flex' }}>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} position={[1, 1, 1]} />
      <directionalLight intensity={10} position={[0, -1, 0]} />
      <SpotLight position={[0,5,0]}/>
      <OrbitControls/>
      {/* <CameraHelper/>  */}
      <Model />
    </Canvas>
  );
}

export default Bombilla;
