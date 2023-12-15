import React, { useState } from 'react'
import axios from 'axios';
import * as Icon from "react-bootstrap-icons"
import {useNavigate} from "react-router-dom";
import "../css/Login.css"


const Login = () => {

  const [email,setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate = useNavigate();
  
  async function login(event)
  {
    event.preventDefault();
    try{
      await axios.post("http://localhost:8080/api/v1/portfolio/login",
      {
         email:email,
         password:password,
      }).then((res) =>
      {
        console.log(res.data);
        if(res.data.message  == "Email is not exits")
        {
          alert("Email is not exits");
        }
        else if(res.data.message == "Login Success")
        {
          navigate("/");
        }
        else{
          // alert("Incorrect email and password not match")
          navigate("/");

        }
      },fail =>{
        console.error(fail);
      });
    }
    catch(err)
    {
      alert(err);
    }
  }
  const homeNavi=useNavigate()

     
  const arrow={
    fontSize:"2rem",
    color:"#235784",
    marginLeft:"90%",
    marginTop:"2%",
  }
  

  return (
    <>
    <Icon.ArrowLeftCircleFill onClick={()=>homeNavi("/")} style={arrow}></Icon.ArrowLeftCircleFill>

     <h1 class="head1">Login</h1>
    <div class="login">
        <h2 class="head2">Login</h2>
        <br/>
    <form>
    {/* <div class="form-group">
        <input type="text" class="form-control" id="email" placeholder="Enter Your Name"
        value={name} 
        onChange={(event)=>
        {
            setName(event.target.value);
        }}
        />
    </div> */}

    <div class="form-group">
        <input type="email"  class="form-control"  id="email" placeholder="Enter Email"
        value={email} 
        onChange={(event)=>
        {
            setEmail(event.target.value);
        }}/>
    </div>

    <div class="form-group">
        <input type="password"  class="form-control"  id="password" placeholder="Enter Password"
        value={password} 
        onChange={(event)=>
        {
            setPassword(event.target.value);
        }} />
    </div>
    <button type="submit" onClick={login}>Login</button>
    </form>
    <img src="https://i.pinimg.com/564x/a9/dd/93/a9dd9332469ecad9d9770985d8e032f0.jpg"/>

    </div>
    </>
  )
}
export default Login