import React from 'react';
import Detail from './dns_detail';
import Graph from './dns_graph';
import axios  from 'axios';

export default class Wrapper extends React.Component{

    constructor(props)
    {
        super(props);
        this.state ={showGraph:false,title:"show graph",data:""};

    }
onClickHandler =()=>{
    let newTitle = this.state.showGraph?"show Graph":"show Detail";

    this.setState({showGraph:!this.state.showGraph,title:newTitle});


}

componentDidMount()
{
axios.get('http://196.24.142.134:7800/').then(data=>{
this.setState({data});
console.log(data);
}).catch((e)=> {console.log(e);});
}
    render(){
 
    
        return(
            <div>
<button onClick={this.onClickHandler} type="button" className="mb-2 btn btn-primary btn-sm">{this.state.title}</button>
{this.state.showGraph?(<Graph/>):(<Detail/>)}
       
        </div>
         );
    }
}