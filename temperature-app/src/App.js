import React, { useState } from "react";
import './App.css';

const App = () => {
    const [temperature, setTemperature] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold");

    const increaseTemperature = () => {
        if (temperature === 30) return;

        const newTemperature = temperature + 1;
        setTemperature(newTemperature);
        if (newTemperature >= 15) {
            setTemperatureColor("hot");
        }
    }

    const decreaseTemperature = () => {
        if (temperature === 0) return;

        const newTemperature = temperature - 1;
        setTemperature(newTemperature);
        if (newTemperature < 20) {
            setTemperatureColor("cold");
        }
    }

    return (
        <>
            <div className="app-container">
                <div className="temperature-display-container">
                    <div className={`temperature-display ${temperatureColor}`}>
                        {temperature}°C
                    </div>
                </div>
                <div className="button-container">
                    <button onMouseDown={increaseTemperature}>+</button>
                    <button onClick={decreaseTemperature}>-</button>
                </div>
            </div>
        </>
    );
}

export default App;