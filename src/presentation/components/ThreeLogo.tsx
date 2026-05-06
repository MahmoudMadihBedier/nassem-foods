import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const LogoModel = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, '/logo.png');

  texture.anisotropy = 16;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Smooth idle movements
    meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.15;
    meshRef.current.position.y = Math.sin(time * 1.5) * 0.1;

    // Smooth mouse reactivity
    const targetY = state.mouse.x * 0.5;
    const targetX = -state.mouse.y * 0.3;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
  });

  return (
    <Float speed={4} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.4}>
        <planeGeometry args={[4.5, 2.8]} />
        <meshStandardMaterial
          map={texture}
          transparent
          alphaTest={0.1}
          side={THREE.DoubleSide}
          metalness={0.4}
          roughness={0.4}
          emissive="#FFB800"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
};

export const ThreeLogo = () => {
  return (
    <div className="w-full h-[350px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFB800" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Suspense fallback={null}>
          <LogoModel />
        </Suspense>
      </Canvas>
    </div>
  );
};
