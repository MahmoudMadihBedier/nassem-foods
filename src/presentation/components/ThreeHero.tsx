import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#e9c349"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const ThreeHero = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#ffb596" intensity={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};
