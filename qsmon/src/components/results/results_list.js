import React from 'react'
import {Link} from 'react-router-dom'
export default function resultList ()
{
    return(
<ul className="list-group ">
  <li className="list-group-item "><Link to='/results/ping'>Ping Results</Link></li>
  <li className="list-group-item"><Link to='/results/traceroute'>Traceroute Results</Link></li>
  <li className="list-group-item"><Link to='/results/dns'>DNS Results</Link></li>
  <li className="list-group-item"><Link to='/results/http'>HTTP Results</Link></li>
  <li className="list-group-item"><Link to='/results/tcp'>TCP Results</Link></li>
</ul>
    );
}