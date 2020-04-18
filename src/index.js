import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Hello'; // our own component
//import NewComp from './NewComp'; // our new component
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello greeting = {"Hello React Ninja"}/> */}
    {/* <NewComp adding = {5 + 7}/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
