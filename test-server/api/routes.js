var express = require('express');
var router = express.Router();
let pingData = require('./data.json');
let httpData = require('./http.json');
const dnsData = require('./dns.json');
const tcpData = require('./tcp.json');



router.get('/ping',(req,res,next)=>{
    let date = new Date('January 17, 2019 03:24:00');
for(let i =0;i<pingData.length;i++)
{
    pingData[i]['mean_rtt_ms'] = Math.round(pingData[i]['mean_rtt_ms']*100)/100;
    pingData[i]['min_rtt_ms'] = Math.round(pingData[i]['min_rtt_ms']*100)/100;
    pingData[i]['max_rtt_ms'] = Math.round(pingData[i]['max_rtt_ms']*100)/100;

   // console.log(pingData[i]['min_rtt_ms'] );
    pingData[i]['date'] = date.setDate(date.getDate()+3);
}
//console.log(pingData);
    res.json(pingData);
});

router.get('/http',(req,res,next)=>{
    let date = new Date('January 17, 2019 03:24:00');
    for(let i =0;i<httpData.length;i++){
    httpData[i]['date'] = date.setDate(date.getDate()+3);
    }
res.json(httpData);
})


router.get('/dns',(req,res,next)=>{
    let date = new Date('January 17, 2019 03:24:00');
    for(let i =0;i<dnsData.length;i++){
    dnsData[i]['date'] = date.setDate(date.getDate()+3);
    }
res.json(dnsData);
});


router.get('/tcp',(req,res,next)=>{
    let date = new Date('January 17, 2019 03:24:00');
    for(let i =0;i<tcpData.length;i++){
    tcpData[i]['date'] = date.setDate(date.getDate()+3);
    tcpData[i]['tcp_speep_avg'] = tcpData[i]['tcp_speed_results'].reduce((accumulator,current)=>accumulator+current)*Math.random()*100;
    }
    console.log(tcpData);
res.json(tcpData);
})



module.exports = router;