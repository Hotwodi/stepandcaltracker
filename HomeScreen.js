import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { fetchRecentActivity } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [recentActivity, setRecentActivity] = useState({ recentSteps: [], recentIntakes: [] });

  useEffect(() => {
    const loadRecentActivity = async () => {
      try {
        const userId = 'user123'; // Replace with dynamic userId logic if needed
        const data = await fetchRecentActivity(userId);
        setRecentActivity(data.data);
      } catch (error) {
        Alert.alert('Error', 'Failed to load recent activity.');
      }
    };
    loadRecentActivity();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Recent Steps</Text>
      <FlatList
        data={recentActivity.recentSteps}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <Text>{item.date}: {item.steps} steps</Text>
        )}
      />
      <Button title="Add Steps" onPress={() => navigation.navigate('AddSteps')} />
    </View>
  );
};

export default HomeScreen;
