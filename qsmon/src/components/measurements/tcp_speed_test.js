import React, { Fragment } from 'react';


export default function tcp_speed_test()
{
return (
    <React.Fragment>
        
        <br></br>
        <form className="jumbotron" action="">
        <h5  class="text-center">TCP Speed Test</h5>
        <br></br>
    <div className="custom-control custom-radio custom-control-inline">
      <input type="radio" className="custom-control-input" id="down" name="tcp_speed_test"/>
      <label className="custom-control-label" for="down">Down</label>
    </div>
    <div className="custom-control custom-radio custom-control-inline">
      <input type="radio" className="custom-control-input" id="up" name="tcp_speed_test" checked/>
      <label className="custom-control-label" for="up">Up</label>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className=''>
    <button type="submit" className=" btn btn-primary btn-lg">run</button>

    </div>
  </form>
  

</React.Fragment>);
}