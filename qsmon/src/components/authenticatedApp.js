import React from 'react';
import CustomLayout from '../containers/Layout';
import Measurements from './measurements/measurements_home';
import { Route } from 'react-router-dom';
import Header from './header';
import Results from './results/results_home';
import WelcomePage from './welcome'
import LoginPage from './auth/login';

export default function auth(props){


    return(
        <div>
        <Header/>   
        <Route path='/' exact component ={WelcomePage}/>
      
      <CustomLayout >
        <Route path ='/run_measurements' component ={Measurements}/>
        <Route path ='/view_results' component ={Results}/>
        <Route path ='/logout' component ={LoginPage}/>
      
      </CustomLayout>
      </div>
    );
}