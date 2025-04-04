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
    assetBundlePatterns: [
      "**/*"
    ],
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
    extra: {
      eas: {
        projectId: "5d049e8f-aeda-466a-9381-e1e1642fa80a"
      }
    },
    plugins: [
      "expo-sensors",
      "expo-location"
    ],
    cli: {
      appVersionSource: "remote"
    }
  }
};
