import React from 'react'
import {NavLink} from 'react-router-dom'
export default function resultList ()
{
    return(
<ul className="list-group ">
  <li className="list-group-item "><NavLink className="list-group-item list-group-item-action" to='/results/ping'>Ping Results</NavLink></li>
  <li className="list-group-item"><NavLink className="list-group-item list-group-item-action" to='/results/traceroute'>Traceroute Results</NavLink></li>
  <li className="list-group-item"><NavLink className="list-group-item list-group-item-action" to='/results/dns'>DNS Results</NavLink></li>
  <li className="list-group-item"><NavLink className="list-group-item list-group-item-action" to='/results/http'>HTTP Results</NavLink></li>
  <li className="list-group-item"><NavLink className="list-group-item list-group-item-action" to='/results/tcp'>TCP Results</NavLink></li>
</ul>
    );
}