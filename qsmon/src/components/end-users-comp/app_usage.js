import React from 'react';
import axios from 'axios';
import Header from '../header';

export default class DataUsage extends React.Component
{   
//app name
//total download and total upload
//
constructor(props)
{
    super(props)
    this.state={data:null};
}

componentDidMount()
{
    axios.get('http://jchavula-1.cs.uct.ac.za:7800/app-usage/').then(data=>{
        this.setState({data});
    }).catch(error=>{
       console.error(error);
    });

}

render()
{
let data =this.state.data || [{'app_name':"facebook",'total_download':'50mb','total_upload':'60mb'},
{'app_name':"facebook",'total_download':'50mb','total_upload':'60mb'},
{'app_name':"facebook",'total_download':'50mb','total_upload':'60mb'}];
    
    return (
        <div>
        <Header/>   

        <div className='container'>  
        <h3>App Usage </h3><br></br>
        {  data.map((item,index)=>{

            return (

    <div key={index}  className="card  text-left">
  <div className="card-body">
    <h4 className="card-title">{item.app_name}</h4>
    <p className="card-text">total download: {item.total_download}</p>
    <p>total upload: {item.total_upload}</p>
   
   </div>
    </div>)
   })}
</div> 
</div> );
}

}

