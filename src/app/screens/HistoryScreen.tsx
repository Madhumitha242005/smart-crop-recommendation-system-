import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, Calendar, Sprout, Eye } from 'lucide-react';
import { format } from 'date-fns';

export function HistoryScreen() {
  const navigate = useNavigate();
  const { history } = useApp();

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
          <h1 className="text-2xl font-bold">Previous Recommendations</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6">
        {history.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Calendar className="text-muted-foreground" size={32} />
            </div>
            <h2 className="text-xl font-bold mb-2">No History Yet</h2>
            <p className="text-muted-foreground mb-6">
              Your past crop recommendations will appear here
            </p>
            <button
              onClick={() => navigate('/soil-input')}
              className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
            >
              Get Your First Recommendation
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sprout className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.cropName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(item.timestamp), 'MMM dd, yyyy • hh:mm a')}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{item.suitability.toFixed(0)}%</div>
                    <div className="text-xs text-muted-foreground">Suitability</div>
                  </div>
                </div>

                {/* Soil Summary */}
                <div className="bg-accent rounded-xl p-4 mb-3">
                  <h4 className="font-medium mb-2 text-sm">Soil Parameters</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">N:</span> {item.soilData.nitrogen} kg/ha
                    </div>
                    <div>
                      <span className="text-muted-foreground">P:</span> {item.soilData.phosphorus} kg/ha
                    </div>
                    <div>
                      <span className="text-muted-foreground">K:</span> {item.soilData.potassium} kg/ha
                    </div>
                    <div>
                      <span className="text-muted-foreground">pH:</span> {item.soilData.ph}
                    </div>
                  </div>
                </div>

                {/* Climate Summary */}
                <div className="bg-accent rounded-xl p-4 mb-4">
                  <h4 className="font-medium mb-2 text-sm">Climate Conditions</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Temp:</span> {item.environmentData.temperature}°C
                    </div>
                    <div>
                      <span className="text-muted-foreground">Humidity:</span> {item.environmentData.humidity}%
                    </div>
                    <div>
                      <span className="text-muted-foreground">Rain:</span> {item.environmentData.rainfall}mm
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    // Set this as current recommendation and navigate
                    navigate('/recommendation');
                  }}
                  className="w-full py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Eye size={18} />
                  View Details Again
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
