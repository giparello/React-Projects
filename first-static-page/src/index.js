import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';

//create root. This is technically just a POJO but React makes it easier with JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
//render the root
root.render(
  //THIS IS WHERE YOU SET UP MAIN LAYOUT AREA
  <React.StrictMode>
    <NavBar/>
    <MainContent/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
