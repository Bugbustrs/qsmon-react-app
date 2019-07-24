import measurementList from "../measurements/measurement_list";

function getKey()
{
  return Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16);
}

/*
generates a post request object from the state of the app
*/
function getPostObject(state)
{

let measurement_description = { 
            type:state.type,
            key:getKey(),
            start_time:state.start_time,
            end_time:state.end_time,
            interval_sec:state.interval_sec,
            priority:state.priority,
          parameters:{
           target:state.target,
           server:"null"   
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
}

export  {format,getKey,getPostObject}