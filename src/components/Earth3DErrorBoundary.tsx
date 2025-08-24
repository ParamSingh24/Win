import { Component, ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Globe } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class Earth3DErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log('Earth3D Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-64 rounded-lg overflow-hidden neon-glow bg-card/80 border-primary/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <Globe className="h-16 w-16 text-primary mx-auto mb-4 animate-spin" />
            <h3 className="text-lg font-orbitron text-primary text-glow mb-2">
              Global Network
            </h3>
            <p className="text-sm text-foreground/80">
              3D visualization loading...
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Earth3DErrorBoundary;