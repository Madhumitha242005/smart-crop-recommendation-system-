import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, Info } from 'lucide-react';

const nutrientInfo = {
  nitrogen: 'Nitrogen (N) helps plants grow leaves and stems. Typical range: 0-140 kg/ha',
  phosphorus: 'Phosphorus (P) promotes root and flower development. Typical range: 5-145 kg/ha',
  potassium: 'Potassium (K) strengthens plant immunity. Typical range: 5-205 kg/ha',
  ph: 'pH measures soil acidity/alkalinity. Ideal range: 5.5-8.5',
};

export function SoilInputScreen() {
  const navigate = useNavigate();
  const { setSoilData } = useApp();
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
  });
  const [showInfo, setShowInfo] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSoilData({
      nitrogen: parseFloat(formData.nitrogen),
      phosphorus: parseFloat(formData.phosphorus),
      potassium: parseFloat(formData.potassium),
      ph: parseFloat(formData.ph),
    });
    navigate('/environment-input');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Soil Nutrient Details</h1>
            <p className="text-white/90 text-sm mt-1">Step 1 of 2</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nitrogen */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <label className="font-medium flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  N
                </div>
                Nitrogen (kg/ha)
              </label>
              <button
                type="button"
                onClick={() => setShowInfo(showInfo === 'nitrogen' ? null : 'nitrogen')}
                className="text-primary hover:text-primary/80"
              >
                <Info size={20} />
              </button>
            </div>
            {showInfo === 'nitrogen' && (
              <div className="mb-4 p-4 bg-accent rounded-xl text-sm text-muted-foreground">
                {nutrientInfo.nitrogen}
              </div>
            )}
            <input
              type="number"
              step="0.01"
              value={formData.nitrogen}
              onChange={(e) => setFormData({ ...formData, nitrogen: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter nitrogen value"
              required
            />
          </div>

          {/* Phosphorus */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <label className="font-medium flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  P
                </div>
                Phosphorus (kg/ha)
              </label>
              <button
                type="button"
                onClick={() => setShowInfo(showInfo === 'phosphorus' ? null : 'phosphorus')}
                className="text-primary hover:text-primary/80"
              >
                <Info size={20} />
              </button>
            </div>
            {showInfo === 'phosphorus' && (
              <div className="mb-4 p-4 bg-accent rounded-xl text-sm text-muted-foreground">
                {nutrientInfo.phosphorus}
              </div>
            )}
            <input
              type="number"
              step="0.01"
              value={formData.phosphorus}
              onChange={(e) => setFormData({ ...formData, phosphorus: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter phosphorus value"
              required
            />
          </div>

          {/* Potassium */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <label className="font-medium flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  K
                </div>
                Potassium (kg/ha)
              </label>
              <button
                type="button"
                onClick={() => setShowInfo(showInfo === 'potassium' ? null : 'potassium')}
                className="text-primary hover:text-primary/80"
              >
                <Info size={20} />
              </button>
            </div>
            {showInfo === 'potassium' && (
              <div className="mb-4 p-4 bg-accent rounded-xl text-sm text-muted-foreground">
                {nutrientInfo.potassium}
              </div>
            )}
            <input
              type="number"
              step="0.01"
              value={formData.potassium}
              onChange={(e) => setFormData({ ...formData, potassium: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter potassium value"
              required
            />
          </div>

          {/* pH */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <label className="font-medium flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  pH
                </div>
                Soil pH Value
              </label>
              <button
                type="button"
                onClick={() => setShowInfo(showInfo === 'ph' ? null : 'ph')}
                className="text-primary hover:text-primary/80"
              >
                <Info size={20} />
              </button>
            </div>
            {showInfo === 'ph' && (
              <div className="mb-4 p-4 bg-accent rounded-xl text-sm text-muted-foreground">
                {nutrientInfo.ph}
              </div>
            )}
            <input
              type="number"
              step="0.01"
              value={formData.ph}
              onChange={(e) => setFormData({ ...formData, ph: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter pH value"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors shadow-lg"
          >
            Next: Environmental Data
          </button>
        </form>
      </div>
    </div>
  );
}
