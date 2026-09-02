import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleCloud = () => {
  const pointsRef = useRef();
  
  const particlesCount = 2500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      // Create a shell of particles
      const r = 5 + (Math.random() - 0.5) * 1.5;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Auto rotation
      pointsRef.current.rotation.y -= delta * 0.15;
      pointsRef.current.rotation.x -= delta * 0.05;
      
      // Interactive mouse follow effect
      pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, state.pointer.x * 2, 0.05);
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, state.pointer.y * 2, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#22D3EE"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
};

const DataCore = () => {
  const coreRef = useRef();
  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5;
      coreRef.current.rotation.x += delta * 0.2;
    }
  });
  return (
    <mesh ref={coreRef}>
      <icosahedronGeometry args={[2.5, 2]} />
      <meshBasicMaterial color="#38BDF8" wireframe transparent opacity={0.4} />
    </mesh>
  );
};

const NetworkVisualization = () => {
  return (
    <div className="w-full h-full relative group cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-[100px] group-hover:opacity-70 transition duration-1000 opacity-40"></div>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ParticleCloud />
        <DataCore />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default NetworkVisualization;
