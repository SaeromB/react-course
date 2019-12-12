import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Counter from './counter-example';
// import VisibilityToggle from './toggle';
// import IndecisionApp from './indecision-example';
import Indecision from './indecision';
// import User from './indecision';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Indecision/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
