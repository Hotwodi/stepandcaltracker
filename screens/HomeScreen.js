import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function StepCounterScreen() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    Pedometer.isAvailableAsync().then(
      (result) => setIsPedometerAvailable(result ? 'available' : 'unavailable'),
      (error) => setIsPedometerAvailable('error')
    );

    const subscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });

    return () => subscription && subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step Counter</Text>
      <Text>Steps Taken: {stepCount}</Text>
      <Text>Pedometer is {isPedometerAvailable}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
