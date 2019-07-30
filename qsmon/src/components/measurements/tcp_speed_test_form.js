import React from 'react';


export default function tcp_speed_test(props)
{
return (
    <React.Fragment>
        
        <br></br>
      <div className='form-group text-center'>
    <div  className="custom-control custom-radio custom-control-inline">
      <input value='down' onChange={props.changeHandler} type="radio" className="custom-control-input" id="down" name="tcp_speed_test" checked ={props.selected==='down'}/>
      <label className="custom-control-label" htmlFor="down">Down</label>
    </div>
    <div className="custom-control custom-radio custom-control-inline">
      <input value='up' onChange={props.changeHandler} type="radio" className="custom-control-input" id="up" name="tcp_speed_test" checked ={props.selected==='up'}/>
      <label className="custom-control-label" htmlFor="up">Up</label>
    </div>
    <br></br>
  
    <br></br>
    <div className=''>
    <button type="submit" className=" btn btn-primary btn-lg">run</button>

    </div>
    </div>
  

</React.Fragment>);
}