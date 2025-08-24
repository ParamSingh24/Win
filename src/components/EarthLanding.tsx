import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EarthLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();
  const animationTriggered = useRef(false);

  useEffect(() => {
    // Check if animation has already been shown in this session
    const hasSeenAnimation = sessionStorage.getItem('ecosync-landing-seen');
    
    if (hasSeenAnimation) {
      // Skip animation if already seen in this session
      navigate('/home');
      return;
    }
    
    // Mark animation as seen for this session
    sessionStorage.setItem('ecosync-landing-seen', 'true');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Navigate when user scrolls far enough (much longer scroll distance)
      if (currentScrollY > 1500 && !animationTriggered.current) {
        animationTriggered.current = true;
        setHasAnimated(true);
        navigate('/home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, navigate]);

  // Calculate transform values based on scroll (much longer scroll distance)
  const earthScale = Math.max(0.1, 1 - scrollY * 0.0008);
  const earthOpacity = Math.max(0, 1 - scrollY * 0.0006);
  const contentOpacity = Math.min(1, Math.max(0, (scrollY - 800) * 0.002));

  return (
    <div className="relative min-h-[500vh] bg-background overflow-hidden">
      {/* Fixed Earth Container */}
      <div 
        className="fixed inset-0 flex items-center justify-center z-10"
        style={{
          transform: `scale(${earthScale})`,
          opacity: earthOpacity
        }}
      >
        {/* Main Earth */}
        <div className="relative">
          <div 
            className="w-96 h-96 rounded-full relative"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, #00FFFF 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, #4A90E2 0%, transparent 50%),
                linear-gradient(45deg, #1e3a8a, #3b82f6, #00FFFF, #1e40af)
              `,
              boxShadow: `
                0 0 100px rgba(0, 255, 255, 0.6),
                inset 0 0 50px rgba(0, 255, 255, 0.3),
                0 0 200px rgba(0, 255, 255, 0.2)
              `,
              animation: 'spin 30s linear infinite',
              border: '3px solid #00FFFF'
            }}
          >
            {/* Connection points */}
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: '#00FFFF',
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
                  animation: `pulse 3s infinite ${Math.random() * 3}s`
                }}
              />
            ))}
            
            {/* Energy lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute"
                style={{
                  width: '2px',
                  height: '60px',
                  background: 'linear-gradient(to bottom, #00FFFF, transparent)',
                  left: `${20 + i * 10}%`,
                  top: `${10 + Math.random() * 80}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `pulse 2s infinite ${i * 0.3}s`
                }}
              />
            ))}
          </div>
          
          {/* Orbital rings */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-primary/20"
            style={{ 
              transform: 'scale(1.3)',
              animation: 'spin 40s linear infinite reverse'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full border border-secondary/15"
            style={{ 
              transform: 'scale(1.6)',
              animation: 'spin 50s linear infinite'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full border border-accent/10"
            style={{ 
              transform: 'scale(2)',
              animation: 'spin 60s linear infinite reverse'
            }}
          />
        </div>
        
        {/* Floating particles around Earth */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Welcome Text Overlay */}
      <div 
        className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none"
        style={{ opacity: earthOpacity }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-orbitron font-bold text-primary mb-4 text-glow animate-hologram">
            ECOSYNC NEXUS
          </h1>
          <p className="text-2xl text-foreground mb-8">
            Your AI Energy Butler
          </p>
          <div className="flex items-center justify-center gap-2 text-primary/80">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p className="text-lg">Scroll down to explore the network</p>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{ opacity: earthOpacity }}
      >
        <div className="flex flex-col items-center text-primary animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-sm mt-2">Scroll</p>
        </div>
      </div>



      {/* Content that appears on scroll */}
      <div 
        className="relative z-5 pt-[300vh]"
        style={{ opacity: contentOpacity }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron text-primary text-glow mb-4">
              Welcome to the Future
            </h2>
            <p className="text-xl text-foreground mb-8">
              Experience the power of connected energy management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-3 bg-gradient-cyberpunk text-primary-foreground rounded-lg font-bold hover:scale-105 transition-all neon-glow"
              >
                Enter Dashboard
              </button>
              <button
                onClick={() => navigate('/home')}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-card/80 rounded-lg border border-primary/20 gentle-hover">
              <div className="text-4xl mb-4 animate-hologram">🌍</div>
              <h3 className="text-xl font-bold text-primary mb-2">Global Network</h3>
              <p className="text-foreground/80">Connected to millions worldwide</p>
            </div>
            <div className="text-center p-6 bg-card/80 rounded-lg border border-primary/20 gentle-hover">
              <div className="text-4xl mb-4 animate-hologram">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-2">Smart Energy</h3>
              <p className="text-foreground/80">AI-powered optimization</p>
            </div>
            <div className="text-center p-6 bg-card/80 rounded-lg border border-primary/20 gentle-hover">
              <div className="text-4xl mb-4 animate-hologram">🔮</div>
              <h3 className="text-xl font-bold text-primary mb-2">Future Ready</h3>
              <p className="text-foreground/80">Next-generation technology</p>
            </div>
          </div>

          {/* Additional content */}
          <div className="text-center py-20">
            <h3 className="text-3xl font-orbitron text-primary text-glow mb-8">
              Ready to Transform Your Energy Experience?
            </h3>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of families who've discovered the peace of mind that comes with EcoSync Nexus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-4 bg-gradient-cyberpunk text-primary-foreground rounded-lg font-bold text-lg hover:scale-105 transition-all neon-glow animate-cyber-glow"
              >
                🚀 Launch Dashboard
              </button>
              <button
                onClick={() => navigate('/voice')}
                className="px-8 py-4 border border-secondary text-secondary rounded-lg font-bold text-lg hover:bg-secondary/10 transition-all"
              >
                🎤 Try Voice Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthLanding;