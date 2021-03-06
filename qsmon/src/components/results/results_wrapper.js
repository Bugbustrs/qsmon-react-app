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
        this.state ={showGraph:true,title:"show detail",data:""};

    }
onClickHandler =()=>{
    let newTitle = this.state.showGraph?"show graph":"show detail";

    this.setState({showGraph:!this.state.showGraph,title:newTitle});


}

componentDidMount()
{
let path =this.props.location.pathname;
console.log(JSON.stringify(this.props.location));
let params = new URLSearchParams(this.props.location.search);

console.log(params.get('type'));

axios.get('http://jchavula-1.cs.uct.ac.za:7800/results/'+this.props.location.search).then(data=>{
this.setState({data});
console.log(data);
}).catch((e)=> {console.log(e);});
}
    render(){
 let graph = null;
 let detail =null;
 let params = new URLSearchParams(this.props.location.search);
 let data1 =this.state.data;
        switch(params.get('type'))
        {
            case "dns_lookup":
                graph = <DNSGraph data ={data1['data']}/>;
                detail = <DNSDetail data ={data1['data']} ></DNSDetail>;
                break;
            case 'http':
                graph = <HttpGraph data ={data1['data']} ></HttpGraph>;
                detail = <HttpDetail data ={data1['data']} ></HttpDetail>;
                break;
            case 'ping':
                console.log(data1['data']);
                graph = <PingGraph data ={data1['data']} />
                detail = <PingDetail data ={data1['data']} />
                break;
            case 'tcp_speed_test':
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