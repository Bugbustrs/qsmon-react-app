import React from 'react'
import {NavLink} from 'react-router-dom'
export default function resultList ()
{
    return(
<ul className="list-group ">
<NavLink className="list-group-item  list-group-item-action" to='/results/ping'>Ping Results</NavLink>
<NavLink className="list-group-item  list-group-item-action" to='/results/dns_lookup'>DNS Results</NavLink>
 <NavLink className="list-group-item list-group-item-action" to='/results/http'>HTTP Results</NavLink>
<NavLink className="list-group-item list-group-item-action" to='/results/tcp_speed_test'>TCP Results</NavLink>
</ul>
    );
}