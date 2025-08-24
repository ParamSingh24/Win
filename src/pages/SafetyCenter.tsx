import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Phone, Zap, Flame, Droplets, Home, Bell, Clock, Users, Settings } from 'lucide-react';

const SafetyCenter = () => {
  const [emergencyMode, setEmergencyMode] = useState(false);

  const safetyStatus = [
    { system: 'Gas Detection', status: 'clear', lastCheck: '2 min ago', icon: Flame, value: '0 ppm' },
    { system: 'Electrical Safety', status: 'normal', lastCheck: '1 min ago', icon: Zap, value: 'All circuits OK' },
    { system: 'Water Leak Detection', status: 'clear', lastCheck: '3 min ago', icon: Droplets, value: 'No leaks detected' },
    { system: 'Door/Window Sensors', status: 'secure', lastCheck: '30 sec ago', icon: Home, value: 'All closed' }
  ];

  const emergencyContacts = [
    { name: 'Priya (Daughter)', phone: '+91 98765 43210', type: 'primary', icon: '👩‍💼' },
    { name: 'Emergency Services', phone: '112', type: 'emergency', icon: '🚨' },
    { name: 'Nurse Kavitha', phone: '+91 76543 21098', type: 'caregiver', icon: '👩‍⚕️' },
    { name: 'Neighbor Rajesh', phone: '+91 98123 45670', type: 'neighbor', icon: '👨‍🦳' }
  ];

  const recentAlerts = [
    { time: '2 hours ago', type: 'resolved', message: 'Stove left on - Auto-shutdown activated', severity: 'medium' },
    { time: '1 day ago', type: 'resolved', message: 'High electricity usage detected - Optimized', severity: 'low' },
    { time: '3 days ago', type: 'info', message: 'Weekly safety check completed successfully', severity: 'info' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary mb-2 font-poppins">Safety & Emergency Center</h1>
        <p className="text-xl text-muted-foreground">Your home's safety monitoring and emergency response system</p>
      </div>

      {/* Emergency Button */}
      <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border-danger/20 text-center">
        <Button 
          variant="destructive" 
          size="xl" 
          className="w-40 h-40 rounded-full text-2xl font-bold mb-4"
          onClick={() => setEmergencyMode(true)}
        >
          <div className="flex flex-col items-center">
            <Bell className="h-12 w-12 mb-2" />
            EMERGENCY
          </div>
        </Button>
        <p className="text-muted-foreground">Press for immediate family notification and emergency response</p>
      </Card>

      {/* Safety Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {safetyStatus.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="p-6 gentle-hover">
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-8 w-8 text-success" />
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.system}</h3>
              <p className="text-success font-medium mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">Checked {item.lastCheck}</p>
            </Card>
          );
        })}
      </div>

      {/* Emergency Contacts */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Phone className="h-5 w-5" />
          Emergency Contacts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border border-card-border rounded-lg">
              <div className="text-3xl">{contact.icon}</div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{contact.name}</h4>
                <p className="text-sm text-muted-foreground">{contact.phone}</p>
              </div>
              <Button variant={contact.type === 'emergency' ? 'destructive' : 'outline'} size="sm">
                <Phone className="h-4 w-4" />
                Call
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Alerts */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Recent Safety Activity</h3>
        <div className="space-y-4">
          {recentAlerts.map((alert, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border border-card-border rounded-lg">
              <CheckCircle className="h-6 w-6 text-success" />
              <div className="flex-1">
                <p className="text-foreground">{alert.message}</p>
                <p className="text-sm text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SafetyCenter;