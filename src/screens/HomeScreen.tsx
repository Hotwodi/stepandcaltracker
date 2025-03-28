import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen} // Pass the component, not <HomeScreen />
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
```
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
    </View>
  );
};

export default HomeScreen;