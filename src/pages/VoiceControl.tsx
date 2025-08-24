import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, Volume2, Globe, MessageSquare, Phone, Shield, Zap } from 'lucide-react';

const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }
  ];

  const sampleCommands = {
    en: [
      "EcoSync, good morning",
      "Is my kitchen safe?",
      "Turn on eco mode",
      "Call my daughter",
      "How much energy did I save today?",
      "Check all my appliances"
    ],
    hi: [
      "EcoSync, नमस्ते",
      "क्या मेरी रसोई सुरक्षित है?",
      "इको मोड चालू करें",
      "मेरी बेटी को कॉल करें",
      "आज मैंने कितनी बिजली बचाई?",
      "सभी उपकरण चेक करें"
    ],
    ta: [
      "EcoSync, வணக்கம்",
      "என் சமையலறை பாதுகாப்பானதா?",
      "இகோ மோடை இயக்கவும்",
      "என் மகளை அழைக்கவும்",
      "இன்று நான் எவ்வளவு மின்சாரம் சேமித்தேன்?",
      "எல்லா சாதனங்களையும் சோதிக்கவும்"
    ],
    bn: [
      "EcoSync, নমস্কার",
      "আমার রান্নাঘর কি নিরাপদ?",
      "ইকো মোড চালু করুন",
      "আমার মেয়েকে কল করুন",
      "আজ আমি কত শক্তি সাশ্রয় করেছি?",
      "সব যন্ত্রপাতি চেক করুন"
    ]
  };

  const responses = {
    en: {
      greeting: "Good morning Maria! Your home is running efficiently. All systems are green and you've saved ₹23 since yesterday!",
      safety: "Good news! Your kitchen is completely safe. All appliances are functioning normally and gas levels are clear.",
      eco: "Eco mode activated! I'm optimizing your energy usage for maximum savings while keeping you comfortable.",
      call: "Calling your daughter Priya now. She'll be happy to hear from you!",
      savings: "You're doing wonderfully! Today you've saved ₹47 and reduced 2.3kg of CO₂. That's like planting a small tree!",
      appliances: "All your appliances are healthy! Refrigerator is excellent, washing machine needs a filter clean next week."
    },
    hi: {
      greeting: "नमस्ते मारिया जी! आपका घर बहुत अच्छे से चल रहा है। कल से आपने ₹23 बचाए हैं!",
      safety: "खुशी की बात है! आपकी रसोई बिल्कुल सुरक्षित है। सभी उपकरण ठीक से काम कर रहे हैं।",
      eco: "इको मोड चालू हो गया! मैं आपकी सुविधा बनाए रखते हुए ऊर्जा की बचत कर रहा हूं।",
      call: "आपकी बेटी प्रिया को कॉल कर रहा हूं। वो आपकी आवाज सुनकर खुश होगी!",
      savings: "आप बहुत अच्छा कर रहे हैं! आज आपने ₹47 बचाए और 2.3kg CO₂ कम किया।",
      appliances: "आपके सभी उपकरण ठीक हैं! फ्रिज बहुत अच्छा है, वाशिंग मशीन को अगले हफ्ते साफ करना है।"
    }
  };

  const handleVoiceCommand = (command: string) => {
    setIsListening(true);
    setCurrentResponse('');
    
    setTimeout(() => {
      setIsListening(false);
      // Simulate AI response based on command
      const commandType = getCommandType(command);
      const langResponses = responses[currentLanguage as keyof typeof responses] || responses.en;
      setCurrentResponse(langResponses[commandType as keyof typeof langResponses] || langResponses.greeting);
    }, 2000);
  };

  const getCommandType = (command: string): string => {
    const lowerCommand = command.toLowerCase();
    if (lowerCommand.includes('safe') || lowerCommand.includes('kitchen') || lowerCommand.includes('सुरक्षित')) return 'safety';
    if (lowerCommand.includes('eco') || lowerCommand.includes('इको')) return 'eco';
    if (lowerCommand.includes('call') || lowerCommand.includes('कॉल')) return 'call';
    if (lowerCommand.includes('save') || lowerCommand.includes('energy') || lowerCommand.includes('बचाई')) return 'savings';
    if (lowerCommand.includes('appliance') || lowerCommand.includes('check') || lowerCommand.includes('चेक')) return 'appliances';
    return 'greeting';
  };

  const currentCommands = sampleCommands[currentLanguage as keyof typeof sampleCommands] || sampleCommands.en;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-primary mb-2 font-poppins">
          Voice Control Center
        </h1>
        <p className="text-xl text-muted-foreground">
          Speak naturally to EcoSync in your preferred language
        </p>
      </div>

      {/* Language Selector */}
      <Card className="p-6 bg-gradient-hero border-none">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Choose Your Language
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={currentLanguage === lang.code ? "default" : "outline"}
              onClick={() => setCurrentLanguage(lang.code)}
              className="justify-start"
            >
              <span className="text-lg mr-2">{lang.flag}</span>
              {lang.name}
            </Button>
          ))}
        </div>
      </Card>

      {/* Main Voice Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Voice Input */}
        <Card className="p-8 text-center">
          <div className="mb-6">
            <Button
              variant="voice"
              size="xl"
              onClick={() => handleVoiceCommand("general")}
              className={`w-32 h-32 rounded-full ${isListening ? 'voice-wave animate-voice-wave' : ''}`}
              aria-label="Activate voice command"
            >
              <Mic className="h-12 w-12" />
            </Button>
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {isListening ? 'Listening...' : 'Tap to Speak'}
          </h3>
          
          <p className="text-muted-foreground mb-6">
            {isListening 
              ? 'EcoSync is listening to your voice command'
              : 'Press the microphone and speak your command'
            }
          </p>

          {/* Voice Wave Visualization */}
          {isListening && (
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full animate-bounce"
                  style={{
                    height: `${20 + Math.random() * 20}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          )}
        </Card>

        {/* AI Response */}
        <Card className="p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            EcoSync Response
          </h3>
          
          <div className="min-h-[200px] p-4 bg-muted rounded-lg">
            {currentResponse ? (
              <div className="animate-fade-in-up">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Volume2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-medium mb-1">EcoSync AI</p>
                    <p className="text-foreground">{currentResponse}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Speak a command to see EcoSync's response
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Sample Commands */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          Try These Commands
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCommands.map((command, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleVoiceCommand(command)}
              className="justify-start h-auto p-4 text-left"
            >
              <div>
                <div className="font-medium text-foreground">{command}</div>
              </div>
            </Button>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="secondary" size="lg" className="justify-start">
          <Shield className="h-5 w-5" />
          Emergency Voice Commands
        </Button>
        <Button variant="outline" size="lg" className="justify-start">
          <Phone className="h-5 w-5" />
          Voice Training Setup
        </Button>
        <Button variant="accent" size="lg" className="justify-start">
          <Zap className="h-5 w-5" />
          Automation Voice Rules
        </Button>
      </div>

      {/* Accessibility Features */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-none">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Accessibility Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-2">Voice Recognition</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Adapts to your speaking style</li>
              <li>• Works with speech impairments</li>
              <li>• Background noise filtering</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Multi-language Support</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Code-switching between languages</li>
              <li>• Regional accent recognition</li>
              <li>• Cultural context awareness</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VoiceControl;