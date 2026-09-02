import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const Network = () => {
  const groupRef = useRef();
  
  // Generate random nodes
  const nodeCount = 60;
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < nodeCount; i++) {
      temp.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ));
    }
    return temp;
  }, []);

  // Generate lines connecting close nodes
  const lines = useMemo(() => {
    const tempLines = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 5.5) {
          tempLines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return tempLines;
  }, [nodes]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = Math.sin(time * 0.02) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.08, 16, 16]}>
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.8} />
        </Sphere>
      ))}

      {/* Glow Effects for a few nodes */}
      {nodes.slice(0, 15).map((pos, i) => (
        <Sphere key={`glow-${i}`} position={pos} args={[0.4, 16, 16]}>
          <meshBasicMaterial color="#06B6D4" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </Sphere>
      ))}

      {/* Connections */}
      {lines.map((points, i) => (
        <Line
          key={`line-${i}`}
          points={points}
          color="#38BDF8"
          lineWidth={1}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 blur-3xl opacity-40"></div>
      
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#22D3EE" />
          <Network />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-30" style={{ zIndex: 2 }}></div>
    </div>
  )
}

export default AnimatedBackground