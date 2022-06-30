import React from 'react';
import ReactDOM from 'react-dom/client';
//adding bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
//adding Navbar
import NavBar from './Components/navBar';
//adding LoginForm
import LoginForm from './Components/loginForm';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(NavBar, {}, null)
  React.createElement(LoginForm, {}, null)
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
