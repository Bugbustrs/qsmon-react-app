import React from 'react'
import Detail from './dns_detail'
import Graph from './dns_graph'

export default class Wrapper extends React.Component{

    constructor(props)
    {
        super(props);
        this.state ={showGraph:false,title:"show graph"};

    }
onClickHandler =()=>{
    let newTitle = this.state.showGraph?"show Graph":"show Detail";

    this.setState({showGraph:!this.state.showGraph,title:newTitle});


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