import React from 'react';
import { NavLink} from 'react-router-dom';
export default function measurementList() {


    return (
      <div>
      <ul className="nav flex-column">
  <NavLink className="list-group-item list-group-item-action" to='/traceroute'>trace route</NavLink> 
  <NavLink className="list-group-item list-group-item-action" to='/ping'>ping</NavLink>
  <NavLink className="list-group-item list-group-item-action" to='/dns_lookup'>DNS Lookup</NavLink>
  <NavLink className="list-group-item list-group-item-action" to='/http'>HTTP</NavLink>
  <NavLink className="list-group-item list-group-item-action" to='/tcp_speed_test'>TCP Speed Test</NavLink>
</ul>
<br></br>
</div>
    );
  }