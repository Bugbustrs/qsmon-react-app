import React from 'react';
import { ComposedChart,Bar,Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


export default function dns_graph(props)
{

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 600, pv: 240, amt: 2400},
    {name: 'Page A', uv: 200, pv: 2450, amt: 2400},
    {name: 'Page A', uv: 300, pv: 530, amt: 2400}];

    const renderLineChart = (
        <ComposedChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="pv" type='number'/>
        <YAxis />
        <Tooltip />
        <Legend/>
        <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
      </ComposedChart>
    );
    return (
        <React.Fragment>
{renderLineChart}
</React.Fragment>
    );
}