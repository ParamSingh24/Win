import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MessageSquare, Shield, Heart, Clock, MapPin, Bell, Users, Check, AlertTriangle } from 'lucide-react';

const FamilyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const familyMembers = [
    {
      name: 'Priya (Daughter)',
      relationship: 'Daughter',
      phone: '+91 98765 43210',
      location: 'Mumbai (12 km away)',
      avatar: '👩‍💼',
      lastContact: '2 hours ago',
      permissions: ['Monitor', 'Emergency Control', 'Notifications'],
      status: 'Available'
    },
    {
      name: 'Raj (Son)',
      relationship: 'Son', 
      phone: '+91 87654 32109',
      location: 'Pune (45 km away)',
      avatar: '👨‍💻',
      lastContact: '1 day ago',
      permissions: ['Monitor', 'Notifications'],
      status: 'Busy'
    },
    {
      name: 'Nurse Kavitha',
      relationship: 'Caregiver',
      phone: '+91 76543 21098',
      location: 'Nearby (2 km)',
      avatar: '👩‍⚕️',
      lastContact: '30 minutes ago',
      permissions: ['Monitor', 'Health Alerts', 'Emergency Control'],
      status: 'On Duty'
    }
  ];

  const recentAlerts = [
    {
      type: 'resolved',
      title: 'Stove Safety Alert',
      description: 'Stove left on for 30 minutes - Auto-resolved by turning off',
      time: '2 hours ago',
      severity: 'medium',
      icon: Shield
    },
    {
      type: 'resolved',
      title: 'High Energy Usage',
      description: 'AC running at high power - Optimized to save ₹15',
      time: '4 hours ago',
      severity: 'low',
      icon: Check
    },
    {
      type: 'info',
      title: 'Family Notification',
      description: 'Priya called - Call logged and recorded',
      time: '6 hours ago',
      severity: 'info',
      icon: Phone
    }
  ];

  const quickMessages = [
    "Hi Mom, how are you feeling today?",
    "Remember to take your evening medicine",
    "The weather is nice, perfect for a walk",
    "I'll visit this weekend. Love you!"
  ];

  const homeStatus = {
    safety: { status: 'all-clear', lastCheck: '5 minutes ago' },
    energy: { status: 'optimized', savings: '₹47 today' },
    health: { status: 'normal', heartRate: '72 bpm' },
    activity: { status: 'active', lastMovement: '2 minutes ago' }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary mb-2 font-poppins">
          Family Care Center
        </h1>
        <p className="text-xl text-muted-foreground">
          Stay connected with Maria and ensure her wellbeing
        </p>
      </div>

      {/* Overall Status */}
      <Card className="p-6 bg-gradient-hero border-none shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="font-medium text-foreground">Safety</p>
              <p className="text-sm text-success">All Clear</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Health</p>
              <p className="text-sm text-primary">Normal</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Activity</p>
              <p className="text-sm text-secondary">2 min ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <Bell className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="font-medium text-foreground">Alerts</p>
              <p className="text-sm text-accent">All Resolved</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Family Members */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Users className="h-5 w-5" />
          Family & Care Team
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {familyMembers.map((member, index) => (
            <div key={index} className="p-4 border border-card-border rounded-lg gentle-hover">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-3xl">{member.avatar}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.relationship}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{member.location}</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs ${
                  member.status === 'Available' ? 'bg-success/10 text-success' :
                  member.status === 'Busy' ? 'bg-warning/10 text-warning' :
                  'bg-primary/10 text-primary'
                }`}>
                  {member.status}
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">
                  Last contact: {member.lastContact}
                </p>
                <div className="flex flex-wrap gap-1">
                  {member.permissions.map((permission, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Alerts */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Recent Alerts & Activity</h3>
        <div className="space-y-4">
          {recentAlerts.map((alert, index) => {
            const Icon = alert.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border border-card-border rounded-lg"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  alert.severity === 'medium' ? 'bg-warning/10' :
                  alert.severity === 'low' ? 'bg-success/10' :
                  'bg-primary/10'
                }`}>
                  <Icon className={`h-5 w-5 ${
                    alert.severity === 'medium' ? 'text-warning' :
                    alert.severity === 'low' ? 'text-success' :
                    'text-primary'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-foreground">{alert.title}</h4>
                    <span className="text-sm text-muted-foreground">{alert.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                  {alert.type === 'resolved' && (
                    <div className="flex items-center gap-1 mt-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm text-success">Resolved automatically</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Quick Communication */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Quick Messages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {quickMessages.map((message, index) => (
            <Button
              key={index}
              variant="outline"
              className="justify-start h-auto p-4 text-left"
            >
              <MessageSquare className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </Button>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button variant="default" size="lg" className="flex-1">
            <Phone className="h-5 w-5" />
            Call Maria Now
          </Button>
          <Button variant="secondary" size="lg" className="flex-1">
            <MessageSquare className="h-5 w-5" />
            Send Custom Message
          </Button>
        </div>
      </Card>

      {/* Emergency Controls */}
      <Card className="p-6 border-danger/20 bg-danger/5">
        <h3 className="text-xl font-semibold text-danger mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Emergency Controls
        </h3>
        <p className="text-muted-foreground mb-6">
          These controls are available for immediate use during emergencies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="destructive" size="lg">
            <Phone className="h-5 w-5" />
            Emergency Call
          </Button>
          <Button variant="outline" size="lg" className="border-danger text-danger">
            <Shield className="h-5 w-5" />
            Override All Systems
          </Button>
          <Button variant="outline" size="lg" className="border-danger text-danger">
            <Bell className="h-5 w-5" />
            Alert All Family
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FamilyDashboard;