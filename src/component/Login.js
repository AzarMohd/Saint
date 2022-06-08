import React,{useState} from 'react';
import "./Screen.css";
import Navbar from './Navbar';

function Login() {
  const url="https://jsonplaceholder.typicode.com/posts";
  const[data,setData]=useState({
    email:"",
    password:""
})
function submit(e){
      e.preventDefault();
      const axios = require('axios').default;
      axios.post(url,{
        email:data.email,
        password:parseInt(data.password)
      })
      .then(res=>{console.log(
        res.data)})
        e.target.fname.value="";
        e.target.lname.value="";
      }

function handleChange(e){
  const newData={...data}
    newData[e.target.id]= e.target.value;
    console.log(newData);
    setData(newData);
 }
  return (
    <div class="form">
      <form onSubmit={(e)=>submit(e)}>
        <h1>LOGIN</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" name="fname" onChange={(e)=>handleChange(e)} id="email" value={data.email} class="form-control fw-bold" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" name="lname" onChange={(e)=>handleChange(e)} id="password" value={data.password} class="form-control fw-bold"  />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login;