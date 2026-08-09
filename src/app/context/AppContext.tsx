import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SoilData {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
}

export interface EnvironmentData {
  temperature: number;
  humidity: number;
  rainfall: number;
}

export interface CropRecommendation {
  id: string;
  cropName: string;
  suitability: number;
  soilData: SoilData;
  environmentData: EnvironmentData;
  timestamp: string;
}

export interface UserData {
  name: string;
  mobile: string;
  email: string;
  location: string;
}

interface AppContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  soilData: SoilData | null;
  setSoilData: (data: SoilData) => void;
  environmentData: EnvironmentData | null;
  setEnvironmentData: (data: EnvironmentData) => void;
  currentRecommendation: CropRecommendation | null;
  setCurrentRecommendation: (rec: CropRecommendation | null) => void;
  history: CropRecommendation[];
  addToHistory: (rec: CropRecommendation) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [soilData, setSoilData] = useState<SoilData | null>(null);
  const [environmentData, setEnvironmentData] = useState<EnvironmentData | null>(null);
  const [currentRecommendation, setCurrentRecommendation] = useState<CropRecommendation | null>(null);
  const [history, setHistory] = useState<CropRecommendation[]>([]);

  const addToHistory = (rec: CropRecommendation) => {
    setHistory(prev => [rec, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        soilData,
        setSoilData,
        environmentData,
        setEnvironmentData,
        currentRecommendation,
        setCurrentRecommendation,
        history,
        addToHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
