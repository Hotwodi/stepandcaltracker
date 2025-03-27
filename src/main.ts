import React from 'react';
import ReactDOM from 'react-dom';
import StepCounter from './components/StepCounter';
import './styles/styles.css';

const App = () => {
    return (
        <div>
            <h1>Step Counter</h1>
            <StepCounter />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));