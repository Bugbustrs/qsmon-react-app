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
        //will request a list of jobs here
        console.log(this.props.location.pathname);
        let path =this.props.location.pathname;
        let queryParams ='type='+path.substring(path.indexOf('/',2)+1);
        let type=path.substring(path.indexOf('/',2)+1);
        // console.log(queryParams);
        axios.get('http://jchavula-1.cs.uct.ac.za:7800/results/jobs/?'+queryParams).then(data=>{
       // data = JSON.parse(data.data)
        //data['date']=data.time['seconds'];

//         for(let i =0;i<data.length;i++)
//         {
// data[i]['date'] =data[i]['time']['seconds'];
//         }
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
        return (
         <div>
       

           <h3>{this.props.type} jobs</h3>
           <br></br>
            {  data.map((item,index)=>{
              let jsonData = JSON.stringify(item,undefined,3)
              let id =null;
              if(item['_id']!==undefined)
               id =item['_id']['$oid'];

              return (<div key={index}  className="card  text-left">
  <div className="card-body">
  <h5 className='card-title'> job {index+1}</h5>

  <div><pre>{jsonData}</pre></div>

    <Link  className="card-link" to={'/results/measurements?type='+this.state.type+'&id='+id}>view job results</Link>
  </div>
</div>)
            })}
     </div>


        );
          }
    }
}