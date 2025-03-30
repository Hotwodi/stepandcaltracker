export default {
  expo: {
    name: "Step Counter App",
    slug: "step-counter-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png", // Updated to use icon.png
    splash: {
      image: "./assets/splash.png", // Ensure this file exists
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.hotwodi.stepcounterapp",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png", // Ensure this file exists
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png" // Ensure this file exists
    }
  }
};
