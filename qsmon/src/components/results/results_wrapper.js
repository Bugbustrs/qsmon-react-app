import React from 'react';
import DNSDetail from './dns/dns_detail';
import DNSGraph from './dns/dns_graph';
import axios  from 'axios';
import HttpDetail from './http/http_detail';
import HttpGraph from './http/http_graph';
import PingDetail from './ping/ping_detail';
import PingGraph from './ping/ping_graph';
import TCPDetail from './tcp/tcp_detail';
import TCPGraph from './tcp/tcp_graph';



export default class Wrapper extends React.Component{

    constructor(props)
    {
        super(props);
        this.state ={showGraph:true,title:"show graph",data:""};

    }
onClickHandler =()=>{
    let newTitle = this.state.showGraph?"show graph":"show detail";

    this.setState({showGraph:!this.state.showGraph,title:newTitle});


}

componentDidMount()
{
let path =this.props.location.pathname;
let queryParams ='type='+path.substring(path.indexOf('/',2)+1);
let type =path.substring(path.indexOf('/',2)+1);
axios.get('http://localhost:5000/results/'+type+'?'+queryParams).then(data=>{
this.setState({data});
console.log(queryParams);
console.log(data);
}).catch((e)=> {console.log(e);});
}
    render(){
 let graph = null;
 let detail =null;
 let path =this.props.location.pathname;
let data1 =this.state.data;
        switch(path.substring(path.indexOf('/',2)+1))
        {
            case "dns":
                graph = <DNSGraph data ={data1['data']}/>;
                detail = <DNSDetail data ={data1['data']} ></DNSDetail>;
                break;
            case 'http':
                graph = <HttpGraph data ={data1['data']} ></HttpGraph>;
                detail = <HttpDetail data ={data1['data']} ></HttpDetail>;
                break;
            case 'ping':
                graph = <PingGraph data ={data1['data']} />
                detail = <PingDetail data ={data1['data']} />
                break;
            case 'tcp':
                graph =<TCPGraph data ={data1['data']}></TCPGraph>;
                detail = <TCPDetail data ={data1['data']}></TCPDetail>
                break;
         

            default:
                graph = <pre>an error happened</pre>;
                detail =<pre>an error happened</pre>;

        }
    
        return(
            <div>
<button onClick={this.onClickHandler} type="button" className="mb-2 btn btn-primary btn-sm">{this.state.title}</button>
{this.state.showGraph?graph:detail}
       
        </div>
         );
    }
}