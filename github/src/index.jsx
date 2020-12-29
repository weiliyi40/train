import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx";
import "./styles/index.less";

ReactDOM.render(
  <App />,
  document.getElementById('container'),
);
