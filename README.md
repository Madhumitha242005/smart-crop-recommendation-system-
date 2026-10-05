 # 🌱 Smart Crop Recommendation System

> An intelligent agriculture support system that helps farmers select suitable crops based on soil nutrients and environmental conditions.

## 📌 About the Project

The **Smart Crop Recommendation System** is a machine learning-based agriculture project designed to help farmers make better crop selection decisions.

The system considers important soil parameters such as **Nitrogen (N), Phosphorus (P), Potassium (K), and pH**, along with environmental conditions such as **temperature, humidity, and rainfall**.

Based on these inputs, the system recommends a suitable crop and provides fertilizer-related guidance.

The project prototype is designed with a simple and farmer-friendly interface using **Lovable AI**.

---

## 🎯 Main Goal

The main goal of this project is to help farmers **select the most suitable crop based on soil and environmental conditions**, thereby supporting better agricultural decisions and reducing crop-selection risks.

---

## ✨ Key Features

- 🌱 Crop recommendation
- 🧪 Soil nutrient input
- 🌡️ Temperature input
- 💧 Humidity and rainfall input
- 🌾 Fertilizer recommendation
- 📊 Crop suitability information
- 🕒 Previous recommendation history
- 👤 Farmer profile and settings
- 🌿 Farmer-friendly user interface
- 📱 Responsive web design

---

## 📱 Prototype Screens

The prototype contains the following screens:

1. Splash Screen
2. Onboarding / Welcome Page
3. Login / Registration Page
4. Dashboard / Home Page
5. Soil Parameter Input Page
6. Environmental Data Input Page
7. Processing / Loading Screen
8. Recommended Crops Results Page
9. Crop Details / Suitability Page
10. Fertilizer Recommendation Page
11. History / Previous Recommendations Page
12. Profile / Settings Page

---

## 🧪 Input Parameters

### Soil Parameters

| Parameter | Description |
|---|---|
| N | Nitrogen content |
| P | Phosphorus content |
| K | Potassium content |
| pH | Soil acidity/alkalinity |

### Environmental Parameters

| Parameter | Description |
|---|---|
| Temperature | Environmental temperature |
| Humidity | Relative humidity |
| Rainfall | Rainfall amount |

---
##🎨 Prototype Technology
Lovable AI – Prototype and application UI development
HTML – Web page structure
CSS – Styling and responsive design
JavaScript – User interaction
Figma-style UI/UX principles – Layout and visual design
Prompt Engineering – AI-assisted prototype generation

##
🛠️ Proposed ML Technology
Python
Pandas
NumPy
Scikit-learn
Random Forest Classifier

##system architecture
┌──────────────┐
│     Farmer   │
└──────┬───────┘
       ↓
┌─────────────────────┐
│   User Interface    │
│   Web Application   │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Data Preprocessing  │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Random Forest ML   │
│       Model         │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Crop Recommendation │
│ & Fertilizer Advice │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│   Results Display   │
└─────────────────────┘
##🌾 Real-World Use

The system can support farmers by:

Making data-driven crop selection easier
Reducing the risk of unsuitable crop selection
Providing basic fertilizer guidance
Supporting sustainable farming decisions
Reducing dependence on guess-based crop selection

##👥 Target Users
👨‍🌾 Farmers
🌾 Agricultural officers
🎓 Agriculture students
🔬 Researchers
🏢 Agriculture support organizations



## 🤖 Machine Learning

The proposed ML component uses the **Random Forest Classifier** for crop recommendation.

### Workflow

```text
Soil & Environmental Data
          ↓
    Data Preprocessing
          ↓
    Random Forest Model
          ↓
    Crop Prediction
          ↓
Crop & Fertilizer Recommendation
          ↓
      Result Display

  
  
