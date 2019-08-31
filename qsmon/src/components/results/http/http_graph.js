import React from 'react';
import {  ResponsiveContainer,Brush, ComposedChart,Legend, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';

function formatXAxis(tickItem) {
    // If using moment.js
    return moment(tickItem).format('Do MMM  YYYY')
    }

    function CustomTooltip({ payload, label, active }) {
      console.log(payload);
        if (active) {
          return (
            <div className="custom-tooltip card" style={{backgroundColor:'transparent',border:`0.5px solid ${payload[0].color}`}}>
              <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
              <p className='label'>httpStatusCode: {`${payload[0].payload.httpResultCode}`}</p>
              <p className='label'>target: {`${payload[0].payload.target}`}</p>
              <p className="desc">date: {formatXAxis(label)}</p>
            </div>
          );
        }

  return null;
    }


export default function dns_graph(props)
{

       
if(props.data!==undefined)
console.log(props.data); 


let renderLineChart =(<p>loading...</p>);
if (props.data!== undefined && JSON.parse(props.data.payload).length>0)
{
     renderLineChart = (
        <div>
            <ResponsiveContainer width="100%" height={400}>
        <ComposedChart syncId="anyId" width={800} height={400} data={JSON.parse(props.data.payload)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="timeTakenMs" stroke="#ff7300" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="time.seconds"   domain = {['auto', 'auto']}
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
     }
else{
renderLineChart=(<pre>There are no measurements for this job
  </pre>)
}

    return (
        <React.Fragment>
{renderLineChart}
</React.Fragment>
    );
}