import React from 'react'

export default  function Login(){
    const [value,setValue] = React.useState('');


    const onChange = event =>{
    setValue(event.target.value);
    }

    const onSubmit = event =>{
        //window.localStorage.setItem
        event.preventDefault();
      
       if (value.length>5) { 
           localStorage.setItem('email',value);
            window.location.reload();}
    }


    return (
        <div className="container jumbotron mt-5">
<h4>Login</h4>
   <form  onSubmit ={onSubmit}>
<div className=" form-group">
    <label>Email address</label>
    <input onChange={onChange} value={value} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

    <button className="btn btn-primary" type='submit'>submit</button>
    </form>
        </div>
    )
};