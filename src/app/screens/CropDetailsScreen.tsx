import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, CheckCircle2, Thermometer, Droplets, TrendingUp, Calendar } from 'lucide-react';

const cropDetails: Record<string, any> = {
  Rice: {
    overview: 'Rice is a staple food crop that thrives in warm, humid conditions with abundant water supply.',
    whySuitable: [
      'Soil nutrient levels match rice requirements',
      'Temperature and humidity are in optimal range',
      'Adequate rainfall for paddy cultivation',
    ],
    requirements: {
      soil: 'N: 80-140 kg/ha, P: 40-60 kg/ha, K: 40-60 kg/ha, pH: 5.5-7.0',
      climate: 'Temp: 20-30°C, Humidity: 80-90%, Rainfall: 1200-2500mm',
    },
    yield: 'Medium to High (4-6 tons/ha)',
    season: 'Kharif (June-October)',
  },
  Wheat: {
    overview: 'Wheat is a major cereal crop that grows best in moderate temperatures and well-drained soil.',
    whySuitable: [
      'pH level suitable for wheat cultivation',
      'Moderate temperature ideal for grain development',
      'Soil fertility supports good yields',
    ],
    requirements: {
      soil: 'N: 50-100 kg/ha, P: 30-60 kg/ha, K: 30-50 kg/ha, pH: 6.0-7.5',
      climate: 'Temp: 12-25°C, Humidity: 50-70%, Rainfall: 400-650mm',
    },
    yield: 'High (4-5 tons/ha)',
    season: 'Rabi (November-April)',
  },
  Cotton: {
    overview: 'Cotton is a fiber crop requiring warm conditions and moderate rainfall throughout growing season.',
    whySuitable: [
      'High nitrogen content supports vegetative growth',
      'Temperature suitable for boll formation',
      'Adequate moisture for fiber development',
    ],
    requirements: {
      soil: 'N: 100-140 kg/ha, P: 30-50 kg/ha, K: 20-40 kg/ha, pH: 5.8-7.5',
      climate: 'Temp: 21-30°C, Humidity: 50-80%, Rainfall: 600-1200mm',
    },
    yield: 'Medium (1.5-2.5 tons/ha)',
    season: 'Kharif (April-November)',
  },
  Maize: {
    overview: 'Maize is a versatile crop used for food, feed, and industrial purposes.',
    whySuitable: [
      'Balanced soil nutrients for growth',
      'Optimal temperature for pollination',
      'Good moisture conditions',
    ],
    requirements: {
      soil: 'N: 60-120 kg/ha, P: 40-80 kg/ha, K: 40-80 kg/ha, pH: 5.5-7.5',
      climate: 'Temp: 18-27°C, Humidity: 60-80%, Rainfall: 600-1000mm',
    },
    yield: 'High (5-7 tons/ha)',
    season: 'Both Kharif & Rabi',
  },
  Sugarcane: {
    overview: 'Sugarcane is a cash crop requiring high temperatures and abundant water.',
    whySuitable: [
      'High temperature ideal for sugar accumulation',
      'High humidity supports growth',
      'Adequate rainfall for long growing period',
    ],
    requirements: {
      soil: 'N: 90-120 kg/ha, P: 20-40 kg/ha, K: 40-60 kg/ha, pH: 6.0-7.5',
      climate: 'Temp: 25-32°C, Humidity: 70-90%, Rainfall: 1500-2500mm',
    },
    yield: 'Very High (70-100 tons/ha)',
    season: 'Year-round (18-month crop)',
  },
  Soybean: {
    overview: 'Soybean is a protein-rich legume crop with nitrogen-fixing capability.',
    whySuitable: [
      'Low nitrogen requirement due to nitrogen fixation',
      'Moderate climate conditions',
      'Good soil structure and drainage',
    ],
    requirements: {
      soil: 'N: 20-40 kg/ha, P: 30-60 kg/ha, K: 30-60 kg/ha, pH: 6.0-7.0',
      climate: 'Temp: 20-30°C, Humidity: 60-80%, Rainfall: 450-700mm',
    },
    yield: 'Medium (2-3 tons/ha)',
    season: 'Kharif (June-October)',
  },
};

export function CropDetailsScreen() {
  const navigate = useNavigate();
  const { currentRecommendation } = useApp();

  if (!currentRecommendation) {
    navigate('/dashboard');
    return null;
  }

  const details = cropDetails[currentRecommendation.cropName] || cropDetails.Rice;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/recommendation')}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">{currentRecommendation.cropName} Details</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-3">Crop Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
        </div>

        {/* Why Suitable */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Why This Crop is Suitable</h2>
          <div className="space-y-3">
            {details.whySuitable.map((reason: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <p className="text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Required Conditions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Droplets className="text-amber-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Soil Requirements</h3>
                <p className="text-sm text-muted-foreground">{details.requirements.soil}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Thermometer className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Climate Requirements</h3>
                <p className="text-sm text-muted-foreground">{details.requirements.climate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Yield & Season */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-primary" size={20} />
              <h3 className="font-bold">Expected Yield</h3>
            </div>
            <p className="text-muted-foreground text-sm">{details.yield}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-primary" size={20} />
              <h3 className="font-bold">Growing Season</h3>
            </div>
            <p className="text-muted-foreground text-sm">{details.season}</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/fertilizer')}
          className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
        >
          View Fertilizer Recommendations
        </button>
      </div>
    </div>
  );
}
