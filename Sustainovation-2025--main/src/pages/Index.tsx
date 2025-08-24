import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Mic, Shield, Users, TrendingDown, Leaf, Heart, Zap, ArrowRight, Check, Globe, Phone } from 'lucide-react';

const Index = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: '30-45% Energy Savings',
      description: 'AI optimization reduces your electricity bills significantly',
      color: 'text-success'
    },
    {
      icon: Shield,
      title: 'Family Peace of Mind',
      description: 'Real-time safety monitoring and instant family notifications',
      color: 'text-primary'
    },
    {
      icon: Mic,
      title: 'Voice Control Everything',
      description: 'Simple voice commands in your native language',
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Share surplus energy and help your neighborhood',
      color: 'text-accent'
    }
  ];

  const features = [
    'AI learns your daily routines and preferences',
    'Automatic safety monitoring for gas, electrical, and water',
    'Multi-language voice commands (English, Hindi, Tamil, Bengali)',
    'Emergency alerts to family members',
    'Energy trading with local community',
    'Health monitoring integration',
    'Simple tablet interface designed for elderly users',
    'Works with existing appliances - no replacement needed'
  ];

  const testimonials = [
    {
      name: 'Maria Fernandez',
      age: '67 years old',
      quote: "EcoSync feels like having a caring family member always watching over me. I saved ₹1,200 last month!",
      avatar: '👵🏽'
    },
    {
      name: 'Priya (Maria\'s daughter)',
      age: 'Mumbai',
      quote: "I can finally sleep peacefully knowing Mom is safe and her bills are under control. The family app is amazing!",
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 font-poppins">
              Your AI Energy Butler
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Save Money, Stay Safe, Stay Connected - An accessible energy management system designed for elderly and specially-abled users
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/dashboard">
                <Button variant="default" size="xl" className="text-lg px-8">
                  <Zap className="h-6 w-6 mr-2" />
                  Try Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/voice">
                <Button variant="voice" size="xl" className="text-lg px-8">
                  <Mic className="h-6 w-6 mr-2" />
                  Voice Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Maria's Story */}
          <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-none shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Meet Maria - 67, Lives Alone in Mumbai
                </h3>
                <p className="text-muted-foreground mb-4">
                  "Good morning EcoSync," Maria says each day. Her AI energy butler responds warmly, 
                  optimizing her home's energy while keeping her daughter Priya informed about her wellbeing.
                </p>
                <p className="text-muted-foreground">
                  With simple voice commands in Hindi and English, Maria manages her home effortlessly 
                  while saving ₹1,200 monthly and staying connected to her community.
                </p>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">👵🏽</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-success font-medium">
                    <TrendingDown className="h-5 w-5" />
                    Saved ₹14,400 this year
                  </div>
                  <div className="flex items-center justify-center gap-2 text-primary font-medium">
                    <Shield className="h-5 w-5" />
                    Zero safety incidents
                  </div>
                  <div className="flex items-center justify-center gap-2 text-secondary font-medium">
                    <Heart className="h-5 w-5" />
                    Family stays connected
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 font-poppins">
              Why Families Choose EcoSync Nexus
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for elderly and specially-abled users with family peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center gentle-hover">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 font-poppins">
                Accessibility-First Design
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every feature is designed with elderly and specially-abled users in mind, 
                ensuring technology empowers rather than overwhelms.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">🗣️</div>
                <h4 className="font-semibold text-foreground mb-2">Voice First</h4>
                <p className="text-sm text-muted-foreground">Natural speech in 4+ languages</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-semibold text-foreground mb-2">Large UI</h4>
                <p className="text-sm text-muted-foreground">Easy-to-see buttons & text</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="font-semibold text-foreground mb-2">Auto Safety</h4>
                <p className="text-sm text-muted-foreground">24/7 monitoring & alerts</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-foreground mb-2">Family Link</h4>
                <p className="text-sm text-muted-foreground">Real-time connection</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 font-poppins">
              Real Stories, Real Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 gentle-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                  </div>
                </div>
                <blockquote className="text-lg text-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Ready to Transform Your Energy Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of families who've discovered the peace of mind that comes with EcoSync Nexus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="secondary" size="xl" className="text-lg px-8">
                <Zap className="h-6 w-6 mr-2" />
                Explore Dashboard
              </Button>
            </Link>
            <Link to="/family">
              <Button variant="outline" size="xl" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Users className="h-6 w-6 mr-2" />
                Family Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
