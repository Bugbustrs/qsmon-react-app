import React from 'react';
import { NavLink} from 'react-router-dom';

export default function header(props){

  const onClick =(event)=>{
    localStorage.removeItem('user');
   window.location.reload();
    // this.props.history.push('/');
    event.preventDefault();
  }

  let user= JSON.parse(localStorage.getItem('user'));
  let user_type = user==null?'':user.user_type;
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavLink className="navbar-brand" to="/">QSMON Platform</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto">
           {user_type==='Researcher'? <li className="nav-item">
              <NavLink className="nav-link" to="/run_measurements">Run measurements</NavLink>
            </li>:<span></span>}
            {user_type==='Researcher'? <li className="nav-item">
              <NavLink className="nav-link" to="/view_results">View results</NavLink>
            </li>:<span></span>}
          
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