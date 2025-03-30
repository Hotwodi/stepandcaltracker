import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DailySummaryScreen({ route }) {
  const { caloriesEaten, caloriesBurned, calorieGoal } = route.params;

  const remainingCalories = calorieGoal - (caloriesEaten - caloriesBurned);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Summary</Text>
      <Text>Calories Eaten: {caloriesEaten} kcal</Text>
      <Text>Calories Burned: {caloriesBurned} kcal</Text>
      <Text>Calorie Goal: {calorieGoal} kcal</Text>
      <Text>Remaining Calories: {remainingCalories} kcal</Text>
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
});
