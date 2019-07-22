import React from 'react';

function getKey()
{
  return Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16);
}

let format =val =>{
  return val>9?val:'0'+val;
}


export default class Ping extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      request_type:"SCHEDULE_MEASUREMENT",
      job_description:
      {
        measurement_description:
        { 
            type:'DNS Lookup',
            key:getKey(),
            start_time:null,
            end_time:null,
            interval_sec:1,
            count:null,
            priority:1,
            parameters:{
              target:"",
              server:"null"
            }
          } ,
          node_count:null,
          job_interval:null
      },
    user_id:getKey()
    };
  }

  

  render(){
    //let mindate =;
    let date = new Date(Date.now());
    let min_date = date.getFullYear()+'-'+format(date.getMonth()+1)+'-'+(format(date.getDate()))+"T"+format(date.getHours())+':'+(format(date.getMinutes()-1));
console.log(min_date);
    return (

      <React.Fragment>
      <form className ="jumbotron">
        <h5  className="text-left">DNS Test</h5>
        <br></br>
        <div className="form-row">
    <div class="col text-left">
    <label for="start_time" >start date and time</label>

      <input type="datetime-local" id='start_time' name='start_time' min={min_date} class="form-control" placeholder="start date and time"/>
    </div>
    <div class="col text-left">
    <label for="end_time">end date and time</label>

      <input type="datetime-local"  id='end_time' name='end_time' min={min_date} className="form-control" placeholder="end date and time"/>
    </div>
  </div>
<br/>
      <div className=" text-left form-group">
        <label class="text-left"for="address">web address</label>
        <input type="url" name='address' className="form-control" id="address" aria-describedby="emailHelp" placeholder="http://example.com" value="http://"/>
      </div>
    <div class="text-left">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
    </React.Fragment>
    )
  }
}