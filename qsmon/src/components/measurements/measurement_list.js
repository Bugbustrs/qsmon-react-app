import React from 'react';
import { NavLink} from 'react-router-dom';
export default function measurementList() {


    return (
      <ul className="nav flex-column">
  <li className="nav-item">
  <NavLink to='/traceroute'>trace route</NavLink>  </li>
  <li className="nav-item">
  <NavLink to='/ping'>ping</NavLink>
  </li>
  <li className="nav-item">
  <NavLink to='/dns_lookup'>DNS Lookup</NavLink>
  </li>
  <li className="nav-item">
  <NavLink to='/http'>HTTP</NavLink>

  </li>
  <li className="nav-item">
  <NavLink to='/tcp_speed_test'>TCP Speed Test</NavLink>
  </li>
</ul>

    );
  }