import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen'; // Ensure the path is correct

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen} // Ensure this is a valid React component
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
    </View>
  );
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }],
    ],
  };
};

FIREBASE_API_KEY=AIzaSyDe0j26_LUH87iezA04Np4yaxM20as-IR
FIREBASE_AUTH_DOMAIN=sample-firebase-ai-app-5ce05.firebaseapp.com
FIREBASE_PROJECT_ID=sample-firebase-ai-app-5ce05
FIREBASE_STORAGE_BUCKET=sample-firebase-ai-app-5ce05.appspot.com
FIREBASE_MESSAGING_SENDER_ID=414035421428
FIREBASE_APP_ID=1:414035421428:web:samplefirebaseappid

{
  "expo": {
    "name": "Step Counter App",
    "slug": "step-counter-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png", // Ensure this file exists
    "splash": {
      "image": "./assets/splash.png", // Ensure this file exists or update the path
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png", // Ensure this file exists or update the path
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png" // Ensure this file exists or update the path
    }
  }
}
