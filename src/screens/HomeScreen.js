import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to the Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Step Counter"
          onPress={() => navigation.navigate('Step Counter')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Analyze Food"
          onPress={() => navigation.navigate('Food Analysis')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Daily Summary"
          onPress={() =>
            navigation.navigate('Daily Summary', {
              caloriesEaten: 1500, // Example value
              caloriesBurned: 500, // Example value
              calorieGoal: 2000, // Example value
            })
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Calendar"
          onPress={() => navigation.navigate('Calendar')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Analytics"
          onPress={() => navigation.navigate('Analytics')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '90%',
  },
});
