import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Importing gltf model
  const computer = useGLTF('./desktop_pc/scene.gltf');
  console.log('Computer: ', computer);

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-29, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.75}
        position={isMobile ? [0, -2, -1.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // This useEffect is going to check if user is on a mobile device
  useEffect(() => {
    // Add event listener for changes to screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the intial value of the 'isMobile' state
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add callback function as a listener for changes to media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Since we are inside of a useEffect, we have to close the mediaQuery listener below for when it unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas;