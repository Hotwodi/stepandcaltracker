import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Ensure this import is correct

export default function CalorieGoalCalculatorScreen({ navigation }) {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [calorieGoal, setCalorieGoal] = useState(null);

  const calculateCalorieGoal = () => {
    const heightInCm = parseFloat(height);
    const weightInKg = parseFloat(weight);
    const ageInYears = parseInt(age);

    if (!heightInCm || !weightInKg || !ageInYears) {
      alert('Please enter valid values for age, height, and weight.');
      return;
    }

    let bmr;
    if (sex === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }

    setCalorieGoal(Math.round(bmr * 1.2)); // Assuming sedentary activity level
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Goal Calculator</Text>
      <Text>Enter your details to calculate your daily calorie goal:</Text>
      <TextInput
        style={styles.input}
        placeholder="Age (years)"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Picker
        selectedValue={sex}
        style={styles.picker}
        onValueChange={(itemValue) => setSex(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <Button title="Calculate" onPress={calculateCalorieGoal} />
      {calorieGoal !== null && (
        <Text style={styles.result}>
          Your daily calorie goal is: {calorieGoal} kcal
        </Text>
      )}
      <Button
        title="Set as Daily Goal"
        onPress={() => {
          // Update navigation to avoid referencing 'Calorie Goals'
          alert(`Your daily calorie goal is set to ${calorieGoal} kcal.`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
