import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple Earth component with rotation
const Earth = ({ isExpanded }: { isExpanded: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.003;
    }
  });

  const radius = isExpanded ? 3 : 1.5;
  const glowRadius = isExpanded ? 3.2 : 1.7;

  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color="#4A90E2"
          roughness={0.8}
          metalness={0.2}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[glowRadius, 16, 16]} />
        <meshBasicMaterial
          color="#00FFFF"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Energy connections - cyberpunk style */}
      {isExpanded && (
        <>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 3.5;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = Math.sin(i) * 0.5;
            
            return (
              <mesh key={i} position={[x, y, z]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshBasicMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
              </mesh>
            );
          })}
        </>
      )}
    </group>
  );
};

// Simple particle system
const Particles = () => {
  const points = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.1;
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00FFFF"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Simple camera controls
const CameraController = ({ isExpanded, autoRotate }: { isExpanded: boolean; autoRotate: boolean }) => {
  useFrame((state) => {
    if (autoRotate) {
      state.camera.position.x = Math.cos(state.clock.elapsedTime * 0.2) * (isExpanded ? 8 : 4);
      state.camera.position.z = Math.sin(state.clock.elapsedTime * 0.2) * (isExpanded ? 8 : 4);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

interface Earth3DProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const Earth3D = ({ isExpanded, onToggleExpand }: Earth3DProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-64 rounded-lg overflow-hidden neon-glow bg-card/80 border-primary/20 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-lg font-orbitron text-primary text-glow mb-2">
            Global Network
          </h3>
          <p className="text-sm text-foreground/80">
            Initializing 3D view...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`transition-all duration-1000 ease-in-out cursor-pointer ${
        isExpanded 
          ? 'fixed inset-0 z-50 bg-background/95 backdrop-blur-sm' 
          : 'relative w-full h-64 rounded-lg overflow-hidden neon-glow'
      }`}
      onClick={onToggleExpand}
    >
      <Canvas
        camera={{ 
          position: [0, 0, isExpanded ? 8 : 4], 
          fov: 60 
        }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00FF" />
        
        <Earth isExpanded={isExpanded} />
        
        {isExpanded && <Particles />}
        
        <CameraController isExpanded={isExpanded} autoRotate={!isExpanded} />
      </Canvas>
      
      {isExpanded && (
        <>
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleExpand();
              }}
              className="w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-all neon-glow"
            >
              ✕
            </button>
          </div>
          
          <div className="absolute top-4 left-4 z-10 text-primary-foreground">
            <h2 className="text-2xl font-orbitron text-glow mb-2">GLOBAL ENERGY NETWORK</h2>
            <p className="text-sm opacity-80">Connected Communities: 1,247,892</p>
            <p className="text-sm opacity-80">Active Energy Nodes: 45,678</p>
            <p className="text-sm opacity-80">Real-time Data Streams: Active</p>
          </div>
          
          <div className="absolute bottom-4 left-4 z-10 text-primary-foreground">
            <p className="text-xs opacity-60">Click and drag to explore • Scroll to zoom</p>
          </div>
        </>
      )}
      
      {!isExpanded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h3 className="text-lg font-orbitron text-primary text-glow mb-2">
              Global Network
            </h3>
            <p className="text-sm text-foreground/80">
              Click to explore
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Earth3D;