import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Card from './components/Card';
import image from './assets/katie.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Main/>
    <Card topic="Life Lessons with Katie Zaferes" image={image} rating="5.0" cost="100" location="USA" reviewnumber="6"/>
    <Card image={image} rating="3.0" cost="150" location="USA" reviewnumber="10"/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
