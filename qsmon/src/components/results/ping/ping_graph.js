import React from 'react';
import {  ResponsiveContainer,Brush, ComposedChart,Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';

function formatXAxis(tickItem) {
    // If using moment.js
    return moment(tickItem).format('Do MMM  YYYY')
    }

    function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
              {/* <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p> */}
              <p className="desc">date:{formatXAxis(label)}</p>
            </div>
          );
        }

  return null;
    }


export default function dns_graph(props)
{

    
if(props.data!==undefined)
console.log(props.data.payload);

let renderLineChart =(<p>loading...</p>);
if (props.data!== undefined)
    renderLineChart = (
        <div>
            <ResponsiveContainer width="100%" height={400}>
        <ComposedChart syncId="anyId" width={800} height={400} data={JSON.parse(props.data.payload)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="maxRttMs" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date"   domain = {['auto', 'auto']}
      tickFormatter={formatXAxis}
  type='number'/>
        <YAxis />
        <Tooltip content={<CustomTooltip />}/>
        <Legend/>
        <Brush />

      </ComposedChart>
      </ResponsiveContainer>


      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart syncId="anyId" width={800} height={400} data={JSON.parse(props.data.payload)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="min_rtt_ms" stroke ="#82ca9d"/>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date"   domain = {['auto', 'auto']}
      tickFormatter={formatXAxis}
  type='number'/>
        <YAxis />
        <Tooltip content={<CustomTooltip />}/>
        <Legend/>
        <Brush />

      </ComposedChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart syncId="anyId" width={800} height={400} data={JSON.parse(props.data.payload)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="maxRttMs" stroke ="#FF5733"/>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date"   domain = {['auto', 'auto']}
      tickFormatter={formatXAxis}
  type='number'/>
        <YAxis />
        <Tooltip content={<CustomTooltip />}/>
        <Legend/>
        <Brush />

      </ComposedChart>
      </ResponsiveContainer>


</div>
    );
    return (
        <React.Fragment>
{renderLineChart}
</React.Fragment>
    );
}