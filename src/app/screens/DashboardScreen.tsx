import { useNavigate } from 'react-router-dom';
import { Logo } from '@/app/components/Logo';
import { useApp } from '@/app/context/AppContext';
import { Sprout, TestTube, CloudRain, Leaf, History, User, Lightbulb } from 'lucide-react';

const quickAccessCards = [
  {
    id: 'crop',
    title: 'Crop Recommendation',
    icon: Sprout,
    description: 'Get AI-powered crop suggestions',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    path: '/soil-input',
  },
  {
    id: 'soil',
    title: 'Soil Analysis',
    icon: TestTube,
    description: 'Analyze your soil nutrients',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    path: '/soil-input',
  },
  {
    id: 'weather',
    title: 'Weather Data',
    icon: CloudRain,
    description: 'Check weather conditions',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    path: '/environment-input',
  },
  {
    id: 'fertilizer',
    title: 'Fertilizer Advice',
    icon: Leaf,
    description: 'Get fertilizer recommendations',
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    path: '/soil-input',
  },
];

const seasonalCrops = ['Rice', 'Wheat', 'Cotton', 'Sugarcane'];

export function DashboardScreen() {
  const navigate = useNavigate();
  const { user } = useApp();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Logo size="small" />
            <button
              onClick={() => navigate('/profile')}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
            >
              <User size={20} />
            </button>
          </div>
          <h1 className="text-2xl font-bold">Welcome back, {user?.name || 'Farmer'}!</h1>
          <p className="text-white/90 mt-1">{user?.location || 'Your Farm'}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Quick Access Cards */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickAccessCards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => navigate(card.path)}
                  className={`${card.color} border-2 rounded-2xl p-6 text-left hover:shadow-lg transition-all hover:scale-105`}
                >
                  <div className={`w-12 h-12 rounded-xl ${card.iconColor} bg-white flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Seasonal Crop Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-primary" size={24} />
            <h2 className="text-xl font-bold">Seasonal Crop Highlights</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {seasonalCrops.map((crop) => (
              <div key={crop} className="bg-accent rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-2 flex items-center justify-center">
                  <Sprout className="text-primary" size={24} />
                </div>
                <p className="font-medium">{crop}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Government Scheme Banner */}
        <div className="bg-gradient-to-r from-secondary to-secondary/70 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Agriculture Schemes</h2>
          <p className="text-muted-foreground mb-4">
            Check out the latest government schemes and subsidies for farmers
          </p>
          <button className="px-6 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors">
            Learn More
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 md:hidden">
          <div className="flex justify-around max-w-md mx-auto">
            <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center text-primary">
              <Sprout size={24} />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button onClick={() => navigate('/history')} className="flex flex-col items-center text-muted-foreground">
              <History size={24} />
              <span className="text-xs mt-1">History</span>
            </button>
            <button onClick={() => navigate('/profile')} className="flex flex-col items-center text-muted-foreground">
              <User size={24} />
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
