import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AntigravityParticles = () => {
  const points = useMemo(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#FFB800"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
};

const FloatingCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.12;
    meshRef.current.rotation.y = time * 0.18;
  });

  return (
    <Float speed={5} rotationIntensity={2.5} floatIntensity={3}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.3}>
        <MeshDistortMaterial
          color="#E85C41"
          attach="material"
          distort={0.6}
          speed={2.5}
          roughness={0.1}
          metalness={1}
          emissive="#E85C41"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
};

export const ThreeHero = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2.5} />
        <pointLight position={[-10, -10, -10]} color="#FFB800" intensity={2} />
        <AntigravityParticles />
        <FloatingCore />
      </Canvas>
    </div>
  );
};
