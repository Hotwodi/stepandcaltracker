import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from '../firebase/firebaseConfig'; // Import Firestore instance

export default function StepCounterScreen() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [stepCount, setStepCount] = useState(0);
  const [stepsHistory, setStepsHistory] = useState([]);

  useEffect(() => {
    Pedometer.isAvailableAsync().then(
      (result) => setIsPedometerAvailable(result ? 'available' : 'unavailable'),
      (error) => setIsPedometerAvailable('error')
    );

    const subscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });

    fetchStepsHistory(); // Fetch step history from Firestore

    return () => subscription && subscription.remove();
  }, []);

  const saveStepCount = async () => {
    try {
      await addDoc(collection(db, 'steps'), {
        stepCount,
        timestamp: new Date(),
      });
      alert('Step count saved!');
      fetchStepsHistory(); // Refresh step history
    } catch (error) {
      console.error('Error saving step count:', error);
      alert('Failed to save step count.');
    }
  };

  const fetchStepsHistory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'steps'));
      const steps = querySnapshot.docs.map((doc) => doc.data());
      setStepsHistory(steps);
    } catch (error) {
      console.error('Error fetching steps history:', error);
    }
  };

  const caloriesBurned = (stepCount * 0.04).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step Counter</Text>
      <Text>Steps Taken: {stepCount}</Text>
      <Text>Calories Burned: {caloriesBurned} kcal</Text>
      <Text>Pedometer is {isPedometerAvailable}</Text>
      <Button title="Save Step Count" onPress={saveStepCount} />
      <Text style={styles.subtitle}>Step History:</Text>
      {stepsHistory.map((entry, index) => (
        <Text key={index}>
          {entry.stepCount} steps at {new Date(entry.timestamp.seconds * 1000).toLocaleString()}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});