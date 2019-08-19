import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery.slim'
import 'popper.js'
import React from 'react';
import './App.css';

import {BrowserRouter } from 'react-router-dom';

import LoginPage from './components/auth/login';
import AuthenticatedPage from './components/authenticatedApp'
function App() {

  return (
    <div className="App">
  

  <BrowserRouter>
    
  {localStorage.getItem('user')===null?<LoginPage></LoginPage>:<AuthenticatedPage></AuthenticatedPage>}

</BrowserRouter>
    </div>
  );
}

export default App;
