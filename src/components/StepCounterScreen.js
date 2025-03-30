import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/StepCounterStyles';

const StepCounterScreen = () => {
    const [stepCount, setStepCount] = useState(0);
    const CALORIES_PER_STEP = 0.04;

    const handleStep = () => {
        setStepCount(stepCount + 1);
    };

    const caloriesBurned = (stepCount * CALORIES_PER_STEP).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Step Counter</Text>
            <Text>Steps Taken: {stepCount}</Text>
            <Text>Calories Burned: {caloriesBurned} kcal</Text>
            <Button title="Take a Step" onPress={handleStep} />
        </View>
    );
};

export default StepCounterScreen;
