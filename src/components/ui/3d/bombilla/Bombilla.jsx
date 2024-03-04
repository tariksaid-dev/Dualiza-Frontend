import { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  return (
    <Suspense fallback={null}>
      <ModelComponent />
    </Suspense>
  );
}

function ModelComponent() {
  const groupRef = useRef();


  useFrame((state, delta) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    const y = Math.sin(time) * 0.5;
    groupRef.current.position.y = y;
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
    <Canvas camera={{fov:100}}>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} position={[1, 1, 1]} />
      <directionalLight intensity={10} position={[0, -1, 0]} />
      
      <Model />
    </Canvas>
  );
}

export default Bombilla;
