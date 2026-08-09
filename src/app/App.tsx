import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '@/app/context/AppContext';
import { SplashScreen } from '@/app/screens/SplashScreen';
import { OnboardingScreen } from '@/app/screens/OnboardingScreen';
import { LoginScreen } from '@/app/screens/LoginScreen';
import { DashboardScreen } from '@/app/screens/DashboardScreen';
import { SoilInputScreen } from '@/app/screens/SoilInputScreen';
import { EnvironmentInputScreen } from '@/app/screens/EnvironmentInputScreen';
import { ProcessingScreen } from '@/app/screens/ProcessingScreen';
import { RecommendationScreen } from '@/app/screens/RecommendationScreen';
import { CropDetailsScreen } from '@/app/screens/CropDetailsScreen';
import { FertilizerScreen } from '@/app/screens/FertilizerScreen';
import { HistoryScreen } from '@/app/screens/HistoryScreen';
import { ProfileScreen } from '@/app/screens/ProfileScreen';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/soil-input" element={<SoilInputScreen />} />
          <Route path="/environment-input" element={<EnvironmentInputScreen />} />
          <Route path="/processing" element={<ProcessingScreen />} />
          <Route path="/recommendation" element={<RecommendationScreen />} />
          <Route path="/crop-details" element={<CropDetailsScreen />} />
          <Route path="/fertilizer" element={<FertilizerScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
