import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function FoodAnalysisScreen() {
  const [image, setImage] = useState(null);
  const [foodDescription, setFoodDescription] = useState('');
  const [macronutrients, setMacronutrients] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false, // Disable cropping
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.uri);
        confirmImage(result.uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      alert('An error occurred while accessing the camera. Please try again.');
    }
  };

  const confirmImage = (uri) => {
    Alert.alert(
      'Confirm Image',
      'Do you want to analyze this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Analyze',
          onPress: () => analyzeImage(uri),
        },
      ],
      { cancelable: false }
    );
  };

  const analyzeImage = async (uri) => {
    setIsAnalyzing(true);
    try {
      const apiUrl = 'https://api.geminiflash.com/v1/food-analysis'; // Hardcoded endpoint
      const apiKey = 'AIzaSyBEfWnWgterlHpDiKxi3KmVDcROnqGfodQ'; // Hardcoded API key

      const formData = new FormData();
      formData.append('image', {
        uri,
        name: 'food.jpg',
        type: 'image/jpeg',
      });

      console.log('Sending image to API:', uri);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${apiKey}`, // Use the hardcoded API key
        },
        body: formData,
      });

      console.log('API response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API response data:', data);

      setFoodDescription(data.description || 'Unknown food');
      setMacronutrients(data.macronutrients || { carbs: 0, fat: 0, protein: 0 });
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('An error occurred while analyzing the image. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Analysis</Text>
      <Button title="Take a Picture" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {isAnalyzing && <ActivityIndicator size="large" color="#0000ff" />}
      {foodDescription && (
        <Text style={styles.description}>Food: {foodDescription}</Text>
      )}
      {macronutrients && (
        <>
          <Text>Carbs: {macronutrients.carbs} g</Text>
          <Text>Fat: {macronutrients.fat} g</Text>
          <Text>Protein: {macronutrients.protein} g</Text>
        </>
      )}
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
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
