import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/app/context/AppContext';
import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';

// Simple ML simulation - crop recommendation based on conditions
function predictCrop(soilData: any, environmentData: any): { crop: string; suitability: number } {
  const crops = [
    { name: 'Rice', nRange: [80, 140], pRange: [40, 60], kRange: [40, 60], phRange: [5.5, 7.0], temp: [20, 30], humidity: [80, 90], rain: [1200, 2500] },
    { name: 'Wheat', nRange: [50, 100], pRange: [30, 60], kRange: [30, 50], phRange: [6.0, 7.5], temp: [12, 25], humidity: [50, 70], rain: [400, 650] },
    { name: 'Cotton', nRange: [100, 140], pRange: [30, 50], kRange: [20, 40], phRange: [5.8, 7.5], temp: [21, 30], humidity: [50, 80], rain: [600, 1200] },
    { name: 'Maize', nRange: [60, 120], pRange: [40, 80], kRange: [40, 80], phRange: [5.5, 7.5], temp: [18, 27], humidity: [60, 80], rain: [600, 1000] },
    { name: 'Sugarcane', nRange: [90, 120], pRange: [20, 40], kRange: [40, 60], phRange: [6.0, 7.5], temp: [25, 32], humidity: [70, 90], rain: [1500, 2500] },
    { name: 'Soybean', nRange: [20, 40], pRange: [30, 60], kRange: [30, 60], phRange: [6.0, 7.0], temp: [20, 30], humidity: [60, 80], rain: [450, 700] },
  ];

  let bestCrop = crops[0];
  let bestScore = 0;

  crops.forEach(crop => {
    let score = 0;
    
    // Check nitrogen
    if (soilData.nitrogen >= crop.nRange[0] && soilData.nitrogen <= crop.nRange[1]) score += 20;
    else score += Math.max(0, 20 - Math.abs(soilData.nitrogen - (crop.nRange[0] + crop.nRange[1]) / 2) / 5);
    
    // Check phosphorus
    if (soilData.phosphorus >= crop.pRange[0] && soilData.phosphorus <= crop.pRange[1]) score += 15;
    else score += Math.max(0, 15 - Math.abs(soilData.phosphorus - (crop.pRange[0] + crop.pRange[1]) / 2) / 3);
    
    // Check potassium
    if (soilData.potassium >= crop.kRange[0] && soilData.potassium <= crop.kRange[1]) score += 15;
    else score += Math.max(0, 15 - Math.abs(soilData.potassium - (crop.kRange[0] + crop.kRange[1]) / 2) / 3);
    
    // Check pH
    if (soilData.ph >= crop.phRange[0] && soilData.ph <= crop.phRange[1]) score += 15;
    else score += Math.max(0, 15 - Math.abs(soilData.ph - (crop.phRange[0] + crop.phRange[1]) / 2) * 5);
    
    // Check temperature
    if (environmentData.temperature >= crop.temp[0] && environmentData.temperature <= crop.temp[1]) score += 15;
    else score += Math.max(0, 15 - Math.abs(environmentData.temperature - (crop.temp[0] + crop.temp[1]) / 2) / 2);
    
    // Check humidity
    if (environmentData.humidity >= crop.humidity[0] && environmentData.humidity <= crop.humidity[1]) score += 10;
    else score += Math.max(0, 10 - Math.abs(environmentData.humidity - (crop.humidity[0] + crop.humidity[1]) / 2) / 5);
    
    // Check rainfall
    if (environmentData.rainfall >= crop.rain[0] && environmentData.rainfall <= crop.rain[1]) score += 10;
    else score += Math.max(0, 10 - Math.abs(environmentData.rainfall - (crop.rain[0] + crop.rain[1]) / 2) / 100);
    
    if (score > bestScore) {
      bestScore = score;
      bestCrop = crop;
    }
  });

  return { crop: bestCrop.name, suitability: Math.min(100, bestScore) };
}

export function ProcessingScreen() {
  const navigate = useNavigate();
  const { soilData, environmentData, setCurrentRecommendation, addToHistory } = useApp();

  useEffect(() => {
    if (!soilData || !environmentData) {
      navigate('/dashboard');
      return;
    }

    const timer = setTimeout(() => {
      const prediction = predictCrop(soilData, environmentData);
      
      const recommendation = {
        id: Date.now().toString(),
        cropName: prediction.crop,
        suitability: prediction.suitability,
        soilData,
        environmentData,
        timestamp: new Date().toISOString(),
      };

      setCurrentRecommendation(recommendation);
      addToHistory(recommendation);
      navigate('/recommendation');
    }, 3000);

    return () => clearTimeout(timer);
  }, [soilData, environmentData, navigate, setCurrentRecommendation, addToHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/20 flex flex-col items-center justify-center p-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated Leaf */}
        <motion.div
          className="mb-8"
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
            <Leaf className="text-primary" size={48} />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Analyzing Data...
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our AI is analyzing soil and climate data
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Steps */}
        <div className="mt-12 space-y-3 text-sm text-muted-foreground">
          {['Analyzing soil nutrients...', 'Processing climate data...', 'Generating recommendations...'].map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.8 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              {step}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
