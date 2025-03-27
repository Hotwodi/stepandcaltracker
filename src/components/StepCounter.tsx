import React, { useState } from 'react';
import './styles.css';

const StepCounter: React.FC = () => {
    const [stepCount, setStepCount] = useState(0);

    const incrementSteps = () => {
        setStepCount(prevCount => prevCount + 1);
    };

    const resetSteps = () => {
        setStepCount(0);
    };

    return (
        <div className="step-counter">
            <h1>Step Counter</h1>
            <p>Steps: {stepCount}</p>
            <button onClick={incrementSteps}>Increment Step</button>
            <button onClick={resetSteps}>Reset Steps</button>
        </div>
    );
};

export default StepCounter;