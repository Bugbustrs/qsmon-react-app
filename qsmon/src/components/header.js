import React from 'react';
import { NavLink} from 'react-router-dom';

export default function header(){

  const onClick =(event)=>{
    localStorage.removeItem('email');
    window.location.reload();
    event.preventDefault();
  }
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavLink className="navbar-brand" to="/">QSMON Platform</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/run_measurements">Run measurements</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/view_results">View results</NavLink>
            </li>
          
          </ul>
          <ul className='navbar-nav '>
          <li className="nav-item">
              <NavLink className="nav-link" onClick={onClick} to="logout">logout</NavLink>
            </li>   
          </ul>
        </div>  
      </nav> 
    );
}