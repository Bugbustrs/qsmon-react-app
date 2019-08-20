import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery.slim'
import 'popper.js'
import React from 'react';
import './App.css';
import DataUsage from './components/end-users-comp/app_usage';
import {BrowserRouter } from 'react-router-dom';

import LoginPage from './components/auth/login';
import AuthenticatedPage from './components/authenticatedApp'
function App() {
let user_type =localStorage.getItem('user')===null?null:JSON.parse(localStorage.getItem('user')).user_type;
  return (
    <div className="App">
  

  <BrowserRouter>
    
  {localStorage.getItem('user')===null?<LoginPage></LoginPage>:(user_type==='Normal User'?<DataUsage/>:<AuthenticatedPage></AuthenticatedPage>)}

</BrowserRouter>
    </div>
  );
}

export default App;
