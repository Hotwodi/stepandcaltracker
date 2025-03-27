import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment'; // Import moment for date formatting

const StepChart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;

  const chartData = {
    labels: data.map((entry) => moment(entry.date).format('MMM D')), // Format dates
    datasets: [
      {
        data: data.map((entry) => entry.steps), // Extract step counts
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <LineChart
      data={chartData}
      width={screenWidth - 40}
      height={220}
      chartConfig={chartConfig}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default StepChart;
