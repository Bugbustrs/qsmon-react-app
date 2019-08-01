// here i want to display multiple data in json.

import React from 'react';


export default  function dns_detail(props){

let dns_data= [{'values':[{'address':'www.test.com'},{'real_hostname':'190.12.12.1'},{'time_ms':21.3}]},
{'values':[{'address':'www.example.com'},{'real_hostname':'190.12.12.123'},{'time_ms':23.7}]}
];
    return (
     <React.Fragment>
{ dns_data.map((item,index)=>{

    return (<div key={index} className="card text-left mb-2">
    <div className="card-body">
      <h4 className="card-title">Job {index}</h4>
      <pre className="card-text"><code>{JSON.stringify(item, undefined, 2)}</code></pre>
    </div>
  </div>)
})}

     </React.Fragment>
    );
}