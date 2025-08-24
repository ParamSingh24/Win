import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Mic, Bell, Shield, Palette, Globe, Phone, Heart, Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'Maria Fernandez',
    age: 67,
    language: 'en',
    voiceSpeed: 'normal',
    textSize: 'normal',
    contrast: 'normal'
  });

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary mb-2 font-poppins">Settings & Personalization</h1>
        <p className="text-xl text-muted-foreground">Customize EcoSync to work perfectly for you</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <User className="h-5 w-5" />
          Personal Profile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input 
              type="text" 
              value={profile.name}
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
              onChange={(e) => setProfile({...profile, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Age</label>
            <input 
              type="number" 
              value={profile.age}
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
              onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}
            />
          </div>
        </div>
      </Card>

      {/* Accessibility Settings */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Accessibility Preferences
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Text Size</label>
            <div className="grid grid-cols-3 gap-3">
              {['Normal', 'Large', 'Extra Large'].map(size => (
                <Button 
                  key={size}
                  variant={profile.textSize === size.toLowerCase() ? 'default' : 'outline'}
                  onClick={() => setProfile({...profile, textSize: size.toLowerCase()})}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Contrast Mode</label>
            <div className="grid grid-cols-2 gap-3">
              {['Normal', 'High Contrast'].map(contrast => (
                <Button 
                  key={contrast}
                  variant={profile.contrast === contrast.toLowerCase() ? 'default' : 'outline'}
                  onClick={() => setProfile({...profile, contrast: contrast.toLowerCase()})}
                >
                  {contrast}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Voice Settings */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Mic className="h-5 w-5" />
          Voice Control Settings
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Preferred Language</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {languages.map(lang => (
                <Button 
                  key={lang.code}
                  variant={profile.language === lang.code ? 'default' : 'outline'}
                  onClick={() => setProfile({...profile, language: lang.code})}
                  className="justify-start"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Voice Response Speed</label>
            <div className="grid grid-cols-3 gap-3">
              {['Slow', 'Normal', 'Fast'].map(speed => (
                <Button 
                  key={speed}
                  variant={profile.voiceSpeed === speed.toLowerCase() ? 'default' : 'outline'}
                  onClick={() => setProfile({...profile, voiceSpeed: speed.toLowerCase()})}
                >
                  {speed}
                </Button>
              ))}
            </div>
          </div>
          
          <Button variant="secondary" size="lg" className="w-full">
            <Mic className="h-5 w-5 mr-2" />
            Train Voice Recognition
          </Button>
        </div>
      </Card>

      {/* Family & Emergency */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <Phone className="h-5 w-5" />
          Family & Emergency Contacts
        </h3>
        <div className="space-y-4">
          <Button variant="outline" size="lg" className="w-full justify-start">
            <Phone className="h-5 w-5 mr-2" />
            Manage Emergency Contacts
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start">
            <Shield className="h-5 w-5 mr-2" />
            Family Permission Settings
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start">
            <Bell className="h-5 w-5 mr-2" />
            Notification Preferences
          </Button>
        </div>
      </Card>

      {/* Save Settings */}
      <div className="flex gap-4 justify-center">
        <Button variant="default" size="lg" className="px-8">
          <SettingsIcon className="h-5 w-5 mr-2" />
          Save All Settings
        </Button>
        <Button variant="outline" size="lg" className="px-8">
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
};

export default Settings;