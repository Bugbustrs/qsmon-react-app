import React from 'react'

export default  function Login(){
    const [value,setValue] = React.useState({email:'',user_type:''});


    const onChange = event =>{
    setValue({...value,[event.target.name]:event.target.value});
    console.log(event.target.value);
    console.log(value);
    }

    const onSubmit = event =>{
        //window.localStorage.setItem
        event.preventDefault();
      
       if (value.email.length>5) { 
           localStorage.setItem('user',value);
            window.location.reload();}
      console.log(value);
    }


    return (
        <div className="container jumbotron mt-5">
<h4>Login</h4>
   <form  onSubmit ={onSubmit}>
<div className=" form-group">
    <label>Email address</label>
    <input name='email' onChange={onChange} value={value.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
    
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="user_type">Which user are you?</label>
    <select value ={value.user_type}  onChange={onChange} name='user_type' className="form-control" id="user_type">
      <option>Researcher</option>
      <option>Normal User</option>
     
    </select>
  </div>
    <button className="btn btn-primary" type='submit'>submit</button>
    </form>
        </div>
    )
};