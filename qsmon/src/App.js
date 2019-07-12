import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery.slim'
import 'popper.js'
import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import Measurements from './components/measurements/measurements_home';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Results from './components/results/results_home';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from './containers/Layout'
import CustomLine from './components/charts/Line';
function App() {
  return (
    <div className="App">
     <CustomLayout>
<CustomLine/>
     </CustomLayout>
    </div>
  );
}

export default App;
