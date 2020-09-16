import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';
import Background from "./Background";
import Collage from "./imageCollage/Collage";

ReactDOM.render(
    <React.StrictMode>
        <Background/>
        <App/>,
        <Clock/>
        <Collage/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
