var express = require('express');
var router = express.Router();
let jsonData = require('./data.json');



router.get('/',(req,res,next)=>{
    let date = new Date('January 17, 2019 03:24:00');
for(let i =0;i<jsonData.length;i++)
{
    jsonData[i]['mean_rtt_ms'] = Math.round(jsonData[i]['mean_rtt_ms']*100)/100;
    jsonData[i]['min_rtt_ms'] = Math.round(jsonData[i]['min_rtt_ms']*100)/100;
    jsonData[i]['max_rtt_ms'] = Math.round(jsonData[i]['max_rtt_ms']*100)/100;

   // console.log(jsonData[i]['min_rtt_ms'] );
    jsonData[i]['date'] = date.setDate(date.getDate()+3);
}
//console.log(jsonData);

    res.json(jsonData);
});


module.exports = router;