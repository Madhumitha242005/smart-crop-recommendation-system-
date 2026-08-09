import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, User, Mail, Phone, MapPin, LogOut, Globe } from 'lucide-react';
import { Logo } from '@/app/components/Logo';

export function ProfileScreen() {
  const navigate = useNavigate();
  const { user, setUser } = useApp();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Profile & Settings</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center mb-6">
            <Logo size="small" />
            <h2 className="text-2xl font-bold mt-4">{user?.name || 'Farmer'}</h2>
            <p className="text-muted-foreground">{user?.email || 'farmer@example.com'}</p>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center gap-4 p-4 bg-accent rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">{user?.name || 'Farmer Name'}</p>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-4 p-4 bg-accent rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mobile Number</p>
                <p className="font-medium">{user?.mobile || '+91 1234567890'}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-accent rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Address</p>
                <p className="font-medium">{user?.email || 'farmer@example.com'}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-accent rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Farm Location</p>
                <p className="font-medium">{user?.location || 'Your Location'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Settings</h3>
          
          {/* Language */}
          <button className="w-full flex items-center justify-between p-4 bg-accent hover:bg-accent/80 rounded-xl transition-colors mb-3">
            <div className="flex items-center gap-3">
              <Globe className="text-primary" size={20} />
              <div className="text-left">
                <p className="font-medium">Language</p>
                <p className="text-sm text-muted-foreground">English</p>
              </div>
            </div>
            <div className="text-muted-foreground">›</div>
          </button>

          {/* Theme - Light only as per requirements */}
          <div className="flex items-center justify-between p-4 bg-accent rounded-xl mb-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary" />
              <div>
                <p className="font-medium">Theme Mode</p>
                <p className="text-sm text-muted-foreground">Light Mode</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farm Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Farm Details</h3>
          <p className="text-muted-foreground mb-4">
            Update your farm information for better crop recommendations
          </p>
          <button className="w-full py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors">
            Edit Farm Details
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full py-4 rounded-xl bg-destructive hover:bg-destructive/90 text-white font-medium transition-colors flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          Logout
        </button>

        {/* Version Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Smart Crop Recommendation System</p>
          <p className="mt-1">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
