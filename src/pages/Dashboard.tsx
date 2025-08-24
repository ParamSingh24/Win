import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, Zap, Shield, Users, TrendingDown, Leaf, Home, Phone, Settings } from 'lucide-react';

const Dashboard = () => {
  const [currentSavings, setCurrentSavings] = useState(47);
  const [carbonReduced, setCarbonReduced] = useState(2.3);
  const [isListening, setIsListening] = useState(false);

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
        <h1 className="text-4xl font-bold text-primary mb-2 font-poppins">
          Good morning, Maria! 🌅
        </h1>
        <p className="text-xl text-muted-foreground">
          Your home is running efficiently. You're having a great energy day!
        </p>
      </div>

      {/* Voice Command Bar */}
      <Card className="p-6 bg-gradient-hero border-none shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Button
            variant="voice"
            size="xl"
            onClick={handleVoiceCommand}
            className={`flex-shrink-0 ${isListening ? 'voice-wave' : ''}`}
            aria-label="Activate voice command"
          >
            <Mic className="h-8 w-8" />
            {isListening ? 'Listening...' : 'Speak to EcoSync'}
          </Button>
          <div className="text-center lg:text-left">
            <p className="text-lg font-medium text-foreground mb-1">
              Try saying: "EcoSync, optimize my energy for comfort"
            </p>
            <p className="text-muted-foreground">
              Your AI energy butler is ready to help
            </p>
          </div>
        </div>
      </Card>

      {/* Today's Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 gentle-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground">Today's Savings</h3>
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
              <TrendingDown className="h-6 w-6 text-success" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-success savings-pulse">
              ₹{Math.round(currentSavings)}
            </div>
            <p className="text-muted-foreground">
              Compared to yesterday: +₹12 more saved
            </p>
          </div>
        </Card>

        <Card className="p-6 gentle-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground">Environmental Impact</h3>
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
              <Leaf className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary savings-pulse">
              {carbonReduced.toFixed(1)}kg CO₂
            </div>
            <p className="text-muted-foreground">
              Equivalent to planting 0.1 trees today
            </p>
          </div>
        </Card>
      </div>

      {/* Room Energy Status */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Home className="h-5 w-5" />
          Room-wise Energy View
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roomData.map((room) => (
            <div
              key={room.name}
              className="p-4 border border-card-border rounded-lg gentle-hover"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-foreground">{room.name}</h4>
                <div className={`w-3 h-3 rounded-full bg-${room.color}`} />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">{room.usage}%</div>
                <p className="text-sm text-muted-foreground capitalize">{room.status}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="secondary" size="lg" className="justify-start">
          <Zap className="h-5 w-5" />
          Optimize Now
        </Button>
        <Button variant="outline" size="lg" className="justify-start">
          <Shield className="h-5 w-5" />
          Safety Check
        </Button>
        <Button variant="accent" size="lg" className="justify-start">
          <Phone className="h-5 w-5" />
          Call Family
        </Button>
      </div>

      {/* Achievements */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Your Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-card-border rounded-lg gentle-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Weather Integration */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-none">
        <div className="flex items-center gap-4">
          <div className="text-4xl">☁️</div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Cloudy Day - Solar Generating 60%
            </h3>
            <p className="text-muted-foreground">
              Your solar panels are still producing clean energy. Grid usage optimized automatically.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;