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

function App() {
  return (
    <div className="App">
  

  <BrowserRouter>
  <Header>   </Header>
<CustomLayout >
  

  <Route path ='/run_measurements' component ={Measurements}/>
  <Route path ='/view_results' component ={Results}/>

</CustomLayout>

</BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
