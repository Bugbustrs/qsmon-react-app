import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery.slim'
import 'popper.js'
import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import CustomLine from './components/charts/Line';
import Measurements from './components/measurements/measurements_home';
import PingForm from './components/measurements/ping';
import {BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  

  <BrowserRouter>
<CustomLayout ><Measurements/>
</CustomLayout>

</BrowserRouter>
    </div>
  );
}

export default App;
