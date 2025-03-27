import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import AddStepsScreen from './screens/AddStepsScreen';
import RecentActivityScreen from './screens/RecentActivityScreen';
import { LineChart } from 'react-native-chart-kit';

const Stack = createStackNavigator();

const chartConfig = {
  backgroundColor: '#1e2923',
  backgroundGradientFrom: '#08130d',
  backgroundGradientTo: '#1e2923',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const ExampleChart = ({ data }) => (
  <LineChart
    data={{
      labels: data.map((entry) => moment(entry.date).format('MMM D')),
      datasets: [{ data: data.map((entry) => entry.steps) }],
    }}
    width={320}
    height={220}
    chartConfig={chartConfig}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
);

const AppNavigator = () => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId'); // Retrieve user ID from storage
      setUserId(storedUserId);
      setLoading(false); // Stop loading once user ID is fetched
    };
    loadUserId();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddSteps" component={AddStepsScreen} />
        <Stack.Screen name="RecentActivity" component={RecentActivityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
