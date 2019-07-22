import React from 'react';




export default class Ping extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      value:null
    };
  }


  render(){
    return (
      <React.Fragment>
      <form className ="jumbotron">
      <h5  class="text-left">Ping Test</h5>
        <br></br>
      <div className=" text-left form-group">
        <label class="text-left"for="address">web address</label>
        <input type="url" name='address' className="form-control" id="address" aria-describedby="emailHelp" placeholder="http://example.com" value="http://"/>
      </div>
    <div class="text-left">
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    </React.Fragment>
    )
  }
}