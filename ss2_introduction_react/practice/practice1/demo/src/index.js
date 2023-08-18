import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDom from "react-dom/client";
const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ textAlign: "center" }}>
    <h1>
      List of Fruits
    </h1>
    <ul>
      {
        fruits.map((item) => (
          <li>{item}</li>
        ))
      }
    </ul>
  </div>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
