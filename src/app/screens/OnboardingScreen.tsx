import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/app/components/Logo';
import { Leaf, CloudRain, Sprout, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    icon: Leaf,
    title: 'Soil Analysis',
    description: 'Analyze your soil nutrients including Nitrogen, Phosphorus, and Potassium levels for better crop selection.',
  },
  {
    icon: CloudRain,
    title: 'Climate Analysis',
    description: 'Get recommendations based on temperature, humidity, and rainfall data for optimal crop growth.',
  },
  {
    icon: Sprout,
    title: 'Crop & Fertilizer Recommendations',
    description: 'Receive AI-powered crop suggestions and fertilizer advice tailored to your farm conditions.',
  },
];

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <Logo size="medium" />
        <button
          onClick={handleSkip}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <CurrentIcon className="text-primary" size={64} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {slides[currentSlide].title}
          </h2>

          {/* Description */}
          <p className="text-center text-muted-foreground text-lg leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="p-6 flex gap-4">
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="flex-1 py-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center gap-2"
          >
            <ChevronLeft size={20} />
            Previous
          </button>
        )}
        <button
          onClick={handleNext}
          className="flex-1 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white transition-colors flex items-center justify-center gap-2"
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          {currentSlide < slides.length - 1 && <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
}
