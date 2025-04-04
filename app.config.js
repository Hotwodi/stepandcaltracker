module.exports = {
  expo: {
    name: "Step Counter App",
    slug: "step-counter-app",
    owner: "hotwodi",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.hotwodi.stepcounterapp"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.hotwodi.stepcounterapp"
    },
    plugins: ["expo-sensors", "expo-location"],
    extra: {
      eas: {
        projectId: "1473f737-765e-475a-92f9-0320335dfca3" // Ensure this matches the EAS project ID
      }
    },
    cli: {
      appVersionSource: "remote"
    }
  }
};
