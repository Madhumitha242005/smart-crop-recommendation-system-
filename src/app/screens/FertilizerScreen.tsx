import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { ArrowLeft, Leaf, Package, Clock, Lightbulb } from 'lucide-react';

const fertilizerRecommendations: Record<string, any> = {
  Rice: {
    type: 'NPK Complex',
    quantity: '120-60-60 kg/ha',
    organic: 'Farmyard Manure (FYM) - 10-12 tons/ha',
    inorganic: 'Urea, Single Super Phosphate (SSP), Muriate of Potash (MOP)',
    timing: [
      'Basal: 50% N, 100% P, 100% K at planting',
      'Top dressing 1: 25% N at tillering stage',
      'Top dressing 2: 25% N at panicle initiation',
    ],
  },
  Wheat: {
    type: 'Nitrogen-rich fertilizer',
    quantity: '100-50-50 kg/ha',
    organic: 'Well-decomposed FYM - 8-10 tons/ha',
    inorganic: 'Urea, DAP (Diammonium Phosphate), MOP',
    timing: [
      'Basal: 50% N, 100% P, 100% K at sowing',
      'Top dressing 1: 25% N at crown root initiation (21 days)',
      'Top dressing 2: 25% N at late jointing stage',
    ],
  },
  Cotton: {
    type: 'High Nitrogen fertilizer',
    quantity: '150-50-50 kg/ha',
    organic: 'Compost or FYM - 10 tons/ha',
    inorganic: 'Urea, SSP, MOP',
    timing: [
      'Basal: 25% N, 100% P, 50% K at sowing',
      'Top dressing 1: 37.5% N at square formation',
      'Top dressing 2: 37.5% N at flowering',
      'Foliar spray: 50% K at peak flowering',
    ],
  },
  Maize: {
    type: 'Balanced NPK',
    quantity: '120-60-60 kg/ha',
    organic: 'FYM or compost - 10-12 tons/ha',
    inorganic: 'Urea, DAP, MOP',
    timing: [
      'Basal: 50% N, 100% P, 100% K at sowing',
      'Top dressing 1: 25% N at knee-high stage',
      'Top dressing 2: 25% N at tasseling',
    ],
  },
  Sugarcane: {
    type: 'High NPK with micronutrients',
    quantity: '250-100-100 kg/ha',
    organic: 'Press mud - 5 tons/ha, FYM - 25 tons/ha',
    inorganic: 'Urea, SSP, MOP, Zinc Sulfate',
    timing: [
      'Basal: 25% N, 100% P, 50% K at planting',
      'Top dressing 1: 37.5% N at 30-45 days',
      'Top dressing 2: 37.5% N at 90-120 days',
      'Foliar: Micronutrients at 4 months',
    ],
  },
  Soybean: {
    type: 'Phosphorus-rich fertilizer',
    quantity: '20-60-40 kg/ha',
    organic: 'FYM - 5-6 tons/ha',
    inorganic: 'Urea, SSP, MOP, Rhizobium culture',
    timing: [
      'Basal: 100% N, 100% P, 100% K at sowing',
      'Seed treatment: Rhizobium culture before sowing',
      'Foliar spray: DAP @ 2% at flowering',
    ],
  },
};

export function FertilizerScreen() {
  const navigate = useNavigate();
  const { currentRecommendation } = useApp();

  if (!currentRecommendation) {
    navigate('/dashboard');
    return null;
  }

  const fertilizer = fertilizerRecommendations[currentRecommendation.cropName] || fertilizerRecommendations.Rice;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/crop-details')}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Fertilizer Recommendations</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Recommended Type */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Recommended Fertilizer</h2>
              <p className="text-primary font-medium">{fertilizer.type}</p>
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Package className="text-primary" size={24} />
            <h2 className="text-xl font-bold">Quantity Suggestion</h2>
          </div>
          <div className="bg-accent rounded-xl p-4">
            <p className="text-lg font-medium text-center">{fertilizer.quantity}</p>
            <p className="text-sm text-muted-foreground text-center mt-1">(Nitrogen-Phosphorus-Potassium)</p>
          </div>
        </div>

        {/* Organic Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Organic Options</h2>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-start gap-3">
              <Leaf className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-medium mb-1">Organic Fertilizer</h3>
                <p className="text-sm text-muted-foreground">{fertilizer.organic}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inorganic Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Inorganic Options</h2>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-start gap-3">
              <Package className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-medium mb-1">Chemical Fertilizers</h3>
                <p className="text-sm text-muted-foreground">{fertilizer.inorganic}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Timing */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-primary" size={24} />
            <h2 className="text-xl font-bold">Application Timing Tips</h2>
          </div>
          <div className="space-y-3">
            {fertilizer.timing.map((tip: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-accent rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground pt-1">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-amber-600 flex-shrink-0" size={20} />
            <div className="text-sm">
              <p className="font-medium text-amber-900 mb-1">Important Note:</p>
              <p className="text-amber-800">
                Always conduct soil testing before application. Adjust fertilizer quantities based on soil test results and consult local agricultural extension officers for best results.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate('/history')}
            className="w-full py-4 rounded-xl bg-white hover:bg-gray-50 border-2 border-border font-medium transition-colors"
          >
            View History
          </button>
        </div>
      </div>
    </div>
  );
}
