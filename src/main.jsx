import React from 'react';
import ReactDom from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
// import { App, HelloWorldApp } from "./HelloWorldApp";

import './styles.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/>
        <HelloWorldApp/> */}
        {/* <FirstApp/> */}
        {/* <FirstApp title='Hola, soy Vegeta'/> */}
        <CounterApp value={100}/>
    </React.StrictMode>
);
