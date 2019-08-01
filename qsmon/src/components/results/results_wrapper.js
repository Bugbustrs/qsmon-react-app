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
import TracerouteDetail from './traceroute/traceroute_detail';
import TracerouteGraph from './traceroute/traceroute_graph';


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
let path =this.props.location.pathname;
let queryParams ='type='+path.substring(path.indexOf('/',2)+1);
axios.get('http://196.24.183.18:7800/?'+queryParams).then(data=>{
this.setState({data});
console.log(queryParams);
console.log(data);
}).catch((e)=> {console.log(e);});
}
    render(){
 let graph = null;
 let detail =null;
 let path =this.props.location.pathname;

        switch(path.substring(path.indexOf('/',2)+1))
        {
            case "dns":
                graph = <DNSGraph/>;
                detail = <DNSDetail></DNSDetail>;
                break;
            case 'http':
                graph = <HttpGraph></HttpGraph>;
                detail = <HttpDetail></HttpDetail>;
                break;
            case 'ping':
                graph = <PingGraph/>
                detail = <PingDetail/>
                break;
            case 'tcp':
                graph =<TCPGraph></TCPGraph>;
                detail = <TCPDetail></TCPDetail>
                break;
            case 'traceroute':
                graph =<TracerouteGraph/>;
                detail = <TracerouteDetail/>;
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