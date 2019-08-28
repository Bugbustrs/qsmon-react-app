
function getKey()
{
  return Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16);
}


const formatDate = date =>{

return date.toString()+":00.000Z";
}
/*
generates a post request object from the state of the app
*/
function getPostObject(state)
{

let measurement_description = { 
            type:state.type,
            key:getKey(),
            start_time:formatDate(state.start_time),
            end_time:formatDate(state.end_time),
            count:state.count,
            interval_sec:1,
            priority:state.priority,
          parameters:{
           target:state.target.substring(8),
           server:"null",
           direction:state.tcp_speed_test,   
          }
          };
let job_description = {
  measurement_description,
  node_count:state.node_count,
  job_interval:state.job_interval
}

let result={job_description, request_type:"SCHEDULE_MEASUREMENT" ,user_id:getKey(), };

return result;
}

let format =val =>{
  return val>9?val:'0'+val;
};

const getType = type  =>{
const map ={"/tcp_speed_test":"TCP Speed Test",'/ping':"Ping Test","/dns_lookup":"DNS Lookup Test",'/traceroute':'Traceroute Test','/http':'HTTP Test'};

return map[type];
}

export  {format,getKey,getPostObject,getType}
