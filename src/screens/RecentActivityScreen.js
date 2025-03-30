import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecentActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      <Text>This is where recent activity data will be displayed.</Text>
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
