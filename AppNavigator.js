import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AddStepsScreen from './screens/AddStepsScreen';
import RecentActivityScreen from './screens/RecentActivityScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddSteps" component={AddStepsScreen} />
      <Stack.Screen name="RecentActivity" component={RecentActivityScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const testApiIntegration = async (period) => {
  try {
    const userId = await AsyncStorage.getItem('userId'); // Retrieve user ID dynamically
    if (!userId) {
      console.error('User ID not found in AsyncStorage.');
      return;
    }

    const response = await fetch(`/api/data/${userId}/${period}`);
    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`);
      return;
    }

    const stepData = await response.json();
    if (!Array.isArray(stepData)) {
      console.error('API response is not an array.');
      return;
    }

    const isValidFormat = stepData.every(item =>
      item.date && typeof item.date === 'string' &&
      item.steps && typeof item.steps === 'number'
    );

    if (!isValidFormat) {
      console.error('API response format is incorrect.');
      return;
    }

    console.log('API response format is correct:', stepData);
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Network error or invalid JSON:', error.message);
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

// Example usage
testApiIntegration('weekly');

export default AppNavigator;
