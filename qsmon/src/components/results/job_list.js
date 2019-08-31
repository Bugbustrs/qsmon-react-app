import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state ={data:null,type:''}
    }

    componentDidMount()
    {
        console.log(this.props.location.pathname);
        let path =this.props.location.pathname;
        let queryParams ='type='+path.substring(path.indexOf('/',2)+1);
        let type=path.substring(path.indexOf('/',2)+1);
   console.log(queryParams);
        axios.get('http://jchavula-1.cs.uct.ac.za:7800/results/jobs/?'+queryParams).then(data=>{
 
        console.log(JSON.parse(data.data.payload)); 
    
        this.setState({data:JSON.parse(data.data.payload),type:type});
          
          
          }).catch((e)=> {console.log('Error: '+e+' occurred');});

    }

onClick =(e)=>{
console.log('clicked');
this.props.history.push('/results');
}

    render(){
let data = this.state.data;

let path =this.props.location.pathname;
        let type=path.substring(path.indexOf('/',2)+1);
       if(data===undefined || data===null)
       return (<p>loading...</p>)
       else{
         if(data.length===0)
          return <pre>There are no jobs scheduled</pre>
        return (

         <div>
       

           <h3>{this.props.type} jobs</h3>
           <br></br>
            {  data.map((item,index)=>{
              // let jsonData = JSON.stringify(item,undefined,3)
              let id =null;
              if(item['_id']!==undefined)
               id =item['job_description']['measurement_description']['key'];

              return (<div key={index}  className="card  text-left">
  <div className="card-body">
  <h5 className='card-title'> job {index+1}</h5>
  <pre className='card-text'>job_type: {item.job_description.measurement_description.type}</pre>
<pre className='card-text'>start_time: {new Date(item.job_description.measurement_description.start_time).toDateString()}</pre>
<pre className='card-text'>end_time: {new Date(item.job_description.measurement_description.end_time).toDateString()}</pre>
<pre className='card-text'>target: {item.job_description.measurement_description.parameters.target}</pre>
<pre className='card-text'>node_count: {item.job_description.node_count}</pre>
<pre className='card-text'>job_interval: {item.job_description.job_interval}</pre>

  {/* <div><pre>{jsonData}</pre></div> */}

    <Link  className="card-link" to={'/results/measurements?type='+this.state.type+'&id='+id}>view job results</Link>
  </div>
</div>)
            })}
     </div>


        );
          }
    }
}