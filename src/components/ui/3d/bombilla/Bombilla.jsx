import { Suspense, useContext, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SpotLight, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { initialCamera } from "./constants";
import { getLightColor } from "@/utils/themeHelpers";
import { ThemeProviderContext } from "@/context/DarkModeContext";

function Model() {
  return (
    <Suspense fallback={null}>
      <ModelComponent />
    </Suspense>
  );
}

function ModelComponent() {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation._w = 0;
    groupRef.current.up.y = 0;
    const { clock } = state;
    const time = clock.getElapsedTime();
    const rotation = time * 0.5;
    groupRef.current.rotation.y = rotation;
  });

  const gltf = useLoader(GLTFLoader, "/3d-models/bombilla/bombilla.gltf");
  const { nodes, materials } = useGLTF(
    "/3d-models/bombilla/bombilla.gltf"
  );

  nodes.Icosphere.material.color.setRGB(204 / 255, 204 / 255, 153 / 255);
  nodes.Icosphere001.material.color.setRGB(204 / 255, 204 / 255, 153 / 255);
  nodes.Icosphere002.material.color.setRGB(204 / 255, 204 / 255, 153 / 255);

  materials.planta["_transmission"] = 0;

  materials["bombilla"]["_transmission"] = 0;
  materials["bombilla"].transparent = true;
  materials["bombilla"].opacity = 0.2;

  materials["bombilla-2"].color.setRGB(1, 1, 1);

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  );
}

function Bombilla() {
  const { theme } = useContext(ThemeProviderContext);
  
  return (
    <Canvas
      camera={initialCamera}
      style={{
        width: "500px",
        height: "100vh",
        margin: "0",
        position: "absolute",
        left: "-80px",
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} position={[1, 1, 1]} />
      <directionalLight intensity={10} position={[0, -1, 0]} />
      <SpotLight
        color={new THREE.Color(getLightColor(theme))}
        distance={10}
        anglePower={5}
        angle={0.7}
        intensity={2}
        position={[0, 5, 0]}
      />
      <Model />
    </Canvas>
  );
}

export default Bombilla;
