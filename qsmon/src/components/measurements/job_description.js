import React from 'react';




export default class Description extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={address:""    };

    this.handleChange = this.handleChange.bind(this);
  }


handleChange(event)
{
  let output ="";
  if(!event.target.value.startsWith("http"))
    output = "https//:"+event.target.value;
  else
    output =event.target.value;
this.setState({
  address:output
});
}
  

  render(){
    
    return (

      <React.Fragment>
     
      <div className=" text-left form-group">
        <label className="text-left" htmlFor="address">web address</label>
        <input onChange={this.handleChange} value={this.state.address} type="url" name='address' className="form-control" id="address" aria-describedby="emailHelp" placeholder="www.example.com" />
      </div>
    <div className="text-left">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
  
    </React.Fragment>
    )
  }
}