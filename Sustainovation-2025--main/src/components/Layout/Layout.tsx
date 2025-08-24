import { useState } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLargeText, setIsLargeText] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <div className={`min-h-screen ${isHighContrast ? 'high-contrast' : ''} ${isLargeText ? 'text-large' : ''}`}>
      <Navigation
        isLargeText={isLargeText}
        isHighContrast={isHighContrast}
        currentLanguage={currentLanguage}
        onToggleLargeText={() => setIsLargeText(!isLargeText)}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
        onLanguageChange={setCurrentLanguage}
      />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;