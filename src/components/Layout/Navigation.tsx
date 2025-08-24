import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Mic, Users, BarChart3, Zap, Shield, Settings, Menu, X, Globe, Type, Eye } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isLargeText: boolean;
  isHighContrast: boolean;
  currentLanguage: string;
  onToggleLargeText: () => void;
  onToggleHighContrast: () => void;
  onLanguageChange: (lang: string) => void;
}

const Navigation = ({ 
  isLargeText, 
  isHighContrast, 
  currentLanguage,
  onToggleLargeText, 
  onToggleHighContrast,
  onLanguageChange 
}: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'bn', name: 'বাংলা' }
  ];

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home', description: 'Main dashboard' },
    { path: '/voice', icon: Mic, label: 'Voice Control', description: 'Speak to EcoSync' },
    { path: '/family', icon: Users, label: 'Family', description: 'Connect with loved ones' },
    { path: '/insights', icon: BarChart3, label: 'Energy Insights', description: 'Usage patterns' },
    { path: '/community', icon: Zap, label: 'Community', description: 'Energy sharing' },
    { path: '/safety', icon: Shield, label: 'Safety', description: 'Home monitoring' },
    { path: '/settings', icon: Settings, label: 'Settings', description: 'Personalize experience' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Accessibility Bar */}
      <div className="bg-gradient-cyberpunk text-primary-foreground p-2 border-b border-primary/30">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleLargeText}
              className={`text-primary-foreground hover:bg-primary/20 neon-glow ${isLargeText ? 'bg-primary/30' : ''}`}
              aria-label="Toggle large text"
            >
              <Type className="h-4 w-4 mr-2" />
              Large Text
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleHighContrast}
              className={`text-primary-foreground hover:bg-primary/20 neon-glow ${isHighContrast ? 'bg-primary/30' : ''}`}
              aria-label="Toggle high contrast"
            >
              <Eye className="h-4 w-4 mr-2" />
              High Contrast
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 animate-hologram" />
            <select 
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-transparent border border-primary/50 rounded px-2 py-1 text-sm neon-glow"
              aria-label="Select language"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code} className="text-foreground bg-background">
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/90 backdrop-blur-sm border-b border-primary/30 sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-cyberpunk rounded-lg flex items-center justify-center neon-glow animate-cyber-glow">
                <Zap className="h-6 w-6 text-black animate-neon-flicker" />
              </div>
              <div>
                <h1 className={`font-orbitron font-bold text-primary text-glow ${isLargeText ? 'text-xl' : 'text-lg'}`}>
                  EcoSync Nexus
                </h1>
                <p className={`text-foreground ${isLargeText ? 'text-sm' : 'text-xs'}`}>
                  Your AI Energy Butler
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActivePath(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all touch-target group ${
                      isActive 
                        ? 'bg-gradient-cyberpunk text-primary-foreground neon-glow' 
                        : 'text-foreground hover:text-primary hover:bg-card/50 hover:neon-glow'
                    } ${isLargeText ? 'text-large' : ''}`}
                    aria-label={`${item.label} - ${item.description}`}
                  >
                    <Icon className={`${isLargeText ? 'h-6 w-6' : 'h-5 w-5'} ${isActive ? 'text-black animate-neon-flicker' : ''}`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden touch-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card/90 backdrop-blur-sm border-t border-primary/30">
            <div className="container py-4">
              <div className="grid grid-cols-1 gap-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActivePath(item.path);
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 p-4 rounded-lg transition-all touch-target ${
                        isActive 
                          ? 'bg-gradient-cyberpunk text-primary-foreground neon-glow' 
                          : 'hover:bg-card/50 hover:neon-glow'
                      } ${isLargeText ? 'text-large' : ''}`}
                      aria-label={`${item.label} - ${item.description}`}
                    >
                      <Icon className={`h-6 w-6 ${isActive ? 'text-black animate-neon-flicker' : 'text-foreground'}`} />
                      <div>
                        <div className={`font-medium ${isActive ? 'text-black' : 'text-foreground'}`}>
                          {item.label}
                        </div>
                        <div className={`text-sm ${isActive ? 'text-black/80' : 'text-foreground/80'}`}>
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;