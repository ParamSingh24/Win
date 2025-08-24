import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, Zap, Shield, Users, TrendingDown, Leaf, Home, Phone, Settings } from 'lucide-react';
import SimpleEarth from '@/components/SimpleEarth';

const Dashboard = () => {
  const [currentSavings, setCurrentSavings] = useState(47);
  const [carbonReduced, setCarbonReduced] = useState(2.3);
  const [isListening, setIsListening] = useState(false);
  const [isEarthExpanded, setIsEarthExpanded] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSavings(prev => prev + Math.random() * 0.5);
      setCarbonReduced(prev => prev + Math.random() * 0.01);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVoiceCommand = () => {
    setIsListening(true);
    setTimeout(() => setIsListening(false), 3000);
  };

  const roomData = [
    { name: 'Living Room', usage: 65, status: 'efficient', color: 'energy-low' },
    { name: 'Kitchen', usage: 78, status: 'moderate', color: 'energy-medium' },
    { name: 'Bedroom', usage: 45, status: 'efficient', color: 'energy-low' },
    { name: 'Bathroom', usage: 30, status: 'efficient', color: 'energy-low' }
  ];

  const achievements = [
    { icon: TrendingDown, title: 'Energy Saver', description: '30% reduction this month' },
    { icon: Users, title: 'Community Helper', description: 'Donated 15 kWh this week' },
    { icon: Shield, title: 'Safety First', description: '7 days without alerts' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Header */}
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary mb-2 font-orbitron text-glow animate-hologram">
          Good morning, Maria! 🌅
        </h1>
        <p className="text-xl text-foreground">
          Your home is running efficiently. You're having a great energy day!
        </p>
      </div>

      {/* Voice Command Bar */}
      <Card className="p-6 bg-gradient-cyberpunk border-primary/30 shadow-xl neon-glow scan-line">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Button
            variant="secondary"
            size="xl"
            onClick={handleVoiceCommand}
            className={`flex-shrink-0 cyber-button ${isListening ? 'voice-wave animate-cyber-glow' : 'neon-glow'}`}
            aria-label="Activate voice command"
          >
            <Mic className="h-8 w-8" />
            {isListening ? 'Listening...' : 'Speak to EcoSync'}
          </Button>
          <div className="text-center lg:text-left">
            <p className="text-lg font-medium text-primary-foreground mb-1 text-glow">
              Try saying: "EcoSync, optimize my energy for comfort"
            </p>
            <p className="text-primary-foreground/80">
              Your AI energy butler is ready to help
            </p>
          </div>
        </div>
      </Card>

      {/* Today's Impact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 gentle-hover bg-card/80 border-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-primary">Today's Savings</h3>
            <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center neon-glow">
              <TrendingDown className="h-6 w-6 text-success" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-success savings-pulse">
              ₹{Math.round(currentSavings)}
            </div>
            <p className="text-foreground">
              Compared to yesterday: +₹12 more saved
            </p>
          </div>
        </Card>

        <Card className="p-6 gentle-hover bg-card/80 border-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-primary">Environmental Impact</h3>
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center neon-glow">
              <Leaf className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary savings-pulse">
              {carbonReduced.toFixed(1)}kg CO₂
            </div>
            <p className="text-foreground">
              Equivalent to planting 0.1 trees today
            </p>
          </div>
        </Card>

        {/* 3D Earth Global Network */}
        <Card className="p-6 gentle-hover bg-card/80 border-primary/20 backdrop-blur-sm min-h-[300px] relative">
          {!isEarthExpanded ? (
            // Normal Earth View
            <div 
              className="w-full h-64 flex items-center justify-center cursor-pointer relative"
              onClick={() => setIsEarthExpanded(true)}
            >
              <div className="relative">
                {/* Earth sphere with inline styles to guarantee visibility */}
                <div 
                  className="w-32 h-32 rounded-full relative"
                  style={{
                    background: 'linear-gradient(45deg, #1e3a8a, #3b82f6, #00FFFF, #1e40af)',
                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.2)',
                    animation: 'spin 20s linear infinite',
                    border: '2px solid #00FFFF'
                  }}
                >
                  {/* Connection points */}
                  <div 
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: '#00FFFF',
                      top: '16px',
                      left: '32px',
                      boxShadow: '0 0 10px #00FFFF',
                      animation: 'pulse 2s infinite'
                    }}
                  ></div>
                  <div 
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: '#00FFFF',
                      top: '48px',
                      right: '24px',
                      boxShadow: '0 0 10px #00FFFF',
                      animation: 'pulse 2s infinite 0.5s'
                    }}
                  ></div>
                  <div 
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: '#00FFFF',
                      bottom: '32px',
                      left: '48px',
                      boxShadow: '0 0 10px #00FFFF',
                      animation: 'pulse 2s infinite 1s'
                    }}
                  ></div>
                  <div 
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: '#00FFFF',
                      bottom: '24px',
                      right: '32px',
                      boxShadow: '0 0 10px #00FFFF',
                      animation: 'pulse 2s infinite 1.5s'
                    }}
                  ></div>
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
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Global Network
                </h3>
                <p className="text-sm text-foreground/80">
                  Click to explore
                </p>
              </div>
            </div>
          ) : (
            // Fullscreen Earth View
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{
                background: 'rgba(8, 12, 20, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => setIsEarthExpanded(false)}
            >
              <div className="relative">
                {/* Large Earth */}
                <div 
                  className="w-96 h-96 rounded-full relative"
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
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: '#00FFFF',
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
                        animation: `pulse 2s infinite ${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Energy rings */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                  style={{ animation: 'pulse 3s infinite' }}
                />
                <div 
                  className="absolute inset-0 rounded-full border border-purple-400/20"
                  style={{ animation: 'pulse 4s infinite 1s' }}
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
                className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-all"
                style={{
                  background: 'rgba(0, 255, 255, 0.2)',
                  border: '1px solid #00FFFF'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEarthExpanded(false);
                }}
              >
                ✕
              </button>
            </div>
          )}
        </Card>
      </div>

      {/* Room Energy Status */}
      <Card className="p-6 bg-card/80 border-primary/20 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2 text-glow">
          <Home className="h-5 w-5 animate-neon-flicker" />
          Room-wise Energy View
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roomData.map((room) => (
            <div
              key={room.name}
              className="p-4 border border-primary/30 rounded-lg gentle-hover bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-primary">{room.name}</h4>
                <div className={`w-3 h-3 rounded-full bg-${room.color} neon-glow`} />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">{room.usage}%</div>
                <p className="text-sm text-foreground/80 capitalize">{room.status}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="secondary" size="lg" className="justify-start cyber-button neon-glow">
          <Zap className="h-5 w-5" />
          Optimize Now
        </Button>
        <Button variant="outline" size="lg" className="justify-start cyber-button border-primary/50 text-primary hover:bg-primary/10">
          <Shield className="h-5 w-5" />
          Safety Check
        </Button>
        <Button variant="default" size="lg" className="justify-start cyber-button neon-glow">
          <Phone className="h-5 w-5" />
          Call Family
        </Button>
      </div>

      {/* Achievements */}
      <Card className="p-6 bg-card/80 border-primary/20 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-primary mb-6 text-glow">Your Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-primary/30 rounded-lg gentle-hover bg-card/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-cyberpunk rounded-full flex items-center justify-center neon-glow">
                  <Icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">{achievement.title}</h4>
                  <p className="text-sm text-foreground/80">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Weather Integration */}
      <Card className="p-6 bg-gradient-cyberpunk border-primary/30 neon-glow">
        <div className="flex items-center gap-4">
          <div className="text-4xl animate-hologram">☁️</div>
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground text-glow">
              Cloudy Day - Solar Generating 60%
            </h3>
            <p className="text-primary-foreground/80">
              Your solar panels are still producing clean energy. Grid usage optimized automatically.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;