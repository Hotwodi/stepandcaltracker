import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { addSteps } from '../services/api';

const AddStepsScreen = ({ navigation }) => {
  const [steps, setSteps] = useState('');

  const handleAddSteps = async () => {
    await addSteps('user123', new Date().toISOString().split('T')[0], parseInt(steps)); // Replace with dynamic userId
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Add Steps</Text>
      <TextInput
        placeholder="Enter steps"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Submit" onPress={handleAddSteps} />
    </View>
  );
};

export default AddStepsScreen;
