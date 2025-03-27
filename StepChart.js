import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function StepChart({ data }) {
    // Validation logic
    if (!Array.isArray(data) || !data.every(item => typeof item.date === 'string' && typeof item.steps === 'number')) {
        console.error('Invalid data format. Expected an array of objects with "date" (string) and "steps" (number).');
        return null;
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="steps" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

// PropTypes validation
StepChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            steps: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default StepChart;