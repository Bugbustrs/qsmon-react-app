import React from 'react';
import {format,getKey, getPostObject} from '../utils/measurement_utils';




export default class Dns extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      type:this.props.location.pathname.substring(1,),
            start_time:"",
            end_time:"",
            interval_sec:1,
            count:2,
            priority:5,
            target:"",
            node_count:"",
            job_interval:""
 };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event)
{
  let output ="";
  if(!event.target.value.startsWith("http"))
  output = "https://"+event.target.value;
else
output =event.target.value;
this.setState({
  target:output
});
}

handleChange1 = e =>{
  this.setState({[e.target.name]:e.target.value})
}

handleSubmit = e =>{
  e.preventDefault();
  console.log(getKey());
  console.log(this.state);
  console.log(getPostObject(this.state));
  //construct post request object here
}

  render(){
    //let mindate =;
    let date = new Date(Date.now());
    let min_date = date.getFullYear()+'-'+format(date.getMonth()+1)+'-'+(format(date.getDate()))+"T"+format(date.getHours())+':'+(format(date.getMinutes()-1));

    return (

      <React.Fragment>
      <form className ="jumbotron" onSubmit={this.handleSubmit}>
        <h5  className="text-left">DNS Test</h5>
        <br></br>
        
        <div className="form-group">

        <div className=" form-row">
        <div className='col-md-6 col-10 text-left'>
    <label htmlFor="node_count">node count</label>
    <input value={this.state.node_count} onChange={this.handleChange1} className ='form-control' type="number" name="node_count" placeholder='number of nodes to run job on'/>
    </div>
    <div className='col-md-6 col-10 text-left'>
    <label htmlFor="job_interval">job interval</label>
    <input value={this.state.job_interval} onChange={this.handleChange1}  className ='form-control' type="number" name="job_interval" placeholder='enter a number'/>
    </div>
    
     </div>
        <div className=" form-row">
    <div className='col-md-6 col-10 text-left'>
    <label htmlFor="priority">Priority</label>
    <select value={this.state.priority} onChange={this.handleChange1}  className="form-control" name="priority">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    </div>
    <div className='col-md-6 col-10 text-left'>
    <label htmlFor="interval_sec">Interval between measurements</label>
    <input value={this.state.interval_sec} onChange={this.handleChange1}  className ='form-control' type="number" name="interval_sec" placeholder='enter a number'/>
    </div>
  </div>
        </div>
        <div className=" form-row">
    <div className="col-md-6 col-10 text-left">
    <label htmlFor="start_time" >start date and time</label>

      <input value={this.state.start_time} onChange={this.handleChange1}  type="datetime-local" id='start_time' name='start_time' min={min_date} className="form-control" />
    </div>
    <div className="col-md-6 col-10 text-left">
    <label htmlFor="end_time">end date and time</label>

      <input value={this.state.end_time} onChange={this.handleChange1}   type="datetime-local"  id='end_time' name='end_time' min={min_date} className="form-control" />
    </div>
  </div>
<br/>
      <div className=" text-left form-group">
        <label className="text-left" htmlFor="address">web address</label>
        <input onChange={this.handleChange} value={this.state.target} type="url" name='address' className="form-control" id="address" aria-describedby="emailHelp" placeholder="www.example.com" />
      </div>
    <div className="text-left">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
    </React.Fragment>
    )
  }
}