import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Users, Heart, Coins, TrendingUp, School, Home, Building, Award, Gift } from 'lucide-react';

const CommunityTrading = () => {
  const [activeTab, setActiveTab] = useState('marketplace');

  const solarStats = {
    todayGenerated: 12.5,
    todayUsed: 8.2,
    surplus: 4.3,
    totalDonated: 147,
    totalEarned: 89,
    carbonOffset: 234
  };

  const marketplaceItems = [
    {
      requester: 'Local Primary School',
      need: '15 kWh',
      purpose: 'Power computer lab for 3 hours',
      urgency: 'high',
      tokens: 25,
      distance: '0.8 km',
      icon: School,
      impact: 'Help 45 children learn computer skills'
    },
    {
      requester: 'Community Center',
      need: '8 kWh', 
      purpose: 'Evening senior activities',
      urgency: 'medium',
      tokens: 15,
      distance: '1.2 km',
      icon: Building,
      impact: 'Support elderly community programs'
    },
    {
      requester: 'Neighbor Rajesh',
      need: '5 kWh',
      purpose: 'Medical equipment backup',
      urgency: 'high',
      tokens: 12,
      distance: '0.3 km',
      icon: Home,
      impact: 'Ensure continuous medical support'
    },
    {
      requester: 'Local Clinic',
      need: '20 kWh',
      purpose: 'Refrigerate medicines',
      urgency: 'critical',
      tokens: 35,
      distance: '1.5 km',
      icon: Building,
      impact: 'Keep essential medicines safe'
    }
  ];

  const tradingHistory = [
    {
      date: 'Today, 2:30 PM',
      action: 'Donated',
      amount: '3 kWh',
      recipient: 'Community Center',
      impact: 'Powered 2 classrooms for 3 hours',
      tokens: 8
    },
    {
      date: 'Yesterday, 4:15 PM',
      action: 'Sold',
      amount: '5 kWh',
      recipient: 'Grid Network',
      impact: 'Reduced grid load during peak hours',
      tokens: 15
    },
    {
      date: '2 days ago',
      action: 'Donated',
      amount: '4 kWh',
      recipient: 'Local School',
      impact: 'Helped students complete computer projects',
      tokens: 10
    }
  ];

  const leaderboard = [
    { name: 'Maria F. (You)', donated: 147, position: 1, badge: '🏆' },
    { name: 'Ravi K.', donated: 134, position: 2, badge: '🥈' },
    { name: 'Sunita M.', donated: 128, position: 3, badge: '🥉' },
    { name: 'Amit S.', donated: 115, position: 4, badge: '⭐' },
    { name: 'Priya R.', donated: 98, position: 5, badge: '⭐' }
  ];

  const achievements = [
    { title: 'Community Hero', description: 'Donated 100+ kWh this month', unlocked: true },
    { title: 'Green Warrior', description: 'Offset 200kg CO₂', unlocked: true },
    { title: 'Neighbor Helper', description: 'Helped 10 different neighbors', unlocked: true },
    { title: 'School Supporter', description: 'Powered education for 50+ hours', unlocked: false }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary mb-2 font-poppins">
          Community Energy Trading
        </h1>
        <p className="text-xl text-muted-foreground">
          Share your surplus energy and help build a sustainable community
        </p>
      </div>

      {/* Solar Generation Summary */}
      <Card className="p-6 bg-gradient-to-r from-yellow-50 to-green-50 border-none shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
              <div className="text-2xl">☀️</div>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{solarStats.todayGenerated} kWh</div>
            <p className="text-sm text-muted-foreground">Generated Today</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <Home className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{solarStats.todayUsed} kWh</div>
            <p className="text-sm text-muted-foreground">Used by You</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
              <Gift className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-success mb-1">{solarStats.surplus} kWh</div>
            <p className="text-sm text-muted-foreground">Available to Share</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
              <Coins className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-accent mb-1">{solarStats.totalEarned}</div>
            <p className="text-sm text-muted-foreground">Tokens Earned</p>
          </div>
        </div>
      </Card>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="history">Trading History</TabsTrigger>
          <TabsTrigger value="leaderboard">Community Leaders</TabsTrigger>
          <TabsTrigger value="impact">Your Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="marketplace" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Community Energy Needs
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {marketplaceItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-4 border border-card-border rounded-lg gentle-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.urgency === 'critical' ? 'bg-danger/10' :
                        item.urgency === 'high' ? 'bg-warning/10' :
                        'bg-primary/10'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          item.urgency === 'critical' ? 'text-danger' :
                          item.urgency === 'high' ? 'text-warning' :
                          'text-primary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{item.requester}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.urgency === 'critical' ? 'bg-danger/10 text-danger' :
                            item.urgency === 'high' ? 'bg-warning/10 text-warning' :
                            'bg-primary/10 text-primary'
                          }`}>
                            {item.urgency}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.purpose}</p>
                        <p className="text-sm text-foreground font-medium mb-2">{item.impact}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{item.distance} away</span>
                          <span className="font-medium text-accent">{item.tokens} tokens</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm" className="flex-1">
                        <Heart className="h-4 w-4 mr-2" />
                        Donate {item.need}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Coins className="h-4 w-4 mr-2" />
                        Sell {item.need}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Your Trading History</h3>
            <div className="space-y-4">
              {tradingHistory.map((trade, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-card-border rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    trade.action === 'Donated' ? 'bg-secondary/10' : 'bg-primary/10'
                  }`}>
                    {trade.action === 'Donated' ? 
                      <Heart className="h-5 w-5 text-secondary" /> :
                      <Coins className="h-5 w-5 text-primary" />
                    }
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground">
                        {trade.action} {trade.amount} to {trade.recipient}
                      </h4>
                      <span className="text-sm text-muted-foreground">{trade.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{trade.impact}</p>
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">+{trade.tokens} tokens</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-5 w-5" />
              Top Community Contributors This Month
            </h3>
            <div className="space-y-4">
              {leaderboard.map((person, index) => (
                <div key={index} className={`flex items-center gap-4 p-4 rounded-lg ${
                  person.position === 1 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' :
                  'border border-card-border'
                }`}>
                  <div className="text-2xl">{person.badge}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-medium ${person.position === 1 ? 'text-yellow-700' : 'text-foreground'}`}>
                        {person.name}
                      </h4>
                      <span className="text-sm text-muted-foreground">#{person.position}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {person.donated} kWh donated this month
                    </p>
                  </div>
                  {person.position === 1 && (
                    <div className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      Community Hero!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Gift className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">{solarStats.totalDonated} kWh</div>
              <p className="text-muted-foreground">Total Energy Donated</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">🌱</div>
              </div>
              <div className="text-3xl font-bold text-success mb-2">{solarStats.carbonOffset}kg</div>
              <p className="text-muted-foreground">CO₂ Offset Created</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">23</div>
              <p className="text-muted-foreground">Neighbors Helped</p>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  achievement.unlocked ? 'border-success bg-success/5' : 'border-card-border bg-muted/30'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`text-2xl ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                      {achievement.unlocked ? '🏆' : '🔒'}
                    </div>
                    <div>
                      <h4 className={`font-medium ${achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${achievement.unlocked ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="secondary" size="lg" className="justify-start">
          <Zap className="h-5 w-5" />
          Check Solar Generation
        </Button>
        <Button variant="outline" size="lg" className="justify-start">
          <Users className="h-5 w-5" />
          Find Neighbors
        </Button>
        <Button variant="accent" size="lg" className="justify-start">
          <TrendingUp className="h-5 w-5" />
          Trading Settings
        </Button>
      </div>

      {/* Impact Story */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-none">
        <h3 className="text-lg font-semibold text-foreground mb-4">This Week's Impact Story</h3>
        <div className="flex items-start gap-4">
          <div className="text-4xl">🏫</div>
          <div>
            <p className="text-foreground mb-2">
              Your energy donation this Tuesday powered the computer lab at Local Primary School for 4 hours, 
              helping 45 children complete their digital literacy projects.
            </p>
            <p className="text-muted-foreground text-sm">
              "Thank you Maria! The children were so excited to finish their presentations." 
              - Mrs. Sharma, Computer Teacher
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CommunityTrading;