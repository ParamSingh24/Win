import { useState, useEffect } from 'react';

interface Earth3DSimpleProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const Earth3DSimple = ({ isExpanded, onToggleExpand }: Earth3DSimpleProps) => {
  const [connectionPoints, setConnectionPoints] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random connection points
    const points = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60, // Keep points more centered
      y: 20 + Math.random() * 60,
      delay: Math.random() * 2
    }));
    setConnectionPoints(points);
  }, []);

  return (
    <div 
      className={`transition-all duration-1000 ease-in-out cursor-pointer ${
        isExpanded 
          ? 'fixed inset-0 z-50 bg-background/95 backdrop-blur-sm' 
          : 'relative w-full h-64 rounded-lg overflow-hidden'
      }`}
      onClick={onToggleExpand}
      style={{
        background: isExpanded ? 'rgba(8, 12, 20, 0.95)' : 'transparent'
      }}
    >
      {/* CSS 3D Earth */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div 
          className={`relative rounded-full earth-spin earth-glow transition-all duration-1000 ${
            isExpanded ? 'w-96 h-96' : 'w-32 h-32'
          }`}
          style={{
            background: 'linear-gradient(45deg, #1e3a8a, #3b82f6, #00FFFF, #1e40af)',
            border: '2px solid #00FFFF'
          }}
        >
          {/* Atmosphere glow */}
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              isExpanded ? '-inset-4' : '-inset-2'
            }`}
            style={{
              background: 'radial-gradient(circle, transparent 60%, rgba(0, 255, 255, 0.2) 100%)',
              filter: 'blur(4px)'
            }}
          />
          
          {/* Connection points */}
          {connectionPoints.map((point) => (
            <div
              key={point.id}
              className={`absolute w-2 h-2 bg-primary rounded-full transition-all duration-1000 ${
                isExpanded ? 'animate-ping' : 'animate-pulse'
              }`}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                animationDelay: `${point.delay}s`,
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}
            />
          ))}
          
          {/* Energy rings */}
          {isExpanded && (
            <>
              <div 
                className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"
                style={{ animationDuration: '3s' }}
              />
              <div 
                className="absolute inset-0 rounded-full border border-secondary/20 animate-ping"
                style={{ animationDuration: '4s', animationDelay: '1s' }}
              />
            </>
          )}
        </div>
        
        {/* Floating particles */}
        {isExpanded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full animate-data-stream opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: '6s'
                }}
              />
            ))}
          </div>
        )}
      </div>
      
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
            <h2 className="text-2xl font-orbitron text-glow mb-2 animate-neon-flicker">GLOBAL ENERGY NETWORK</h2>
            <div className="space-y-1 text-sm opacity-80">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                Connected Communities: 1,247,892
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Active Energy Nodes: 45,678
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                Real-time Data Streams: Active
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Energy Shared Today: 2.4 TWh
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 z-10 text-primary-foreground">
            <p className="text-xs opacity-60">🌍 Connecting sustainable communities worldwide</p>
          </div>
          
          <div className="absolute bottom-4 right-4 z-10 text-primary-foreground">
            <div className="text-right">
              <p className="text-lg font-orbitron text-glow">MARIA'S IMPACT</p>
              <p className="text-sm opacity-80">Energy Shared: 45.2 kWh</p>
              <p className="text-sm opacity-80">CO₂ Saved: 12.3 kg</p>
            </div>
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
            <div className="flex items-center justify-center gap-1 mt-2">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Earth3DSimple;