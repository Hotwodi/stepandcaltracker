import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [calorieData, setCalorieData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API endpoint for testing
    const mockData = {
      '2023-10-01': { caloriesEaten: 2000, caloriesBurned: 500 },
      '2023-10-02': { caloriesEaten: 1800, caloriesBurned: 400 },
    };

    // Simulate API call
    setTimeout(() => {
      setCalorieData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Calendar</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...Object.keys(calorieData).reduce((acc, date) => {
            acc[date] = { marked: true };
            return acc;
          }, {}),
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />
      {selectedDate && (
        <View style={styles.details}>
          <Text>Date: {selectedDate}</Text>
          <Text>Calories Eaten: {calorieData[selectedDate]?.caloriesEaten || 0} kcal</Text>
          <Text>Calories Burned: {calorieData[selectedDate]?.caloriesBurned || 0} kcal</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  details: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});
