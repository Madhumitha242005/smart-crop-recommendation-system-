import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, CheckCircle, Sprout, Eye, TrendingUp } from 'lucide-react';
import { unsplash_tool } from '@/app/components/figma/ImageWithFallback';

export function RecommendationScreen() {
  const navigate = useNavigate();
  const { currentRecommendation } = useApp();

  if (!currentRecommendation) {
    navigate('/dashboard');
    return null;
  }

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
          <h1 className="text-2xl font-bold">Best Crop Recommendation</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-primary" size={32} />
            <div>
              <h2 className="text-xl font-bold">Analysis Complete!</h2>
              <p className="text-muted-foreground text-sm">Based on your soil and climate data</p>
            </div>
          </div>
        </div>

        {/* Recommended Crop */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Sprout className="text-primary" size={48} />
            </div>
            <h3 className="text-3xl font-bold mb-2">{currentRecommendation.cropName}</h3>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="text-primary" size={20} />
              <span className="text-2xl font-bold text-primary">
                {currentRecommendation.suitability.toFixed(0)}%
              </span>
              <span className="text-muted-foreground">Suitability</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-bold mb-4">Suitability Score</h3>
          <div className="relative h-4 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-1000"
              style={{ width: `${currentRecommendation.suitability}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/crop-details')}
            className="w-full py-4 rounded-xl bg-white hover:bg-gray-50 border-2 border-primary text-primary font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Eye size={20} />
            View Crop Details
          </button>
          <button
            onClick={() => navigate('/fertilizer')}
            className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Sprout size={20} />
            View Fertilizer Advice
          </button>
        </div>
      </div>
    </div>
  );
}
