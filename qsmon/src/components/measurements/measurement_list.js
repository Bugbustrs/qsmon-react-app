import React from 'react';
import {Link, NavLink} from 'react-router-dom';
export default function measurementList() {


    return (
      <ul class="nav flex-column">
  <li class="nav-item">
  <NavLink to='/trace_route'>trace route</NavLink>  </li>
  <li class="nav-item">
  <NavLink to='/ping'>ping</NavLink>
  </li>
  <li class="nav-item">
  <NavLink to='/DNS_Lookup'>DNS Lookup</NavLink>
  </li>
  <li class="nav-item">
  <NavLink to='/http'>HTTP</NavLink>

  </li>
  <li class="nav-item">
  <NavLink to='/TCP_Speed_Test'>TCP Speed Test</NavLink>
  </li>
</ul>

    );
  }