import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state ={data:null}
    }

    componentDidMount()
    {
        //will request a list of jobs here
        console.log(this.props.location.pathname);
        let path =this.props.location.pathname;
        let queryParams ='type='+path.substring(path.indexOf('/',2)+1);
        console.log(queryParams);
        axios.get('http://jchavula-1.cs.uct.ac.za:7800/results/jobs/?'+queryParams).then(data=>{
          this.setState({data});
          
          console.log(data);
          }).catch((e)=> {console.log('Error: '+e+' occurred');});

    }

onClick =(e)=>{
console.log('clicked');
this.props.history.push('/results');
}

    render(){
let data = this.state.data||[{type:'ping',rtt:12,id:"we23"},{type:'ping',rtt:22,id:"e3r3"},{type:'ping',rtt:32,id:"er32w"}]

let path =this.props.location.pathname;
        let type=path.substring(path.indexOf('/',2)+1);
        return (
         <div>

           <h3>{this.props.type} jobs</h3>
           <br></br>
            {  data.map((item,index)=>{

              return (<div key={index}  className="card  text-left">
  <div className="card-body">
    <h4 className="card-title">{item.type}</h4>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <p>{item.rtt} </p>
    <p>{item.id} </p>

    <Link  className="card-link" to={{pathname:'/results/measurements',search:'?type='+type+'&id='+item.id}}>view job results</Link>
  </div>
</div>)
            })}
     </div>


        );
    }
}