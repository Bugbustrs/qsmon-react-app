// here i want to display multiple data in json.

import React from 'react';

export default  function dns_detail(props){


  let data = JSON.parse(props.data.payload);
  console.log(props.data.payload);

  
    return (
     <div>
   
  {data?(data.length>0?data.map((item,index)=>{
    return (<div key={index} className="card text-left mb-2">
    <div className="card-body">
      <h4 className="card-title">measurement number {index}</h4>
      
      <pre className="card-text"><code>{JSON.stringify(item, undefined, 2)}</code></pre>
    </div>
  </div>)
}):(<pre>There are no measurements for this job
  </pre>)):<div>loading data...</div>}

     </div>
    );
}