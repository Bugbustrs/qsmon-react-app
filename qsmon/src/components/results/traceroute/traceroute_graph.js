import React from 'react';
import {Area,AreaChart,LineChart,Brush, ComposedChart,Bar,Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


export default function dns_graph(props)
{

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 600, pv: 240, amt: 2400},
    {name: 'Page A', uv: 200, pv: 2450, amt: 2400},
    {name: 'Page A', uv: 300, pv: 530, amt: 2400}];

    const renderLineChart = (
        <div>
        <ComposedChart syncId="anyId" width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="pv" type='number'/>
        <YAxis />
        <Tooltip />
        <Legend/>
        <Bar dataKey='uv' barSize={50} fill='#413ea0'/>
       
      </ComposedChart>
      <LineChart width={600} height={200} data={data} syncId="anyId"
      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
  <CartesianGrid strokeDasharray="3 3"/>
  <XAxis dataKey="uv" type='number'/>
  <YAxis/>
  <Tooltip/>
  <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
  <Brush />
</LineChart>
<AreaChart width={600} height={200} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="uv"type ='number'/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>
</div>
    );
    return (
        <React.Fragment>
{renderLineChart}
</React.Fragment>
    );
}