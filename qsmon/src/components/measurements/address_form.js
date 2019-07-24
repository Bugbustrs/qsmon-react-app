import React from 'react';




export default class Description extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={address:""    };

  }




  render(){
    
    return (

      <React.Fragment>
     
      <div className=" text-left form-group">
        <label className="text-left" htmlFor="address">web address</label>
        <input onChange={this.props.changeHandler} value={this.props.value}  type="url" name='address' className="form-control" id="address" aria-describedby="emailHelp" placeholder="www.example.com" />
      </div>
    <div className="text-left">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
  
    </React.Fragment>
    )
  }
}