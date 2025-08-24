import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, TrendingUp, TrendingDown, Zap, Leaf, Home, RefreshCw, Calendar, Target } from 'lucide-react';

const EnergyInsights = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const energyData = {
    week: {
      totalUsage: 284,
      totalSavings: 329,
      carbonReduced: 16.2,
      efficiency: 87,
      dailyUsage: [42, 38, 45, 41, 39, 43, 36],
      dailySavings: [45, 52, 38, 49, 56, 43, 46]
    },
    month: {
      totalUsage: 1156,
      totalSavings: 1247,
      carbonReduced: 67.8,
      efficiency: 89,
      dailyUsage: Array.from({length: 30}, () => Math.floor(Math.random() * 20) + 35),
      dailySavings: Array.from({length: 30}, () => Math.floor(Math.random() * 25) + 35)
    }
  };

  const currentData = energyData[selectedPeriod as keyof typeof energyData];

  const applianceData = [
    { name: 'Air Conditioner', usage: 45, health: 'excellent', lastOptimized: '2 hours ago', savings: 67 },
    { name: 'Refrigerator', usage: 28, health: 'excellent', lastOptimized: '1 hour ago', savings: 23 },
    { name: 'Water Heater', usage: 15, health: 'good', lastOptimized: '30 min ago', savings: 34 },
    { name: 'Washing Machine', usage: 8, health: 'needs-service', lastOptimized: '1 day ago', savings: 12 },
    { name: 'Lighting', usage: 4, health: 'excellent', lastOptimized: '15 min ago', savings: 8 }
  ];

  const predictions = [
    {
      period: 'This Month',
      estimate: '₹2,340',
      comparison: '-₹420 vs last month',
      trend: 'down'
    },
    {
      period: 'Next Month',
      estimate: '₹2,180',
      comparison: 'Projected savings increase',
      trend: 'down'
    }
  ];

  const achievements = [
    { title: 'Energy Master', description: '30 days of 80%+ efficiency', progress: 87, icon: Target },
    { title: 'Carbon Warrior', description: 'Reduced 50kg CO₂ this month', progress: 68, icon: Leaf },
    { title: 'Smart Saver', description: 'Saved ₹1000+ this month', progress: 124, icon: TrendingDown }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary mb-2 font-poppins">
          Energy Insights & Analytics
        </h1>
        <p className="text-xl text-muted-foreground">
          Understand your energy patterns and maximize your savings
        </p>
      </div>

      {/* Period Selector */}
      <div className="flex justify-center">
        <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 gentle-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Total Usage</h3>
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">
            {currentData.totalUsage} kWh
          </div>
          <p className="text-sm text-muted-foreground">
            {selectedPeriod === 'week' ? '15% less than last week' : '23% less than last month'}
          </p>
        </Card>

        <Card className="p-6 gentle-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Money Saved</h3>
            <TrendingDown className="h-6 w-6 text-success" />
          </div>
          <div className="text-3xl font-bold text-success mb-2 savings-pulse">
            ₹{currentData.totalSavings}
          </div>
          <p className="text-sm text-muted-foreground">
            Compared to previous {selectedPeriod}
          </p>
        </Card>

        <Card className="p-6 gentle-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">CO₂ Reduced</h3>
            <Leaf className="h-6 w-6 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-secondary mb-2">
            {currentData.carbonReduced}kg
          </div>
          <p className="text-sm text-muted-foreground">
            Equivalent to {Math.round(currentData.carbonReduced / 10)} trees planted
          </p>
        </Card>

        <Card className="p-6 gentle-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Efficiency</h3>
            <Target className="h-6 w-6 text-accent" />
          </div>
          <div className="text-3xl font-bold text-accent mb-2">
            {currentData.efficiency}%
          </div>
          <p className="text-sm text-muted-foreground">
            Above community average
          </p>
        </Card>
      </div>

      {/* Usage Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Daily Energy Usage
          </h3>
          <div className="space-y-4">
            {currentData.dailyUsage.slice(-7).map((usage, index) => {
              const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index];
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 text-sm text-muted-foreground">{day}</div>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-energy rounded-full transition-all duration-500"
                      style={{ width: `${(usage / 50) * 100}%` }}
                    />
                  </div>
                  <div className="w-16 text-sm font-medium text-foreground">{usage} kWh</div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            Daily Savings
          </h3>
          <div className="space-y-4">
            {currentData.dailySavings.slice(-7).map((savings, index) => {
              const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index];
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 text-sm text-muted-foreground">{day}</div>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-secondary rounded-full transition-all duration-500"
                      style={{ width: `${(savings / 60) * 100}%` }}
                    />
                  </div>
                  <div className="w-16 text-sm font-medium text-success">₹{savings}</div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Appliance Breakdown */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Home className="h-5 w-5" />
          Appliance Performance
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {applianceData.map((appliance, index) => (
            <div key={index} className="p-4 border border-card-border rounded-lg gentle-hover">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-foreground text-sm">{appliance.name}</h4>
                <div className={`w-3 h-3 rounded-full ${
                  appliance.health === 'excellent' ? 'bg-success' :
                  appliance.health === 'good' ? 'bg-warning' :
                  'bg-danger'
                }`} />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">{appliance.usage}%</div>
                <p className="text-xs text-muted-foreground">of total usage</p>
                <p className="text-xs text-success">₹{appliance.savings} saved</p>
                <p className="text-xs text-muted-foreground">
                  Optimized {appliance.lastOptimized}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Predictions */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Cost Predictions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {predictions.map((prediction, index) => (
            <div key={index} className="p-4 border border-card-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-foreground">{prediction.period}</h4>
                <TrendingDown className="h-4 w-4 text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {prediction.estimate}
              </div>
              <p className="text-sm text-success">{prediction.comparison}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Energy Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="p-4 border border-card-border rounded-lg gentle-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{achievement.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-primary rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(achievement.progress, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {achievement.progress}% complete
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Comparison */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-none">
        <h3 className="text-xl font-semibold text-foreground mb-4">Community Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">23%</div>
            <p className="text-sm text-muted-foreground">
              More efficient than similar homes
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Top 15%</div>
            <p className="text-sm text-muted-foreground">
              In your neighborhood
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">₹18,000</div>
            <p className="text-sm text-muted-foreground">
              Annual savings potential
            </p>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="default" size="lg" className="justify-start">
          <RefreshCw className="h-5 w-5" />
          Optimize Now
        </Button>
        <Button variant="outline" size="lg" className="justify-start">
          <Calendar className="h-5 w-5" />
          Schedule Optimization
        </Button>
        <Button variant="secondary" size="lg" className="justify-start">
          <BarChart3 className="h-5 w-5" />
          Detailed Report
        </Button>
      </div>
    </div>
  );
};

export default EnergyInsights;