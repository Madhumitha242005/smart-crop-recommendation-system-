import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, Thermometer, Droplets, CloudRain } from 'lucide-react';

export function EnvironmentInputScreen() {
  const navigate = useNavigate();
  const { setEnvironmentData } = useApp();
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    rainfall: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnvironmentData({
      temperature: parseFloat(formData.temperature),
      humidity: parseFloat(formData.humidity),
      rainfall: parseFloat(formData.rainfall),
    });
    navigate('/processing');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/soil-input')}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Environmental Conditions</h1>
            <p className="text-white/90 text-sm mt-1">Step 2 of 2</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Temperature */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="font-medium flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Thermometer className="text-red-600" size={24} />
              </div>
              <div>
                <div>Temperature (°C)</div>
                <div className="text-sm text-muted-foreground font-normal">Average temperature in your area</div>
              </div>
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.temperature}
              onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter temperature (e.g., 25.5)"
              required
            />
          </div>

          {/* Humidity */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="font-medium flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Droplets className="text-blue-600" size={24} />
              </div>
              <div>
                <div>Humidity (%)</div>
                <div className="text-sm text-muted-foreground font-normal">Relative humidity percentage</div>
              </div>
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.humidity}
              onChange={(e) => setFormData({ ...formData, humidity: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter humidity (e.g., 65)"
              required
            />
          </div>

          {/* Rainfall */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="font-medium flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                <CloudRain className="text-cyan-600" size={24} />
              </div>
              <div>
                <div>Rainfall (mm)</div>
                <div className="text-sm text-muted-foreground font-normal">Annual rainfall in millimeters</div>
              </div>
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.rainfall}
              onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter rainfall (e.g., 1200)"
              required
            />
          </div>

          {/* Info Box */}
          <div className="bg-accent rounded-2xl p-4">
            <p className="text-sm text-muted-foreground">
              💡 Tip: You can get weather data from local meteorological departments or weather apps for accurate results.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors shadow-lg"
          >
            Predict Crop
          </button>
        </form>
      </div>
    </div>
  );
}
