"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AnimatedChickModel } from "./AnimatedChickModel";

// Loading Fallback
function LoadingFallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial 
        color="#FFD700" 
        emissive="#FFA500" 
        emissiveIntensity={0.3}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
}

// Main Component
export default function ChickModel() {
  return (
    <div className="w-full h-full min-h-[400px] sm:min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="rounded-3xl"
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Suspense fallback={<LoadingFallback />}>
          <AnimatedChickModel url="/models/Chick_LOD1.fbx" />
        </Suspense>
        
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  );
}
