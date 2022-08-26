import React, { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const suma = () => {setCounter(counter + 1)}
    const resta = () => {setCounter(c => c - 1)}
    const reset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button aria-label="btn-suma" onClick={suma}>Suma 1</button>
            <button aria-label="btn-reset" onClick={reset}>Reset</button>
            <button aria-label="btn-resta" onClick={resta}>Resta 1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
