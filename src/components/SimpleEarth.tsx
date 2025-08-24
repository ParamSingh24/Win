import { useState } from 'react';

interface SimpleEarthProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const SimpleEarth = ({ isExpanded, onToggleExpand }: SimpleEarthProps) => {
  return (
    <>
      {/* Normal view */}
      {!isExpanded && (
        <div 
          className="w-full h-64 flex items-center justify-center cursor-pointer"
          onClick={onToggleExpand}
        >
          <div className="relative">
            {/* Earth sphere */}
            <div 
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 animate-spin"
              style={{
                background: 'linear-gradient(45deg, #1e3a8a, #3b82f6, #00FFFF, #1e40af)',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.2)',
                animation: 'spin 20s linear infinite',
                border: '2px solid #00FFFF'
              }}
            >
              {/* Connection points */}
              <div className="absolute top-4 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full -z-10"
              style={{
                background: 'radial-gradient(circle, transparent 60%, rgba(0, 255, 255, 0.2) 100%)',
                filter: 'blur(4px)',
                transform: 'scale(1.2)'
              }}
            ></div>
          </div>
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center mt-40">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">
                Global Network
              </h3>
              <p className="text-sm text-cyan-300">
                Click to explore
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Expanded fullscreen view */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'rgba(8, 12, 20, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
          onClick={onToggleExpand}
        >
          <div className="relative">
            {/* Large Earth */}
            <div 
              className="w-96 h-96 rounded-full"
              style={{
                background: 'linear-gradient(45deg, #1e3a8a, #3b82f6, #00FFFF, #1e40af)',
                boxShadow: '0 0 100px rgba(0, 255, 255, 0.6), inset 0 0 50px rgba(0, 255, 255, 0.3)',
                animation: 'spin 20s linear infinite',
                border: '3px solid #00FFFF'
              }}
            >
              {/* Many connection points */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                  }}
                />
              ))}
            </div>
            
            {/* Energy rings */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"
              style={{ animationDuration: '3s' }}
            />
            <div 
              className="absolute inset-0 rounded-full border border-purple-400/20 animate-ping"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />
          </div>
          
          {/* Info panels */}
          <div className="absolute top-8 left-8 text-cyan-400">
            <h2 className="text-3xl font-bold mb-4">GLOBAL ENERGY NETWORK</h2>
            <div className="space-y-2">
              <p>🌍 Connected Communities: 1,247,892</p>
              <p>⚡ Active Energy Nodes: 45,678</p>
              <p>📡 Real-time Data Streams: Active</p>
              <p>🔋 Energy Shared Today: 2.4 TWh</p>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 text-cyan-400 text-right">
            <h3 className="text-xl font-bold mb-2">MARIA'S IMPACT</h3>
            <p>Energy Shared: 45.2 kWh</p>
            <p>CO₂ Saved: 12.3 kg</p>
          </div>
          
          {/* Close button */}
          <button
            className="absolute top-8 right-8 w-12 h-12 bg-cyan-400/20 border border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand();
            }}
          >
            ✕
          </button>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleEarth;